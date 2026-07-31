"use client";

import React, { useState } from "react";

// ==========================================
// INTERFACE PROPS UNIVERSAL
// ==========================================
interface SubFormProps {
  onNext?: () => void;
  transactionType?: string;
  [key: string]: any;
}

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

// ==========================================
// COMPONENT RENDERER HELPER (GENERIC INPUTS)
// ==========================================
const FormField = ({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) => (
  <div>
    <label className="block text-xs font-semibold text-slate-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

const CheckboxField = ({ label, name }: { label: string; name?: string }) => (
  <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-slate-100 cursor-pointer text-xs font-medium text-slate-700 transition-all">
    <input type="checkbox" name={name} className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500" />
    <span>{label}</span>
  </label>
);

const SelectInput = ({ options, placeholder = "-- Pilih --" }: { options: string[]; placeholder?: string }) => (
  <select className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium text-xs focus:ring-2 focus:ring-blue-500 outline-none">
    <option value="">{placeholder}</option>
    {options.map((opt, idx) => (
      <option key={idx} value={opt}>
        {opt}
      </option>
    ))}
  </select>
);

const TextInput = ({ placeholder, type = "text" }: { placeholder?: string; type?: string }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium text-xs focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400"
  />
);

const TextAreaInput = ({ placeholder }: { placeholder?: string }) => (
  <textarea
    rows={3}
    placeholder={placeholder}
    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white font-medium text-xs focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400"
  />
);

const SectionHeader = ({ title, count }: { title: string; count?: string }) => (
  <div className="border-b border-slate-200 pb-2 mb-3 flex justify-between items-center">
    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">{title}</h3>
    {count && <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full font-semibold">{count}</span>}
  </div>
);


// ============================================================================
// BLOK 1: HUNIAN (7 SUB-FORM INJECTED)
// ============================================================================

// --- 1.1 FORM RUMAH ---
function FormRumah({ onNext }: SubFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext && onNext(); }} className="space-y-6">
      {/* INFORMASI DASAR */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Dasar" count="8 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField label="Judul Iklan" required><TextInput placeholder="Contoh: Rumah Minimalis Modern Ready Stock" /></FormField>
          <FormField label="Jenis Transaksi" required><SelectInput options={["Dijual", "Disewakan", "Dijual / Disewakan"]} /></FormField>
          <FormField label="Tipe Rumah" required><SelectInput options={["Rumah Subsidi", "Rumah Komersial", "Rumah Second", "Rumah Baru", "Rumah Minimalis", "Rumah Modern", "Rumah Klasik", "Rumah Scandinavian", "Rumah Industrial", "Rumah Tropis", "Rumah Mewah", "Smart Home", "Villa Residence"]} /></FormField>
          <FormField label="Kondisi Properti" required><SelectInput options={["Baru", "Bekas", "Renovasi Total", "Renovasi Sebagian", "Siap Huni", "Dalam Pembangunan"]} /></FormField>
          <FormField label="Status Kepemilikan" required><SelectInput options={["Milik Sendiri", "Warisan", "Dalam Agunan", "Lainnya"]} /></FormField>
          <FormField label="Tahun Dibangun"><TextInput type="number" placeholder="Contoh: 2020" /></FormField>
          <FormField label="Tahun Renovasi"><TextInput type="number" placeholder="Contoh: 2023" /></FormField>
          <FormField label="Status Listing" required><SelectInput options={["Tersedia", "Tersewa", "Terjual"]} /></FormField>
        </div>
      </div>

      {/* INFORMASI BANGUNAN */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Bangunan" count="18 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-3">
          <FormField label="Luas Tanah (m²)"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Luas Bangunan (m²)"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Jumlah Lantai"><TextInput type="number" placeholder="1" /></FormField>
          <FormField label="Kamar Tidur"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Kamar Mandi"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Kamar Tidur Pembantu"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Kamar Mandi Pembantu"><TextInput type="number" placeholder="0" /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <CheckboxField label="Ruang Tamu" /><CheckboxField label="Ruang Keluarga" /><CheckboxField label="Ruang Makan" /><CheckboxField label="Dapur Bersih" />
          <CheckboxField label="Dapur Kotor" /><CheckboxField label="Gudang" /><CheckboxField label="Loteng" /><CheckboxField label="Basement" />
          <CheckboxField label="Balkon" /><CheckboxField label="Teras Depan" /><CheckboxField label="Teras Belakang" />
        </div>
      </div>

      {/* GARASI & PARKIR */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Garasi & Parkir" count="4 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormField label="Garasi Mobil"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Carport"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Parkir Motor"><TextInput type="number" placeholder="0" /></FormField>
        </div>
        <CheckboxField label="Charging EV Station" />
      </div>

      {/* SPESIFIKASI BANGUNAN */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Spesifikasi Bangunan" count="11 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-3">
          <FormField label="Daya Listrik (VA)"><TextInput type="number" placeholder="1300" /></FormField>
          <FormField label="Sumber Air"><SelectInput options={["PDAM", "Sumur Bor", "Sumur Gali", "Artesis"]} /></FormField>
          <FormField label="Jumlah AC"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Material Atap"><SelectInput options={["Genteng Beton", "Genteng Keramik", "Baja Ringan", "Metal", "Dak Beton"]} /></FormField>
          <FormField label="Material Lantai"><SelectInput options={["Keramik", "Granit", "Marmer", "Vinyl", "Parket", "Homogeneous Tile"]} /></FormField>
          <FormField label="Material Dinding"><SelectInput options={["Bata Merah", "Bata Ringan", "Beton", "Precast"]} /></FormField>
          <FormField label="Plafon"><SelectInput options={["Gypsum", "GRC", "PVC", "Kayu"]} /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="Air Panas" /><CheckboxField label="Internet Fiber" /><CheckboxField label="TV Kabel" /><CheckboxField label="Telepon Rumah" />
        </div>
      </div>

      {/* FASILITAS RUMAH */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Fasilitas Rumah" count="12 Field" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <CheckboxField label="Taman Depan" /><CheckboxField label="Taman Belakang" /><CheckboxField label="Kolam Renang Pribadi" /><CheckboxField label="Gazebo" />
          <CheckboxField label="BBQ Area" /><CheckboxField label="Rooftop" /><CheckboxField label="Mushola" /><CheckboxField label="Walk-in Closet" />
          <CheckboxField label="Pantry" /><CheckboxField label="Laundry Room" /><CheckboxField label="Ruang Kerja" /><CheckboxField label="Ruang Hobi" />
        </div>
      </div>

      {/* KEAMANAN & LINGKUNGAN */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Keamanan & Lingkungan" count="16 Field" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <CheckboxField label="One Gate System" /><CheckboxField label="Security 24 Jam" /><CheckboxField label="CCTV" /><CheckboxField label="Smart Lock" />
          <CheckboxField label="Alarm" /><CheckboxField label="Smoke Detector" /><CheckboxField label="Fire Extinguisher" /><CheckboxField label="Dalam Cluster" />
          <CheckboxField label="Dalam Perumahan" /><CheckboxField label="Bebas Banjir" /><CheckboxField label="Dekat Taman" /><CheckboxField label="Dekat Sekolah" />
          <CheckboxField label="Dekat Rumah Sakit" /><CheckboxField label="Dekat Mall" /><CheckboxField label="Dekat Jalan Tol" /><CheckboxField label="Dekat Transportasi Umum" />
        </div>
      </div>

      {/* LEGALITAS & INVESTASI */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Legalitas & Investasi" count="11 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
          <FormField label="Sertifikat"><SelectInput options={["SHM", "SHGB", "AJB", "HGB", "Lainnya"]} /></FormField>
          <FormField label="Furnished"><SelectInput options={["Unfurnished", "Semi Furnished", "Fully Furnished"]} /></FormField>
          <FormField label="Hadap"><SelectInput options={["Utara", "Timur", "Selatan", "Barat", "Tenggara", "Barat Daya", "Barat Laut", "Timur Laut"]} /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="SHM" /><CheckboxField label="SHGB" /><CheckboxField label="IMB/PBG" /><CheckboxField label="PBB" />
          <CheckboxField label="AJB" /><CheckboxField label="Siap KPR" /><CheckboxField label="Cocok Investasi" /><CheckboxField label="Cocok Disewakan" />
          <CheckboxField label="Potensi Capital Gain" /><CheckboxField label="Potensi Rental Yield" /><CheckboxField label="Hook" /><CheckboxField label="Smart Home" />
        </div>
        <FormField label="Catatan Tambahan"><TextAreaInput placeholder="Tambahkan informasi penting lainnya..." /></FormField>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs">
        Lanjut ke Step 2 (Harga & Media)
      </button>
    </form>
  );
}

// --- 1.2 FORM APARTEMEN ---
function FormApartemen({ onNext }: SubFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext && onNext(); }} className="space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Dasar" count="8 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <FormField label="Judul Iklan" required><TextInput placeholder="Contoh: Apartemen High Floor City View" /></FormField>
          <FormField label="Jenis Transaksi" required><SelectInput options={["Dijual", "Disewakan", "Dijual / Disewakan"]} /></FormField>
          <FormField label="Nama Apartemen" required><TextInput placeholder="Nama Kompleks Apartemen" /></FormField>
          <FormField label="Tower" required><TextInput placeholder="Tower A / Tower North" /></FormField>
          <FormField label="Nomor Unit" required><TextInput placeholder="Contoh: 12B" /></FormField>
          <FormField label="Developer"><TextInput placeholder="Nama Pengembang" /></FormField>
          <FormField label="Kondisi Properti" required><SelectInput options={["Baru", "Sangat Baik", "Baik", "Perlu Renovasi Ringan", "Perlu Renovasi Total"]} /></FormField>
          <FormField label="Status Kepemilikan" required><SelectInput options={["Milik Sendiri", "Disewakan", "Lainnya"]} /></FormField>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Unit & Ruangan" count="23 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-3">
          <FormField label="Luas Unit (m²)" required><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Tipe Unit" required><SelectInput options={["Studio", "1 Bedroom", "2 Bedroom", "3 Bedroom", "4 Bedroom", "Penthouse", "Duplex", "Loft"]} /></FormField>
          <FormField label="Lantai" required><TextInput type="number" placeholder="1" /></FormField>
          <FormField label="Jumlah Kamar Tidur" required><TextInput type="number" placeholder="1" /></FormField>
          <FormField label="Jumlah Kamar Mandi" required><TextInput type="number" placeholder="1" /></FormField>
          <FormField label="Kamar Mandi Dalam"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Ceiling Height (m)"><TextInput type="number" placeholder="2.8" /></FormField>
          <FormField label="Luas Balkon (m²)"><TextInput type="number" placeholder="0" /></FormField>
          <FormField label="Arah Hadap"><SelectInput options={["Utara", "Timur", "Selatan", "Barat", "Tenggara", "Barat Daya", "Barat Laut", "Timur Laut"]} /></FormField>
          <FormField label="View Unit"><SelectInput options={["City View", "Pool View", "Garden View", "Mountain View", "Sea View", "Lake View", "River View", "Golf View"]} /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="Balkon" /><CheckboxField label="Corner Unit" /><CheckboxField label="Living Room" /><CheckboxField label="Dining Area" />
          <CheckboxField label="Pantry" /><CheckboxField label="Kitchen Set" /><CheckboxField label="Walk-in Closet" /><CheckboxField label="Storage Room" />
          <CheckboxField label="Laundry Area" /><CheckboxField label="Maid Room" /><CheckboxField label="Maid Bathroom" /><CheckboxField label="Workspace" />
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Fasilitas & Utilitas Gedung" count="37 Field" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
          <CheckboxField label="Lobby" /><CheckboxField label="Reception" /><CheckboxField label="Lift Penumpang" /><CheckboxField label="Lift Service" />
          <CheckboxField label="Swimming Pool" /><CheckboxField label="Children Pool" /><CheckboxField label="Gym" /><CheckboxField label="Sauna" />
          <CheckboxField label="Jacuzzi" /><CheckboxField label="Playground" /><CheckboxField label="Jogging Track" /><CheckboxField label="Sky Garden" />
          <CheckboxField label="Interkom" /><CheckboxField label="Smoke Detector" /><CheckboxField label="Sprinkler" /><CheckboxField label="Genset" />
          <CheckboxField label="Security 24 Jam" /><CheckboxField label="CCTV" /><CheckboxField label="Access Card" /><CheckboxField label="Face Recognition" />
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Biaya & Legalitas" count="8 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
          <FormField label="IPL / Service Charge (Rp/Bulan)"><TextInput placeholder="Rp 0" /></FormField>
          <FormField label="Sinking Fund (Rp/Bulan)"><TextInput placeholder="Rp 0" /></FormField>
          <FormField label="Biaya Parkir (Rp/Bulan)"><TextInput placeholder="Rp 0" /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="SHMSRS" /><CheckboxField label="PPJB" /><CheckboxField label="AJB" /><CheckboxField label="Bisa KPA" />
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs">
        Lanjut ke Step 2
      </button>
    </form>
  );
}

// --- 1.3 FORM CLUSTER ---
function FormCluster({ onNext }: SubFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext && onNext(); }} className="space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Dasar & Kawasan Cluster" count="15 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormField label="Judul Iklan" required><TextInput placeholder="Rumah Cluster Exclusive One Gate System" /></FormField>
          <FormField label="Jenis Transaksi" required><SelectInput options={["Dijual", "Disewakan"]} /></FormField>
          <FormField label="Nama Cluster" required><TextInput placeholder="Nama Cluster" /></FormField>
          <FormField label="Nama Perumahan" required><TextInput placeholder="Nama Perumahan / Estate" /></FormField>
          <FormField label="Developer"><TextInput placeholder="Nama Pengembang" /></FormField>
          <FormField label="Kondisi Properti" required><SelectInput options={["Baru", "Sangat Baik", "Baik", "Perlu Renovasi Ringan", "Perlu Renovasi Total"]} /></FormField>
        </div>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Fasilitas Cluster & Biaya Kawasan" count="21 Field" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 mb-3">
          <CheckboxField label="One Gate System" /><CheckboxField label="Security 24 Jam" /><CheckboxField label="CCTV Kawasan" /><CheckboxField label="Access Card" />
          <CheckboxField label="Club House" /><CheckboxField label="Swimming Pool" /><CheckboxField label="Playground" /><CheckboxField label="Jogging Track" />
          <CheckboxField label="Taman Cluster" /><CheckboxField label="Lapangan Basket" /><CheckboxField label="Gym" /><CheckboxField label="Guest Parking" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <FormField label="IPL / Maintenance (Rp/Bulan)"><TextInput placeholder="Rp 0" /></FormField>
          <FormField label="Biaya Keamanan (Rp/Bulan)"><TextInput placeholder="Rp 0" /></FormField>
          <FormField label="Biaya Sampah (Rp/Bulan)"><TextInput placeholder="Rp 0" /></FormField>
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs">
        Lanjut ke Step 2
      </button>
    </form>
  );
}

// --- 1.4 FORM KONTRAKAN ---
function FormKontrakan({ onNext }: SubFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext && onNext(); }} className="space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Dasar & Sewa Kontrakan" count="13 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
          <FormField label="Judul Iklan" required><TextInput placeholder="Kontrakan Clean & Comfortable Minimalist" /></FormField>
          <FormField label="Status Kontrak" required><SelectInput options={["Disewakan", "Sedang Dikontrak", "Akan Tersedia"]} /></FormField>
          <FormField label="Durasi Kontrak Minimum" required><SelectInput options={["6 Bulan", "1 Tahun", "2 Tahun", ">2 Tahun"]} /></FormField>
          <FormField label="Harga Sewa per Tahun"><TextInput placeholder="Rp 0" /></FormField>
          <FormField label="Deposit"><TextInput placeholder="Rp 0" /></FormField>
          <FormField label="Tanggal Tersedia"><TextInput type="date" /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="Bisa Perpanjang" /><CheckboxField label="Cocok untuk Keluarga" /><CheckboxField label="Cocok untuk Mahasiswa" /><CheckboxField label="Hewan Peliharaan Diizinkan" />
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs">
        Lanjut ke Step 2
      </button>
    </form>
  );
}

