"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormKontrakan({ onNext, transactionType }: FormProps) {
  // Informasi Dasar & Sewa
  const [title, setTitle] = useState("");
  const [contractStatus, setContractStatus] = useState("Disewakan");
  const [minDuration, setMinDuration] = useState("1 Tahun");
  const [maxDuration, setMaxDuration] = useState(">2 Tahun");
  const [rentalPricePerYear, setRentalPricePerYear] = useState("");
  const [depositAmount, setDepositAmount] = useState("");

  // Informasi Bangunan
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [floors, setFloors] = useState("1");
  const [bedrooms, setBedrooms] = useState("2");
  const [bathrooms, setBathrooms] = useState("1");

  // Spesifikasi Ruangan
  const [rooms, setRooms] = useState<Record<string, boolean>>({
    livingRoom: true,
    familyRoom: false,
    diningRoom: true,
    kitchen: true,
    storage: false,
    musholla: false,
    laundryArea: true,
    frontPorch: true,
  });

  // Utilitas & Aturan Sewa
  const [electricity, setElectricity] = useState("1300");
  const [waterSource, setWaterSource] = useState("PDAM");

  // Aturan Penyewa
  const [maxOccupants, setMaxOccupants] = useState("4");
  const [tenantRules, setTenantRules] = useState<Record<string, boolean>>({
    suitableForFamily: true,
    suitableForCollege: true,
    suitableForEmployee: true,
    childrenAllowed: true,
    petsAllowed: false,
    smokingAllowed: false,
    minorRenovationAllowed: true,
    subletAllowed: false,
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
      {/* 1. INFORMASI DASAR & ATURAN SEWA */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">Informasi Rumah Kontrakan</h2>
          <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-lg">
            Khusus Sewa
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Rumah Kontrakan Sepetak 3 Ruangan Cocok untuk Keluarga / Pasutri"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Minimal Durasi Kontrak *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={minDuration} onChange={(e) => setMinDuration(e.target.value)}>
              <option value="6 Bulan">6 Bulan</option>
              <option value="1 Tahun">1 Tahun</option>
              <option value="2 Tahun">2 Tahun</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Estimasi Deposit (Rp)</label>
            <input type="number" placeholder="1000000" className="w-full p-2.5 rounded-xl border border-slate-300" value={depositAmount} onChange={(e) => setDepositAmount(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Maksimal Penghuni (Orang)</label>
            <input type="number" placeholder="4" className="w-full p-2.5 rounded-xl border border-slate-300" value={maxOccupants} onChange={(e) => setMaxOccupants(e.target.value)} />
          </div>
        </div>
      </div>

      {/* 2. SPESIFIKASI BANGUNAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Bangunan & Ruangan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²) *</label>
            <input type="number" required placeholder="60" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="45" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kamar Tidur *</label>
            <input type="number" required className="w-full p-2.5 rounded-xl border border-slate-300" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kamar Mandi *</label>
            <input type="number" required className="w-full p-2.5 rounded-xl border border-slate-300" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Kriteria & Aturan Penyewa</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "suitableForFamily", label: "Cocok untuk Keluarga" },
              { key: "suitableForCollege", label: "Cocok untuk Mahasiswa" },
              { key: "suitableForEmployee", label: "Cocok untuk Karyawan" },
              { key: "childrenAllowed", label: "Boleh Bawa Anak" },
              { key: "petsAllowed", label: "Boleh Hewan Peliharaan" },
              { key: "minorRenovationAllowed", label: "Boleh Renovasi Ringan" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setTenantRules, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${tenantRules[item.key] ? "bg-emerald-600 text-white border-emerald-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {tenantRules[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md">
        Lanjut ke Step 2: Legalitas & Harga →
      </button>
    </form>
  );
}