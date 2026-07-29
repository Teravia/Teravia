"use client";

import React, { useState } from "react";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  // --- INFORMASI DASAR ---
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");
  const [propertyCondition, setPropertyCondition] = useState("Sangat Baik");
  const [ownershipStatus, setOwnershipStatus] = useState("Properti Sendiri");

  // --- INFORMASI BANGUNAN ---
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [frontWidth, setFrontWidth] = useState("");
  const [landLength, setLandLength] = useState("");
  const [floors, setFloors] = useState("1");
  const [ceilingHeight, setCeilingHeight] = useState("");
  const [builtYear, setBuiltYear] = useState("");
  const [renovatedYear, setRenovatedYear] = useState("");
  const [buildingConditionState, setBuildingConditionState] = useState("Baik");
  const [housePosition, setHousePosition] = useState("Tengah");

  // --- SPESIFIKASI RUANGAN ---
  const [bedrooms, setBedrooms] = useState("2");
  const [bathrooms, setBathrooms] = useState("1");
  const [ensuiteBathrooms, setEnsuiteBathrooms] = useState("0");
  const [maidBedrooms, setMaidBedrooms] = useState("0");
  const [maidBathrooms, setMaidBathrooms] = useState("0");

  // Ruangan (Boolean Chip Toggles)
  const [rooms, setRooms] = useState<Record<string, boolean>>({
    ruangTamu: true,
    ruangKeluarga: true,
    ruangMakan: false,
    dapurBersih: true,
    dapurKotor: false,
    gudang: false,
    ruangKerja: false,
    ruangBelajar: false,
    musholla: false,
    laundryRoom: false,
    balkon: false,
    terasDepan: true,
    terasBelakang: false,
  });

  // --- AREA PARKIR & OUTDOOR ---
  const [carport, setCarport] = useState("1");
  const [garage, setGarage] = useState("0");
  const [carCapacity, setCarCapacity] = useState("1");
  const [motorCapacity, setMotorCapacity] = useState("2");

  const [outdoorFeatures, setOutdoorFeatures] = useState<Record<string, boolean>>({
    tamanDepan: true,
    tamanBelakang: false,
    kolamRenang: false,
    gazebo: false,
    kolamIkan: false,
    halamanSamping: false,
    areaBBQ: false,
  });

  // --- UTILITAS & KEAMANAN ---
  const [electricity, setElectricity] = useState("2200");
  const [waterSource, setWaterSource] = useState("PDAM");
  const [acCount, setAcCount] = useState("0");

  const [utilities, setUtilities] = useState<Record<string, boolean>>({
    internetFiber: true,
    teleponRumah: false,
    tvKabel: false,
    tandonAir: true,
    pompaAir: true,
    septicTank: true,
    waterHeater: false,
    cctv: false,
    smartHome: false,
  });

  const [security, setSecurity] = useState<Record<string, boolean>>({
    security24h: true,
    oneGateSystem: true,
    cctvPerumahan: false,
    accessCard: false,
    posSatpam: true,
  });

  // --- LOKASI, AKSES & LINGKUNGAN ---
  const [roadWidth, setRoadWidth] = useState("");
  const [facing, setFacing] = useState("Utara");

  const [access, setAccess] = useState<Record<string, boolean>>({
    muat1Mobil: true,
    muat2Mobil: true,
    jalanAspal: true,
    jalanBeton: false,
    hook: false,
    bebasBanjir: true,
    dekatTol: false,
    dekatStasiun: false,
    dekatMRT: false,
    dekatLRT: false,
    dekatHalte: false,
    dekatSekolah: true,
    dekatRS: false,
    dekatMall: false,
    dekatPasar: true,
    dekatIbadah: true,
  });

  const [environment, setEnvironment] = useState<Record<string, boolean>>({
    dalamPerumahan: true,
    dalamCluster: true,
    lingkunganTenang: true,
    cocokKeluarga: true,
    cocokInvestasi: true,
    cocokKantor: false,
  });

  // --- INFORMASI TAMBAHAN ---
  const [furnished, setFurnished] = useState("Unfurnished");
  const [view, setView] = useState("");
  const [reasonForSale, setReasonForSale] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  // Helper Toggle Function untuk State Boolean
  const toggleFeature = (
    setState: React.Dispatch<React.SetStateAction<Record<string, boolean>>>,
    key: string
  ) => {
    setState((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert("Silakan isi Judul Iklan terlebih dahulu.");
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-slate-800 text-xs">
      {/* 1. INFORMASI DASAR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">Informasi Dasar</h2>
          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
            Transaksi: {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">
            Judul Iklan Properti <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Contoh: Rumah Minimalis Modern 2 Lantai Siap Huni Dalam Cluster Strategis"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kategori Utama</label>
            <select
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-500 cursor-not-allowed"
              value={category}
              disabled
            >
              <option value="Hunian">Hunian</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jenis Properti</label>
            <select
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              <option value="Rumah">Rumah</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 mb-1">Status Kepemilikan</label>
            <select
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={ownershipStatus}
              onChange={(e) => setOwnershipStatus(e.target.value)}
            >
              <option value="Properti Sendiri">Properti Sendiri (Pemilik)</option>
              <option value="Kuasa Jual">Kuasa Jual (Agent)</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. INFORMASI BANGUNAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Bangunan</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Tanah (m²) *</label>
            <input type="number" required placeholder="120" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Bangunan (m²) *</label>
            <input type="number" required placeholder="150" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Lebar Muka (m)</label>
            <input type="number" placeholder="8" className="w-full p-2.5 rounded-xl border border-slate-300" value={frontWidth} onChange={(e) => setFrontWidth(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Panjang Tanah (m)</label>
            <input type="number" placeholder="15" className="w-full p-2.5 rounded-xl border border-slate-300" value={landLength} onChange={(e) => setLandLength(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah Lantai *</label>
            <input type="number" required placeholder="2" className="w-full p-2.5 rounded-xl border border-slate-300" value={floors} onChange={(e) => setFloors(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tinggi Plafon (m)</label>
            <input type="number" step="0.1" placeholder="3.5" className="w-full p-2.5 rounded-xl border border-slate-300" value={ceilingHeight} onChange={(e) => setCeilingHeight(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Dibangun</label>
            <input type="number" placeholder="2020" className="w-full p-2.5 rounded-xl border border-slate-300" value={builtYear} onChange={(e) => setBuiltYear(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tahun Renovasi</label>
            <input type="number" placeholder="2023" className="w-full p-2.5 rounded-xl border border-slate-300" value={renovatedYear} onChange={(e) => setRenovatedYear(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kondisi Bangunan *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={buildingConditionState} onChange={(e) => setBuildingConditionState(e.target.value)}>
              <option value="Baru">Baru</option>
              <option value="Sangat Baik">Sangat Baik</option>
              <option value="Baik">Baik</option>
              <option value="Perlu Renovasi Ringan">Perlu Renovasi Ringan</option>
              <option value="Perlu Renovasi Total">Perlu Renovasi Total</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Posisi Rumah</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={housePosition} onChange={(e) => setHousePosition(e.target.value)}>
              <option value="Tengah">Tengah</option>
              <option value="Hook">Hook</option>
              <option value="Tusuk Sate">Tusuk Sate</option>
              <option value="Cul-de-sac">Cul-de-sac</option>
              <option value="Pinggir Jalan Utama">Pinggir Jalan Utama</option>
            </select>
          </div>
        </div>
      </div>

      {/* 3. SPESIFIKASI RUANGAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Spesifikasi Ruangan</h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Tidur</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">KM Dalam</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={ensuiteBathrooms} onChange={(e) => setEnsuiteBathrooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar ART</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={maidBedrooms} onChange={(e) => setMaidBedrooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">KM ART</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={maidBathrooms} onChange={(e) => setMaidBathrooms(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-2">Fasilitas Ruangan (Klik untuk memilih)</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "ruangTamu", label: "Ruang Tamu" },
              { key: "ruangKeluarga", label: "Ruang Keluarga" },
              { key: "ruangMakan", label: "Ruang Makan" },
              { key: "dapurBersih", label: "Dapur Bersih" },
              { key: "dapurKotor", label: "Dapur Kotor" },
              { key: "gudang", label: "Gudang" },
              { key: "ruangKerja", label: "Ruang Kerja" },
              { key: "ruangBelajar", label: "Ruang Belajar" },
              { key: "musholla", label: "Musholla" },
              { key: "laundryRoom", label: "Laundry Room" },
              { key: "balkon", label: "Balkon" },
              { key: "terasDepan", label: "Teras Depan" },
              { key: "terasBelakang", label: "Teras Belakang" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleFeature(setRooms, item.key)}
                className={`px-3 py-1.5 rounded-xl border text-xs transition font-medium ${
                  rooms[item.key]
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {rooms[item.key] ? "✓ " : "+ "}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. PARKIR & OUTDOOR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Parkir & Area Outdoor</h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Carport</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={carport} onChange={(e) => setCarport(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Garasi</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={garage} onChange={(e) => setGarage(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kapasitas Mobil</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={carCapacity} onChange={(e) => setCarCapacity(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kapasitas Motor</label>
            <input type="number" className="w-full p-2.5 rounded-xl border border-slate-300" value={motorCapacity} onChange={(e) => setMotorCapacity(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-2">Fasilitas Outdoor</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "tamanDepan", label: "Taman Depan" },
              { key: "tamanBelakang", label: "Taman Belakang" },
              { key: "kolamRenang", label: "Kolam Renang" },
              { key: "gazebo", label: "Gazebo" },
              { key: "kolamIkan", label: "Kolam Ikan" },
              { key: "halamanSamping", label: "Halaman Samping" },
              { key: "areaBBQ", label: "Area BBQ" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleFeature(setOutdoorFeatures, item.key)}
                className={`px-3 py-1.5 rounded-xl border text-xs transition font-medium ${
                  outdoorFeatures[item.key]
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {outdoorFeatures[item.key] ? "✓ " : "+ "}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 5. UTILITAS & KEAMANAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Utilitas & Keamanan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Daya Listrik (Watt)</label>
            <input type="number" placeholder="2200" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Sumber Air</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={waterSource} onChange={(e) => setWaterSource(e.target.value)}>
              <option value="PDAM">PDAM</option>
              <option value="Sumur Bor">Sumur Bor</option>
              <option value="Sumur Gali">Sumur Gali</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah AC (Unit)</label>
            <input type="number" placeholder="2" className="w-full p-2.5 rounded-xl border border-slate-300" value={acCount} onChange={(e) => setAcCount(e.target.value)} />
          </div>
        </div>

         <div>
          <label className="block font-semibold text-slate-700 mb-2">Fitur Utilitas</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "internetFiber", label: "Internet Fiber" },
              { key: "teleponRumah", label: "Telepon Rumah" },
              { key: "tvKabel", label: "TV Kabel" },
              { key: "tandonAir", label: "Tandon Air" },
              { key: "pompaAir", label: "Pompa Air" },
              { key: "septicTank", label: "Septic Tank" },
              { key: "waterHeater", label: "Water Heater" },
              { key: "cctv", label: "CCTV Private" },
              { key: "smartHome", label: "Smart Home System" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleFeature(setUtilities, item.key)}
                className={`px-3 py-1.5 rounded-xl border text-xs transition font-medium ${
                  utilities[item.key]
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {utilities[item.key] ? "✓ " : "+ "}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-2">Sistem Keamanan Lingkungan</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "security24h", label: "Security 24 Jam" },
              { key: "oneGateSystem", label: "One Gate System" },
              { key: "cctvPerumahan", label: "CCTV Perumahan" },
              { key: "accessCard", label: "Access Card Gate" },
              { key: "posSatpam", label: "Pos Satpam Depan" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleFeature(setSecurity, item.key)}
                className={`px-3 py-1.5 rounded-xl border text-xs transition font-medium ${
                  security[item.key]
                    ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {security[item.key] ? "✓ " : "+ "}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 6. LOKASI, AKSES & LINGKUNGAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Akses Jalan & Lingkungan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Lebar Jalan Depan (m / Mobil)</label>
            <input type="text" placeholder="6 meter (Muat 2 mobil)" className="w-full p-2.5 rounded-xl border border-slate-300" value={roadWidth} onChange={(e) => setRoadWidth(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Arah Hadap Rumah</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={facing} onChange={(e) => setFacing(e.target.value)}>
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
          <label className="block font-semibold text-slate-700 mb-2">Aksesibilitas & Fasilitas Terdekat</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "muat1Mobil", label: "Jalan 1 Mobil" },
              { key: "muat2Mobil", label: "Jalan 2 Mobil" },
              { key: "jalanAspal", label: "Jalan Aspal" },
              { key: "jalanBeton", label: "Jalan Beton" },
              { key: "bebasBanjir", label: "Bebas Banjir" },
              { key: "dekatTol", label: "Dekat Gerbang Tol" },
              { key: "dekatStasiun", label: "Dekat Stasiun KRL" },
              { key: "dekatMRT", label: "Dekat Stasiun MRT" },
              { key: "dekatLRT", label: "Dekat Stasiun LRT" },
              { key: "dekatHalte", label: "Dekat Halte Bus" },
              { key: "dekatSekolah", label: "Dekat Sekolah/Kampus" },
              { key: "dekatRS", label: "Dekat Rumah Sakit" },
              { key: "dekatMall", label: "Dekat Mall/Pusat Belanja" },
              { key: "dekatPasar", label: "Dekat Pasar" },
              { key: "dekatIbadah", label: "Dekat Tempat Ibadah" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleFeature(setAccess, item.key)}
                className={`px-3 py-1.5 rounded-xl border text-xs transition font-medium ${
                  access[item.key]
                    ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {access[item.key] ? "✓ " : "+ "}
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-2">Karakteristik Lingkungan</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "dalamPerumahan", label: "Dalam Perumahan" },
              { key: "dalamCluster", label: "Dalam Cluster" },
              { key: "lingkunganTenang", label: "Lingkungan Tenang" },
              { key: "cocokKeluarga", label: "Cocok untuk Keluarga" },
              { key: "cocokInvestasi", label: "Cocok untuk Investasi" },
              { key: "cocokKantor", label: "Bisa untuk Home Office" },
            ].map((item) => (
              <button
                key={item.key}
                type="button"
                onClick={() => toggleFeature(setEnvironment, item.key)}
                className={`px-3 py-1.5 rounded-xl border text-xs transition font-medium ${
                  environment[item.key]
                    ? "bg-indigo-600 text-white border-indigo-600 shadow-sm"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {environment[item.key] ? "✓ " : "+ "}
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 7. INFORMASI TAMBAHAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Tambahan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kondisi Perabotan (Furnished)</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={furnished} onChange={(e) => setFurnished(e.target.value)}>
              <option value="Unfurnished">Unfurnished (Kosongan)</option>
              <option value="Semi Furnished">Semi Furnished</option>
              <option value="Fully Furnished">Fully Furnished</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Pemandangan / View</label>
            <input type="text" placeholder="Contoh: City View, Taman, Danau" className="w-full p-2.5 rounded-xl border border-slate-300" value={view} onChange={(e) => setView(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">Alasan Dijual (Opsional)</label>
          <input type="text" placeholder="Contoh: Pindah tugas luar kota" className="w-full p-2.5 rounded-xl border border-slate-300" value={reasonForSale} onChange={(e) => setReasonForSale(e.target.value)} />
        </div>

        <div>
          <label className="block font-semibold text-slate-700 mb-1">Catatan Tambahan</label>
          <textarea rows={3} placeholder="Tambahkan informasi khusus lainnya..." className="w-full p-2.5 rounded-xl border border-slate-300" value={additionalNotes} onChange={(e) => setAdditionalNotes(e.target.value)} />
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
