"use client";

import React, { useState } from "react";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  const [listingTitle, setListingTitle] = useState("");
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPropertyType("");
  };

  // Validasi: Pastikan SEMUA input required sudah terisi (tidak kosong/hanya spasi)
  const isFormValid =
    listingTitle.trim() !== "" &&
    category.trim() !== "" &&
    propertyType.trim() !== "";

  const handleNextClick = () => {
    if (isFormValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        {/* KOLOM JUDUL LISTINGAN (REQUIRED) */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Judul Listingan <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={listingTitle}
            onChange={(e) => setListingTitle(e.target.value)}
            placeholder="Masukkan judul listingan (contoh: Rumah Mewah Minimalis di Jakarta Selatan)"
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400"
            required
          />
        </div>

        {/* DROPDOWN KATEGORI & JENIS PROPERTI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          
          {/* DROP-DOWN 1: KATEGORI PROPERTI (REQUIRED) */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium text-center focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
              required
            >
              <option value="" disabled hidden className="text-slate-400">
                Pilih Kategori Properti
              </option>
              <option value="Hunian">Hunian</option>
              <option value="Komersial">Komersial</option>
              <option value="Tanah / Lahan">Tanah / Lahan</option>
              <option value="Industrial">Industrial</option>
              <option value="Properti Khusus">Properti Khusus</option>
            </select>
          </div>

          {/* DROP-DOWN 2: JENIS PROPERTI (REQUIRED) */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              disabled={!category}
              className={`w-full px-3 py-2.5 rounded-xl border font-medium text-center outline-none transition-all ${
                !category
                  ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-white border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer"
              }`}
              required
            >
              <option value="" disabled hidden className="text-slate-400">
                Pilih Jenis Properti
              </option>
              <option value="Rumah">Rumah</option>
              <option value="Apartemen">Apartemen</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Cluster">Cluster</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>

        </div>
      </div>

      {/* TOMBOL LANJUT DI PALING BAWAH */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNextClick}
          disabled={!isFormValid}
          className={`px-6 py-3 rounded-xl font-semibold text-xs text-white transition-all ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700 shadow-md cursor-pointer"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          Lanjut &rarr;
        </button>
      </div>
    </div>
  );
}
