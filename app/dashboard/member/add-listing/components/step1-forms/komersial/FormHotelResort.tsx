"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormHotelResort({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [propertyType, setPropertyType] = useState("Hotel Bintang");
  const [hotelStar, setHotelStar] = useState("3");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [totalRooms, setTotalRooms] = useState("50");
  const [occupancyRate, setOccupancyRate] = useState("70%");

  const [facilities, setFacilities] = useState<Record<string, boolean>>({
    swimmingPool: true,
    ballroom: true,
    restaurant: true,
    fitnessCenter: false,
    spaWellness: false,
    elevator: true,
    largeParking: true,
    operationalPermit: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Hotel / Resort / Guesthouse</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan Hotel / Resort *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Hotel Bintang 3 Aktif Operasional 60 Kamar di Seminyak Bali"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Tipe Akomodasi *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
              <option value="Hotel Bintang">Hotel Bintang</option>
              <option value="Hotel Non-Bintang / Budget">Hotel Non-Bintang / Budget</option>
              <option value="Resort">Resort / Villa Complex</option>
              <option value="Guesthouse / Hostels">Guesthouse / Homestay</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Klasifikasi Bintang</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={hotelStar} onChange={(e) => setHotelStar(e.target.value)}>
              <option value="1">Bintang 1</option>
              <option value="2">Bintang 2</option>
              <option value="3">Bintang 3</option>
              <option value="4">Bintang 4</option>
              <option value="5">Bintang 5</option>
              <option value="0">Non-Bintang</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Jumlah Kamar *</label>
            <input type="number" required placeholder="50" className="w-full p-2.5 rounded-xl border border-slate-300" value={totalRooms} onChange={(e) => setTotalRooms(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Kapasitas & Fasilitas Hotel</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²) *</label>
            <input type="number" required placeholder="2000" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="3500" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Rata-rata Okupansi (%)</label>
            <input type="text" placeholder="75%" className="w-full p-2.5 rounded-xl border border-slate-300" value={occupancyRate} onChange={(e) => setOccupancyRate(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Hotel & Bisnis</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "swimmingPool", label: "Kolam Renang Utama" },
              { key: "ballroom", label: "Ballroom / Ruang Rapat" },
              { key: "restaurant", label: "Restoran / Dining Room" },
              { key: "fitnessCenter", label: "Fitness & Gym Center" },
              { key: "spaWellness", label: "Spa & Wellness" },
              { key: "elevator", label: "Lift Tamu & Servis" },
              { key: "largeParking", label: "Parkir Bus & Mobil Luas" },
              { key: "operationalPermit", label: "Izin Operasional Lengkap" },
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