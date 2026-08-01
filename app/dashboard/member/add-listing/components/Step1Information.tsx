"use client";

import React from "react";

interface Step1Props {
  transactionType?: string;
  onNext: () => void;
  updateFormData?: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

export default function Step1Information({
  transactionType,
  onNext,
  updateFormData,
  initialData = {},
}: Step1Props) {
  return (
    <div className="space-y-6 font-sans">
      {/* AREA KONTEN KOSONG (SIAP DIISI) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">
          Step 1: Informasi Properti
        </h2>

        {/* Kerangka kosong */}
        <div className="min-h-[200px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl text-xs text-slate-400">
          [ Form Step 1 Siap Dirombak ]
        </div>
      </div>

      {/* FOOTER NAVIGASI STEP 1 (HANYA TOMBOL LANJUT) */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Lengkapi data untuk melanjutkan
        </span>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
        >
          Lanjut ke Step 2 (Harga) &rarr;
        </button>
      </div>
    </div>
  );
}
