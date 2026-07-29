"use client";

import React, { useState } from "react";

interface FormTownhouseProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormTownhouse({ onNext, transactionType }: FormTownhouseProps) {
  // --- INFORMASI DASAR ---
  const [townhouseName, setTownhouseName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [totalUnits, setTotalUnits] = useState("");
  const [condition, setCondition] = useState("Sangat Baik");
  const [ownershipStatus, setOwnershipStatus] = useState("SHM");

  // --- INFORMASI BANGUNAN ---
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [frontWidth, setFrontWidth] = useState("");
  const [landLength, setLandLength] = useState("");
  const [floors, setFloors] = useState("");
  const [ceilingHeight, setCeilingHeight] = useState("");
  const [yearBuilt, setYearBuilt] = useState("");
  const [renovationYear, setRenovationYear] = useState("");
  const [buildingType, setBuildingType] = useState("");
  const [unitPosition, setUnitPosition] = useState("Tengah");

  // --- SPESIFIKASI RUANGAN & PARKIR ---
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [insideBathrooms, setInsideBathrooms] = useState("");
  const [helperBedrooms, setHelperBedrooms] = useState("");
  const [helperBathrooms, setHelperBathrooms] = useState("");
  const [roomFeatures, setRoomFeatures] = useState<string[]>([]);
  const [carport, setCarport] = useState("");
  const [garage, setGarage] = useState("");
  const [carCapacity, setCarCapacity] = useState("");
  const [motorCapacity, setMotorCapacity] = useState("");
  const [evCharging, setEvCharging] = useState(false);

  // --- AREA OUTDOOR PRIBADI & FASILITAS TOWNHOUSE ---
  const [outdoorFeatures, setOutdoorFeatures] = useState<string[]>([]);
  const [townhouseFacilities, setTownhouseFacilities] = useState<string[]>([]);

  // --- UTILITAS, KEAMANAN & BIAYA ---
  const [electricity, setElectricity] = useState("3500");
  const [waterSource, setWaterSource] = useState("PDAM");
  const [acUnits, setAcUnits] = useState("");
  const [utilities, setUtilities] = useState<string[]>([]);
  const [securityFeatures, setSecurityFeatures] = useState<string[]>([]);
  const [iplCost, setIplCost] = useState("");
  const [securityFee, setSecurityFee] = useState("");
  const [cleaningFee, setCleaningFee] = useState("");

  // --- LEGALITAS, LOKASI & LINGKUNGAN ---
  const [legalities, setLegalities] = useState<string[]>([]);
  const [roadWidth, setRoadWidth] = useState("");
  const [facing, setFacing] = useState("Utara");
  const [locationAccess, setLocationAccess] = useState<string[]>([]);
  const [environmentTraits, setEnvironmentTraits] = useState<string[]>([]);

  // --- INFORMASI TAMBAHAN ---
  const [furnished, setFurnished] = useState("Semi Furnished");
  const [view, setView] = useState("");
  const [saleReason, setSaleReason] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const toggleItem = (array: string[], setArray: (val: string[]) => void, item: string) => {
    if (array.includes(item)) {
      setArray(array.filter((i) => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      {/* 1. INFORMASI DASAR TOWNHOUSE */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Dasar Townhouse</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nama Townhouse *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Kemang Executive Townhouse"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={townhouseName}
              onChange={(e) => setTownhouseName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nama Developer</label>
            <input
              type="text"
              placeholder="Contoh: Modernland Realty"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah Unit Townhouse</label>
            <input
              type="number"
              placeholder="Contoh: 12"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={totalUnits}
              onChange={(e) => setTotalUnits(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kondisi Properti *</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="Baru">Baru</option>
              <option value="Sangat Baik">Sangat Baik</option>
              <option value="Baik">Baik</option>
              <option value="Perlu Renovasi Ringan">Perlu Renovasi Ringan</option>
              <option value="Perlu Renovasi Total">Perlu Renovasi Total</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Status Kepemilikan *</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={ownershipStatus}
              onChange={(e) => setOwnershipStatus(e.target.value)}
            >
              <option value="SHM">SHM</option>
              <option value="HGB">HGB</option>
              <option value="AJB">AJB</option>
              <option value="PPJB">PPJB</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="Girik">Girik</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. INFORMASI BANGUNAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Bangunan</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Tanah (m²) *</label>
            <input
              type="number"
              required
              placeholder="150"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Bangunan (m²) *</label>
            <input
              type="number"
              required
              placeholder="220"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={buildingArea}
              onChange={(e) => setBuildingArea(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Lebar Muka (m)</label>
            <input
              type="number"
              placeholder="10"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={frontWidth}
              onChange={(e) => setFrontWidth(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Panjang Tanah (m)</label>
            <input
              type="number"
              placeholder="15"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={landLength}
              onChange={(e) => setLandLength(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah Lantai *</label>
            <input
              type="number"
              required
              placeholder="3"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tinggi Plafon (m)</label>
            <input
              type="number"
              placeholder="3.8"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={ceilingHeight}
              onChange={(e) => setCeilingHeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Dibangun</label>
            <input
              type="number"
              placeholder="2022"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Renovasi</label>
            <input
              type="number"
              placeholder="2024"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={renovationYear}
              onChange={(e) => setRenovationYear(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tipe Bangunan</label>
            <input
              type="text"
              placeholder="Contoh: Modern Tropical"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={buildingType}
              onChange={(e) => setBuildingType(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Posisi Unit</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={unitPosition}
              onChange={(e) => setUnitPosition(e.target.value)}
            >
              <option value="Tengah">Tengah</option>
              <option value="Hook">Hook</option>
              <option value="Cul-de-sac">Cul-de-sac</option>
              <option value="Dekat Club House">Dekat Club House</option>
              <option value="Dekat Gerbang">Dekat Gerbang</option>
              <option value="Dekat Taman">Dekat Taman</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. RUANGAN & PARKIR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Spesifikasi Ruangan & Area Parkir</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Tidur</label>
            <input
              type="number"
              placeholder="4"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi</label>
            <input
              type="number"
              placeholder="3"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">KM Dalam</label>
            <input
              type="number"
              placeholder="2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={insideBathrooms}
              onChange={(e) => setInsideBathrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Pembantu</label>
            <input
              type="number"
              placeholder="1"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={helperBedrooms}
              onChange={(e) => setHelperBedrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">KM Pembantu</label>
            <input
              type="number"
              placeholder="1"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={helperBathrooms}
              onChange={(e) => setHelperBathrooms(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Fasilitas Ruangan</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Living Room",
              "Family Room",
              "Dining Room",
              "Dapur Bersih",
              "Dapur Kotor",
              "Pantry",
              "Gudang",
              "Ruang Kerja",
              "Walk-in Closet",
              "Laundry Room",
              "Balkon",
              "Rooftop Terrace",
              "Teras Depan",
              "Teras Belakang",
            ].map((rf) => {
              const active = roomFeatures.includes(rf);
              return (
                <button
                  type="button"
                  key={rf}
                  onClick={() => toggleItem(roomFeatures, setRoomFeatures, rf)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {rf}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-2">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Carport</label>
            <input
              type="number"
              placeholder="2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={carport}
              onChange={(e) => setCarport(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Garasi</label>
            <input
              type="number"
              placeholder="1"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={garage}
              onChange={(e) => setGarage(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kapasitas Mobil</label>
            <input
              type="number"
              placeholder="2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={carCapacity}
              onChange={(e) => setCarCapacity(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kapasitas Motor</label>
            <input
              type="number"
              placeholder="2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={motorCapacity}
              onChange={(e) => setMotorCapacity(e.target.value)}
            />
          </div>
        </div>

        <div className="pt-2">
          <label className="flex items-center gap-2 cursor-pointer text-xs">
            <input
              type="checkbox"
              checked={evCharging}
              onChange={(e) => setEvCharging(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span className="font-semibold text-slate-700">Charging Station EV (Listrik Mobil Listrik)</span>
          </label>
        </div>
      </div>

      {/* 4. OUTDOOR & FASILITAS TOWNHOUSE */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Outdoor Pribadi & Fasilitas Eksklusif</h3>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Area Outdoor Pribadi</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Private Garden",
              "Backyard",
              "Kolam Renang Pribadi",
              "Gazebo",
              "Deck Area",
              "BBQ Area",
              "Kolam Ikan",
            ].map((of) => {
              const active = outdoorFeatures.includes(of);
              return (
                <button
                  type="button"
                  key={of}
                  onClick={() => toggleItem(outdoorFeatures, setOutdoorFeatures, of)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {of}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Fasilitas Kawasan Townhouse</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "One Gate System",
              "Security 24 Jam",
              "CCTV Kawasan",
              "Access Card",
              "Smart Gate",
              "Club House",
              "Swimming Pool",
              "Children's Pool",
              "Gym",
              "Playground",
              "Jogging Track",
              "Function Hall",
              "Taman Kawasan",
              "Guest Parking",
              "Musholla",
              "Mini Market",
            ].map((tf) => {
              const active = townhouseFacilities.includes(tf);
              return (
                <button
                  type="button"
                  key={tf}
                  onClick={() => toggleItem(townhouseFacilities, setTownhouseFacilities, tf)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {tf}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. UTILITAS, KEAMANAN & BIAYA KAWASAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Utilitas, Keamanan & Biaya Kawasan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">IPL / Maintenance (Rp/Bulan)</label>
            <input
              type="text"
              placeholder="Contoh: 1.000.000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={iplCost}
              onChange={(e) => setIplCost(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Biaya Keamanan (Rp/Bulan)</label>
            <input
              type="text"
              placeholder="Contoh: 250.000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={securityFee}
              onChange={(e) => setSecurityFee(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Biaya Kebersihan (Rp/Bulan)</label>
            <input
              type="text"
              placeholder="Contoh: 150.000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={cleaningFee}
              onChange={(e) => setCleaningFee(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Daya Listrik (Watt)</label>
            <input
              type="text"
              placeholder="3500"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={electricity}
              onChange={(e) => setElectricity(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Sumber Air</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={waterSource}
              onChange={(e) => setWaterSource(e.target.value)}
            >
              <option value="PDAM">PDAM</option>
              <option value="Sumur Bor">Sumur Bor</option>
              <option value="WTP / Pengelola">WTP / Pengelola</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah AC (Unit)</label>
            <input
              type="number"
              placeholder="4"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={acUnits}
              onChange={(e) => setAcUnits(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Utilitas & Smart Features</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Internet Fiber",
              "TV Kabel",
              "Telepon Rumah",
              "Smart Home System",
              "Smart Door Lock",
              "Water Heater",
              "Tandon Air",
              "Pompa Air",
              "CCTV Rumah",
            ].map((u) => {
              const active = utilities.includes(u);
              return (
                <button
                  type="button"
                  key={u}
                  onClick={() => toggleItem(utilities, setUtilities, u)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {u}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Sistem Keamanan</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Pos Satpam",
              "Security Patrol",
              "Visitor Management",
              "Panic Button",
              "Emergency Call",
            ].map((s) => {
              const active = securityFeatures.includes(s);
              return (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggleItem(securityFeatures, setSecurityFeatures, s)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {s}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. LOKASI, AKSES & LINGKUNGAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Akses Lokasi & Lingkungan Perkotaan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Lebar Jalan Depan (m)</label>
            <input
              type="number"
              placeholder="8"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={roadWidth}
              onChange={(e) => setRoadWidth(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Arah Hadap</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={facing}
              onChange={(e) => setFacing(e.target.value)}
            >
              <option value="Utara">Utara</option>
              <option value="Timur Laut">Timur Laut</option>
              <option value="Timur">Timur</option>
              <option value="Tenggara">Tenggara</option>
              <option value="Selatan">Selatan</option>
              <option value="Barat Daya">Barat Daya</option>
              <option value="Barat">Barat</option>
              <option value="Barat Laut">Barat Laut</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Akses & Fasilitas Terdekat (CBD / Perkotaan)</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Jalan Aspal",
              "Jalan Beton",
              "Posisi Hook",
              "Cul-de-sac",
              "Bebas Banjir",
              "Dekat Jalan Tol",
              "Dekat MRT",
              "Dekat LRT",
              "Dekat Stasiun",
              "Dekat Mall",
              "Dekat Sekolah",
              "Dekat Rumah Sakit",
              "Dekat CBD",
              "Dekat Pusat Kuliner",
            ].map((loc) => {
              const active = locationAccess.includes(loc);
              return (
                <button
                  type="button"
                  key={loc}
                  onClick={() => toggleItem(locationAccess, setLocationAccess, loc)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {loc}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Informasi Lingkungan</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Kawasan Premium",
              "Lingkungan Eksklusif",
              "Lingkungan Tenang",
              "Ramah Anak",
              "Ramah Lansia",
              "Pet Friendly",
              "Cocok untuk Investasi",
              "Cocok untuk Hunian",
            ].map((env) => {
              const active = environmentTraits.includes(env);
              return (
                <button
                  type="button"
                  key={env}
                  onClick={() => toggleItem(environmentTraits, setEnvironmentTraits, env)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {env}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Legalitas Penunjang</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {["PBG / IMB", "Bisa KPR"].map((leg) => {
              const active = legalities.includes(leg);
              return (
                <button
                  type="button"
                  key={leg}
                  onClick={() => toggleItem(legalities, setLegalities, leg)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {leg}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 7. INFORMASI TAMBAHAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Tambahan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Furnished</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={furnished}
              onChange={(e) => setFurnished(e.target.value)}
            >
              <option value="Fully Furnished">Fully Furnished</option>
              <option value="Semi Furnished">Semi Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">View</label>
            <input
              type="text"
              placeholder="Contoh: City Skyline, Private Garden"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={view}
              onChange={(e) => setView(e.target.value)}
            />
          </div>
        </div>

        <div className="text-xs">
          <label className="block font-semibold text-slate-700 mb-1">Alasan Dijual</label>
          <textarea
            rows={2}
            placeholder="Tuliskan alasan penjualan jika ada..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
            value={saleReason}
            onChange={(e) => setSaleReason(e.target.value)}
          />
        </div>

        <div className="text-xs">
          <label className="block font-semibold text-slate-700 mb-1">Catatan Tambahan</label>
          <textarea
            rows={3}
            placeholder="Tambahkan catatan khusus townhouse..."
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md shadow-blue-600/10"
      >
        Lanjut ke Step 2: Legalitas & Harga →
      </button>
    </form>
  );
}