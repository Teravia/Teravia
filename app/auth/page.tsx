"use client";

import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";

type Mode = "login" | "register";
type RegisterStep = 1 | 2 | 3 | 4;

interface Tier {
  id: string;
  name: string;
  price: number;
  strikePrice: number | null;
  discount: string | null;
  benefits: string[];
}

const TIERS: Tier[] = [
  {
    id: "free",
    name: "Free",
    price: 0,
    strikePrice: null,
    discount: null,
    benefits: ["1 listing aktif", "Tanpa auto bump", "Tanpa badge"],
  },
  {
    id: "kavling",
    name: "Kavling",
    price: 300000,
    strikePrice: 600000,
    discount: "50%",
    benefits: ["5 listing aktif", "Auto bump 1x/hari", "Badge \"Member\""],
  },
  {
    id: "cluster",
    name: "Cluster",
    price: 600000,
    strikePrice: 1200000,
    discount: "50%",
    benefits: [
      "15 listing aktif",
      "Auto bump 3x/hari",
      "Badge \"Verified\"",
      "Prioritas pencarian",
      "Featured di kategori",
    ],
  },
  {
    id: "penthouse",
    name: "Penthouse",
    price: 900000,
    strikePrice: 1800000,
    discount: "50%",
    benefits: [
      "50 listing aktif",
      "Auto bump 5x/hari",
      "Badge \"Premium\"",
      "Prioritas pencarian tertinggi",
      "Featured di kategori",
      "Prioritas support/CS",
    ],
  },
];

const PAYMENT_METHODS = [
  { id: "bank_transfer", label: "Transfer Bank (VA)" },
  { id: "qris", label: "QRIS" },
  { id: "ewallet", label: "E-Wallet (GoPay/OVO/Dana)" },
];

function formatRupiah(value: number) {
  if (value === 0) return "Rp 0";
  return "Rp " + value.toLocaleString("id-ID");
}

