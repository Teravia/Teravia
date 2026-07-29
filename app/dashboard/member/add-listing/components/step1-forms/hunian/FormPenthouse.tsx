"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormPenthouse({ onNext, transactionType }: FormProps) {
  // Informasi Dasar
  const [title, setTitle] = useState("");
  const [apartmentName, setApartmentName] = useState("");
  const [tower, setTower] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [propertyClass, setPropertyClass] = useState("Luxury");
  const [condition, setCondition] = useState("Sangat Baik");

  // Spesifikasi Unit & Ruangan
  const [unitArea, setUnitArea] = useState("");
  const [balconyArea, setBalconyArea] = useState("");
  const [ceilingHeight, setCeilingHeight] = useState("4.0");
  const [bedrooms, setBedrooms] = useState("4");
  const [bathrooms, setBathrooms] = useState("4");

  const [unitFeatures, setUnitFeatures] = useState<Record<string, boolean>>({
    duplex: false,
    tripleLevel: false,
    cornerUnit: true,
    privateFloor: true,
  });

  const [rooms, setRooms] = useState<Record<string, boolean>>({
    masterBedroom: true,
    walkInCloset: true,
    jacuzzi: true,
    powderRoom: true,
    livingRoom: true,
    familyRoom: true,
    diningRoom: true,
    dryKitchen: true,
    wetKitchen: true,
    wineCellar: false,
    homeOffice: true,
    library: false,
    entertainmentRoom: true,
    homeTheater: false,
    maidRoom: true,
    maidBathroom: true,
    laundryRoom: true,
    storageRoom: true,
  });

  // Area Outdoor Eksklusif
  const [outdoor, setOutdoor] = useState<Record<string, boolean>>({
    privateBalcony: true,
    skyTerrace: true,
    rooftopGarden: false,
    privateGarden: false,
    privatePool: true,
    outdoorJacuzzi: true,
    bbqArea: true,
  });

  // Interior & Luxury Furnitur
  const [furnished, setFurnished] = useState("Designer Furnished");
  const [interiorDesigner, setInteriorDesigner] = useState("");
  const [interior, setInterior] = useState<Record<string, boolean>>({
    smartHome: true,
    smartDoorLock: true,
    centralAc: true,
    waterHeater: true,
    premiumKitchenSet: true,
    builtInWardrobe: true,
    marbleFlooring: true,
    woodenFlooring: true,
    chandelier: true,
    premiumAppliances: true,
  });

  // Fasilitas Gedung Luxury
  const [buildingFacilities, setBuildingFacilities] = useState<Record<string, boolean>>({
    privateLift: true,
    executiveLobby: true,
    concierge: true,
    reception: true,
    swimmingPool: true,
    infinityPool: true,
    gym: true,
    spa: true,
    sauna: true,
    skyLounge: true,
    skyGarden: true,
  });

  // Parkir & Keamanan
  const [parkingSlots, setParkingSlots] = useState("3");
  const [parkingFeatures, setParkingFeatures] = useState<Record<string, boolean>>({
    privateParking: true,
    guestParking: true,
    evChargingStation: true,
  });

  const [security, setSecurity] = useState<Record<string, boolean>>({
    security24h: true,
    cctv: true,
    accessCard: true,
    faceRecognition: true,
    visitorManagement: true,
    videoIntercom: true,
    privateLiftAccess: true,
    panicButton: true,
  });

  // Biaya Pengelolaan Luxury
  const [ipl, setIpl] = useState("");
  const [sinkingFund, setSinkingFund] = useState("");

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
      {/* 1. INFORMASI DASAR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">Informasi Penthouse Luxury</h2>
          <span className="text-[11px] font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan Penthouse *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Ultra Luxury Penthouse Full Floor Private Pool & Panoramic Skyline View"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Nama Apartemen *</label>
            <input type="text" required placeholder="Contoh: Pacific Century Place" className="w-full p-2.5 rounded-xl border border-slate-300" value={apartmentName} onChange={(e) => setApartmentName(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kelas Properti *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white font-medium text-purple-700" value={propertyClass} onChange={(e) => setPropertyClass(e.target.value)}>
              <option value="Luxury">Luxury</option>
              <option value="Ultra Luxury">Ultra Luxury</option>
              <option value="Super Luxury">Super Luxury</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kondisi Properti *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={condition} onChange={(e) => setCondition(e.target.value)}>
              <option value="Baru">Baru</option>
              <option value="Sangat Baik">Sangat Baik</option>
              <option value="Baik">Baik</option>
              <option value="Baru Renovasi">Baru Renovasi</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. SPESIFIKASI RUANGAN & OUTDOOR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Luas & Spesifikasi Ruangan</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Unit (m²) *</label>
            <input type="number" required placeholder="450" className="w-full p-2.5 rounded-xl border border-slate-300" value={unitArea} onChange={(e) => setUnitArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Luas Balkon (m²)</label>
            <input type="number" placeholder="50" className="w-full p-2.5 rounded-xl border border-slate-300" value={balconyArea} onChange={(e) => setBalconyArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Tinggi Plafon (m)</label>
            <input type="number" step="0.1" placeholder="4.2" className="w-full p-2.5 rounded-xl border border-slate-300" value={ceilingHeight} onChange={(e) => setCeilingHeight(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Slot Parkir Khusus</label>
            <input type="number" placeholder="3" className="w-full p-2.5 rounded-xl border border-slate-300" value={parkingSlots} onChange={(e) => setParkingSlots(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Ruangan Penthouse</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "masterBedroom", label: "Master Bedroom" },
              { key: "walkInCloset", label: "Walk-in Closet" },
              { key: "jacuzzi", label: "Jacuzzi" },
              { key: "powderRoom", label: "Powder Room" },
              { key: "dryKitchen", label: "Dry Kitchen" },
              { key: "wetKitchen", label: "Wet Kitchen" },
              { key: "wineCellar", label: "Wine Cellar" },
              { key: "homeOffice", label: "Home Office" },
              { key: "entertainmentRoom", label: "Entertainment Room" },
              { key: "homeTheater", label: "Home Theater" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setRooms, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${rooms[item.key] ? "bg-purple-700 text-white border-purple-700" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {rooms[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Fasilitas Outdoor Eksklusif</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "privateBalcony", label: "Private Balcony" },
              { key: "skyTerrace", label: "Sky Terrace" },
              { key: "rooftopGarden", label: "Rooftop Garden" },
              { key: "privatePool", label: "Private Pool" },
              { key: "outdoorJacuzzi", label: "Jacuzzi Outdoor" },
              { key: "bbqArea", label: "BBQ Area" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setOutdoor, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${outdoor[item.key] ? "bg-purple-700 text-white border-purple-700" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {outdoor[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 3. INTERIOR & PRIVILEGES */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Interior & Layanan Eksklusif Gedung</h2>
        <div>
          <label className="block font-semibold mb-2">Layanan Privilese Gedung</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "privateLift", label: "Private Lift Access" },
              { key: "executiveLobby", label: "Executive Lobby" },
              { key: "concierge", label: "24/7 Concierge Service" },
              { key: "infinityPool", label: "Infinity Pool Access" },
              { key: "skyLounge", label: "Sky Lounge" },
              { key: "spa", label: "Private Spa & Sauna" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setBuildingFacilities, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${buildingFacilities[item.key] ? "bg-indigo-600 text-white border-indigo-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {buildingFacilities[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button type="submit" className="w-full bg-purple-700 hover:bg-purple-800 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md">
        Lanjut ke Step 2: Legalitas & Harga →
      </button>
    </form>
  );
}