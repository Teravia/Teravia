"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormCoworkingSpace({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [spaceType, setSpaceType] = useState("Private Office Suite");
  const [buildingArea, setBuildingArea] = useState("");
  const [capacityDesks, setCapacityDesks] = useState("10");
  const [meetingRooms, setMeetingRooms] = useState("1");
  const [electricity, setElectricity] = useState("3500");

  const [facilities, setFacilities] = useState<Record<string, boolean>>({
    highSpeedWifi: true,
    receptionist: true,
    freeCoffeeTea: true,
    printScan: true,
    accessCard24h: true,
    mailHandling: true,
    eventSpace: false,
    pantry: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Co-Working Space / Serviced Office</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Private Office Fully Furnished Kapasitas 10 Pax SCBD Jakarta"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Tipe Ruang Kerja *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={spaceType} onChange={(e) => setSpaceType(e.target.value)}>
              <option value="Private Office Suite">Private Office Suite (Ruang Privat)</option>
              <option value="Dedicated Desk">Dedicated Desk (Meja Tetap)</option>
              <option value="Hot Desk Area">Hot Desk / Open Workspace</option>
              <option value="Virtual Office">Virtual Office (Domisili Usaha)</option>
              <option value="Satu Gedung Coworking">Satu Gedung Coworking Utuh</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kapasitas Meja / Personil *</label>
            <input type="number" required placeholder="10" className="w-full p-2.5 rounded-xl border border-slate-300" value={capacityDesks} onChange={(e) => setCapacityDesks(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi & Fasilitas Co-Working</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Area (m²) *</label>
            <input type="number" required placeholder="35" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Jumlah Meeting Room</label>
            <input type="number" placeholder="1" className="w-full p-2.5 rounded-xl border border-slate-300" value={meetingRooms} onChange={(e) => setMeetingRooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Daya Listrik (Watt)</label>
            <input type="number" placeholder="3500" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Layanan Termasuk</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "highSpeedWifi", label: "High-Speed WiFi" },
              { key: "receptionist", label: "Layanan Resepsionis" },
              { key: "freeCoffeeTea", label: "Free Coffee & Tea" },
              { key: "printScan", label: "Fasilitas Print/Scan/Fotocopy" },
              { key: "accessCard24h", label: "Akses 24/7 (Access Card)" },
              { key: "mailHandling", label: "Handling Surat & Paket" },
              { key: "eventSpace", label: "Area Event Space" },
              { key: "pantry", label: "Pantry Dapur Bersama" },
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