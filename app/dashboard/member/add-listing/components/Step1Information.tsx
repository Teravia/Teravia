"use client";

import React, { useState } from "react";

// --- IMPORT COMPONENT FORM SPESIFIK ---
// Kategori: Hunian
import FormRumah from "./step1-forms/hunian/FormRumah";
import FormApartemen from "./step1-forms/hunian/FormApartemen";
import FormCluster from "./step1-forms/hunian/FormCluster";
import FormTownhouse from "./step1-forms/hunian/FormTownhouse";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  // State Kategori & Jenis Properti
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // Handler Ganti Kategori & Reset Jenis Properti Default
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = e.target.value;
    setCategory(selectedCat);

    // Set default jenis properti sesuai kategori yang dipilih
    if (selectedCat === "Hunian") setPropertyType("Rumah");
    else if (selectedCat === "Komersial") setPropertyType("Ruko");
    else if (selectedCat === "Industri & Logistik") setPropertyType("Gudang");
    else if (selectedCat === "Tanah & Lahan") setPropertyType("Tanah");
  };

  // Helper Renderer Form
  const renderPropertyForm = () => {
    switch (propertyType) {
      // --- KATEGORI HUNIAN ---
      case "Rumah":
        return <FormRumah onNext={onNext} transactionType={transactionType} />;
      case "Apartemen":
        return <FormApartemen onNext={onNext} transactionType={transactionType} />;
      case "Cluster":
        return <FormCluster onNext={onNext} transactionType={transactionType} />;
      case "Townhouse":
        return <FormTownhouse onNext={onNext} transactionType={transactionType} />;

      // --- PLACEHOLDER FORM LAINNYA (In Development) ---
      default:
        return (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center text-amber-800 text-xs font-medium space-y-2">
            <p className="font-bold text-sm">Form Masih Dalam Penyusunan 🛠️</p>
            <p>
              Form spesifikasi untuk <span className="underline font-semibold">{propertyType}</span> akan segera di-inject pada tahap berikutnya.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="space-y-6 font-sans">
      {/* SELEKSI KATEGORI & JENIS PROPERTI UTAMA */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">
            Pilih Kategori & Jenis Properti
          </h2>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
            Transaksi: {transactionType}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* Dropdown Kategori */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              <option value="Hunian">Hunian / Residence</option>
              <option value="Komersial">Komersial / Tempat Usaha</option>
              <option value="Industri & Logistik">Industri & Logistik</option>
              <option value="Tanah & Lahan">Tanah & Lahan</option>
            </select>
          </div>

          {/* Dropdown Jenis Properti Dinamis */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 outline-none transition"
            >
              {category === "Hunian" && (
                <>
                  <option value="Rumah">Rumah</option>
    <option value="Apartemen">Apartemen</option>
    <option value="Cluster">Cluster</option>
    <option value="Townhouse">Townhouse</option>
    <option value="Penthouse">Penthouse</option>
    <option value="Rusun">Rusun (Rumah Susun)</option>
    <option value="Kontrakan">Kontrakan</option>
  </>
                </>
              )}
              {category === "Komersial" && (
                <>
                  <option value="Ruko">Ruko / Rukan</option>
                  <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                  <option value="Kios">Kios / Booth</option>
                  <option value="Hotel">Hotel / Resort</option>
                </>
              )}
              {category === "Industri & Logistik" && (
                <>
                  <option value="Gudang">Gudang Logistik</option>
                  <option value="Pabrik">Pabrik</option>
                </>
              )}
              {category === "Tanah & Lahan" && (
                <>
                  <option value="Tanah Kavling">Tanah Kavling</option>
                  <option value="Lahan Komersial">Lahan Komersial</option>
                  <option value="Pertanian">Lahan Pertanian/Perkebunan</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* RENDER FORM SPESIFIK BERDASARKAN SELEKSI */}
      {renderPropertyForm()}
    </div>
  );
}
