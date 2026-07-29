"use client";

import { useState } from "react";

export default function KalkulatorPage() {
  const [projectType, setProjectType] = useState("bangun_baru");
  const [quality, setQuality] = useState("medium");
  const [landArea, setLandArea] = useState<number | "">(100);

  // Estimasi harga per m2 berdasarkan spesifikasi
  const PRICE_PER_METER: Record<string, Record<string, number>> = {
    bangun_baru: { standard: 3500000, medium: 4800000, luxury: 7500000 },
    renovasi: { standard: 2000000, medium: 3200000, luxury: 5000000 },
    interior: { standard: 2500000, medium: 4000000, luxury: 6500000 },
  };

  const area = Number(landArea) || 0;
  const rate = PRICE_PER_METER[projectType][quality];
  const estimatedTotal = area * rate;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-lg border border-slate-200 p-6 sm:p-10">
        
        {/* Header */}
        <div className="text-center mb-8 space-y-2">
          <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full">
            🧮 Cost Estimator Tool
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Kalkulator Estimasi Biaya Konstruksi
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            Hitung perkiraan biaya pembangunan, renovasi, atau interior secara cepat & transparan.
          </p>
        </div>

        <div className="space-y-6">
          {/* 1. Tipe Proyek */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Pilih Jenis Pekerjaan</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "bangun_baru", label: "Bangun Baru" },
                { id: "renovasi", label: "Renovasi Total" },
                { id: "interior", label: "Interior Custom" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setProjectType(item.id)}
                  className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all ${
                    projectType === item.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Kualitas Material */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Spesifikasi & Finishing</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: "standard", label: "Standard", sub: "Rp3.5Jt - Rp2Jt/m²" },
                { id: "medium", label: "Medium / Populer", sub: "Rp4.8Jt - Rp3.2Jt/m²" },
                { id: "luxury", label: "Mewah / Luxury", sub: "Rp7.5Jt - Rp5Jt/m²" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setQuality(item.id)}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    quality === item.id
                      ? "border-blue-600 bg-blue-50/50 text-blue-900 ring-2 ring-blue-500/20"
                      : "border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="text-xs font-bold">{item.label}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Luas Bangunan */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">Luas Bangunan (m²)</label>
            <input
              type="number"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm font-medium"
              placeholder="Masukkan luas (contoh: 100)"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value === "" ? "" : Number(e.target.value))}
            />
          </div>

          {/* Result Box */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-6 rounded-2xl space-y-3 mt-6">
            <div className="text-xs text-slate-300">Estimasi Total Biaya Pembangunan:</div>
            <div className="text-3xl sm:text-4xl font-black text-amber-400">
              Rp {estimatedTotal.toLocaleString("id-ID")}
            </div>
            <p className="text-[11px] text-slate-400">
              *Estimasi bersifat perkiraan kasar awal. Biaya final dapat bervariasi tergantung kerumitan struktur dan spesifikasi rinci dari Arsitek / Kontraktor.
            </p>
            
            <button
              onClick={() => alert("Mengarahkan ke Konsultasi Konsultasi RAB dengan Partner Teravia...")}
              className="w-full mt-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 rounded-xl text-xs transition shadow-md"
            >
              Minta Penawaran RAB Resmi dari Kontraktor →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
              }
