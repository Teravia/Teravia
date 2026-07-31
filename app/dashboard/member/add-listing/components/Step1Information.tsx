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
import FormGudang from "./step1-forms/industri-logistik/FormGudang";
import FormDistributionCenter from "./step1-forms/industri-logistik/FormDistributionCenter";
import FormLogisticsHub from "./step1-forms/industri-logistik/FormLogisticsHub";
import FormColdStorage from "./step1-forms/industri-logistik/FormColdStorage";
import FormPabrik from "./step1-forms/industri-logistik/FormPabrik";
import FormWorkshop from "./step1-forms/industri-logistik/FormWorkshop";
import FormHanggar from "./step1-forms/industri-logistik/FormHanggar";
import FormDryPort from "./step1-forms/industri-logistik/FormDryPort";
import FormKawasanIndustri from "./step1-forms/industri-logistik/FormKawasanIndustri";

// --- IMPORT 8 FORM TANAH & LAHAN ---
import FormTanahIndustri from "./step1-forms/tanah-lahan/FormTanahIndustri";
import FormTanahKavling from "./step1-forms/tanah-lahan/FormTanahKavling";
import FormTanahKomersial from "./step1-forms/tanah-lahan/FormTanahKomersial";
import FormTanahPerikanan from "./step1-forms/tanah-lahan/FormTanahPerikanan";
import FormTanahPerkebunan from "./step1-forms/tanah-lahan/FormTanahPerkebunan";
import FormTanahPertanian from "./step1-forms/tanah-lahan/FormTanahPertanian";
import FormTanahPerumahan from "./step1-forms/tanah-lahan/FormTanahPerumahan";
import FormTanahPeternakan from "./step1-forms/tanah-lahan/FormTanahPeternakan";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = e.target.value;
    setCategory(selectedCat);

    if (selectedCat === "Hunian") setPropertyType("Rumah");
    else if (selectedCat === "Komersial") setPropertyType("Ruko");
    else if (selectedCat === "Industri & Logistik") setPropertyType("Gudang");
    else if (selectedCat === "Tanah & Lahan") setPropertyType("Tanah Kavling");
  };

  // Helper function untuk merender komponen secara fleksibel tanpa memicu error TypeScript
  const renderForm = (Component: React.ComponentType<any>) => {
    return <Component onNext={onNext} transactionType={transactionType} />;
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
                  <option value="Tanah Kavling">Tanah Kavling / Residensial</option>
                  <option value="Tanah Komersial">Tanah Komersial</option>
                  <option value="Tanah Industri">Tanah Industri</option>
                  <option value="Tanah Pertanian">Tanah Pertanian</option>
                  <option value="Tanah Perkebunan">Tanah Perkebunan</option>
                  <option value="Tanah Peternakan">Tanah Peternakan</option>
                  <option value="Tanah Perikanan">Tanah Perikanan</option>
                  <option value="Tanah Perumahan">Tanah Perumahan / Developer</option>
                </>
              )}
            </select>
          </div>
        </div>
      </div>

      {/* DYNAMIC FORM RENDERER - HUNIAN */}
      {propertyType === "Rumah" && renderForm(FormRumah)}
      {propertyType === "Apartemen" && renderForm(FormApartemen)}
      {propertyType === "Cluster" && renderForm(FormCluster)}
      {propertyType === "Townhouse" && renderForm(FormTownhouse)}
      {propertyType === "Penthouse" && renderForm(FormPenthouse)}
      {propertyType === "Rusun" && renderForm(FormRusun)}
      {propertyType === "Kontrakan" && renderForm(FormKontrakan)}

      {/* DYNAMIC FORM RENDERER - KOMERSIAL */}
      {propertyType === "Ruko" && renderForm(FormRuko)}
      {propertyType === "Kios" && renderForm(FormKiosToko)}
      {propertyType === "Gedung Perkantoran" && renderForm(FormGedungPerkantoran)}
      {propertyType === "Coworking Space" && renderForm(FormCoworkingSpace)}
      {propertyType === "Restoran Cafe" && renderForm(FormRestoranCafe)}
      {propertyType === "Hotel Resort" && renderForm(FormHotelResort)}
      {propertyType === "Pusat Perbelanjaan" && renderForm(FormPusatPerbelanjaan)}
      {propertyType === "Showroom Bengkel" && renderForm(FormShowroomBengkel)}
      {propertyType === "Kesehatan Kecantikan" && renderForm(FormKesehatanKecantikan)}
      {propertyType === "SPBU" && renderForm(FormSPBU)}
      {propertyType === "Tempat Hiburan" && renderForm(FormTempatHiburan)}

      {/* DYNAMIC FORM RENDERER - INDUSTRI & LOGISTIK */}
      {propertyType === "Gudang" && renderForm(FormGudang)}
      {propertyType === "Distribution Center" && renderForm(FormDistributionCenter)}
      {propertyType === "Logistics Hub" && renderForm(FormLogisticsHub)}
      {propertyType === "Cold Storage" && renderForm(FormColdStorage)}
      {propertyType === "Pabrik" && renderForm(FormPabrik)}
      {propertyType === "Workshop" && renderForm(FormWorkshop)}
      {propertyType === "Hanggar" && renderForm(FormHanggar)}
      {propertyType === "Dry Port" && renderForm(FormDryPort)}
      {propertyType === "Kawasan Industri" && renderForm(FormKawasanIndustri)}

      {/* DYNAMIC FORM RENDERER - TANAH & LAHAN */}
      {propertyType === "Tanah Kavling" && renderForm(FormTanahKavling)}
      {propertyType === "Tanah Komersial" && renderForm(FormTanahKomersial)}
      {propertyType === "Tanah Industri" && renderForm(FormTanahIndustri)}
      {propertyType === "Tanah Pertanian" && renderForm(FormTanahPertanian)}
      {propertyType === "Tanah Perkebunan" && renderForm(FormTanahPerkebunan)}
      {propertyType === "Tanah Peternakan" && renderForm(FormTanahPeternakan)}
      {propertyType === "Tanah Perikanan" && renderForm(FormTanahPerikanan)}
      {propertyType === "Tanah Perumahan" && renderForm(FormTanahPerumahan)}
    </div>
  );
      }
