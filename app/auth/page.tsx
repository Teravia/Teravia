"use client";

import { useState } from "react";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("buyer"); // buyer, agent, contractor, architect

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (mode === "login") {
        alert(`Login berhasil sebagai ${email}! (Siap dihubungkan ke Supabase Auth)`);
      } else {
        alert(`Pendaftaran berhasil untuk ${fullName}! Silakan verifikasi email.`);
      }
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      
      {/* Brand Header */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-block text-2xl font-black tracking-tight text-blue-600 mb-2">
          TERAVIA<span className="text-slate-800">.</span>
        </Link>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
          {mode === "login" ? "Masuk ke Akun Anda" : "Buat Akun Teravia Baru"}
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          {mode === "login"
            ? "Kelola iklan properti, proyek konstruksi, dan jaringan Anda"
            : "Bergabunglah dengan ekosistem properti & konstruksi terpadu"}
        </p>
      </div>

      <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 shadow-md border border-slate-200 rounded-3xl sm:px-10">
          
          {/* Tab Switcher (Login / Register) */}
          <div className="flex bg-slate-100 p-1 rounded-2xl mb-6">
            <button
              type="button"
              onClick={() => setMode("login")}
              className={`w-1/2 py-2.5 text-xs font-bold rounded-xl transition-all ${
                mode === "login"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Masuk (Login)
            </button>
            <button
              type="button"
              onClick={() => setMode("register")}
              className={`w-1/2 py-2.5 text-xs font-bold rounded-xl transition-all ${
                mode === "register"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Daftar (Register)
            </button>
          </div>

          {/* Form Utama */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Input Tambahan jika Mode REGISTER */}
            {mode === "register" && (
              <>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Budi Pratama"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp / HP
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Daftar Sebagai
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800 bg-white"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="buyer">Pembeli / Pencari Properti</option>
                    <option value="agent">Agen Properti / Owner</option>
                    <option value="contractor">Vendor Jasa Konstruksi</option>
                    <option value="architect">Arsitek / Konsultan Sipil</option>
                  </select>
                </div>
              </>
            )}

            {/* Email (Login & Register) */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Alamat Email
              </label>
              <input
                type="email"
                required
                placeholder="nama@email.com"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password (Login & Register) */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs font-semibold text-slate-700">
                  Kata Sandi
                </label>
                {mode === "login" && (
                  <button
                    type="button"
                    onClick={() => alert("Fitur reset password siap dihubungkan")}
                    className="text-[11px] font-semibold text-blue-600 hover:underline"
                  >
                    Lupa Password?
                  </button>
                )}
              </div>
              <input
                type="password"
                required
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none text-slate-800"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl text-sm transition shadow-md shadow-blue-500/20 mt-2"
            >
              {loading
                ? "Memproses..."
                : mode === "login"
                ? "Masuk Sekarang"
                : "Buat Akun Akun"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-3 text-slate-400">Atau masuk dengan</span>
            </div>
          </div>

          {/* Social Login Button */}
          <button
            type="button"
            onClick={() => alert("Fitur Google Auth siap dihubungkan dengan Supabase OAuth")}
            className="w-full border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold py-2.5 rounded-xl text-xs transition flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            Lanjutkan dengan Google
          </button>
        </div>
      </div>
    </div>
  );
            }
