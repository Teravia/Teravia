"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormKiosToko({ onNext, transactionType }: FormProps) {
  // Informasi Dasar
  const [title, setTitle] = useState("");
  const [locationCategory, setLocationCategory] = useState("Inside Mall / Plaza");
  const [buildingName, setBuildingName] = useState("");
  const [floorLevel, setFloorLevel] = useState("Lantai Dasar (GF)");
  const [unitNumber, setUnitNumber] = useState("");

  // Spesifikasi Ruang
  const [spaceArea, setSpaceArea] = useState("");
  const [width, setWidth] = useState("");
  const [length, setLength] = useState("");
  const [electricity, setElectricity] = useState("1300");

  // Fasilitas Retail
  const [features, setFeatures] = useState<Record<string, boolean>>({
    rollingDoor: true,
    glassFront: true,
    acCentral: true,
    sinkWater: false,
    greaseTrap: false,
    exhaustSystem: false,
    cornerUnit: false,
    nearEscalator: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Kios / Toko / Ruang Usaha</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Kios Hook Strategis Dekat Eskalator Utama Pasar Modern BSD"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Kategori Lokasi *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={locationCategory} onChange={(e) => setLocationCategory(e.target.value)}>
              <option value="Inside Mall / Plaza">Dalam Mall / Trade Center</option>
              <option value="Pasar Modern / Traditional">Pasar Modern / Tradisional</option>
              <option value="Standalone Street">Pinggir Jalan (Standalone)</option>
              <option value="Foodcourt Area">Area Foodcourt</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Nama Gedung / Plaza</label>
            <input type="text" placeholder="Contoh: ITC Mangga Dua" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingName} onChange={(e) => setBuildingName(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Posisi Lantai / Blok</label>
            <input type="text" placeholder="Lantai 1 / Blok B No 12" className="w-full p-2.5 rounded-xl border border-slate-300" value={floorLevel} onChange={(e) => setFloorLevel(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Ukuran & Fasilitas Retail</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Kios (m²) *</label>
            <input type="number" required placeholder="12" className="w-full p-2.5 rounded-xl border border-slate-300" value={spaceArea} onChange={(e) => setSpaceArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Lebar (m)</label>
            <input type="number" step="0.1" placeholder="3" className="w-full p-2.5 rounded-xl border border-slate-300" value={width} onChange={(e) => setWidth(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Panjang (m)</label>
            <input type="number" step="0.1" placeholder="4" className="w-full p-2.5 rounded-xl border border-slate-300" value={length} onChange={(e) => setLength(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Listrik (Watt) *</label>
            <input type="number" required placeholder="1300" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Unit Retail</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "rollingDoor", label: "Rolling Door" },
              { key: "glassFront", label: "Etalase Kaca" },
              { key: "acCentral", label: "AC Central Gedung" },
              { key: "sinkWater", label: "Wastafel / Saluran Air" },
              { key: "greaseTrap", label: "Grease Trap (Olahan Lemak)" },
              { key: "exhaustSystem", label: "Saluran Exhaust Hood" },
              { key: "cornerUnit", label: "Posisi Hook / Corner" },
              { key: "nearEscalator", label: "Posisi Dekat Eskalator / Lift" },
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