// --- 1.5 FORM PENTHOUSE ---
function FormPenthouse({ onNext }: SubFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext && onNext(); }} className="space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Dasar & Ultra Luxury Features" count="20 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
          <FormField label="Judul Iklan" required><TextInput placeholder="Ultra Luxury Penthouse Private Pool" /></FormField>
          <FormField label="Nama Apartemen" required><TextInput placeholder="Apartemen Premium Skyline" /></FormField>
          <FormField label="Kelas Properti" required><SelectInput options={["Luxury", "Ultra Luxury", "Super Luxury"]} /></FormField>
          <FormField label="View Utama"><SelectInput options={["City View", "Skyline View", "Sea View", "Mountain View", "River View", "Golf View"]} /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="Private Lift" /><CheckboxField label="Private Pool" /><CheckboxField label="Sky Terrace" /><CheckboxField label="Rooftop Garden" />
          <CheckboxField label="Wine Cellar" /><CheckboxField label="Home Theater" /><CheckboxField label="Executive Lobby" /><CheckboxField label="Concierge 24 Jam" />
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs">
        Lanjut ke Step 2
      </button>
    </form>
  );
}

// --- 1.6 FORM RUSUN ---
function FormRusun({ onNext }: SubFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext && onNext(); }} className="space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Rusun & Fasilitas Bersama" count="18 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
          <FormField label="Judul Iklan" required><TextInput placeholder="Rusun Siap Huni Lokasi Strategis" /></FormField>
          <FormField label="Nama Rusun" required><TextInput placeholder="Rusunawa / Rusunami..." /></FormField>
          <FormField label="Blok / Tower" required><TextInput placeholder="Blok B / Tower 1" /></FormField>
          <FormField label="Nomor Unit" required><TextInput placeholder="05" /></FormField>
          <FormField label="Pengelola"><TextInput placeholder="Dinas / Pengelola Swasta" /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="Lift" /><CheckboxField label="Area Bermain" /><CheckboxField label="Musholla" /><CheckboxField label="Aula Serbaguna" />
          <CheckboxField label="Posyandu" /><CheckboxField label="Area Jemur Bersama" /><CheckboxField label="Koperasi / Minimarket" /><CheckboxField label="Security 24 Jam" />
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs">
        Lanjut ke Step 2
      </button>
    </form>
  );
}

