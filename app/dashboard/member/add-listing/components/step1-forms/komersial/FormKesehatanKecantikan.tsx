"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormKesehatanKecantikan({ onNext, transactionType }: FormProps) {
  const [title, setTitle] = useState("");
  const [facilityType, setFacilityType] = useState("Klinik Pratama / Utama");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [treatmentRooms, setTreatmentRooms] = useState("5");
  const [electricity, setElectricity] = useState("5500");

  const [features, setFeatures] = useState<Record<string, boolean>>({
    pharmacyCounter: true,
    doctorRooms: true,
    waitingLoungeAC: true,
    sterilizationRoom: false,
    wasteMedicalManagement: true,
    wheelchairAccess: true,
    parkingArea: true,
    operationalPermitReady: true,
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
          <h2 className="text-sm font-bold text-slate-900">Informasi Fasilitas Kesehatan & Kecantikan</h2>
          <span className="text-[11px] font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Gedung Klinik Kecantikan & Beauty Spa Fully Furnished di Kemang"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Tipe Fasilitas *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={facilityType} onChange={(e) => setFacilityType(e.target.value)}>
              <option value="Klinik Pratama / Utama">Klinik Pratama / Utama</option>
              <option value="Klinik Kecantikan / Aesthetic Clinic">Klinik Kecantikan / Aesthetic</option>
              <option value="Apotek / Laboratorium Medis">Apotek / Lab Medis</option>
              <option value="Salon & Spa Center">Salon & Spa / Barbershop</option>
              <option value="Rumah Sakit Khusus/Ibu Anak">Rumah Sakit (RSIA/RSU)</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Jumlah Ruang Tindakan/Praktek *</label>
            <input type="number" required placeholder="5" className="w-full p-2.5 rounded-xl border border-slate-300" value={treatmentRooms} onChange={(e) => setTreatmentRooms(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Dimensi & Spesifikasi Bangunan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Tanah (m²)</label>
            <input type="number" placeholder="200" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="300" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Daya Listrik (Watt) *</label>
            <input type="number" required placeholder="5500" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Medis & Layanan Khusus</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "pharmacyCounter", label: "Counter Apotek / Obat" },
              { key: "doctorRooms", label: "Ruang Praktek Dokter" },
              { key: "waitingLoungeAC", label: "Lobby / Ruang Tunggu AC" },
              { key: "sterilizationRoom", label: "Ruang Steril Alat" },
              { key: "wasteMedicalManagement", label: "Izin / Saluran Limbah Medis B3" },
              { key: "wheelchairAccess", label: "Akses Kursi Roda / Ramp" },
              { key: "parkingArea", label: "Area Parkir Pasien" },
              { key: "operationalPermitReady", label: "Izin Operasional Aktif" },
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