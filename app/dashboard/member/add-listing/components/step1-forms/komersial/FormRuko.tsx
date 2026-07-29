"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormRuko({ onNext, transactionType }: FormProps) {
  // Informasi Dasar
  const [title, setTitle] = useState("");
  const [buildingType, setBuildingType] = useState("Ruko");
  const [condition, setCondition] = useState("Sangat Baik");
  const [ownershipStatus, setOwnershipStatus] = useState("Properti Sendiri");

  // Dimensi & Spesifikasi Bangunan
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [buildingWidth, setBuildingWidth] = useState("");
  const [buildingLength, setBuildingLength] = useState("");
  const [numberOfFloors, setNumberOfFloors] = useState("2");
  const [bathrooms, setBathrooms] = useState("2");

  // Utilitas
  const [electricity, setElectricity] = useState("2200");
  const [waterSource, setWaterSource] = useState("PDAM");
  const [telephoneLines, setTelephoneLines] = useState("1");

  // Fasilitas & Fitur Usaha
  const [features, setFeatures] = useState<Record<string, boolean>>({
    canopy: true,
    rollingDoor: true,
    glassDoor: true,
    parkingSpace: true,
    basement: false,
    rooftop: false,
    loadingDock: false,
    hoistCrane: false,
    facingMainRoad: true,
  });

  // Fitur Keamanan
  const [security, setSecurity] = useState<Record<string, boolean>>({
    security24h: true,
    cctv: true,
    oneGateSystem: false,
    fireExtinguisher: true,
  });

  // Rekomendasi Peruntukan Usaha
  const [suitableFor, setSuitableFor] = useState<Record<string, boolean>>({
    office: true,
    retailToko: true,
    culinary: true,
    clinicApotek: true,
    bankFinance: true,
    warehouseMini: false,
  });

  // Legalitas Akses
  const [roadWidth, setRoadWidth] = useState("2 Mobil");

  const toggle = (setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>, key: string) => {
    setter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return alert("Judul Iklan wajib diisi");
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-xs text-slate-800 font-sans">
      {/* 1. INFORMASI DASAR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">Informasi Ruko / Rukan</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan Ruko / Rukan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Ruko 3 Lantai Strategis Pinggir Jalan Utama MERR Surabaya"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Jenis Properti Komersial *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={buildingType} onChange={(e) => setBuildingType(e.target.value)}>
              <option value="Ruko">Ruko (Rumah Toko)</option>
              <option value="Rukan">Rukan (Rumah Kantor)</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kondisi Bangunan *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={condition} onChange={(e) => setCondition(e.target.value)}>
              <option value="Baru / Indent">Baru / Indent</option>
              <option value="Sangat Baik">Sangat Baik</option>
              <option value="Baik">Baik</option>
              <option value="Perlu Renovasi">Perlu Renovasi</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Status Kepemilikan *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={ownershipStatus} onChange={(e) => setOwnershipStatus(e.target.value)}>
              <option value="Properti Sendiri">Properti Sendiri</option>
              <option value="Kuasa Jual">Kuasa Jual / Agent</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. DIMENSI BANGUNAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi & Spesifikasi Fisik</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²) *</label>
            <input type="number" required placeholder="75" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="200" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Lebar Depan (m)</label>
            <input type="number" step="0.1" placeholder="5" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingWidth} onChange={(e) => setBuildingWidth(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Panjang Bangunan (m)</label>
            <input type="number" step="0.1" placeholder="15" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingLength} onChange={(e) => setBuildingLength(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold mb-1">Jumlah Lantai *</label>
            <input type="number" required className="w-full p-2.5 rounded-xl border border-slate-300" value={numberOfFloors} onChange={(e) => setNumberOfFloors(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kamar Mandi *</label>
            <input type="number" required className="w-full p-2.5 rounded-xl border border-slate-300" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Daya Listrik (Watt) *</label>
            <input type="number" required placeholder="3500" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Akses Lebar Jalan *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={roadWidth} onChange={(e) => setRoadWidth(e.target.value)}>
              <option value="1 Mobil">1 Mobil</option>
              <option value="2 Mobil">2 Mobil</option>
              <option value="3 Mobil / Container">3 Mobil / Container</option>
              <option value="Jalan Boulevard">Jalan Boulevard / Utama</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. FITUR, PERUNTUKAN & REKOMENDASI USAHA */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Kelengkapan Bangunan & Rekomendasi Peruntukan</h2>
        
        <div>
          <label className="block font-semibold mb-2">Fasilitas Bangunan</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "canopy", label: "Kanopi Parkir" },
              { key: "rollingDoor", label: "Rolling Door" },
              { key: "glassDoor", label: "Pintu Kaca Utuh" },
              { key: "parkingSpace", label: "Halaman Parkir Khusus" },
              { key: "facingMainRoad", label: "Hadap Jalan Raya Utama" },
              { key: "rooftop", label: "Rooftop Top Floor" },
              { key: "loadingDock", label: "Area Loading Dock" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setFeatures, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${features[item.key] ? "bg-amber-600 text-white border-amber-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {features[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Rekomendasi Jenis Usaha Sangat Sesuai</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "office", label: "Kantor / Perbankan" },
              { key: "retailToko", label: "Retail / Minimarket / Toko" },
              { key: "culinary", label: "Kuliner / Cafe / Resto" },
              { key: "clinicApotek", label: "Klinik / Apotek / Salon" },
              { key: "bankFinance", label: "Fintech / Kantor Cabang Bank" },
              { key: "warehouseMini", label: "Gudang Transit / Logistik" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setSuitableFor, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${suitableFor[item.key] ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {suitableFor[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md">
        Lanjut ke Step 2: Legalitas & Harga →
      </button>
    </form>
  );
}