function generateMemberId(tierId: string) {
  const prefix = tierId.slice(0, 3).toUpperCase();
  const date = new Date();
  const yy = String(date.getFullYear()).slice(2);
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${yy}${mm}${dd}-${rand}`;
}

function EyeIcon({ open }: { open: boolean }) {
  if (open) {
    return (
      <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z" />
        <circle cx="12" cy="12" r="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  return (
    <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3l18 18M10.6 10.6a2 2 0 002.8 2.8M9.4 5.5A9.5 9.5 0 0112 5c6 0 9.5 7 9.5 7a13.9 13.9 0 01-3.1 4.1M6.3 6.3A13.9 13.9 0 002.5 12s3.5 7 9.5 7c1.1 0 2.1-.2 3-.5" />
    </svg>
  );
}

function PasswordInput({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  const [visible, setVisible] = useState(false);
  return (
    <div className="relative">
      <input
        type={visible ? "text" : "password"}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-2.5 pr-11 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
      />
      <button
        type="button"
        onClick={() => setVisible((v) => !v)}
        tabIndex={-1}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        aria-label={visible ? "Sembunyikan kata sandi" : "Tampilkan kata sandi"}
      >
        <EyeIcon open={visible} />
      </button>
    </div>
  );
}

export default function AuthPage() {
  const router = useRouter();
  const { login: loginToContext } = useAuth();

  const [mode, setMode] = useState<Mode>("login");
  const [registerStep, setRegisterStep] = useState<RegisterStep>(1);
  const [loading, setLoading] = useState(false);

  const switchAuthMode = (m: Mode) => {
    setMode(m);
    setRegisterStep(1);
  };

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const [selectedTier, setSelectedTier] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [showPaymentInstructions, setShowPaymentInstructions] = useState(false);
  const [vaNumber, setVaNumber] = useState("");
  const [countdownSeconds, setCountdownSeconds] = useState(900); // 15 menit

  const [memberId, setMemberId] = useState("");
  const [joinDate, setJoinDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  const step1Valid = useMemo(() => {
    return (
      fullName.trim() !== "" &&
      phone.trim() !== "" &&
      email.trim() !== "" &&
      password.length >= 8 &&
      password === confirmPassword &&
      agreeTerms
    );
  }, [fullName, phone, email, password, confirmPassword, agreeTerms]);

  const tierData = TIERS.find((t) => t.id === selectedTier);
  const isFreeTier = selectedTier === "free";

  // Tampilan flip/slide (Login <-> Register Step 1) hanya berlaku
  // selama belum masuk ke wizard tier/payment/success
  const isAuthToggleView = mode === "login" || (mode === "register" && registerStep === 1);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      const guessedName = loginEmail.split("@")[0] || "Member";
      loginToContext({
        name: guessedName.charAt(0).toUpperCase() + guessedName.slice(1),
        email: loginEmail,
        tier: "kavling",
        memberId: generateMemberId("kavling"),
      });
      setLoading(false);
      router.push("/dashboard/member");
    }, 1000);
  };

  const goToStep2 = () => {
    if (!step1Valid) return;
    setRegisterStep(2);
  };

  const goToStep3OrFinish = () => {
    if (!selectedTier) return;
    if (isFreeTier) {
      finishRegistration();
    } else {
      setRegisterStep(3);
    }
  };

  const finishRegistration = () => {
    setLoading(true);
    setTimeout(() => {
      const id = generateMemberId(selectedTier);
      const today = new Date();
      const expiry = new Date(today);
      expiry.setFullYear(expiry.getFullYear() + 1);

      const fmt = (d: Date) =>
        d.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });

      setMemberId(id);
      setJoinDate(fmt(today));
      setExpiryDate(fmt(expiry));

      loginToContext({
        name: fullName || "Member",
        email,
        tier: selectedTier,
        memberId: id,
      });

      setLoading(false);
      setRegisterStep(4);
    }, 1200);
  };

  const generateVaNumber = () => {
    const prefix = "8808";
    const rand = Math.floor(100000000000 + Math.random() * 900000000000);
    return `${prefix}${rand}`.slice(0, 16);
  };

  const handlePay = () => {
    if (!paymentMethod) return;
    setVaNumber(generateVaNumber());
    setCountdownSeconds(900);
    setShowPaymentInstructions(true);
  };

  // Dipanggil dari tombol "Saya Sudah Bayar (Simulasi)" di layar instruksi
  const handlePay2Finish = () => {
    finishRegistration();
  };

  // Countdown mundur selama layar instruksi pembayaran terbuka
  useEffect(() => {
    if (!showPaymentInstructions) return;
    if (countdownSeconds <= 0) return;
    const interval = setInterval(() => {
      setCountdownSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [showPaymentInstructions, countdownSeconds]);

  const formatCountdown = (totalSeconds: number) => {
    const m = Math.floor(totalSeconds / 60);
    const s = totalSeconds % 60;
    return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const copyVaNumber = () => {
    navigator.clipboard?.writeText(vaNumber);
  };

  const StepIndicator = () => (
    <div className="flex items-center gap-2 mb-6">
      {[1, 2, 3].map((s) => (
        <div key={s} className="flex items-center gap-2 flex-1">
          <div
            className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 ${
              registerStep === s
                ? "bg-green-600 text-white"
                : registerStep > s
                ? "bg-green-100 text-green-700"
                : "bg-slate-100 text-slate-400"
            }`}
          >
            {registerStep > s ? "✓" : s}
          </div>
          {s < 3 && (
            <div className={`h-0.5 flex-1 rounded ${registerStep > s ? "bg-green-600" : "bg-slate-200"}`} />
          )}
        </div>
      ))}
    </div>
  );

  // ===================================================================
  // KONTEN FORM (dipakai ulang di versi desktop flip & mobile slide,
  // supaya tidak dobel nulis JSX field-field yang sama)
  // ===================================================================

  const loginFormContent = (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-lg font-bold text-slate-900 mb-1">Masuk ke Akun Anda</h1>
      <p className="text-xs text-slate-500 mb-6">Selamat datang kembali di TERAVIA.</p>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Email</label>
          <input
            type="email"
            required
            placeholder="nama@email.com"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-1">
            <label className="block text-xs font-semibold text-slate-700">Kata Sandi</label>
            <button type="button" className="text-[11px] font-semibold text-green-700 hover:underline">
              Lupa Password?
            </button>
          </div>
          <PasswordInput value={loginPassword} onChange={setLoginPassword} placeholder="••••••••" />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-xl text-sm transition shadow-sm mt-2 disabled:opacity-50"
        >
          {loading ? "Memproses..." : "Masuk"}
        </button>
      </form>

      {/* Link pindah mode ini hanya dipakai di versi mobile;
          versi desktop pindah mode lewat panel overlay */}
      <p className="text-center text-xs text-slate-500 mt-6 md:hidden">
        Belum punya akun?{" "}
        <button
          type="button"
          onClick={() => switchAuthMode("register")}
          className="text-green-700 font-bold hover:underline"
        >
          Daftar di sini
        </button>
      </p>
    </div>
  );

  const registerStep1Content = (
    <div className="w-full max-w-sm mx-auto">
      <h1 className="text-lg font-bold text-slate-900 mb-1">Buat Akun Baru</h1>
      <p className="text-xs text-slate-500 mb-6">Langkah 1 dari 3 — Informasi Akun</p>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Nama Lengkap</label>
          <input
            type="text"
            placeholder="Contoh: Budi Pratama"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Nomor WhatsApp / HP</label>
          <input
            type="tel"
            placeholder="Contoh: 081234567890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Email</label>
          <input
            type="email"
            placeholder="nama@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Kata Sandi</label>
          <PasswordInput value={password} onChange={setPassword} placeholder="Minimal 8 karakter" />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">Konfirmasi Kata Sandi</label>
          <PasswordInput value={confirmPassword} onChange={setConfirmPassword} placeholder="Ulangi kata sandi" />
          {confirmPassword && password !== confirmPassword && (
            <p className="text-red-500 text-[10px] font-medium mt-1">Kata sandi tidak sama</p>
          )}
        </div>

        <label className="flex items-start gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
            className="mt-0.5 accent-green-600 w-3.5 h-3.5"
          />
          <span className="text-[11px] text-slate-600">
            Saya setuju dengan{" "}
            <Link
              href="/syarat-ketentuan"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              Syarat & Ketentuan
            </Link>{" "}
            serta{" "}
            <Link
              href="/kebijakan-privasi"
              target="_blank"
              className="text-green-700 font-semibold hover:underline"
            >
              Kebijakan Privasi
            </Link>{" "}
            TERAVIA
          </span>
        </label>

        <button
          type="button"
          onClick={goToStep2}
          disabled={!step1Valid}
          className={`w-full font-bold py-3 rounded-xl text-sm transition shadow-sm mt-2 ${
            step1Valid
              ? "bg-green-700 hover:bg-green-800 text-white cursor-pointer"
              : "bg-slate-200 text-slate-400 cursor-not-allowed"
          }`}
        >
          Lanjutkan &rarr;
        </button>
      </div>

      <p className="text-center text-xs text-slate-500 mt-6 md:hidden">
        Sudah punya akun?{" "}
        <button
          type="button"
          onClick={() => switchAuthMode("login")}
          className="text-green-700 font-bold hover:underline"
        >
          Masuk di sini
        </button>
      </p>
    </div>
  );

  return (
    <div className="relative min-h-screen flex flex-col justify-center py-8 px-4 overflow-hidden">
      {/* Background gambar hero — sama dengan yang dipakai di halaman utama */}
      <Image
        src="/hero-bg.jpeg"
        alt="Teravia Background"
        fill
        priority
        className="object-cover object-center"
      />
      {/* Overlay gelap agar form tetap kontras & terbaca (konsisten dengan hero homepage) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-900/60 to-slate-950/80 backdrop-blur-[1px]" />

      {/* Konten form di atas background, dibungkus relative + z-10 */}
      <div className="relative z-10 flex flex-col justify-center">
      {isAuthToggleView && (
        <>
          <div className="text-center mb-5">
            <div className="text-lg font-extrabold text-white tracking-tight drop-shadow-sm">TERAVIA</div>
          </div>

          {/* ---------- DESKTOP: split-card dengan animasi flip 3D ---------- */}
          <div className="hidden md:block mx-auto w-full max-w-4xl">
            <div className="auth-flip-card relative w-full min-h-[560px] rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white/95 backdrop-blur-md">
              {/* Panel form statis: kiri = Login, kanan = Register */}
              <div className="absolute inset-0 grid grid-cols-2">
                <div className="flex items-center justify-center p-10 overflow-y-auto">
                  {loginFormContent}
                </div>
                <div className="flex items-center justify-center p-10 overflow-y-auto">
                  {registerStep1Content}
                </div>
              </div>

              {/* Panel overlay hijau yang "terbang" pindah sisi */}
              <div
                className={`auth-overlay absolute inset-y-0 w-1/2 flex items-center justify-center p-10 text-white ${
                  mode === "register" ? "auth-pos-left" : "auth-pos-right"
                }`}
                style={{
                  background: "linear-gradient(135deg, #15803D 0%, #14532D 60%, #0F172A 100%)",
                }}
              >
                <div className="text-center max-w-xs">
                  <div className="w-16 h-16 rounded-2xl bg-white/15 mx-auto mb-5 flex items-center justify-center text-3xl">
                    {mode === "login" ? "🏡" : "👋"}
                  </div>
                  {mode === "login" ? (
                    <>
                      <h2 className="text-xl font-extrabold mb-2">Baru di TERAVIA?</h2>
                      <p className="text-xs text-white/80 leading-relaxed mb-6">
                        Buat akun gratis, pasang listing, dan nikmati benefit membership
                        eksklusif.
                      </p>
                      <button
                        type="button"
                        onClick={() => switchAuthMode("register")}
                        className="border-2 border-white/70 hover:bg-white hover:text-green-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition"
                      >
                        Buat Akun &rarr;
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-extrabold mb-2">Sudah Punya Akun?</h2>
                      <p className="text-xs text-white/80 leading-relaxed mb-6">
                        Masuk untuk melanjutkan aktivitas dan mengelola listing kamu.
                      </p>
                      <button
                        type="button"
                        onClick={() => switchAuthMode("login")}
                        className="border-2 border-white/70 hover:bg-white hover:text-green-800 text-white font-bold text-xs px-6 py-2.5 rounded-xl transition"
                      >
                        &larr; Masuk di Sini
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* ---------- MOBILE: kartu dengan animasi slide horizontal ---------- */}
          <div className="md:hidden mx-auto w-full max-w-sm">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="relative overflow-hidden">
                <div
                  className="flex w-[200%] transition-transform duration-500 ease-out"
                  style={{ transform: mode === "login" ? "translateX(0%)" : "translateX(-50%)" }}
                >
                  <div className="w-1/2 shrink-0 p-6">{loginFormContent}</div>
                  <div className="w-1/2 shrink-0 p-6">{registerStep1Content}</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* ===================== REGISTER STEP 2: PILIH TIER ===================== */}
      {mode === "register" && registerStep === 2 && (
        <div className="sm:mx-auto sm:w-full sm:max-w-md auth-step-enter">
          <div className="text-center mb-5">
            <div className="text-lg font-extrabold text-white tracking-tight drop-shadow-sm">TERAVIA</div>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl">
            <StepIndicator />
            <h1 className="text-lg font-bold text-slate-900 mb-1">Pilih Tier Membership</h1>
            <p className="text-xs text-slate-500 mb-6">
              Langkah 2 dari 3 — Bisa upgrade/downgrade kapan saja nanti
            </p>

            <div className="space-y-3">
              {TIERS.map((tier) => (
                <button
                  key={tier.id}
                  type="button"
                  onClick={() => setSelectedTier(tier.id)}
                  className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                    selectedTier === tier.id ? "border-green-600 bg-green-50/60" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-slate-900">{tier.name}</span>
                        {tier.discount && (
                          <span className="text-[9px] font-bold bg-red-100 text-red-600 px-1.5 py-0.5 rounded">
                            DISKON {tier.discount}
                          </span>
                        )}
                      </div>
                      <div className="flex items-baseline gap-2 mt-1">
                        <span className="text-base font-extrabold text-green-700">{formatRupiah(tier.price)}</span>
                        {tier.strikePrice && (
                          <span className="text-[11px] text-slate-400 line-through">
                            {formatRupiah(tier.strikePrice)}
                          </span>
                        )}
                        {tier.price > 0 && <span className="text-[10px] text-slate-400">/bulan</span>}
                      </div>
                    </div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        selectedTier === tier.id ? "border-green-600 bg-green-600" : "border-slate-300"
                      }`}
                    >
                      {selectedTier === tier.id && <span className="text-white text-[10px]">✓</span>}
                    </div>
                  </div>
                  <ul className="space-y-1 mt-2">
                    {tier.benefits.map((b, i) => (
                      <li key={i} className="text-[11px] text-slate-600 flex items-center gap-1.5">
                        <span className="text-green-600 font-bold">✓</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => setRegisterStep(1)}
                className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition"
              >
                &larr; Kembali
              </button>
              <button
                type="button"
                onClick={goToStep3OrFinish}
                disabled={!selectedTier || loading}
                className={`flex-1 font-bold py-3 rounded-xl text-sm transition shadow-sm ${
                  selectedTier && !loading
                    ? "bg-green-700 hover:bg-green-800 text-white cursor-pointer"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                {loading ? "Memproses..." : isFreeTier ? "Selesaikan Pendaftaran" : "Lanjut ke Pembayaran →"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== REGISTER STEP 3: PEMBAYARAN ===================== */}
      {mode === "register" && registerStep === 3 && tierData && !showPaymentInstructions && (
        <div className="sm:mx-auto sm:w-full sm:max-w-md auth-step-enter">
          <div className="text-center mb-5">
            <div className="text-lg font-extrabold text-white tracking-tight drop-shadow-sm">TERAVIA</div>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl">
            <StepIndicator />
            <h1 className="text-lg font-bold text-slate-900 mb-1">Pembayaran</h1>
            <p className="text-xs text-slate-500 mb-6">
              Langkah 3 dari 3 — Selesaikan pembayaran untuk mengaktifkan membership
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 mb-5 border border-slate-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-slate-600">Membership {tierData.name}</span>
                <span className="text-xs font-bold text-slate-900">{formatRupiah(tierData.price)}</span>
              </div>
              {tierData.strikePrice && (
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] text-slate-400">Harga normal</span>
                  <span className="text-[11px] text-slate-400 line-through">
                    {formatRupiah(tierData.strikePrice)}
                  </span>
                </div>
              )}
              <div className="border-t border-slate-200 mt-2 pt-2 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900">Total Bayar</span>
                <span className="text-sm font-extrabold text-green-700">{formatRupiah(tierData.price)}</span>
              </div>
            </div>

            <label className="block text-xs font-semibold text-slate-700 mb-2">Pilih Metode Pembayaran</label>
            <div className="space-y-2 mb-6">
              {PAYMENT_METHODS.map((m) => (
                <label
                  key={m.id}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === m.id ? "border-green-600 bg-green-50/60" : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={m.id}
                    checked={paymentMethod === m.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="accent-green-600 w-4 h-4"
                  />
                  <span className="text-xs font-semibold text-slate-800">{m.label}</span>
                </label>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRegisterStep(2)}
                className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition"
              >
                &larr; Kembali
              </button>
              <button
                type="button"
                onClick={handlePay}
                disabled={!paymentMethod}
                className={`flex-1 font-bold py-3 rounded-xl text-sm transition shadow-sm ${
                  paymentMethod
                    ? "bg-green-700 hover:bg-green-800 text-white cursor-pointer"
                    : "bg-slate-200 text-slate-400 cursor-not-allowed"
                }`}
              >
                Bayar Sekarang
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== REGISTER STEP 3b: INSTRUKSI PEMBAYARAN (UI saja, belum gateway asli) ===================== */}
      {mode === "register" && registerStep === 3 && tierData && showPaymentInstructions && (
        <div className="sm:mx-auto sm:w-full sm:max-w-md auth-step-enter">
          <div className="text-center mb-5">
            <div className="text-lg font-extrabold text-white tracking-tight drop-shadow-sm">TERAVIA</div>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between mb-5">
              <h1 className="text-lg font-bold text-slate-900">Selesaikan Pembayaran</h1>
              <span
                className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                  countdownSeconds > 120 ? "bg-slate-100 text-slate-600" : "bg-red-50 text-red-600"
                }`}
              >
                ⏱ {formatCountdown(countdownSeconds)}
              </span>
            </div>

            {countdownSeconds === 0 && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-3 mb-4">
                <p className="text-xs text-red-700 font-semibold">
                  Waktu pembayaran habis. Silakan pilih metode pembayaran ulang.
                </p>
              </div>
            )}

            {paymentMethod === "bank_transfer" && (
              <div className="space-y-4 mb-6">
                <div className="bg-slate-900 rounded-2xl p-5 text-white">
                  <p className="text-[11px] text-slate-400 mb-1">Nomor Virtual Account</p>
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-lg font-extrabold tracking-wider font-mono">
                      {vaNumber}
                    </span>
                    <button
                      type="button"
                      onClick={copyVaNumber}
                      className="text-[10px] font-bold bg-white/10 hover:bg-white/20 px-2.5 py-1.5 rounded-lg transition shrink-0"
                    >
                      Salin
                    </button>
                  </div>
                  <div className="border-t border-white/10 mt-3 pt-3 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400">Total Transfer</span>
                    <span className="text-sm font-bold">{formatRupiah(tierData.price)}</span>
                  </div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <p className="text-xs font-semibold text-slate-700 mb-2">Cara Pembayaran:</p>
                  <ol className="text-[11px] text-slate-600 space-y-1.5 list-decimal pl-4">
                    <li>Buka aplikasi mobile banking atau ATM.</li>
                    <li>Pilih menu Transfer &rarr; Virtual Account.</li>
                    <li>Masukkan nomor VA di atas, lalu konfirmasi nominal.</li>
                    <li>Simpan bukti transfer sebagai referensi.</li>
                  </ol>
                </div>
              </div>
            )}

            {paymentMethod === "qris" && (
              <div className="space-y-4 mb-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col items-center">
                  <div className="w-44 h-44 bg-white border-2 border-slate-900 rounded-xl relative flex items-center justify-center">
                    <div className="absolute top-2 left-2 w-8 h-8 border-4 border-slate-900 rounded" />
                    <div className="absolute top-2 right-2 w-8 h-8 border-4 border-slate-900 rounded" />
                    <div className="absolute bottom-2 left-2 w-8 h-8 border-4 border-slate-900 rounded" />
                    <span className="text-[10px] text-slate-400 font-semibold">
                      QRIS (placeholder)
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-4">
                    Scan kode ini pakai aplikasi e-wallet/m-banking mana pun
                  </p>
                  <p className="text-sm font-extrabold text-slate-900 mt-1">
                    {formatRupiah(tierData.price)}
                  </p>
                </div>
              </div>
            )}

            {paymentMethod === "ewallet" && (
              <div className="space-y-3 mb-6">
                <p className="text-xs text-slate-500 mb-1">
                  Pilih aplikasi e-wallet untuk melanjutkan:
                </p>
                {["GoPay", "OVO", "DANA"].map((wallet) => (
                  <button
                    key={wallet}
                    type="button"
                    className="w-full flex items-center justify-between p-3.5 rounded-xl border-2 border-slate-200 hover:border-green-600 hover:bg-green-50/60 transition-all"
                  >
                    <span className="text-xs font-bold text-slate-800">{wallet}</span>
                    <span className="text-[10px] font-semibold text-green-700">
                      Buka Aplikasi &rarr;
                    </span>
                  </button>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-slate-500">Total Bayar</span>
                  <span className="text-sm font-extrabold text-slate-900">
                    {formatRupiah(tierData.price)}
                  </span>
                </div>
              </div>
            )}

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-5">
              <p className="text-[10px] text-amber-800 leading-relaxed">
                ⚠️ Ini masih tampilan simulasi (belum tersambung ke payment
                gateway asli). Klik tombol di bawah untuk mensimulasikan
                pembayaran berhasil.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setShowPaymentInstructions(false)}
                className="px-5 py-3 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition"
              >
                &larr; Ganti Metode
              </button>
              <button
                type="button"
                onClick={handlePay2Finish}
                disabled={loading}
                className="flex-1 font-bold py-3 rounded-xl text-sm transition shadow-sm bg-green-700 hover:bg-green-800 text-white disabled:opacity-50"
              >
                {loading ? "Memproses..." : "Saya Sudah Bayar (Simulasi)"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===================== REGISTER STEP 4: SUKSES ===================== */}
      {mode === "register" && registerStep === 4 && tierData && (
        <div className="sm:mx-auto sm:w-full sm:max-w-md auth-step-enter">
          <div className="text-center mb-5">
            <div className="text-lg font-extrabold text-white tracking-tight drop-shadow-sm">TERAVIA</div>
          </div>
          <div className="bg-white/95 backdrop-blur-md p-6 sm:p-8 rounded-3xl border border-white/20 shadow-2xl text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">✓</span>
                </div>
              </div>
            </div>

            <h1 className="text-xl font-extrabold text-slate-900 mb-1">
              {isFreeTier ? "Registrasi Berhasil!" : "Pembayaran Berhasil!"}
            </h1>
            <p className="text-xs text-slate-500 mb-6">
              Akun Anda telah berhasil dibuat.
              <br />
              Selamat bergabung di TERAVIA.
            </p>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 text-left shadow-sm mb-5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] text-slate-500">Membership Anda</span>
                <span className="text-[10px] font-bold bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  AKTIF
                </span>
              </div>
              <div className="text-lg font-extrabold text-green-700 mb-3">{tierData.name}</div>

              <div className="border-t border-slate-100 pt-3 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">ID Member</span>
                  <span className="text-[11px] font-bold text-slate-800">{memberId}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[11px] text-slate-500">Tanggal Bergabung</span>
                  <span className="text-[11px] font-bold text-slate-800">{joinDate}</span>
                </div>
                {!isFreeTier && (
                  <>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">Berakhir Pada</span>
                      <span className="text-[11px] font-bold text-slate-800">{expiryDate}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">Metode Pembayaran</span>
                      <span className="text-[11px] font-bold text-slate-800">
                        {PAYMENT_METHODS.find((m) => m.id === paymentMethod)?.label || "-"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] text-slate-500">Total Dibayar</span>
                      <span className="text-[11px] font-bold text-slate-800">{formatRupiah(tierData.price)}</span>
                    </div>
                  </>
                )}
              </div>
            </div>

            <div className="space-y-2.5">
              <button
                type="button"
                onClick={() => router.push("/dashboard/member")}
                className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-xl text-sm transition shadow-sm"
              >
                Lanjutkan ke Dashboard
              </button>
              <button
                type="button"
                onClick={() => router.push("/")}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 rounded-xl text-sm transition"
              >
                Jelajahi Properti
              </button>
            </div>

            <p className="text-[10px] text-slate-400 mt-5 flex items-center justify-center gap-1.5">
              <span>🛡️</span> Data Anda aman bersama TERAVIA
            </p>
          </div>
        </div>
      )}
      </div>

      {/* ===================== CSS Animasi ===================== */}
      <style jsx global>{`
        .auth-overlay {
          right: 0;
          transform: translate3d(0, 0, 0);
          transition: transform 550ms cubic-bezier(0.65, 0, 0.35, 1);
          will-change: transform;
          backface-visibility: hidden;
        }
        .auth-overlay.auth-pos-right {
          transform: translate3d(0, 0, 0);
        }
        .auth-overlay.auth-pos-left {
          transform: translate3d(-100%, 0, 0);
        }
        .auth-flip-card {
          perspective: 1600px;
        }
        .auth-step-enter {
          animation: stepEnter 400ms ease both;
        }
        @keyframes stepEnter {
          0% { opacity: 0; transform: translateY(14px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
