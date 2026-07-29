"use client";

import React, { useState } from "react";

interface FormClusterProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormCluster({ onNext, transactionType }: FormClusterProps) {
  // --- INFORMASI DASAR ---
  const [clusterName, setClusterName] = useState("");
  const [housingName, setHousingName] = useState("");
  const [developer, setDeveloper] = useState("");
  const [condition, setCondition] = useState("Baik");
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
  const [houseType, setHouseType] = useState("");
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

  // --- OUTDOOR & FASILITAS CLUSTER ---
  const [outdoorFeatures, setOutdoorFeatures] = useState<string[]>([]);
  const [clusterFacilities, setClusterFacilities] = useState<string[]>([]);

  // --- UTILITAS, KEAMANAN & BIAYA ---
  const [electricity, setElectricity] = useState("2200");
  const [waterSource, setWaterSource] = useState("PDAM");
  const [acUnits, setAcUnits] = useState("");
  const [utilities, setUtilities] = useState<string[]>([]);
  const [securityFeatures, setSecurityFeatures] = useState<string[]>([]);
  const [iplCost, setIplCost] = useState("");
  const [securityFee, setSecurityFee] = useState("");
  const [trashFee, setTrashFee] = useState("");

  // --- LEGALITAS, LOKASI & LINGKUNGAN ---
  const [legalities, setLegalities] = useState<string[]>([]);
  const [roadWidth, setRoadWidth] = useState("");
  const [facing, setFacing] = useState("Utara");
  const [locationAccess, setLocationAccess] = useState<string[]>([]);
  const [environmentTraits, setEnvironmentTraits] = useState<string[]>([]);

