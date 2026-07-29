import React from "react";

export default function Step4Preview({ onPrev }: any) {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200">
      <h2 className="text-lg font-bold mb-4">Step 4: Preview</h2>
      <button onClick={onPrev} className="px-4 py-2 bg-slate-200 rounded-xl">Kembali</button>
    </div>
  );
}
