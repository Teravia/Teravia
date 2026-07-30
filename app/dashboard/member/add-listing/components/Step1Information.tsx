"use client";

import React, { useState } from "react";

// Import Form Hunian Utama
import FormRumah from "./step1-forms/hunian/FormRumah";
import FormApartemen from "./step1-forms/hunian/FormApartemen";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // Handler Ganti Kategori
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = e.target.value;
    setCategory(selectedCat);

    if (selectedCat === "Hunian") setPropertyType("Rumah");
    else if (selectedCat === "Komersial") setPropertyType("Gedung Perkantoran");
    else if (selectedCat === "Industri & Logistik") setPropertyType("Gudang");
    else if (selectedCat === "Tanah & Lahan") setPropertyType("Tanah");
  };

  return (
    <div className="space-y-6 font-sans">
      {/* SELEKSI KATEGORI & JENIS PROPERTI */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">
            Pilih Kategori & Jenis Properti
          </h2>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
            Kategori: {category}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium"
            >
              <option value="Hunian">Hunian / Residence</option>
              <option value="Komersial">Komersial / Usaha</option>
              <option value="Industri & Logistik">Industri & Logistik</option>
              <option value="Tanah & Lahan">Tanah & Lahan</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium"
            >
              {category === "Hunian" && (
                <>
                  <option value="Rumah">Rumah</option>
                  <option value="Apartemen">Apartemen</option>
                </>
              )}
              {category === "Komersial" && (
                <>
                  <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                  <option value="Ruko">Ruko / Rukan</option>
                </>
              )}
              {category === "Industri & Logistik" && (
                <>
                  <option value="Gudang">Gudang Logistik</option>
                </>
              )}
              {category === "Tanah & Lahan" && (
                <>
                  <option value="Tanah">Tanah / Lahan</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* DYNAMIC FORM RENDERER */}
      {propertyType === "Rumah" && (
        <FormRumah onNext={onNext} transactionType={transactionType} />
      )}
      
      {propertyType === "Apartemen" && (
        <FormApartemen onNext={onNext} transactionType={transactionType} />
      )}

      {/* FALLBACK JIKA FORM BELUM TERSEDIA */}
      {propertyType !== "Rumah" && propertyType !== "Apartemen" && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center text-amber-800 text-xs font-medium space-y-1">
          <p className="font-bold text-sm">Form Spesifikasi Dalam Pengembangan</p>
          <p>
            Form spesifikasi untuk <span className="font-bold underline">{propertyType}</span> sedang disiapkan.
          </p>
        </div>
      )}
    </div>
  );
          }
