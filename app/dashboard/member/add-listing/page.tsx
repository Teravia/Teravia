"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

interface ImageFile {
  id: string;
  url: string;
  name: string;
  isMain: boolean;
}

interface ApiRegion {
  id: string;
  name: string;
}

export default function AddListingPage() {
  const [currentStep, setCurrentStep] = useState(1);

  // Status Transaksi Global (Selalu ada di setiap step)
  const [status, setStatus] = useState("Jual");

  // STEP 1: INFORMASI DASAR & DETAIL PROPERTI
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // Dynamic Detail Form States
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
  const [yearBuilt, setYearBuilt] = useState("");

  // Apartemen / Condominium / Cost / Hotel / Specific Fields
  const [aptType, setAptType] = useState("");
  const [floorLevel, setFloorLevel] = useState("");
  const [tower, setTower] = useState("");
  const [furnished, setFurnished] = useState("Unfurnished");
  const [balcony, setBalcony] = useState("Tidak");
  const [iplFee, setIplFee] = useState("");
  const [view, setView] = useState("");

  // Commercial / RS / SPBU / Rest Area Specific
  const [totalDoors, setTotalDoors] = useState("");
  const [occupiedRooms, setOccupiedRooms] = useState("");
  const [emptyRooms, setEmptyRooms] = useState("");
  const [monthlyIncome, setMonthlyIncome] = useState("");
  const [frontWidth, setFrontWidth] = useState("");
  const [elevators, setElevators] = useState("");
  const [receptionArea, setReceptionArea] = useState("Ada");
  const [meetingRooms, setMeetingRooms] = useState("");
  const [buildingHeight, setBuildingHeight] = useState("");
  const [loadingDock, setLoadingDock] = useState("Ada");
  const [containerAccess, setContainerAccess] = useState("Kontainer 20ft");
  const [officeArea, setOfficeArea] = useState("Ada");
  const [spbuBrand, setSpbuBrand] = useState("Pertamina");
  const [dispenserCount, setDispenserCount] = useState("");
  const [tankCount, setTankCount] = useState("");
  const [hospitalType, setHospitalType] = useState("Tipe A");
  const [inpatientBeds, setInpatientBeds] = useState("");
  const [operatingRooms, setOperatingRooms] = useState("");
  const [icuBeds, setIcuBeds] = useState("");
  const [facilitiesList, setFacilitiesList] = useState("");

  // STEP 2: LEGALITAS, HARGA & MEDIA
  const [certificate, setCertificate] = useState("SHM - Sertifikat Hak Milik");
  const [price, setPrice] = useState("");
  const [rentPeriod, setRentPeriod] = useState("Tahun");
  const [images, setImages] = useState<ImageFile[]>([]);

  // STEP 3: LOKASI (API EMSIFA & PETA)
  const [provinces, setProvinces] = useState<ApiRegion[]>([]);
  const [regencies, setRegencies] = useState<ApiRegion[]>([]);
  const [districts, setDistricts] = useState<ApiRegion[]>([]);
  const [villages, setVillages] = useState<ApiRegion[]>([]);

  const [selectedProv, setSelectedProv] = useState<ApiRegion | null>(null);
  const [selectedReg, setSelectedReg] = useState<ApiRegion | null>(null);
  const [selectedDist, setSelectedDist] = useState<ApiRegion | null>(null);
  const [selectedVil, setSelectedVil] = useState<ApiRegion | null>(null);

  const [fullAddress, setFullAddress] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [latitude, setLatitude] = useState("-6.200000");
  const [longitude, setLongitude] = useState("106.816666");

  const [loadingProv, setLoadingProv] = useState(false);
  const [loadingReg, setLoadingReg] = useState(false);
  const [loadingDist, setLoadingDist] = useState(false);
  const [loadingVil, setLoadingVil] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // Load API Wilayah
  useEffect(() => {
    setLoadingProv(true);
    fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
      .then((res) => res.json())
      .then((data) => {
        setProvinces(data);
        setLoadingProv(false);
      })
      .catch(() => setLoadingProv(false));
  }, []);

  const handleProvinceChange = (provId: string) => {
    const prov = provinces.find((p) => p.id === provId) || null;
    setSelectedProv(prov);
    setSelectedReg(null);
    setSelectedDist(null);
    setSelectedVil(null);
    setRegencies([]);
    setDistricts([]);
    setVillages([]);

    if (provId) {
      setLoadingReg(true);
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provId}.json`)
        .then((res) => res.json())
        .then((data) => {
          setRegencies(data);
          setLoadingReg(false);
        })
        .catch(() => setLoadingReg(false));
    }
  };

  const handleRegencyChange = (regId: string) => {
    const reg = regencies.find((r) => r.id === regId) || null;
    setSelectedReg(reg);
    setSelectedDist(null);
    setSelectedVil(null);
    setDistricts([]);
    setVillages([]);

    if (regId) {
      setLoadingDist(true);
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regId}.json`)
        .then((res) => res.json())
        .then((data) => {
          setDistricts(data);
          setLoadingDist(false);
        })
        .catch(() => setLoadingDist(false));
    }
  };

  const handleDistrictChange = (distId: string) => {
    const dist = districts.find((d) => d.id === distId) || null;
    setSelectedDist(dist);
    setSelectedVil(null);
    setVillages([]);

    if (distId) {
      setLoadingVil(true);
      fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${distId}.json`)
        .then((res) => res.json())
        .then((data) => {
          setVillages(data);
          setLoadingVil(false);
        })
        .catch(() => setLoadingVil(false));
    }
  };

  // Upload Foto Logika
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);

    const newImages: ImageFile[] = files.map((file, index) => ({
      id: Math.random().toString(36).substring(2, 9),
      url: URL.createObjectURL(file),
      name: file.name,
      isMain: images.length === 0 && index === 0,
    }));

    setImages((prev) => [...prev, ...newImages]);
  };

  const setMainImage = (id: string) => {
    setImages((prev) => prev.map((img) => ({ ...img, isMain: img.id === id })));
  };

  const removeImage = (id: string) => {
    setImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id);
      if (filtered.length > 0 && !filtered.some((img) => img.isMain)) {
        filtered[0].isMain = true;
      }
      return filtered;
    });
  };

  // Convert Terbilang Harga
  const formatTerbilang = (val: string) => {
    const num = parseInt(val);
    if (isNaN(num) || num === 0) return "";
    if (num >= 1000000000) return `( ~ ${(num / 1000000000).toFixed(2)} Miliar )`;
    if (num >= 1000000) return `( ~ ${(num / 1000000).toFixed(1)} Juta )`;
    if (num >= 1000) return `( ~ ${(num / 1000).toFixed(0)} Ribu )`;
    return "";
  };

  // Options Jenis Properti
  const getPropertyTypeOptions = () => {
    switch (category) {
      case "Hunian":
        return ["Rumah", "Apartemen", "Villa", "Townhouse / Cluster", "Kontrakan", "Kost"];
      case "Komersial":
        return ["Ruko", "Kantor / Perkantoran", "Restoran / Cafe", "Hotel", "Resort"];
      case "Industri & Khusus":
        return ["Gudang", "Pabrik", "SPBU", "Rest Area", "Rumah Sakit"];
      default:
        return ["Rumah"];
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoadingSubmit(true);
    setTimeout(() => {
      setLoadingSubmit(false);
      alert("Properti Berhasil Dipublikasikan!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* HEADER TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h1 className="text-xl font-extrabold text-slate-900">Pasang Iklan Properti Baru</h1>
            <p className="text-xs text-slate-500 mt-0.5">Lengkapi informasi properti secara terstruktur</p>
          </div>
          <Link
            href="/dashboard/member"
            className="text-xs font-bold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-slate-200 px-4 py-2.5 rounded-xl transition self-start sm:self-auto"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>

        {/* STICKY CONTAINER: STATUS TRANSAKSI */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs sticky top-4 z-30">
          <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
            Status Transaksi
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Jual", "Sewa", "Take Over", "Lelang"].map((st) => (
              <button
                key={st}
                type="button"
                onClick={() => setStatus(st)}
                className={`py-2.5 rounded-xl text-xs font-bold border transition ${
                  status === st
                    ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                    : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                }`}
              >
                {st}
              </button>
            ))}
          </div>
        </div>

        {/* STEPPER NAVIGATOR */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { step: 1, label: "1. Detail Properti" },
              { step: 2, label: "2. Harga & Media" },
              { step: 3, label: "3. Lokasi & Peta" },
              { step: 4, label: "4. Review Full" },
            ].map((s) => (
              <button
                key={s.step}
                type="button"
                onClick={() => setCurrentStep(s.step)}
                className={`py-2 px-1 rounded-xl text-[11px] sm:text-xs font-bold transition flex flex-col sm:flex-row items-center justify-center gap-1 ${
                  currentStep === s.step
                    ? "bg-slate-900 text-white"
                    : currentStep > s.step
                    ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                <span>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* STEP CONTENT CONTAINER */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* ==================== STEP 1 ==================== */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-base font-bold text-slate-900 border-b pb-3">Judul & Kategori</h2>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Judul Iklan Properti <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rumah Minimalis Modern 2 Lantai Cluster Premium"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
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
                      onChange={(e) => {
                        setCategory(e.target.value);
                        if (e.target.value === "Hunian") setPropertyType("Rumah");
                        if (e.target.value === "Komersial") setPropertyType("Ruko");
                        if (e.target.value === "Industri & Khusus") setPropertyType("Gudang");
                      }}
                    >
                      <option value="Hunian">Hunian</option>
                      <option value="Komersial">Komersial</option>
                      <option value="Industri & Khusus">Industri & Khusus</option>
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

              {/* FORM DETAIL DINAMIS Sesuai Pilihan Jenis Properti */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex justify-between items-center border-b pb-3">
                  <h2 className="text-base font-bold text-slate-900">Spesifikasi Detail</h2>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
                    {propertyType}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  {/* RUMAH / TOWNHOUSE / VILLA */}
                  {(propertyType === "Rumah" || propertyType === "Townhouse / Cluster" || propertyType === "Villa") && (
                    <>
                      <div>
                        <label className="block font-semibold mb-1">Luas Tanah (m²)</label>
                        <input
                          type="number"
                          placeholder="120"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={landArea}
                          onChange={(e) => setLandArea(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Panjang (m)</label>
                        <input
                          type="number"
                          placeholder="15"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={length}
                          onChange={(e) => setLength(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Lebar (m)</label>
                        <input
                          type="number"
                          placeholder="8"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={width}
                          onChange={(e) => setWidth(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Luas Bangunan (m²)</label>
                        <input
                          type="number"
                          placeholder="90"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={buildingArea}
                          onChange={(e) => setBuildingArea(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Jumlah Lantai</label>
                        <input
                          type="number"
                          placeholder="2"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={floors}
                          onChange={(e) => setFloors(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Kamar Tidur</label>
                        <input
                          type="number"
                          placeholder="3"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={bedrooms}
                          onChange={(e) => setBedrooms(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Kamar Mandi</label>
                        <input
                          type="number"
                          placeholder="2"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={bathrooms}
                          onChange={(e) => setBathrooms(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Garasi (Mobil)</label>
                        <input
                          type="number"
                          placeholder="1"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={garage}
                          onChange={(e) => setGarage(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Carport (Mobil)</label>
                        <input
                          type="number"
                          placeholder="1"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={carport}
                          onChange={(e) => setCarport(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Daya Listrik</label>
                        <select
                          className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                          value={electricity}
                          onChange={(e) => setElectricity(e.target.value)}
                        >
                          {["450 VA", "900 VA", "1300 VA", "2200 VA", "3500 VA", "4400 VA", "5500 VA", "6600 VA", "11000 VA", "22000 VA"].map((pow) => (
                            <option key={pow} value={pow}>{pow}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Sumber Air</label>
                        <select
                          className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                          value={waterSource}
                          onChange={(e) => setWaterSource(e.target.value)}
                        >
                          <option value="Sumur Gali">Sumur Gali</option>
                          <option value="Sumur Bor">Sumur Bor</option>
                          <option value="PDAM">PDAM</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Menghadap</label>
                        <select
                          className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                          value={facing}
                          onChange={(e) => setFacing(e.target.value)}
                        >
                          <option value="Utara">Utara</option>
                          <option value="Timur">Timur</option>
                          <option value="Selatan">Selatan</option>
                          <option value="Barat">Barat</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Kondisi Bangunan</label>
                        <select
                          className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                          value={condition}
                          onChange={(e) => setCondition(e.target.value)}
                        >
                          <option value="Baru">Baru</option>
                          <option value="Bekas">Bekas</option>
                          <option value="Renovasi">Renovasi</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Tahun Dibangun</label>
                        <input
                          type="number"
                          placeholder="2022"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={yearBuilt}
                          onChange={(e) => setYearBuilt(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {/* APARTEMEN */}
                  {propertyType === "Apartemen" && (
                    <>
                      <div>
                        <label className="block font-semibold mb-1">Tipe Unit</label>
                        <input
                          type="text"
                          placeholder="Studio / 2BR / 3BR"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={aptType}
                          onChange={(e) => setAptType(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Luas Unit (m²)</label>
                        <input
                          type="number"
                          placeholder="45"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={buildingArea}
                          onChange={(e) => setBuildingArea(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Bedroom</label>
                        <input
                          type="number"
                          placeholder="2"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={bedrooms}
                          onChange={(e) => setBedrooms(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Bathroom</label>
                        <input
                          type="number"
                          placeholder="1"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={bathrooms}
                          onChange={(e) => setBathrooms(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Lantai Ke-</label>
                        <input
                          type="number"
                          placeholder="15"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={floorLevel}
                          onChange={(e) => setFloorLevel(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Tower</label>
                        <input
                          type="text"
                          placeholder="Tower A"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={tower}
                          onChange={(e) => setTower(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Furnished</label>
                        <select
                          className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                          value={furnished}
                          onChange={(e) => setFurnished(e.target.value)}
                        >
                          <option value="Unfurnished">Unfurnished</option>
                          <option value="Semi Furnished">Semi Furnished</option>
                          <option value="Full Furnished">Full Furnished</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Service Charge / IPL</label>
                        <input
                          type="text"
                          placeholder="Rp 500.000 / bln"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={iplFee}
                          onChange={(e) => setIplFee(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">View</label>
                        <input
                          type="text"
                          placeholder="City View / Pool View"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={view}
                          onChange={(e) => setView(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {/* SPBU */}
                  {propertyType === "SPBU" && (
                    <>
                      <div>
                        <label className="block font-semibold mb-1">Luas Tanah (m²)</label>
                        <input
                          type="number"
                          placeholder="2000"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={landArea}
                          onChange={(e) => setLandArea(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Merek SPBU</label>
                        <input
                          type="text"
                          placeholder="Pertamina / Shell / Vivo"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={spbuBrand}
                          onChange={(e) => setSpbuBrand(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Jumlah Dispenser</label>
                        <input
                          type="number"
                          placeholder="6"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={dispenserCount}
                          onChange={(e) => setDispenserCount(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Jumlah Tangki Pendam</label>
                        <input
                          type="number"
                          placeholder="4"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={tankCount}
                          onChange={(e) => setTankCount(e.target.value)}
                        />
                      </div>
                    </>
                  )}

                  {/* RUMAH SAKIT */}
                  {propertyType === "Rumah Sakit" && (
                    <>
                      <div>
                        <label className="block font-semibold mb-1">Tipe RS</label>
                        <select
                          className="w-full p-2.5 rounded-xl border border-slate-300 bg-white"
                          value={hospitalType}
                          onChange={(e) => setHospitalType(e.target.value)}
                        >
                          <option value="Tipe A">Tipe A</option>
                          <option value="Tipe B">Tipe B</option>
                          <option value="Tipe C">Tipe C</option>
                        </select>
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Jumlah Kamar Rawat Inap</label>
                        <input
                          type="number"
                          placeholder="100"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={inpatientBeds}
                          onChange={(e) => setInpatientBeds(e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block font-semibold mb-1">Jumlah Ruang Operasi</label>
                        <input
                          type="number"
                          placeholder="4"
                          className="w-full p-2.5 rounded-xl border border-slate-300"
                          value={operatingRooms}
                          onChange={(e) => setOperatingRooms(e.target.value)}
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCurrentStep(2)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition"
              >
                Lanjut ke Step 2: Harga & Media →
              </button>
            </div>
          )}

          {/* ==================== STEP 2 ==================== */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-base font-bold text-slate-900 border-b pb-3">Legalitas & Harga Properti</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Sertifikat / Legalitas</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
                      value={certificate}
                      onChange={(e) => setCertificate(e.target.value)}
                    >
                      <option value="SHM - Sertifikat Hak Milik">SHM - Sertifikat Hak Milik</option>
                      <option value="HGB - Hak Guna Bangunan">HGB - Hak Guna Bangunan</option>
                      <option value="Girik / Adat">Girik / Adat</option>
                      <option value="PPJB">PPJB</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Harga Properti (Rp) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      required
                      placeholder="Contoh: 1500000000"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                    {price && (
                      <p className="text-xs font-bold text-blue-600 mt-1">{formatTerbilang(price)}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* UPLOAD FOTO PROPERTI */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-base font-bold text-slate-900 border-b pb-3">Upload Foto Properti</h2>

                <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center bg-slate-50 hover:bg-slate-100/50 transition cursor-pointer">
                  <input
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="image-upload"
                  />
                  <label htmlFor="image-upload" className="cursor-pointer block">
                    <p className="text-sm font-semibold text-blue-600">Klik untuk upload foto properti</p>
                    <p className="text-xs text-slate-400 mt-1">Pilih beberapa foto sekaligus (JPG, PNG, WebP)</p>
                  </label>
                </div>

                {images.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                    {images.map((img) => (
                      <div key={img.id} className="relative group rounded-xl overflow-hidden border aspect-square bg-slate-100">
                        <img src={img.url} alt="Preview" className="w-full h-full object-cover" />
                        {img.isMain && (
                          <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                            Foto Utama
                          </span>
                        )}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-between p-2">
                          <button
                            type="button"
                            onClick={() => removeImage(img.id)}
                            className="self-end bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-md"
                          >
                            Hapus
                          </button>
                          {!img.isMain && (
                            <button
                              type="button"
                              onClick={() => setMainImage(img.id)}
                              className="w-full bg-white text-slate-900 text-[10px] font-bold py-1 rounded-md"
                            >
                              Set Utama
                            </button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="w-1/2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3.5 rounded-xl text-sm transition"
                >
                  ← Kembali
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition"
                >
                  Lanjut ke Step 3: Lokasi →
                </button>
              </div>
            </div>
          )}

          {/* ==================== STEP 3 ==================== */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-base font-bold text-slate-900 border-b pb-3">Lokasi Properti (API Wilayah)</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Provinsi</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white"
                      value={selectedProv?.id || ""}
                      onChange={(e) => handleProvinceChange(e.target.value)}
                    >
                      <option value="">{loadingProv ? "Memuat..." : "-- Pilih Provinsi --"}</option>
                      {provinces.map((p) => (
                        <option key={p.id} value={p.id}>{p.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kabupaten / Kota</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white disabled:bg-slate-100"
                      value={selectedReg?.id || ""}
                      onChange={(e) => handleRegencyChange(e.target.value)}
                      disabled={!selectedProv || loadingReg}
                    >
                      <option value="">{loadingReg ? "Memuat..." : "-- Pilih Kab / Kota --"}</option>
                      {regencies.map((r) => (
                        <option key={r.id} value={r.id}>{r.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kecamatan</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white disabled:bg-slate-100"
                      value={selectedDist?.id || ""}
                      onChange={(e) => handleDistrictChange(e.target.value)}
                      disabled={!selectedReg || loadingDist}
                    >
                      <option value="">{loadingDist ? "Memuat..." : "-- Pilih Kecamatan --"}</option>
                      {districts.map((d) => (
                        <option key={d.id} value={d.id}>{d.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kelurahan / Desa</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white disabled:bg-slate-100"
                      value={selectedVil?.id || ""}
                      onChange={(e) => {
                        const vil = villages.find((v) => v.id === e.target.value) || null;
                        setSelectedVil(vil);
                      }}
                      disabled={!selectedDist || loadingVil}
                    >
                      <option value="">{loadingVil ? "Memuat..." : "-- Pilih Kelurahan --"}</option>
                      {villages.map((v) => (
                        <option key={v.id} value={v.id}>{v.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Alamat Jalan & No. Rumah</label>
                  <textarea
                    rows={2}
                    placeholder="Jl. Sudirman No. 12, RT 01 / RW 02"
                    className="w-full p-3 rounded-xl border border-slate-300 text-sm outline-none"
                    value={fullAddress}
                    onChange={(e) => setFullAddress(e.target.value)}
                  />
                </div>
              </div>

              {/* FITUR PETA INTERAKTIF */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-base font-bold text-slate-900 border-b pb-3">Peta Lokasi (Pinpoint GPS)</h2>
                <div className="w-full h-64 bg-slate-100 rounded-2xl overflow-hidden relative border border-slate-200 flex items-center justify-center">
                  <iframe
                    title="Peta Lokasi"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    src={`https://maps.google.com/maps?q=${latitude},${longitude}&z=15&output=embed`}
                  ></iframe>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="w-1/2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3.5 rounded-xl text-sm transition"
                >
                  ← Kembali
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition"
                >
                  Lanjut ke Review →
                </button>
              </div>
            </div>
          )}

          {/* ==================== STEP 4 ==================== */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h2 className="text-lg font-extrabold text-slate-900 border-b pb-3">Full Preview Listingan</h2>

                {/* Cover & Gambar */}
                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative">
                  {images.length > 0 ? (
                    <img
                      src={(images.find((img) => img.isMain) || images[0]).url}
                      alt="Cover Utama"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 text-xs">Belum Ada Foto</div>
                  )}
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-lg">
                    {status}
                  </span>
                </div>

                <div className="text-2xl font-black text-blue-600">
                  Rp {price ? parseInt(price).toLocaleString("id-ID") : "0"} {status === "Sewa" ? `/ ${rentPeriod}` : ""}
                </div>

                <h3 className="text-lg font-bold text-slate-900">{title || "Judul Belum Diisi"}</h3>

                <p className="text-xs text-slate-500">
                  📍 {[fullAddress, selectedVil?.name, selectedDist?.name, selectedReg?.name, selectedProv?.name].filter(Boolean).join(", ")}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-4 rounded-xl border border-slate-200">
                  <div>Kategori: <b>{category}</b></div>
                  <div>Jenis: <b>{propertyType}</b></div>
                  <div>Sertifikat: <b>{certificate}</b></div>
                  {landArea && <div>Luas Tanah: <b>{landArea} m²</b></div>}
                  {buildingArea && <div>Luas Bangunan: <b>{buildingArea} m²</b></div>}
                  {bedrooms && <div>Kamar Tidur: <b>{bedrooms}</b></div>}
                  {bathrooms && <div>Kamar Mandi: <b>{bathrooms}</b></div>}
                  {electricity && <div>Daya Listrik: <b>{electricity}</b></div>}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className="w-1/3 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-4 rounded-xl text-xs sm:text-sm transition"
                >
                  ← Edit Data
                </button>
                <button
                  type="submit"
                  disabled={loadingSubmit}
                  className="w-2/3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl text-xs sm:text-sm transition shadow-lg shadow-emerald-600/20"
                >
                  {loadingSubmit ? "Menerbitkan..." : "🚀 PUBLIKASIKAN PROPERTI"}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}