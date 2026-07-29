import React from "react";

export default function Step2Pricing({ onNext, onPrev }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200">
      <h2 className="text-lg font-bold mb-4">Step 2: Legalitas & Harga</h2>
      <div className="flex gap-2">
        <button onClick={onPrev} className="px-4 py-2 bg-slate-200 rounded-xl">Kembali</button>
        <button onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded-xl">Lanjut ke Step 3</button>
      </div>
    </div>
  );
}
