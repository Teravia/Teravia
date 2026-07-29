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
  // 1. Status Transaksi & Informasi Utama
  const [status, setStatus] = useState("Jual");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rentPeriod, setRentPeriod] = useState("Tahun");
  const [certificate, setCertificate] = useState("SHM - Sertifikat Hak Milik");

  // 2. Kategori & Jenis Properti
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // 3. Detail Properti Spesifik (Dynamic State)
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [floors, setFloors] = useState("");
  const [floorLevel, setFloorLevel] = useState("");
  const [carport, setCarport] = useState("");
  const [electricity, setElectricity] = useState("");
  const [waterSource, setWaterSource] = useState("PDAM");
  const [furnishing, setFurnishing] = useState("Unfurnished");
  const [zoning, setZoning] = useState("Kuning (Permukiman)");
  const [frontWidth, setFrontWidth] = useState("");
  const [containerAccess, setContainerAccess] = useState("Mobil Engkel / Double");
  const [floorLoad, setFloorLoad] = useState("");
  const [totalRooms, setTotalRooms] = useState("");
  const [occupancyRate, setOccupancyRate] = useState("");
  const [capacityPeople, setCapacityPeople] = useState("");
  const [parkingCapacity, setParkingCapacity] = useState("");

  // 4. API Wilayah Emsifa State
  const [provinces, setProvinces] = useState<ApiRegion[]>([]);
  const [regencies, setRegencies] = useState<ApiRegion[]>([]);
  const [districts, setDistricts] = useState<ApiRegion[]>([]);
  const [villages, setVillages] = useState<ApiRegion[]>([]);

  const [selectedProv, setSelectedProv] = useState<ApiRegion | null>(null);
  const [selectedReg, setSelectedReg] = useState<ApiRegion | null>(null);
  const [selectedDist, setSelectedDist] = useState<ApiRegion | null>(null);
  const [selectedVil, setSelectedVil] = useState<ApiRegion | null>(null);

  const [loadingProv, setLoadingProv] = useState(false);
  const [loadingReg, setLoadingReg] = useState(false);
  const [loadingDist, setLoadingDist] = useState(false);
  const [loadingVil, setLoadingVil] = useState(false);

  // 5. General State
  const [description, setDescription] = useState("");
  const [images, setImages] = useState<ImageFile[]>([]);
  const [showPreview, setShowPreview] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  // FETCH PROVINSI SAAAT COMPONENT MOUNT
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

  // FETCH KABUPATEN/KOTA
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

  // FETCH KECAMATAN
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

  // FETCH KELURAHAN
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

  // PILIHAN JENIS PROPERTI PER KATEGORI
  const getPropertyTypeOptions = () => {
    switch (category) {
      case "Hunian":
        return ["Rumah", "Apartemen", "Vila", "Cluster", "Townhouse", "Kondominium"];
      case "Komersial":
        return ["Ruko", "Rukan", "Hotel", "Kost", "Kontrakan", "Gedung Perkantoran", "Gudang", "Pabrik"];
      case "Tanah & Lahan":
        return ["Tanah Kavling", "Lahan Pertanian", "Lahan Industri", "Tanah Komersial"];
      case "Institusi & Fasilitas":
        return ["Gedung Sekolah/Kampus", "Rumah Sakit/Klinik", "Gedung Olahraga", "Gedung Pertemuan"];
      default:
        return [];
    }
  };

  // HANDLER UPLOAD FOTO
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (images.length === 0) {
      alert("Harap unggah minimal 1 foto properti.");
      return;
    }
    setLoadingSubmit(true);
    setTimeout(() => {
      setLoadingSubmit(false);
      alert("Listing properti berhasil diterbitkan!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8 text-slate-800">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Pasang Iklan Properti Baru</h1>
            <p className="text-xs text-slate-500 mt-1">Isi informasi detail properti secara akurat</p>
          </div>
          <Link
            href="/dashboard/member"
            className="text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-4 py-2 rounded-xl self-start sm:self-auto"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. STATUS TRANSAKSI */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Status Transaksi <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Jual", "Sewa", "Take Over", "Lelang"].map((st) => (
                <button
                  key={st}
                  type="button"
                  onClick={() => setStatus(st)}
                  className={`py-3 rounded-xl text-xs font-bold border transition ${
                    status === st
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {st}
                </button>
              ))}
            </div>
          </div>

          {/* 2. INFORMASI UTAMA */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Informasi Utama</h2>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Judul Iklan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Rumah Minimalis Modern 2 Lantai Strategis di Dekat Stasiun"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Harga Nominal (Rp) <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    required
                    placeholder="Contoh: 850000000"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  {status === "Sewa" && (
                    <select
                      className="px-3 py-2.5 rounded-xl border border-slate-300 text-xs font-semibold bg-white"
                      value={rentPeriod}
                      onChange={(e) => setRentPeriod(e.target.value)}
                    >
                      <option value="Bulan">/ Bulan</option>
                      <option value="Tahun">/ Tahun</option>
                    </select>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Legalitas / Sertifikat</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  value={certificate}
                  onChange={(e) => setCertificate(e.target.value)}
                >
                  <option value="SHM - Sertifikat Hak Milik">SHM - Sertifikat Hak Milik</option>
                  <option value="HGB - Hak Guna Bangunan">HGB - Hak Guna Bangunan</option>
                  <option value="Girik / Adat">Girik / Adat</option>
                  <option value="PPJB">PPJB</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            </div>
          </div>

          {/* 3. UPLOAD FOTO */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Foto Properti <span className="text-red-500">*</span>
            </h2>

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
                <p className="text-xs text-slate-400 mt-1">Format: JPG, PNG, WebP (Bisa pilih beberapa sekaligus)</p>
              </label>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {images.map((img) => (
                  <div key={img.id} className="relative group rounded-xl overflow-hidden border border-slate-200 aspect-square bg-slate-100">
                    <img src={img.url} alt="Upload Preview" className="w-full h-full object-cover" />
                    {img.isMain && (
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-xs">
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

          {/* 4. KATEGORI & JENIS PROPERTI */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Kategori Properti</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kategori</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  value={category}
                  onChange={(e) => {
                    const newCat = e.target.value;
                    setCategory(newCat);
                    if (newCat === "Hunian") setPropertyType("Rumah");
                    if (newCat === "Komersial") setPropertyType("Ruko");
                    if (newCat === "Tanah & Lahan") setPropertyType("Tanah Kavling");
                    if (newCat === "Institusi & Fasilitas") setPropertyType("Gedung Sekolah/Kampus");
                  }}
                >
                  <option value="Hunian">Hunian</option>
                  <option value="Komersial">Komersial</option>
                  <option value="Tanah & Lahan">Tanah & Lahan</option>
                  <option value="Institusi & Fasilitas">Institusi & Fasilitas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Jenis Properti</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  {getPropertyTypeOptions().map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* 5. DETAIL SPESIFIKASI DINAMIS */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h2 className="text-base font-bold text-slate-900">Spesifikasi Detail</h2>
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                {propertyType}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Luas Tanah (Untuk Semua KECUALI Apartemen/Kondominium) */}
              {propertyType !== "Apartemen" && propertyType !== "Kondominium" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Luas Tanah (m²)</label>
                  <input
                    type="number"
                    placeholder="Contoh: 120"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={landArea}
                    onChange={(e) => setLandArea(e.target.value)}
                  />
                </div>
              )}

              {/* Luas Bangunan (Untuk Semua KECUALI Tanah & Lahan) */}
              {category !== "Tanah & Lahan" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Luas Bangunan (m²)</label>
                  <input
                    type="number"
                    placeholder="Contoh: 90"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={buildingArea}
                    onChange={(e) => setBuildingArea(e.target.value)}
                  />
                </div>
              )}

              {/* Kamar Tidur & Mandi (Hunian / Apartemen / Vila) */}
              {(category === "Hunian" || propertyType === "Vila") && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kamar Tidur</label>
                    <input
                      type="number"
                      placeholder="Contoh: 3"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kamar Mandi</label>
                    <input
                      type="number"
                      placeholder="Contoh: 2"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={bathrooms}
                      onChange={(e) => setBathrooms(e.target.value)}
                    />
                  </div>
                </>
              )}

              
              {/* Jumlah Lantai (Untuk Rumah/Ruko/Gedung/Hotel) */}
              {propertyType !== "Apartemen" && propertyType !== "Kondominium" && category !== "Tanah & Lahan" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Jumlah Lantai</label>
                  <input
                    type="number"
                    placeholder="Contoh: 2"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={floors}
                    onChange={(e) => setFloors(e.target.value)}
                  />
                </div>
              )}

              {/* Posisi Lantai (Khusus Apartemen/Kondominium) */}
              {(propertyType === "Apartemen" || propertyType === "Kondominium") && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Lantai Ke-</label>
                  <input
                    type="number"
                    placeholder="Contoh: 12"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={floorLevel}
                    onChange={(e) => setFloorLevel(e.target.value)}
                  />
                </div>
              )}

              {/* Furnishing (Khusus Hunian / Apartemen / Perkantoran) */}
              {(category === "Hunian" || propertyType === "Gedung Perkantoran") && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Kondisi Perabotan</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    value={furnishing}
                    onChange={(e) => setFurnishing(e.target.value)}
                  >
                    <option value="Unfurnished">Unfurnished (Kosongan)</option>
                    <option value="Semi Furnished">Semi Furnished</option>
                    <option value="Full Furnished">Full Furnished</option>
                  </select>
                </div>
              )}

              {/* Garasi / Carport (Khusus Rumah, Vila, Cluster) */}
              {category === "Hunian" && propertyType !== "Apartemen" && propertyType !== "Kondominium" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Kapasitas Garasi/Carport</label>
                  <input
                    type="number"
                    placeholder="Contoh: 2 Mobil"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={carport}
                    onChange={(e) => setCarport(e.target.value)}
                  />
                </div>
              )}

              {/* Pasokan Air */}
              {category !== "Tanah & Lahan" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Sumber Air</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    value={waterSource}
                    onChange={(e) => setWaterSource(e.target.value)}
                  >
                    <option value="PDAM">PDAM</option>
                    <option value="Sumur Bor / Jetpump">Sumur Bor / Jetpump</option>
                    <option value="WTP / Pengelola">WTP / Pengelola Cluster</option>
                  </select>
                </div>
              )}

              {/* Daya Listrik */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Daya Listrik (VA)</label>
                <input
                  type="number"
                  placeholder="Contoh: 2200"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  value={electricity}
                  onChange={(e) => setElectricity(e.target.value)}
                />
              </div>

              {/* Field Spesifik Tanah */}
              {category === "Tanah & Lahan" && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Lebar Depan / Muka (Meter)</label>
                    <input
                      type="number"
                      placeholder="Contoh: 15"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={frontWidth}
                      onChange={(e) => setFrontWidth(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Peruntukan (Zoning)</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                      value={zoning}
                      onChange={(e) => setZoning(e.target.value)}
                    >
                      <option value="Kuning (Permukiman)">Kuning (Permukiman)</option>
                      <option value="Merah (Komersial)">Merah (Komersial)</option>
                      <option value="Hijau (RTH / Pertanian)">Hijau (RTH / Pertanian)</option>
                      <option value="Industri / Pergudangan">Industri / Pergudangan</option>
                    </select>
                  </div>
                </>
              )}

              {/* Field Spesifik Gudang & Pabrik */}
              {(propertyType === "Gudang" || propertyType === "Pabrik") && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Akses Jalan Kontainer</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                      value={containerAccess}
                      onChange={(e) => setContainerAccess(e.target.value)}
                    >
                      <option value="Mobil Engkel / Double">Mobil Engkel / Double</option>
                      <option value="Kontainer 20 Feet">Kontainer 20 Feet</option>
                      <option value="Kontainer 40 Feet">Kontainer 40 Feet / Tronton</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kapasitas Beban Lantai (Ton/m²)</label>
                    <input
                      type="text"
                      placeholder="Contoh: 5 Ton/m²"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={floorLoad}
                      onChange={(e) => setFloorLoad(e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Field Spesifik Hotel / Kost / Kontrakan / RS */}
              {(propertyType === "Hotel" || propertyType === "Kost" || propertyType === "Kontrakan" || propertyType === "Rumah Sakit/Klinik") && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Total Kamar / Bed</label>
                    <input
                      type="number"
                      placeholder="Contoh: 20"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={totalRooms}
                      onChange={(e) => setTotalRooms(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Tingkat Okupansi (%)</label>
                    <input
                      type="text"
                      placeholder="Contoh: 85%"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={occupancyRate}
                      onChange={(e) => setOccupancyRate(e.target.value)}
                    />
                  </div>
                </>
              )}

              {/* Field Spesifik Fasilitas Publik / GOR / Sekolah */}
              {category === "Institusi & Fasilitas" && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kapasitas Pengunjung (Orang)</label>
                    <input
                      type="text"
                      placeholder="Contoh: 1000 Orang"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={capacityPeople}
                      onChange={(e) => setCapacityPeople(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kapasitas Parkir (Mobil)</label>
                    <input
                      type="text"
                      placeholder="Contoh: 50 Mobil"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                      value={parkingCapacity}
                      onChange={(e) => setParkingCapacity(e.target.value)}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* 6. DESKRIPSI & LOKASI WILAYAH BERJENJANG (API EMSIFA) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Deskripsi & Lokasi</h2>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Deskripsi Lengkap</label>
              <textarea
                rows={4}
                placeholder="Jelaskan keunggulan properti, fasilitas terdekat, akses jalan, dll..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Dropdown Berjenjang API Wilayah */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Provinsi</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  value={selectedProv?.id || ""}
                  onChange={(e) => handleProvinceChange(e.target.value)}
                  disabled={loadingProv}
                >
                  <option value="">{loadingProv ? "Memuat Provinsi..." : "-- Pilih Provinsi --"}</option>
                  {provinces.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kabupaten / Kota</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-100 disabled:text-slate-400"
                  value={selectedReg?.id || ""}
                  onChange={(e) => handleRegencyChange(e.target.value)}
                  disabled={!selectedProv || loadingReg}
                >
                  <option value="">{loadingReg ? "Memuat Kota..." : "-- Pilih Kabupaten / Kota --"}</option>
                  {regencies.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kecamatan</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-100 disabled:text-slate-400"
                  value={selectedDist?.id || ""}
                  onChange={(e) => handleDistrictChange(e.target.value)}
                  disabled={!selectedReg || loadingDist}
                >
                  <option value="">{loadingDist ? "Memuat Kecamatan..." : "-- Pilih Kecamatan --"}</option>
                  {districts.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kelurahan / Desa</label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-blue-500 outline-none disabled:bg-slate-100 disabled:text-slate-400"
                  value={selectedVil?.id || ""}
                  onChange={(e) => {
                    const vil = villages.find((v) => v.id === e.target.value) || null;
                    setSelectedVil(vil);
                  }}
                  disabled={!selectedDist || loadingVil}
                >
                  <option value="">{loadingVil ? "Memuat Kelurahan..." : "-- Pilih Kelurahan --"}</option>
                  {villages.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-4 pt-2">
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="w-1/2 bg-white border border-slate-300 text-slate-700 font-bold py-3.5 rounded-xl text-xs sm:text-sm hover:bg-slate-50 transition"
            >
              👁️ Preview Iklan
            </button>
            <button
              type="submit"
              disabled={loadingSubmit}
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm transition shadow-md shadow-blue-500/20"
            >
              {loadingSubmit ? "Menerbitkan..." : "🚀 Publikasikan Iklan"}
            </button>
          </div>
        </form>

        {/* MODAL PREVIEW IKLAN */}
        {showPreview && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900 text-sm">Preview Tampilan Iklan</h3>
                <button
                  type="button"
                  onClick={() => setShowPreview(false)}
                  className="text-slate-400 hover:text-slate-600 font-bold text-base"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative">
                  {images.length > 0 ? (
                    <img
                      src={(images.find((img) => img.isMain) || images[0]).url}
                      alt="Main Preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-400 text-xs">
                      Belum ada foto
                    </div>
                  )}
                  <span className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {status}
                  </span>
                </div>

                <div className="text-lg font-black text-blue-600">
                  Rp {price ? parseInt(price).toLocaleString("id-ID") : "0"}{" "}
                  {status === "Sewa" ? `/ ${rentPeriod}` : ""}
                </div>

                <h4 className="font-bold text-slate-800 text-sm">{title || "Judul Properti Belum Diisi"}</h4>

                <p className="text-xs text-slate-500">
                  📍 {[selectedVil?.name, selectedDist?.name, selectedReg?.name, selectedProv?.name].filter(Boolean).join(", ") || "Lokasi belum dipilih"}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div>Kategori: <b>{category}</b></div>
                  <div>Jenis: <b>{propertyType}</b></div>
                  {landArea && <div>LT: <b>{landArea} m²</b></div>}
                  {buildingArea && <div>LB: <b>{buildingArea} m²</b></div>}
                  {bedrooms && <div>KT: <b>{bedrooms}</b></div>}
                  {bathrooms && <div>KM: <b>{bathrooms}</b></div>}
                  {electricity && <div>Listrik: <b>{electricity} VA</b></div>}
                  <div>Legalitas: <b>{certificate}</b></div>
                </div>

                <p className="text-xs text-slate-600 italic line-clamp-3">
                  "{description || "Belum ada deskripsi."}"
                </p>
              </div>

              <button
                type="button"
                onClick={() => setShowPreview(false)}
                className="w-full bg-slate-900 text-white font-bold py-2.5 rounded-xl text-xs mt-2"
              >
                Tutup Preview
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