  // --- INFORMASI TAMBAHAN ---
  const [furnished, setFurnished] = useState("Unfurnished");
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
      {/* 1. INFORMASI DASAR CLUSTER */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Perumahan & Cluster</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nama Cluster *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Cluster Emerald"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={clusterName}
              onChange={(e) => setClusterName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nama Perumahan *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Grand City Residence"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={housingName}
              onChange={(e) => setHousingName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Developer</label>
            <input
              type="text"
              placeholder="Contoh: Ciputra Group"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
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
              <option value="Letter C">Letter C</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. INFORMASI BANGUNAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Bangunan & Tanah</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Tanah (m²) *</label>
            <input
              type="number"
              required
              placeholder="120"
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
              placeholder="90"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={buildingArea}
              onChange={(e) => setBuildingArea(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Lebar Muka (m)</label>
            <input
              type="number"
              placeholder="8"
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
              placeholder="2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tinggi Plafon (m)</label>
            <input
              type="number"
              placeholder="3.5"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={ceilingHeight}
              onChange={(e) => setCeilingHeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Dibangun</label>
            <input
              type="number"
              placeholder="2021"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={yearBuilt}
              onChange={(e) => setYearBuilt(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Renovasi</label>
            <input
              type="number"
              placeholder="2023"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={renovationYear}
              onChange={(e) => setRenovationYear(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tipe Rumah</label>
            <input
              type="text"
              placeholder="Contoh: Type 70/120"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={houseType}
              onChange={(e) => setHouseType(e.target.value)}
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
              <option value="Tusuk Sate">Tusuk Sate</option>
              <option value="Cul-de-sac">Cul-de-sac</option>
              <option value="Dekat Taman">Dekat Taman</option>
              <option value="Dekat Club House">Dekat Club House</option>
              <option value="Dekat Gerbang">Dekat Gerbang</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. RUANGAN & PARKIR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Ruangan & Area Parkir</h3>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Tidur</label>
            <input
              type="number"
              placeholder="3"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi</label>
            <input
              type="number"
              placeholder="2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">KM Dalam</label>
            <input
              type="number"
              placeholder="1"
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
              "Ruang Tamu",
              "Ruang Keluarga",
              "Ruang Makan",
              "Dapur Bersih",
              "Dapur Kotor",
              "Gudang",
              "Musholla",
              "Ruang Kerja",
              "Laundry Room",
              "Balkon",
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
              placeholder="3"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={motorCapacity}
              onChange={(e) => setMotorCapacity(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* 4. OUTDOOR & FASILITAS CLUSTER */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Outdoor Pribadi & Fasilitas Cluster</h3>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Area Outdoor Pribadi</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Taman Depan",
              "Taman Belakang",
              "Kolam Renang Pribadi",
              "Gazebo",
              "Kolam Ikan",
              "Area BBQ",
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
          <label className="block text-xs font-semibold text-slate-700 mb-2">Fasilitas Bersama Cluster</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "One Gate System",
              "Security 24 Jam",
              "CCTV Kawasan",
              "Access Card",
              "Club House",
              "Swimming Pool",
              "Children's Pool",
              "Playground",
              "Jogging Track",
              "Taman Cluster",
              "Lapangan Basket",
              "Lapangan Tenis",
              "Gym",
              "Function Hall",
              "Mini Market",
              "Musholla",
              "Area Komersial",
              "Guest Parking",
            ].map((cf) => {
              const active = clusterFacilities.includes(cf);
              return (
                <button
                  type="button"
                  key={cf}
                  onClick={() => toggleItem(clusterFacilities, setClusterFacilities, cf)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {cf}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. UTILITAS, KEAMANAN & BIAYA KAWASAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Utilitas, Keamanan & Biaya IPL</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">IPL / Maintenance (Rp/Bulan)</label>
            <input
              type="text"
              placeholder="Contoh: 350.000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={iplCost}
              onChange={(e) => setIplCost(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Biaya Keamanan (Rp/Bulan)</label>
            <input
              type="text"
              placeholder="Contoh: 100.000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={securityFee}
              onChange={(e) => setSecurityFee(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Biaya Sampah (Rp/Bulan)</label>
            <input
              type="text"
              placeholder="Contoh: 50.000"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={trashFee}
              onChange={(e) => setTrashFee(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Daya Listrik (Watt)</label>
            <input
              type="text"
              placeholder="2200"
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
              <option value="WTP Cluster">WTP / Pengelola Cluster</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah AC (Unit)</label>
            <input
              type="number"
              placeholder="3"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={acUnits}
              onChange={(e) => setAcUnits(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Utilitas</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Internet Fiber",
              "Telepon Rumah",
              "TV Kabel",
              "Tandon Air",
              "Water Heater",
              "Smart Home System",
              "Smart Door Lock",
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
          <label className="block text-xs font-semibold text-slate-700 mb-2">Keamanan Unit & Kawasan</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Pos Satpam",
              "Security Patrol",
              "Visitor Management",
              "CCTV Rumah",
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

      {/* 6. LOKASI, AKSES, & LINGKUNGAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Akses Lokasi & Lingkungan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Lebar Jalan Depan (m)</label>
            <input
              type="number"
              placeholder="6"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={roadWidth}
              onChange={(e) => setRoadWidth(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Hadap Rumah</label>
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
          <label className="block text-xs font-semibold text-slate-700 mb-2">Fitur Lokasi & Aksesibilitas</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Jalan Aspal",
              "Jalan Beton",
              "Posisi Hook",
              "Cul-de-sac",
              "Bebas Banjir",
              "Dekat Tol",
              "Dekat Stasiun",
              "Dekat MRT",
              "Dekat LRT",
              "Dekat Sekolah",
              "Dekat Rumah Sakit",
              "Dekat Mall",
              "Dekat Pasar",
              "Dekat Tempat Ibadah",
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
          <label className="block text-xs font-semibold text-slate-700 mb-2">Karakteristik Lingkungan</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Kawasan Premium",
              "Kawasan Bebas Banjir",
              "Lingkungan Asri",
              "Lingkungan Tenang",
              "Ramah Anak",
              "Ramah Lansia",
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
          <label className="block text-xs font-semibold text-slate-700 mb-2">Dokumen Legalitas Terkait</label>
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
              placeholder="Contoh: Taman Cluster, Club House"
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
            placeholder="Tambahkan informasi khusus perumahan ini..."
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