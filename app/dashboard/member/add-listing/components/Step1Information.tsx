import React from "react";

export default function Step1Information({ onNext, transactionType }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200">
      <h2 className="text-lg font-bold mb-4">Step 1: Informasi ({transactionType})</h2>
      <button onClick={onNext} className="px-4 py-2 bg-blue-600 text-white rounded-xl">
        Lanjut ke Step 2
      </button>
    </div>
  );
}
