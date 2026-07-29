"use client";

import React, { useState } from "react";

interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

export default function Step1Information({ onNext, transactionType }: Step1Props) {
  // --- STATE STEP 1 ---
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // General Specs
  const [landArea, setLandArea] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [floors, setFloors] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garage, setGarage] = useState("");
  const [carport, setCarport] = useState("");
  const [electricity, setElectricity] = useState("2200 VA");
  const [waterSource, setWaterSource] = useState("PDAM");
  const [facing, setFacing] = useState("Utara");
  const [condition, setCondition] = useState("Baru");

  // Lahan / Tanah
  const [landZoning, setLandZoning] = useState("Kuning (Permukiman)");
  const [landTopography, setLandTopography] = useState("Datar Siap Bangun");
  const [roadWidth, setRoadWidth] = useState("");
  const [frontWidth, setFrontWidth] = useState("");

  // Apartemen / SOHO
  const [aptType, setAptType] = useState("");
  const [floorLevel, setFloorLevel] = useState("");
  const [tower, setTower] = useState("");
  const [furnished, setFurnished] = useState("Unfurnished");
  const [iplFee, setIplFee] = useState("");
  const [view, setView] = useState("");

  // Kost / Hotel / Bisnis
  const [totalRooms, setTotalRooms] = useState("");
  const [occupiedRooms, setOccupiedRooms] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [roomBathroomInside, setRoomBathroomInside] = useState("Ada");

  // Komersial & Industri (Gudang/Ruko)
  const [parkingCapacity, setParkingCapacity] = useState("");
  const [ceilingHeight, setCeilingHeight] = useState("");
  const [floorLoadCapacity, setFloorLoadCapacity] = useState("");
  const [loadingDock, setLoadingDock] = useState("Ada");
  const [containerAccess, setContainerAccess] = useState("Kontainer 40ft / Wingbox");

  // Properti Khusus (SPBU / RS)
  const [spbuBrand, setSpbuBrand] = useState("Pertamina");
  const [dispenserCount, setDispenserCount] = useState("");
  const [tankCount, setTankCount] = useState("");
  const [hospitalType, setHospitalType] = useState("Tipe B");
  const [inpatientBeds, setInpatientBeds] = useState("");
  const [operatingRooms, setOperatingRooms] = useState("");
  const [icuBeds, setIcuBeds] = useState("");

  // Opsi Jenis Properti Berdasarkan Kategori
  const getPropertyTypeOptions = () => {
    switch (category) {
      case "Hunian":
        return ["Rumah", "Apartemen", "Villa", "Townhouse / Cluster", "Kost", "Kontrakan / Sewa Rumah"];
      case "Komersial":
        return ["Ruko", "Gedung Perkantoran / Plaza", "SOHO (Small Office Home Office)", "Kios / Booth / Ruang Usaha", "Hotel / Resort / Guesthouse", "Restoran / Cafe"];
      case "Industri & Logistik":
        return ["Gudang", "Pabrik", "Kawasan Industri"];
      case "Tanah & Lahan":
        return ["Tanah Kavling Permukiman", "Lahan Komersial", "Lahan Industri", "Pertanian / Perkebunan"];
      case "Properti Khusus":
        return ["SPBU", "Rest Area", "Rumah Sakit / Klinik", "Gedung Pertemuan / Event Space"];
      default:
        return ["Rumah"];
    }
  };

  const handleCategoryChange = (cat: string) => {
    setCategory(cat);
    switch (cat) {
      case "Hunian": setPropertyType("Rumah"); break;
      case "Komersial": setPropertyType("Ruko"); break;
      case "Industri & Logistik": setPropertyType("Gudang"); break;
      case "Tanah & Lahan": setPropertyType("Tanah Kavling Permukiman"); break;
      case "Properti Khusus": setPropertyType("SPBU"); break;
      default: setPropertyType("Rumah");
    }
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      alert("Silakan isi judul iklan terlebih dahulu.");
      return;
    }
    onNext();
  };

  return (
    <form onSubmit={handleSubmitStep1} className="space-y-6">
      {/* JUDUL & KATEGORI */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-base font-bold text-slate-900">Informasi Dasar</h2>
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
            Transaksi: {transactionType}
          </span>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Judul Iklan Properti <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="Contoh: Dijual Rumah Minimalis Modern Hook Siap Huni Strategis"
            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none transition"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Kategori Utama</label>
            <select
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
              value={category}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="Hunian">Hunian</option>
              <option value="Komersial">Komersial</option>
              <option value="Industri & Logistik">Industri & Logistik</option>
              <option value="Tanah & Lahan">Tanah & Lahan</option>
              <option value="Properti Khusus">Properti Khusus</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">Jenis Properti</label>
            <select
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
            >
              {getPropertyTypeOptions().map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* SPESIFIKASI DETAIL DINAMIS */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-base font-bold text-slate-900">Spesifikasi Detail</h2>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
            {propertyType}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          {/* RUMAH / VILLA / TOWNHOUSE / KONTRAKAN */}
          {(propertyType === "Rumah" || propertyType === "Villa" || propertyType === "Townhouse / Cluster" || propertyType === "Kontrakan / Sewa Rumah") && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Tanah (m²)</label>
                <input type="number" placeholder="120" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Bangunan (m²)</label>
                <input type="number" placeholder="90" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Dimensi Tanah (PxL m)</label>
                <div className="flex gap-2">
                  <input type="number" placeholder="P: 15" className="w-1/2 p-2.5 rounded-xl border border-slate-300" value={length} onChange={(e) => setLength(e.target.value)} />
                  <input type="number" placeholder="L: 8" className="w-1/2 p-2.5 rounded-xl border border-slate-300" value={width} onChange={(e) => setWidth(e.target.value)} />
                </div>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Jumlah Lantai</label>
                <input type="number" placeholder="2" className="w-full p-2.5 rounded-xl border border-slate-300" value={floors} onChange={(e) => setFloors(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kamar Tidur</label>
                <input type="number" placeholder="3" className="w-full p-2.5 rounded-xl border border-slate-300" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi</label>
                <input type="number" placeholder="2" className="w-full p-2.5 rounded-xl border border-slate-300" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Garasi Mobil</label>
                <input type="number" placeholder="1" className="w-full p-2.5 rounded-xl border border-slate-300" value={garage} onChange={(e) => setGarage(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Carport Mobil</label>
                <input type="number" placeholder="1" className="w-full p-2.5 rounded-xl border border-slate-300" value={carport} onChange={(e) => setCarport(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Daya Listrik</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={electricity} onChange={(e) => setElectricity(e.target.value)}>
                  {["450 VA", "900 VA", "1300 VA", "2200 VA", "3500 VA", "4400 VA", "5500 VA", "11000 VA"].map((pow) => (
                    <option key={pow} value={pow}>{pow}</option>
                  ))}
                </select>
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
                <label className="block font-semibold text-slate-700 mb-1">Arah Bangunan</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={facing} onChange={(e) => setFacing(e.target.value)}>
                  <option value="Utara">Utara</option>
                  <option value="Timur">Timur</option>
                  <option value="Selatan">Selatan</option>
                  <option value="Barat">Barat</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kondisi Properti</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={condition} onChange={(e) => setCondition(e.target.value)}>
                  <option value="Baru">Baru</option>
                  <option value="Bekas / Terawat">Bekas / Terawat</option>
                  <option value="Butuh Renovasi">Butuh Renovasi</option>
                </select>
              </div>
            </>
          )}

          {/* TANAH & LAHAN */}
          {category === "Tanah & Lahan" && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Tanah Total (m²)</label>
                <input type="number" placeholder="1000" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Lebar Muka Depan (m)</label>
                <input type="number" placeholder="25" className="w-full p-2.5 rounded-xl border border-slate-300" value={frontWidth} onChange={(e) => setFrontWidth(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Lebar Akses Jalan (m)</label>
                <input type="number" placeholder="8" className="w-full p-2.5 rounded-xl border border-slate-300" value={roadWidth} onChange={(e) => setRoadWidth(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Peruntukan / Zona Lahan</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={landZoning} onChange={(e) => setLandZoning(e.target.value)}>
                  <option value="Kuning (Permukiman)">Kuning (Permukiman)</option>
                  <option value="Merah (Komersial/Jasa)">Merah (Komersial/Jasa)</option>
                  <option value="Abu-Abu / Industri">Abu-Abu / Industri</option>
                  <option value="Hijau / Pertanian">Hijau / Pertanian</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Topografi Lahan</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={landTopography} onChange={(e) => setLandTopography(e.target.value)}>
                  <option value="Datar Siap Bangun">Datar Siap Bangun</option>
                  <option value="Berbukit / Terasering">Berbukit / Terasering</option>
                  <option value="Butuh Urugan">Butuh Urugan</option>
                </select>
              </div>
            </>
          )}

          {/* APARTEMEN & SOHO */}
          {(propertyType === "Apartemen" || propertyType === "SOHO (Small Office Home Office)") && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tipe Unit</label>
                <input type="text" placeholder="Studio / 2BR / 3BR" className="w-full p-2.5 rounded-xl border border-slate-300" value={aptType} onChange={(e) => setAptType(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Unit (m²)</label>
                <input type="number" placeholder="45" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kamar Tidur / Ruang Kerja</label>
                <input type="number" placeholder="2" className="w-full p-2.5 rounded-xl border border-slate-300" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi</label>
                <input type="number" placeholder="1" className="w-full p-2.5 rounded-xl border border-slate-300" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Lantai Ke-</label>
                <input type="number" placeholder="12" className="w-full p-2.5 rounded-xl border border-slate-300" value={floorLevel} onChange={(e) => setFloorLevel(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tower</label>
                <input type="text" placeholder="Tower North" className="w-full p-2.5 rounded-xl border border-slate-300" value={tower} onChange={(e) => setTower(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Furnished</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={furnished} onChange={(e) => setFurnished(e.target.value)}>
                  <option value="Unfurnished">Unfurnished</option>
                  <option value="Semi Furnished">Semi Furnished</option>
                  <option value="Full Furnished">Full Furnished</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Service Charge / IPL</label>
                <input type="text" placeholder="Rp 750.000 / bln" className="w-full p-2.5 rounded-xl border border-slate-300" value={iplFee} onChange={(e) => setIplFee(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">View Unit</label>
                <input type="text" placeholder="City View / Pool View" className="w-full p-2.5 rounded-xl border border-slate-300" value={view} onChange={(e) => setView(e.target.value)} />
              </div>
            </>
          )}

                {/* KOST / HOTEL / GUESTHOUSE */}
          {(propertyType === "Kost" || propertyType === "Hotel / Resort / Guesthouse") && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Tanah (m²)</label>
                <input type="number" placeholder="300" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Bangunan (m²)</label>
                <input type="number" placeholder="500" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Total Jumlah Kamar</label>
                <input type="number" placeholder="20" className="w-full p-2.5 rounded-xl border border-slate-300" value={totalRooms} onChange={(e) => setTotalRooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kamar Terisi Saat Ini</label>
                <input type="number" placeholder="16" className="w-full p-2.5 rounded-xl border border-slate-300" value={occupiedRooms} onChange={(e) => setOccupiedRooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Omzet Bulanan (Rp)</label>
                <input type="text" placeholder="35.000.000" className="w-full p-2.5 rounded-xl border border-slate-300" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi Dalam</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={roomBathroomInside} onChange={(e) => setRoomBathroomInside(e.target.value)}>
                  <option value="Ada">Ada di Setiap Kamar</option>
                  <option value="Sebagian">Sebagian Kamar</option>
                  <option value="Luar">Kamar Mandi Luar</option>
                </select>
              </div>
            </>
          )}

          {/* RUKO / KIOS / GEUDNG PERKANTORAN */}
          {(propertyType === "Ruko" || propertyType === "Gedung Perkantoran / Plaza" || propertyType === "Kios / Booth / Ruang Usaha" || propertyType === "Restoran / Cafe") && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Tanah (m²)</label>
                <input type="number" placeholder="100" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Bangunan (m²)</label>
                <input type="number" placeholder="250" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Lebar Muka (m)</label>
                <input type="number" placeholder="5" className="w-full p-2.5 rounded-xl border border-slate-300" value={frontWidth} onChange={(e) => setFrontWidth(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Jumlah Lantai</label>
                <input type="number" placeholder="3" className="w-full p-2.5 rounded-xl border border-slate-300" value={floors} onChange={(e) => setFloors(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Jumlah Kamar Mandi</label>
                <input type="number" placeholder="3" className="w-full p-2.5 rounded-xl border border-slate-300" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Kapasitas Parkir (Mobil)</label>
                <input type="number" placeholder="4" className="w-full p-2.5 rounded-xl border border-slate-300" value={parkingCapacity} onChange={(e) => setParkingCapacity(e.target.value)} />
              </div>
            </>
          )}

          {/* GUDANG / PABRIK / INDUSTRI */}
          {category === "Industri & Logistik" && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Lahan (m²)</label>
                <input type="number" placeholder="2000" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Bangunan Utama (m²)</label>
                <input type="number" placeholder="1200" className="w-full p-2.5 rounded-xl border border-slate-300" value={buildingArea} onChange={(e) => setBuildingArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tinggi Plafon (m)</label>
                <input type="number" placeholder="9" className="w-full p-2.5 rounded-xl border border-slate-300" value={ceilingHeight} onChange={(e) => setCeilingHeight(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Beban Lantai (ton/m²)</label>
                <input type="text" placeholder="5 ton/m²" className="w-full p-2.5 rounded-xl border border-slate-300" value={floorLoadCapacity} onChange={(e) => setFloorLoadCapacity(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Akses Kendaraan Logistik</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={containerAccess} onChange={(e) => setContainerAccess(e.target.value)}>
                  <option value="Kontainer 40ft / Wingbox">Kontainer 40ft / Wingbox</option>
                  <option value="Kontainer 20ft">Kontainer 20ft</option>
                  <option value="Truk Engkel / Fuso">Truk Engkel / Fuso</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Loading Dock</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={loadingDock} onChange={(e) => setLoadingDock(e.target.value)}>
                  <option value="Ada">Ada</option>
                  <option value="Tidak Ada">Tidak Ada</option>
                </select>
              </div>
            </>
          )}

          {/* SPBU */}
          {propertyType === "SPBU" && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Luas Lahan (m²)</label>
                <input type="number" placeholder="2500" className="w-full p-2.5 rounded-xl border border-slate-300" value={landArea} onChange={(e) => setLandArea(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Merek SPBU</label>
                <input type="text" placeholder="Pertamina / Shell / Vivo" className="w-full p-2.5 rounded-xl border border-slate-300" value={spbuBrand} onChange={(e) => setSpbuBrand(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Jumlah Dispenser</label>
                <input type="number" placeholder="6" className="w-full p-2.5 rounded-xl border border-slate-300" value={dispenserCount} onChange={(e) => setDispenserCount(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Jumlah Tangki Pendam</label>
                <input type="number" placeholder="4" className="w-full p-2.5 rounded-xl border border-slate-300" value={tankCount} onChange={(e) => setTankCount(e.target.value)} />
              </div>
            </>
          )}

          {/* RUMAH SAKIT */}
          {propertyType === "Rumah Sakit / Klinik" && (
            <>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tipe Rumah Sakit</label>
                <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={hospitalType} onChange={(e) => setHospitalType(e.target.value)}>
                  <option value="Tipe A">Tipe A</option>
                  <option value="Tipe B">Tipe B</option>
                  <option value="Tipe C">Tipe C</option>
                  <option value="Klinik Utama">Klinik Utama</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tempat Tidur Rawat Inap</label>
                <input type="number" placeholder="120" className="w-full p-2.5 rounded-xl border border-slate-300" value={inpatientBeds} onChange={(e) => setInpatientBeds(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Ruang Operasi</label>
                <input type="number" placeholder="4" className="w-full p-2.5 rounded-xl border border-slate-300" value={operatingRooms} onChange={(e) => setOperatingRooms(e.target.value)} />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tempat Tidur ICU</label>
                <input type="number" placeholder="10" className="w-full p-2.5 rounded-xl border border-slate-300" value={icuBeds} onChange={(e) => setIcuBeds(e.target.value)} />
              </div>
            </>
          )}
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