// --- 1.7 FORM TOWNHOUSE ---
function FormTownhouse({ onNext }: SubFormProps) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); onNext && onNext(); }} className="space-y-6">
      <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-4">
        <SectionHeader title="Informasi Townhouse Eksklusif" count="17 Field" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
          <FormField label="Judul Iklan" required><TextInput placeholder="Exclusive Urban Townhouse Near CBD" /></FormField>
          <FormField label="Nama Townhouse" required><TextInput placeholder="Nama Townhouse" /></FormField>
          <FormField label="Jumlah Unit Townhouse"><TextInput type="number" placeholder="Contoh: 12" /></FormField>
          <FormField label="Posisi Unit"><SelectInput options={["Tengah", "Hook", "Cul-de-sac", "Dekat Club House", "Dekat Gerbang", "Dekat Taman"]} /></FormField>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          <CheckboxField label="One Gate System" /><CheckboxField label="Smart Gate / Door Lock" /><CheckboxField label="Private Garden" /><CheckboxField label="Rooftop Terrace" />
          <CheckboxField label="Charging Station EV" /><CheckboxField label="Club House" /><CheckboxField label="Kawasan Eksklusif" /><CheckboxField label="Dekat CBD" />
        </div>
      </div>

      <button type="submit" className="w-full py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all text-xs">
        Lanjut ke Step 2
      </button>
    </form>
  );
}


