"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormRestoranCafe({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [venueType, setVenueType] = useState("Restoran");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [seatingCapacity, setSeatingCapacity] = useState("50");
  const [electricity, setElectricity] = useState("5500");

  const [features, setFeatures] = useState<Record<string, boolean>>({
    commercialKitchen: true,
    exhaustHood: true,
    greaseTrap: true,
    outdoorSeating: true,
    indoorAc: true,
    barCounter: true,
    parkingArea: true,
    posSystem: false,
    driveThru: false,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Restoran / Cafe / Space Kuliner</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Space Cafe Aesthetic Standalone 2 Lantai Siap Operasional di Senopati"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Kategori Venue Kuliner *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={venueType} onChange={(e) => setVenueType(e.target.value)}>
              <option value="Restoran">Restoran Standalone</option>
              <option value="Cafe / Coffee Shop">Cafe / Coffee Shop</option>
              <option value="Foodcourt / Booth Space">Space Foodcourt / Pujasera</option>
              <option value="Cloud Kitchen">Cloud Kitchen / Dapur Bersama</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kapasitas Tempat Duduk (Pax) *</label>
            <input type="number" required placeholder="50" className="w-full p-2.5 rounded-xl border border-slate-300" value={seatingCapacity} onChange={(e) => setSeatingCapacity(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi & Fasilitas Kuliner</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²)</label>
            <input type="number" placeholder="150" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="200" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Daya Listrik (Watt) *</label>
            <input type="number" required placeholder="5500" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Khusus Operasional Kuliner</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "commercialKitchen", label: "Dapur Komersial Siap Pakai" },
              { key: "exhaustHood", label: "Exhaust System / Hood Dapur" },
              { key: "greaseTrap", label: "Grease Trap (Pengolah Limbah Lemak)" },
              { key: "outdoorSeating", label: "Area Outdoor / Rooftop" },
              { key: "indoorAc", label: "Ruang Indoor Ber-AC" },
              { key: "barCounter", label: "Bar Counter / Kasir" },
              { key: "parkingArea", label: "Area Parkir Luas" },
              { key: "driveThru", label: "Jalur Drive-Thru" },
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