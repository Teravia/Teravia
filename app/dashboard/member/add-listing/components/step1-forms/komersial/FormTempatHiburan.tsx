"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormTempatHiburan({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [entertainmentType, setEntertainmentType] = useState("Lapangan Olahraga (Futsal/Padel/Badminton)");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [visitorCapacity, setVisitorCapacity] = useState("100");
  const [electricity, setElectricity] = useState("11000");

  const [features, setFeatures] = useState<Record<string, boolean>>({
    soundproofRooms: true,
    lightingSystem: true,
    stageArea: false,
    lockerChangingRoom: true,
    cafeteria: true,
    largeParking: true,
    security24h: true,
    acCentral: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Tempat Hiburan & Rekreasi</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Kompleks Olahraga Padel & Futsal 4 Lapangan Aktif Operasional di Jakarta Selatan"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Kategori Tempat Hiburan *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={entertainmentType} onChange={(e) => setEntertainmentType(e.target.value)}>
              <option value="Lapangan Olahraga (Futsal/Padel/Badminton)">Arena Olahraga (Padel / Futsal / Badminton)</option>
              <option value="Karaoke / Lounge / Bar">Family Karaoke / Bar / Lounge</option>
              <option value="Gedung Pertemuan / Event Venue">Gedung Pertemuan / Ball Hall Venue</option>
              <option value="Waterpark / Taman Rekreasi">Waterpark / Taman Rekreasi</option>
              <option value="Billiard / Arcade Playground">Billiard Center / Children Arcade</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kapasitas Pengunjung (Pax) *</label>
            <input type="number" required placeholder="100" className="w-full p-2.5 rounded-xl border border-slate-300" value={visitorCapacity} onChange={(e) => setVisitorCapacity(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi & Fasilitas Hiburan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²) *</label>
            <input type="number" required placeholder="1200" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="800" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Daya Listrik (Watt) *</label>
            <input type="number" required placeholder="11000" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Venue & Hiburan</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "soundproofRooms", label: "Ruangan Kedap Suara (Soundproof)" },
              { key: "lightingSystem", label: "Sistem Pencahayaan / Field Lighting" },
              { key: "stageArea", label: "Panggung / Stage Performance" },
              { key: "lockerChangingRoom", label: "Loker & Ruang Ganti Pakaian" },
              { key: "cafeteria", label: "Kantin / Food Bar" },
              { key: "largeParking", label: "Area Parkir Pengunjung Luas" },
              { key: "acCentral", label: "Full Pendingin Ruangan (AC)" },
              { key: "security24h", label: "Keamanan 24 Jam & CCTV" },
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