"use client";

import React from "react";

interface Step2Props {
  transactionType?: string;
  onNext: () => void;
  onPrev: () => void;
  updateFormData?: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

export default function Step2Pricing({ onNext, onPrev }: Step2Props) {
  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">
          Step 2: Harga
        </h2>
        <div className="min-h-[200px] flex items-center justify-center border-2 border-dashed border-slate-200 rounded-xl text-xs text-slate-400">
          [ Form Step 2 Siap Diisi ]
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
        >
          &larr; Kembali
        </button>
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
        >
          Lanjut &rarr;
        </button>
      </div>
    </div>
  );
}
