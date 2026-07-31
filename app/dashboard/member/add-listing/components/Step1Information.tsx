"use client";

import React, { useState } from "react";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    // Reset jenis properti saat kategori diubah
    setPropertyType("");
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          
          {/* DROP-DOWN 1: KATEGORI PROPERTI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="">&lt;====pilih kategori====&gt;</option>
              <option value="Hunian">Hunian</option>
              <option value="Komersial">Komersial</option>
              <option value="Tanah / Lahan">Tanah / Lahan</option>
              <option value="Industrial">Industrial</option>
              <option value="Properti Khusus">Properti Khusus</option>
            </select>
          </div>

          {/* DROP-DOWN 2: JENIS PROPERTI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              disabled={!category} // Menyala hanya ketika kategori sudah dipilih
              className={`w-full px-3 py-2.5 rounded-xl border font-medium outline-none transition-all ${
                !category
                  ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-white border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500"
              }`}
            >
              <option value="">&lt;===Pilih jenis properti===&gt;</option>
              <option value="Rumah">Rumah</option>
              <option value="Apartemen">Apartemen</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Cluster">Cluster</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>

        </div>
      </div>
    </div>
  );
}
