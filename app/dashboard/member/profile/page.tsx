"use client";

import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

type AccountType = "owner" | "agen";

const COMMISSION_OPTIONS = [
  { id: "50-50", label: "50 : 50" },
  { id: "60-40", label: "60 : 40 (Listing Agent lebih besar)" },
  { id: "custom", label: "Custom (nego langsung dengan co-agent)" },
];

export default function MemberProfilePage() {
  const { user } = useAuth();

  const [accountType, setAccountType] = useState<AccountType>("owner");
  const [coBrokeAvailable, setCoBrokeAvailable] = useState(false);
  const [commissionSplit, setCommissionSplit] = useState("50-50");
  const [coBrokeWhatsapp, setCoBrokeWhatsapp] = useState("");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    // TODO: kirim ke API / Supabase — untuk sekarang cuma simulasi UI
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto space-y-6">
        <div>
          <h1 className="text-lg font-extrabold text-slate-900">
            Profil Saya
          </h1>
          <p className="text-xs text-slate-500 mt-1">
            Kelola informasi akun dan preferensi kerja sama
          </p>
        </div>

        {/* Informasi Dasar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
            Informasi Dasar
          </h2>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nama Lengkap
            </label>
            <input
              type="text"
              defaultValue={user?.name || ""}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              defaultValue={user?.email || ""}
              disabled
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-500"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Nomor WhatsApp Publik
            </label>
            <input
              type="tel"
              placeholder="Nomor yang tampil di listing kamu ke calon pembeli"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
            />
          </div>
        </div>

        {/* Tipe Akun */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-3">
            Tipe Akun
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setAccountType("owner")}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                accountType === "owner"
                  ? "border-green-600 bg-green-50/60"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="text-sm font-bold text-slate-900">
                Pemilik Langsung
              </div>
              <div className="text-[11px] text-slate-500 mt-1">
                Menjual/menyewakan properti milik sendiri
              </div>
            </button>
            <button
              type="button"
              onClick={() => setAccountType("agen")}
              className={`p-4 rounded-xl border-2 text-left transition-all ${
                accountType === "agen"
                  ? "border-green-600 bg-green-50/60"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <div className="text-sm font-bold text-slate-900">Agen</div>
              <div className="text-[11px] text-slate-500 mt-1">
                Memasarkan properti milik klien
              </div>
            </button>
          </div>
        </div>

        {/* Co-Broke — hanya untuk Agen */}
        {accountType === "agen" && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="border-b border-slate-100 pb-3">
              <h2 className="text-sm font-bold text-slate-900">
                Co-Broke
              </h2>
              <p className="text-[11px] text-slate-500 mt-1">
                Kerja sama dengan agen lain untuk closing bersama, bagi
                komisi sesuai kesepakatan
              </p>
            </div>

            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs font-semibold text-slate-700">
                Bersedia Co-Broke?
              </span>
              <button
                type="button"
                onClick={() => setCoBrokeAvailable(!coBrokeAvailable)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  coBrokeAvailable ? "bg-green-600" : "bg-slate-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform ${
                    coBrokeAvailable ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>

            {coBrokeAvailable && (
              <div className="space-y-4 pt-2 border-t border-slate-100">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-2 mt-3">
                    Skema Bagi Komisi Default
                  </label>
                  <div className="space-y-2">
                    {COMMISSION_OPTIONS.map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all ${
                          commissionSplit === opt.id
                            ? "border-green-600 bg-green-50/60"
                            : "border-slate-200 hover:border-slate-300"
                        }`}
                      >
                        <input
                          type="radio"
                          name="commissionSplit"
                          value={opt.id}
                          checked={commissionSplit === opt.id}
                          onChange={(e) => setCommissionSplit(e.target.value)}
                          className="accent-green-600 w-4 h-4"
                        />
                        <span className="text-xs font-medium text-slate-800">
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 mt-1.5">
                    Ini cuma default yang ditampilkan ke agen lain — split
                    final tetap bisa dinego per listing
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nomor WhatsApp Khusus Co-Broke
                  </label>
                  <input
                    type="tel"
                    value={coBrokeWhatsapp}
                    onChange={(e) => setCoBrokeWhatsapp(e.target.value)}
                    placeholder="Nomor ini hanya terlihat oleh sesama agen, tidak publik"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
                  />
                  <p className="text-[10px] text-slate-400 mt-1.5">
                    Dipakai agen lain untuk menghubungimu soal kerja sama —
                    beda dari nomor WhatsApp publik di listing
                  </p>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-3 flex items-start gap-2">
                  <span className="text-green-600 text-sm">🤝</span>
                  <p className="text-[11px] text-green-800 leading-relaxed">
                    Badge <strong>&quot;Co-Broke Available&quot;</strong> akan
                    otomatis muncul di semua listing aktif kamu begitu opsi
                    ini diaktifkan.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-3 rounded-xl text-sm transition shadow-sm"
        >
          {saved ? "Tersimpan ✓" : "Simpan Perubahan"}
        </button>
      </div>
    </div>
  );
}
                    
