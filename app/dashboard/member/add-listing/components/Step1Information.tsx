"use client";

interface Step1Props {
  onNext?: () => void;
  transactionType?: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  return (
    <div className="space-y-6">
      {/* Container Utama */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200">
        {/* Area Kosong Siap Diisi */}
      </div>

      {/* Tombol Navigasi / Action */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={onNext}
          className="px-6 py-2.5 rounded-xl bg-blue-600 text-white text-xs font-bold"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}
