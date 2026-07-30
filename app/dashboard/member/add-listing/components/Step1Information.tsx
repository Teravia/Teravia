"use client";

import React, { useState } from "react";

// --- IMPORT 7 FORM HUNIAN ---
import FormApartemen from "./step1-forms/hunian/FormApartemen";
import FormCluster from "./step1-forms/hunian/FormCluster";
import FormKontrakan from "./step1-forms/hunian/FormKontrakan";
import FormPenthouse from "./step1-forms/hunian/FormPenthouse";
import FormRumah from "./step1-forms/hunian/FormRumah";
import FormRusun from "./step1-forms/hunian/FormRusun";
import FormTownhouse from "./step1-forms/hunian/FormTownhouse";

// --- IMPORT 11 FORM KOMERSIAL ---
import FormCoworkingSpace from "./step1-forms/komersial/FormCoworkingSpace";
import FormGedungPerkantoran from "./step1-forms/komersial/FormGedungPerkantoran";
import FormHotelResort from "./step1-forms/komersial/FormHotelResort";
import FormKesehatanKecantikan from "./step1-forms/komersial/FormKesehatanKecantikan";
import FormKiosToko from "./step1-forms/komersial/FormKiosToko";
import FormPusatPerbelanjaan from "./step1-forms/komersial/FormPusatPerbelanjaan";
import FormRestoranCafe from "./step1-forms/komersial/FormRestoranCafe";
import FormRuko from "./step1-forms/komersial/FormRuko";
import FormSPBU from "./step1-forms/komersial/FormSPBU";
import FormShowroomBengkel from "./step1-forms/komersial/FormShowroomBengkel";
import FormTempatHiburan from "./step1-forms/komersial/FormTempatHiburan";

// --- IMPORT 9 FORM INDUSTRI & LOGISTIK ---
import { FormGudang } from "./step1-forms/industri-&-logistik/FormGudang";
import { FormDistributionCenter } from "./step1-forms/industri-&-logistik/FormDistributionCenter";
import { FormLogisticsHub } from "./step1-forms/industri-&-logistik/FormLogisticsHub";
import { FormColdStorage } from "./step1-forms/industri-&-logistik/FormColdStorage";
import { FormPabrik } from "./step1-forms/industri-&-logistik/FormPabrik";
import { FormWorkshop } from "./step1-forms/industri-&-logistik/FormWorkshop";
import { FormHanggar } from "./step1-forms/industri-&-logistik/FormHanggar";
import { FormDryPort } from "./step1-forms/industri-&-logistik/FormDryPort";
import { FormKawasanIndustri } from "./step1-forms/industri-&-logistik/FormKawasanIndustri";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // Handler Ganti Kategori & Reset Jenis Properti Default
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = e.target.value;
    setCategory(selectedCat);

    if (selectedCat === "Hunian") setPropertyType("Rumah");
    else if (selectedCat === "Komersial") setPropertyType("Ruko");
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
          {/* PILIHAN KATEGORI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Hunian">Hunian / Residence</option>
              <option value="Komersial">Komersial / Usaha</option>
              <option value="Industri & Logistik">Industri & Logistik</option>
              <option value="Tanah & Lahan">Tanah & Lahan</option>
            </select>
          </div>

          {/* PILIHAN JENIS PROPERTI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {category === "Hunian" && (
                <>
                  <option value="Rumah">Rumah</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Cluster">Cluster</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Rusun">Rusun (Rumah Susun)</option>
                  <option value="Kontrakan">Rumah Kontrakan</option>
                </>
              )}

              {category === "Komersial" && (
                <>
                  <option value="Ruko">Ruko / Rukan</option>
                  <option value="Kios">Kios / Toko</option>
                  <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                  <option value="Coworking Space">Co-Working Space</option>
                  <option value="Restoran Cafe">Restoran / Cafe / F&B</option>
                  <option value="Hotel Resort">Hotel / Resort</option>
                  <option value="Pusat Perbelanjaan">Pusat Perbelanjaan / Mall</option>
                  <option value="Showroom Bengkel">Showroom / Bengkel</option>
                  <option value="Kesehatan Kecantikan">Klinik / Spa / Salon</option>
                  <option value="SPBU">SPBU / Rest Area Tol</option>
                  <option value="Tempat Hiburan">Tempat Hiburan & Rekreasi</option>
                </>
              )}

              {category === "Industri & Logistik" && (
                <>
                  <option value="Gudang">Gudang Logistik</option>
                  <option value="Distribution Center">Distribution Center (DC)</option>
                  <option value="Logistics Hub">Logistics Hub</option>
                  <option value="Cold Storage">Cold Storage</option>
                  <option value="Pabrik">Pabrik (Factory / Plant)</option>
                  <option value="Workshop">Workshop / Bengkel Industri</option>
                  <option value="Hanggar">Hanggar Pesawat</option>
                  <option value="Dry Port">Dry Port / ICD</option>
                  <option value="Kawasan Industri">Lahan / Kawasan Industri</option>
                </>
              )}

              {category === "Tanah & Lahan" && (
                <>
                  <option value="Tanah">Tanah Kavling / Lahan</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* DYNAMIC FORM RENDERER - HUNIAN */}
      {propertyType === "Rumah" && <FormRumah onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Apartemen" && <FormApartemen onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Cluster" && <FormCluster onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Townhouse" && <FormTownhouse onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Penthouse" && <FormPenthouse onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Rusun" && <FormRusun onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Kontrakan" && <FormKontrakan onNext={onNext} transactionType={transactionType} />}

      {/* DYNAMIC FORM RENDERER - KOMERSIAL */}
      {propertyType === "Ruko" && <FormRuko onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Kios" && <FormKiosToko onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Gedung Perkantoran" && <FormGedungPerkantoran onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Coworking Space" && <FormCoworkingSpace onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Restoran Cafe" && <FormRestoranCafe onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Hotel Resort" && <FormHotelResort onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Pusat Perbelanjaan" && <FormPusatPerbelanjaan onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Showroom Bengkel" && <FormShowroomBengkel onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Kesehatan Kecantikan" && <FormKesehatanKecantikan onNext={onNext} transactionType={transactionType} />}
      {propertyType === "SPBU" && <FormSPBU onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tempat Hiburan" && <FormTempatHiburan onNext={onNext} transactionType={transactionType} />}

      {/* DYNAMIC FORM RENDERER - INDUSTRI & LOGISTIK */}
      {propertyType === "Gudang" && <FormGudang onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Distribution Center" && <FormDistributionCenter onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Logistics Hub" && <FormLogisticsHub onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Cold Storage" && <FormColdStorage onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Pabrik" && <FormPabrik onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Workshop" && <FormWorkshop onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Hanggar" && <FormHanggar onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Dry Port" && <FormDryPort onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Kawasan Industri" && <FormKawasanIndustri onNext={onNext} transactionType={transactionType} />}

      {/* FALLBACK UNTUK TANAH & LAHAN */}
      {category === "Tanah & Lahan" && (
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center text-amber-800 text-xs font-medium space-y-2">
          <p className="font-bold text-sm">Form Spesifikasi {propertyType}</p>
          <p>
            Form spesifikasi untuk <span className="font-bold underline">{propertyType}</span> sedang disiapkan.
          </p>
          <button
            type="button"
            onClick={onNext}
            className="mt-2 px-4 py-2 bg-amber-600 text-white rounded-xl font-bold hover:bg-amber-700 transition"
          >
            Lanjut ke Step 2 (Legalitas & Harga) →
          </button>
        </div>
      )}
    </div>
  );
                  }