// ============================================================================
// PLACEHOLDER BLOK 2: KOMERSIAL (11 SUB-FORM PLACEHOLDER)
// ============================================================================
function FormRuko(props: SubFormProps) { return <FormRumah {...props} />; }
function FormKiosToko(props: SubFormProps) { return <FormRumah {...props} />; }
function FormGedungPerkantoran(props: SubFormProps) { return <FormRumah {...props} />; }
function FormCoworkingSpace(props: SubFormProps) { return <FormRumah {...props} />; }
function FormRestoranCafe(props: SubFormProps) { return <FormRumah {...props} />; }
function FormHotelResort(props: SubFormProps) { return <FormRumah {...props} />; }
function FormPusatPerbelanjaan(props: SubFormProps) { return <FormRumah {...props} />; }
function FormShowroomBengkel(props: SubFormProps) { return <FormRumah {...props} />; }
function FormKesehatanKecantikan(props: SubFormProps) { return <FormRumah {...props} />; }
function FormSPBU(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTempatHiburan(props: SubFormProps) { return <FormRumah {...props} />; }


// ============================================================================
// PLACEHOLDER BLOK 3: INDUSTRI & LOGISTIK (9 SUB-FORM PLACEHOLDER)
// ============================================================================
function FormGudang(props: SubFormProps) { return <FormRumah {...props} />; }
function FormDistributionCenter(props: SubFormProps) { return <FormRumah {...props} />; }
function FormLogisticsHub(props: SubFormProps) { return <FormRumah {...props} />; }
function FormColdStorage(props: SubFormProps) { return <FormRumah {...props} />; }
function FormPabrik(props: SubFormProps) { return <FormRumah {...props} />; }
function FormWorkshop(props: SubFormProps) { return <FormRumah {...props} />; }
function FormHanggar(props: SubFormProps) { return <FormRumah {...props} />; }
function FormDryPort(props: SubFormProps) { return <FormRumah {...props} />; }
function FormKawasanIndustri(props: SubFormProps) { return <FormRumah {...props} />; }


// ============================================================================
// PLACEHOLDER BLOK 4: TANAH & LAHAN (8 SUB-FORM PLACEHOLDER)
// ============================================================================
function FormTanahKavling(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTanahKomersial(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTanahIndustri(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTanahPertanian(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTanahPerkebunan(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTanahPeternakan(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTanahPerikanan(props: SubFormProps) { return <FormRumah {...props} />; }
function FormTanahPerumahan(props: SubFormProps) { return <FormRumah {...props} />; }


// ============================================================================
// MAIN COMPONENT: STEP 1 INFORMATION
// ============================================================================
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

  return (
    <div className="space-y-6 font-sans">
      {/* DROPDOWN KATEGORI & JENIS PROPERTI (35 JENIS UTUH) */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">
            Pilih Kategori & Jenis Properti TERAVIA
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

          {/* PILIHAN JENIS PROPERTI (35 TOTAL OPSI) */}
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

      {/* DYNAMIC FORM RENDERER - 7 HUNIAN */}
      {propertyType === "Rumah" && <FormRumah onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Apartemen" && <FormApartemen onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Cluster" && <FormCluster onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Townhouse" && <FormTownhouse onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Penthouse" && <FormPenthouse onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Rusun" && <FormRusun onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Kontrakan" && <FormKontrakan onNext={onNext} transactionType={transactionType} />}

      {/* DYNAMIC FORM RENDERER - 11 KOMERSIAL */}
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

      {/* DYNAMIC FORM RENDERER - 9 INDUSTRI & LOGISTIK */}
      {propertyType === "Gudang" && <FormGudang onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Distribution Center" && <FormDistributionCenter onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Logistics Hub" && <FormLogisticsHub onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Cold Storage" && <FormColdStorage onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Pabrik" && <FormPabrik onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Workshop" && <FormWorkshop onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Hanggar" && <FormHanggar onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Dry Port" && <FormDryPort onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Kawasan Industri" && <FormKawasanIndustri onNext={onNext} transactionType={transactionType} />}

      {/* DYNAMIC FORM RENDERER - 8 TANAH & LAHAN */}
      {propertyType === "Tanah Kavling" && <FormTanahKavling onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tanah Komersial" && <FormTanahKomersial onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tanah Industri" && <FormTanahIndustri onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tanah Pertanian" && <FormTanahPertanian onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tanah Perkebunan" && <FormTanahPerkebunan onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tanah Peternakan" && <FormTanahPeternakan onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tanah Perikanan" && <FormTanahPerikanan onNext={onNext} transactionType={transactionType} />}
      {propertyType === "Tanah Perumahan" && <FormTanahPerumahan onNext={onNext} transactionType={transactionType} />}
    </div>
  );
}