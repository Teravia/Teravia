"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormPusatPerbelanjaan({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [mallType, setMallType] = useState("Shopping Mall");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [floors, setFloors] = useState("4");
  const [parkingCapacity, setParkingCapacity] = useState("300");

  const [facilities, setFacilities] = useState<Record<string, boolean>>({
    escalatorElevators: true,
    anchorTenant: true,
    centralAC: true,
    basementParking: true,
    foodcourtArea: true,
    cinemaStudio: true,
    fireSystem: true,
    loadingDock: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Pusat Perbelanjaan / Mall / Trade Center</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan Kompleks Mall *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Dijual Gedung Mall & Pusat Grosir Trade Center Aktif di Surabaya"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Tipe Kompleks *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={mallType} onChange={(e) => setMallType(e.target.value)}>
              <option value="Shopping Mall">Shopping Mall / Plaza</option>
              <option value="Trade Center / Pusat Grosir">Trade Center / Pusat Grosir</option>
              <option value="Lifestyle Strip Mall">Lifestyle Strip Mall / Commercial Hub</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kapasitas Parkir (Mobil)</label>
            <input type="number" placeholder="300" className="w-full p-2.5 rounded-xl border border-slate-300" value={parkingCapacity} onChange={(e) => setParkingCapacity(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi & Fasilitas Kompleks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²) *</label>
            <input type="number" required placeholder="10000" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="25000" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Jumlah Lantai *</label>
            <input type="number" required placeholder="4" className="w-full p-2.5 rounded-xl border border-slate-300" value={floors} onChange={(e) => setFloors(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Infrastruktur Kompleks</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "escalatorElevators", label: "Eskalator & Lift Pengunjung" },
              { key: "anchorTenant", label: "Sudah Ada Anchor Tenant Utama" },
              { key: "centralAC", label: "Chiller Central AC" },
              { key: "basementParking", label: "Gedung Parkir Basement" },
              { key: "foodcourtArea", label: "Area Foodcourt Terpusat" },
              { key: "cinemaStudio", label: "Space Bioskop / Entertainment" },
              { key: "fireSystem", label: "Sistem Pemadam Kebakaran Otomatis" },
              { key: "loadingDock", label: "Loading Dock Truk / Logistik" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setFacilities, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${facilities[item.key] ? "bg-amber-600 text-white border-amber-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {facilities[item.key] ? "✓ " : "+ "}{item.label}
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