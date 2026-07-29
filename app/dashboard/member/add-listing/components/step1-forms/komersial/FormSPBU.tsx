"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormSPBU({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [spbuCategory, setSpbuCategory] = useState("SPBU Pertamina Pasti Pas / Prima");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [dispenserIslands, setDispenserIslands] = useState("4");
  const [dailyOmset, setDailyOmset] = useState("");

  const [features, setFeatures] = useState<Record<string, boolean>>({
    minimarketTenant: true,
    restroomPublic: true,
    musholla: true,
    atmCenter: true,
    nitrogenCarWash: true,
    evChargingStation: false,
    restAreaFacilities: false,
    truckContainerParking: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi SPBU / Rest Area Tol</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Dijual SPBU Pertamina Pasti Prima + Rest Area Strategis Tol Trans Jawa"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Kategori Pengisian / Rest Area *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={spbuCategory} onChange={(e) => setSpbuCategory(e.target.value)}>
              <option value="SPBU Pertamina Pasti Pas / Prima">SPBU Pertamina Pasti Pas / Prima</option>
              <option value="SPBU Swasta (Shell / BP / Vivo)">SPBU Swasta (Shell / BP / Vivo)</option>
              <option value="Rest Area Jalan Tol Kompleks">Rest Area Jalan Tol Kompleks</option>
              <option value="SPBB / SPBN (Bahan Bakar Nelayan / Gas)">SPPLU / SPBB / SPBN / Agen LPG</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Jumlah Pulau Pump / Dispenser *</label>
            <input type="number" required placeholder="4" className="w-full p-2.5 rounded-xl border border-slate-300" value={dispenserIslands} onChange={(e) => setDispenserIslands(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi Lahan & Kinerja Bisnis</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah Total (m²) *</label>
            <input type="number" required placeholder="3000" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan Penunjang (m²)</label>
            <input type="number" placeholder="500" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Omset / Penjualan Rata-Rata (Liter/Hari)</label>
            <input type="text" placeholder="15.000 Liter / Hari" className="w-full p-2.5 rounded-xl border border-slate-300" value={dailyOmset} onChange={(e) => setDailyOmset(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Rest Area & Tenant Penunjang</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "minimarketTenant", label: "Minimarket Tenant (Indomaret/Alfa/Bright)" },
              { key: "restroomPublic", label: "Toilet Umum Bersih & Banyak" },
              { key: "musholla", label: "Masjid / Musholla Utama" },
              { key: "atmCenter", label: "Galeri / Mesin ATM Center" },
              { key: "nitrogenCarWash", label: "Layanan Nitrogen & Tambal Ban" },
              { key: "evChargingStation", label: "SPKLU / Fast Charging EV" },
              { key: "restAreaFacilities", label: "Foodcourt / Pujasera Rest Area" },
              { key: "truckContainerParking", label: "Parkir Truk & Bus Luas" },
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