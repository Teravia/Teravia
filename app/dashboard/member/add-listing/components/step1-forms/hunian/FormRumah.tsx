"use client";

import React, { useState } from "react";

interface FormRumahProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormRumah({ onNext, transactionType }: FormRumahProps) {
  // --- STATE SPESIFIKASI UTAMA ---
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [floors, setFloors] = useState("");
  const [buildingAge, setBuildingAge] = useState("");
  const [renovationYear, setRenovationYear] = useState("");
  const [condition, setCondition] = useState("Baik");
  const [position, setPosition] = useState("Tengah");

  // --- SPESIFIKASI RUANGAN ---
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [insideBathrooms, setInsideBathrooms] = useState("");
  const [helperBedrooms, setHelperBedrooms] = useState("");
  const [helperBathrooms, setHelperBathrooms] = useState("");
  const [roomFacilities, setRoomFacilities] = useState<string[]>([]);

  // --- PARKIR & OUTDOOR ---
  const [carport, setCarport] = useState("");
  const [garage, setGarage] = useState("");
  const [carCapacity, setCarCapacity] = useState("");
  const [motorCapacity, setMotorCapacity] = useState("");
  const [outdoorFacilities, setOutdoorFacilities] = useState<string[]>([]);

  // --- UTILITAS & KEAMANAN ---
  const [electricity, setElectricity] = useState("2200");
  const [waterSource, setWaterSource] = useState("PDAM");
  const [acUnits, setAcUnits] = useState("");
  const [utilityFeatures, setUtilityFeatures] = useState<string[]>([]);
  const [securityFeatures, setSecurityFeatures] = useState<string[]>([]);

  // --- AKSESIBILITAS & LINGKUNGAN ---
  const [roadWidth, setRoadWidth] = useState("");
  const [facing, setFacing] = useState("Utara");
  const [nearbyFacilities, setNearbyFacilities] = useState<string[]>([]);
  const [environmentTraits, setEnvironmentTraits] = useState<string[]>([]);

