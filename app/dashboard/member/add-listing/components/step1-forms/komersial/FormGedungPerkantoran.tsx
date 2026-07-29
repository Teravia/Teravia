"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormGedungPerkantoran({ onNext, transactionType }: FormProps) {
  // Informasi Utama
  const [title, setTitle] = useState("");
  const [officeType, setOfficeType] = useState("Satu Gedung Utuh");
  const [buildingGrade, setBuildingGrade] = useState("Grade A");
  const [buildingName, setBuildingName] = useState("");

  // Dimensi & Bangunan
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [floors, setFloors] = useState("5");
  const [passengerLifts, setPassengerLifts] = useState("2");
  const [serviceLifts, setServiceLifts] = useState("1");
  const [parkingCapacity, setParkingCapacity] = useState("20");

  // Fasilitas Perkantoran
  const [facilities, setFacilities] = useState<Record<string, boolean>>({
    centralAc: true,
    generatorBackup: true,
    fiberOptic: true,
    fireAlarmSprinkler: true,
    helipad: false,
    basementParking: true,
    canteen: true,
    musholla: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Gedung Perkantoran</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan Gedung Kantor *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Gedung Perkantoran Grade A 8 Lantai Siap Pakai di SCBD Jakarta"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Jenis Penjualan Kantor *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={officeType} onChange={(e) => setOfficeType(e.target.value)}>
              <option value="Satu Gedung Utuh">Satu Gedung Utuh (Whole Building)</option>
              <option value="Satu Lantai Utuh">Satu Lantai Utuh (Full Floor Space)</option>
              <option value="Unit Office / Partisi">Unit Office / Partisi Space</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Grade Gedung Kantor *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white font-semibold text-blue-700" value={buildingGrade} onChange={(e) => setBuildingGrade(e.target.value)}>
              <option value="Grade A">Grade A Premium</option>
              <option value="Grade B">Grade B</option>
              <option value="Grade C">Grade C</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Nama Gedung (Jika Ada)</label>
            <input type="text" placeholder="Contoh: Wisma Millenium" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingName} onChange={(e) => setBuildingName(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Kapasitas & Fasilitas Gedung</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²)</label>
            <input type="number" placeholder="1000" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="3500" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Jumlah Lantai *</label>
            <input type="number" required className="w-full p-2.5 rounded-xl border border-slate-300" value={floors} onChange={(e) => setFloors(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kapasitas Parkir (Mobil)</label>
            <input type="number" placeholder="30" className="w-full p-2.5 rounded-xl border border-slate-300" value={parkingCapacity} onChange={(e) => setParkingCapacity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Penunjang Perkantoran</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "centralAc", label: "Central AC System" },
              { key: "generatorBackup", label: "Full Power Backup Generator" },
              { key: "fiberOptic", label: "High-Speed Fiber Optic" },
              { key: "fireAlarmSprinkler", label: "Sprinkler & Fire Alarm" },
              { key: "basementParking", label: "Parkir Basement" },
              { key: "canteen", label: "Kantin Gedung" },
              { key: "musholla", label: "Musholla Utama" },
              { key: "helipad", label: "Helipad Rooftop" },
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