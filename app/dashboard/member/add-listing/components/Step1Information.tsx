"use client";

import React from "react";

// Import Form Hunian
import FormRumah from "./step1-forms/hunian/FormRumah";
import FormApartemen from "./step1-forms/hunian/FormApartemen";
import FormCluster from "./step1-forms/hunian/FormCluster";
import FormTownhouse from "./step1-forms/hunian/FormTownhouse";
import FormPenthouse from "./step1-forms/hunian/FormPenthouse";
import FormRusun from "./step1-forms/hunian/FormRusun";
import FormKontrakan from "./step1-forms/hunian/FormKontrakan";

// Import Form Komersial
import FormRuko from "./step1-forms/komersial/FormRuko";
import FormKiosToko from "./step1-forms/komersial/FormKiosToko";
import FormGedungPerkantoran from "./step1-forms/komersial/FormGedungPerkantoran";
import FormCoworkingSpace from "./step1-forms/komersial/FormCoworkingSpace";
import FormRestoranCafe from "./step1-forms/komersial/FormRestoranCafe";
import FormHotelResort from "./step1-forms/komersial/FormHotelResort";
import FormPusatPerbelanjaan from "./step1-forms/komersial/FormPusatPerbelanjaan";
import FormShowroomBengkel from "./step1-forms/komersial/FormShowroomBengkel";
import FormKesehatanKecantikan from "./step1-forms/komersial/FormKesehatanKecantikan";
import FormSPBU from "./step1-forms/komersial/FormSPBU";
import FormTempatHiburan from "./step1-forms/komersial/FormTempatHiburan";

interface Step1Props {
  category?: string;
  setCategory?: (val: string) => void;
  subCategory?: string;
  setSubCategory?: (val: string) => void;
  transactionType: string;
  setTransactionType?: (val: string) => void;
  onNext: () => void;
}

export default function Step1Information({
  category: propCategory,
  setCategory: propSetCategory,
  subCategory: propSubCategory,
  setSubCategory: propSetSubCategory,
  transactionType,
  setTransactionType: propSetTransactionType,
  onNext,
}: Step1Props) {
  // Local state fallback jika tidak di-pass dari parent
  const [localCategory, setLocalCategory] = React.useState("Hunian");
  const [localSubCategory, setLocalSubCategory] = React.useState("Rumah");

  const category = propCategory ?? localCategory;
  const setCategory = propSetCategory ?? setLocalCategory;
  const subCategory = propSubCategory ?? localSubCategory;
  const setSubCategory = propSetSubCategory ?? setLocalSubCategory;

  // Switcher Form Komponen berdasarkan Sub-Kategori yang Dipilih
  const renderDynamicForm = () => {
    // --- KATEGORI HUNIAN ---
    if (category === "Hunian") {
      switch (subCategory) {
        case "Rumah":
          return <FormRumah onNext={onNext} transactionType={transactionType} />;
        case "Apartemen":
          return <FormApartemen onNext={onNext} transactionType={transactionType} />;
        case "Cluster":
          return <FormCluster onNext={onNext} transactionType={transactionType} />;
        case "Townhouse":
          return <FormTownhouse onNext={onNext} transactionType={transactionType} />;
        case "Penthouse":
          return <FormPenthouse onNext={onNext} transactionType={transactionType} />;
        case "Rusun":
          return <FormRusun onNext={onNext} transactionType={transactionType} />;
        case "Kontrakan":
          return <FormKontrakan onNext={onNext} transactionType={transactionType} />;
        default:
          return <FormRumah onNext={onNext} transactionType={transactionType} />;
      }
    }

    // --- KATEGORI KOMERSIAL ---
    if (category === "Komersial") {
      switch (subCategory) {
        case "Ruko & Rukan":
          return <FormRuko onNext={onNext} transactionType={transactionType} />;
        case "Kios & Toko":
          return <FormKiosToko onNext={onNext} transactionType={transactionType} />;
        case "Gedung Perkantoran":
          return <FormGedungPerkantoran onNext={onNext} transactionType={transactionType} />;
        case "Co-Working Space":
          return <FormCoworkingSpace onNext={onNext} transactionType={transactionType} />;
        case "Restoran & Cafe":
          return <FormRestoranCafe onNext={onNext} transactionType={transactionType} />;
        case "Hotel & Resort":
          return <FormHotelResort onNext={onNext} transactionType={transactionType} />;
        case "Pusat Perbelanjaan / Mall":
          return <FormPusatPerbelanjaan onNext={onNext} transactionType={transactionType} />;
        case "Showroom & Bengkel":
          return <FormShowroomBengkel onNext={onNext} transactionType={transactionType} />;
        case "Fasilitas Kesehatan & Kecantikan":
          return <FormKesehatanKecantikan onNext={onNext} transactionType={transactionType} />;
        case "SPBU & Rest Area":
          return <FormSPBU onNext={onNext} transactionType={transactionType} />;
        case "Tempat Hiburan & Rekreasi":
          return <FormTempatHiburan onNext={onNext} transactionType={transactionType} />;
        default:
          return <FormRuko onNext={onNext} transactionType={transactionType} />;
      }
    }

    return null;
  };

  return (
    <div className="space-y-6">
      {/* SELEKSI KATEGORI, SUB-KATEGORI, & TIPE TRANSAKSI */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Pilih Kategori Properti</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Tipe Transaksi */}
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-700">Tipe Transaksi</label>
            <select
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              value={transactionType}
              onChange={(e) => setTransactionType(e.target.value)}
            >
              <option value="Dijual">Dijual</option>
              <option value="Disewakan">Disewakan</option>
            </select>
          </div>

          {/* Kategori Utama */}
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-700">Kategori Utama</label>
            <select
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                // Reset default sub-category
                if (e.target.value === "Hunian") setSubCategory("Rumah");
                if (e.target.value === "Komersial") setSubCategory("Ruko & Rukan");
              }}
            >
              <option value="Hunian">Hunian</option>
              <option value="Komersial">Komersial</option>
            </select>
          </div>

          {/* Sub-Kategori Dinamis */}
          <div>
            <label className="block text-xs font-semibold mb-1 text-slate-700">Sub-Kategori Properti</label>
            <select
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-white"
              value={subCategory}
              onChange={(e) => setSubCategory(e.target.value)}
            >
              {category === "Hunian" && (
                <>
                  <option value="Rumah">Rumah Tapak</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Cluster">Cluster</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Rusun">Rusun (Rumah Susun)</option>
                  <option value="Kontrakan">Kontrakan Tapak</option>
                </>
              )}

              {category === "Komersial" && (
                <>
                  <option value="Ruko & Rukan">Ruko & Rukan</option>
                  <option value="Kios & Toko">Kios & Toko</option>
                  <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                  <option value="Co-Working Space">Co-Working Space</option>
                  <option value="Restoran & Cafe">Restoran & Cafe</option>
                  <option value="Hotel & Resort">Hotel & Resort</option>
                  <option value="Pusat Perbelanjaan / Mall">Pusat Perbelanjaan / Mall</option>
                  <option value="Showroom & Bengkel">Showroom & Bengkel</option>
                  <option value="Fasilitas Kesehatan & Kecantikan">Fasilitas Kesehatan & Kecantikan</option>
                  <option value="SPBU & Rest Area">SPBU & Rest Area Tol</option>
                  <option value="Tempat Hiburan & Rekreasi">Tempat Hiburan & Rekreasi</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* RENDER FORM SPESIFIK */}
      {renderDynamicForm()}
    </div>
  );
}