  // --- INFORMASI TAMBAHAN ---
  const [furnished, setFurnished] = useState("Unfurnished (Kosongan)");
  const [view, setView] = useState("");
  const [saleReason, setSaleReason] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // --- HELPER HANDLER TOGGLE CHIP ---
  const toggleArrayItem = (array: string[], setArray: (val: string[]) => void, item: string) => {
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
      {/* 1. DIMENSI & SPESIFIKASI UTAMA */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">
          Spesifikasi Bangunan & Tanah
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Tanah (m²)*</label>
            <input
              type="number"
              required
              placeholder="Contoh: 120"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={landArea}
              onChange={(e) => setLandArea(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Bangunan (m²)*</label>
            <input
              type="number"
              required
              placeholder="Contoh: 90"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={buildingArea}
              onChange={(e) => setBuildingArea(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Panjang x Lebar (m)</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="P: 15"
                className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-300 outline-none"
                value={length}
                onChange={(e) => setLength(e.target.value)}
              />
              <input
                type="number"
                placeholder="L: 8"
                className="w-1/2 px-3 py-2.5 rounded-xl border border-slate-300 outline-none"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah Lantai</label>
            <input
              type="number"
              placeholder="Contoh: 2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={floors}
              onChange={(e) => setFloors(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Dibangun</label>
            <input
              type="number"
              placeholder="Contoh: 2020"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={buildingAge}
              onChange={(e) => setBuildingAge(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Renovasi</label>
            <input
              type="number"
              placeholder="Contoh: 2023"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={renovationYear}
              onChange={(e) => setRenovationYear(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kondisi Bangunan*</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="Baru">Baru / Brand New</option>
              <option value="Baik">Baik / Siap Huni</option>
              <option value="Butuh Renovasi">Butuh Renovasi</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Posisi Rumah</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            >
              <option value="Tengah">Tengah (Standard)</option>
              <option value="Hook / Sudut">Hook / Sudut</option>
              <option value="Kuldesak">Kuldesak (Buntu)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. SPESIFIKASI RUANGAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Spesifikasi Ruangan</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Tidur</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">KM Dalam</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={insideBathrooms}
              onChange={(e) => setInsideBathrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar ART</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={helperBedrooms}
              onChange={(e) => setHelperBedrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">KM ART</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={helperBathrooms}
              onChange={(e) => setHelperBathrooms(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Fasilitas Ruangan (Klik untuk memilih)
          </label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Ruang Tamu",
              "Ruang Keluarga",
              "Ruang Makan",
              "Dapur Bersih",
              "Dapur Kotor",
              "Gudang",
              "Ruang Kerja",
              "Ruang Belajar",
              "Musholla",
              "Laundry Room",
              "Balkon",
              "Teras Depan",
              "Teras Belakang",
            ].map((fac) => {
              const active = roomFacilities.includes(fac);
              return (
                <button
                  type="button"
                  key={fac}
                  onClick={() => toggleArrayItem(roomFacilities, setRoomFacilities, fac)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {fac}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. PARKIR & AREA OUTDOOR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Parkir & Area Outdoor</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Carport</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={carport}
              onChange={(e) => setCarport(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Garasi</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={garage}
              onChange={(e) => setGarage(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kapasitas Mobil</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={carCapacity}
              onChange={(e) => setCarCapacity(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kapasitas Motor</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={motorCapacity}
              onChange={(e) => setMotorCapacity(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Fasilitas Outdoor</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Taman Depan",
              "Taman Belakang",
              "Kolam Renang",
              "Gazebo",
              "Kolam Ikan",
              "Halaman Samping",
              "Area BBQ",
            ].map((fac) => {
              const active = outdoorFacilities.includes(fac);
              return (
                <button
                  type="button"
                  key={fac}
                  onClick={() => toggleArrayItem(outdoorFacilities, setOutdoorFacilities, fac)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {fac}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. UTILITAS & KEAMANAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Utilitas & Keamanan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Daya Listrik (Watt)</label>
            <input
              type="text"
              placeholder="Contoh: 2200"
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
              <option value="Sumur Gali">Sumur Gali</option>
              <option value="WTP / Pengelola">WTP / Pengelola</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah AC (Unit)</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={acUnits}
              onChange={(e) => setAcUnits(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Fitur Utilitas</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Internet Fiber",
              "Telepon Rumah",
              "TV Kabel",
              "Tandon Air",
              "Pompa Air",
              "Septic Tank",
              "Water Heater",
              "CCTV Private",
              "Smart Home System",
            ].map((util) => {
              const active = utilityFeatures.includes(util);
              return (
                <button
                  type="button"
                  key={util}
                  onClick={() => toggleArrayItem(utilityFeatures, setUtilityFeatures, util)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {util}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Sistem Keamanan Lingkungan
          </label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Security 24 Jam",
              "One Gate System",
              "CCTV Perumahan",
              "Access Card Gate",
              "Pos Satpam Depan",
            ].map((sec) => {
              const active = securityFeatures.includes(sec);
              return (
                <button
                  type="button"
                  key={sec}
                  onClick={() => toggleArrayItem(securityFeatures, setSecurityFeatures, sec)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-emerald-600 text-white border-emerald-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {sec}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 5. AKSESIBILITAS & LINGKUNGAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Akses Jalan & Lingkungan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Lebar Jalan Depan (m / Mobil)
            </label>
            <input
              type="text"
              placeholder="Contoh: 6 meter (Muat 2 mobil)"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={roadWidth}
              onChange={(e) => setRoadWidth(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Arah Hadap Rumah</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={facing}
              onChange={(e) => setFacing(e.target.value)}
            >
              <option value="Utara">Utara</option>
              <option value="Timur">Timur</option>
              <option value="Selatan">Selatan</option>
              <option value="Barat">Barat</option>
              <option value="Timur Laut">Timur Laut</option>
              <option value="Tenggara">Tenggara</option>
              <option value="Barat Daya">Barat Daya</option>
              <option value="Barat Laut">Barat Laut</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Aksesibilitas & Fasilitas Terdekat
          </label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Jalan 1 Mobil",
              "Jalan 2 Mobil",
              "Jalan Aspal",
              "Jalan Beton",
              "Bebas Banjir",
              "Dekat Gerbang Tol",
              "Dekat Stasiun KRL",
              "Dekat Stasiun MRT",
              "Dekat Stasiun LRT",
              "Dekat Halte Bus",
              "Dekat Sekolah/Kampus",
              "Dekat Rumah Sakit",
              "Dekat Mall/Pusat Belanja",
              "Dekat Pasar",
              "Dekat Tempat Ibadah",
            ].map((fac) => {
              const active = nearbyFacilities.includes(fac);
              return (
                <button
                  type="button"
                  key={fac}
                  onClick={() => toggleArrayItem(nearbyFacilities, setNearbyFacilities, fac)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {fac}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Karakteristik Lingkungan
          </label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Dalam Perumahan",
              "Dalam Cluster",
              "Lingkungan Tenang",
              "Cocok untuk Keluarga",
              "Cocok untuk Investasi",
              "Bisa untuk Home Office",
            ].map((trait) => {
              const active = environmentTraits.includes(trait);
              return (
                <button
                  type="button"
                  key={trait}
                  onClick={() => toggleArrayItem(environmentTraits, setEnvironmentTraits, trait)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {trait}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 6. INFORMASI TAMBAHAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Tambahan</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kondisi Perabotan (Furnished)
            </label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={furnished}
              onChange={(e) => setFurnished(e.target.value)}
            >
              <option value="Unfurnished (Kosongan)">Unfurnished (Kosongan)</option>
              <option value="Semi Furnished">Semi Furnished</option>
              <option value="Full Furnished">Full Furnished</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Pemandangan / View</label>
            <input
              type="text"
              placeholder="Contoh: City View, Taman, Danau"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={view}
              onChange={(e) => setView(e.target.value)}
            />
          </div>
        </div>

        <div className="text-xs">
          <label className="block font-semibold text-slate-700 mb-1">
            Alasan Dijual (Opsional)
          </label>
          <input
            type="text"
            placeholder="Contoh: Pindah tugas luar kota"
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
            value={saleReason}
            onChange={(e) => setSaleReason(e.target.value)}
          />
        </div>

        <div className="text-xs">
          <label className="block font-semibold text-slate-700 mb-1">Catatan Tambahan</label>
          <textarea
            rows={3}
            placeholder="Tambahkan informasi khusus lainnya..."
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
