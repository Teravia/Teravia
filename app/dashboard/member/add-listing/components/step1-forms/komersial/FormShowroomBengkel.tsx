"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormShowroomBengkel({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [businessType, setBusinessType] = useState("Showroom Mobil / Motor");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [carCapacity, setCarCapacity] = useState("20");
  const [electricity, setElectricity] = useState("11000");

  const [features, setFeatures] = useState<Record<string, boolean>>({
    glassFrontDisplay: true,
    carLiftHydraulic: false,
    carWashPit: false,
    officeSpace: true,
    customerLounge: true,
    highCeiling: true,
    wideGateAccess: true,
    wideParkingLot: true,
  });

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
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">Informasi Showroom / Bengkel / Tempat Otomotif</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Gedung Showroom Mobil + Bengkel Resmi Hook Jalan Utama Boulevard BSD"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Kategori Otomotif *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={businessType} onChange={(e) => setBusinessType(e.target.value)}>
              <option value="Showroom Mobil / Motor">Showroom Mobil / Motor</option>
              <option value="Bengkel Mobil / Motor">Bengkel Mobil / Motor</option>
              <option value="Car Wash / Auto Detailing">Car Wash & Auto Detailing</option>
              <option value="Kompleks Otomotif Terpadu">Kompleks Otomotif Terpadu</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kapasitas Unit Mobil/Motor *</label>
            <input type="number" required placeholder="20" className="w-full p-2.5 rounded-xl border border-slate-300" value={carCapacity} onChange={(e) => setCarCapacity(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi & Fasilitas Otomotif</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²) *</label>
            <input type="number" required placeholder="500" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="400" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Daya Listrik (Watt) *</label>
            <input type="number" required placeholder="11000" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Otomotif Penunjang</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "glassFrontDisplay", label: "Fasad Kaca Full Display" },
              { key: "carLiftHydraulic", label: "Pit / Car Lift Hidrolik Bengkel" },
              { key: "carWashPit", label: "Area Cuci / Pit Air" },
              { key: "officeSpace", label: "Ruang Kantor Admin" },
              { key: "customerLounge", label: "Ruang Tunggu Konsumen (Lounge)" },
              { key: "highCeiling", label: "Atap Tinggi (High Ceiling)" },
              { key: "wideGateAccess", label: "Pintu Gerbang Lebar" },
              { key: "wideParkingLot", label: "Halaman Parkir Luas" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setFeatures, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${features[item.key] ? "bg-amber-600 text-white border-amber-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {features[item.key] ? "✓ " : "+ "}{item.label}
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