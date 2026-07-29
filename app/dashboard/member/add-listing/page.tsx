"use client";

import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

// 1. Structural Types
type PropertyCategory = "Hunian" | "Komersial" | "Tanah & Lahan" | "Institusi & Fasilitas";

interface PropertyImage {
  id: string;
  originalUrl: string;
  svgUrl: string;
  name: string;
  isMain: boolean;
}

// 2. Dynamic Categories Data
const CATEGORY_TYPES: Record<PropertyCategory, string[]> = {
  Hunian: ["Rumah", "Apartemen", "Townhouse", "Cluster", "Villa", "Kondominium"],
  Komersial: ["Ruko", "Rukan", "Kontrakan", "Kost-kostan", "Hotel", "Gedung Perkantoran", "Gudang", "Pabrik", "Kios / Lapak"],
  "Tanah & Lahan": ["Tanah Kavling", "Lahan Pertanian / Perkebunan", "Lahan Industri", "Tanah Komersial"],
  "Institusi & Fasilitas": ["Rumah Sakit / Klinik", "Gedung Sekolah / Kampus", "Spbu", "Tempat Ibadah", "Gedung Olahraga"],
};

export default function AddListingPage() {
  // Form State
  const [status, setStatus] = useState<"Jual" | "Sewa" | "Take Over" | "Lelang">("Jual");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rentPeriod, setRentPeriod] = useState("Bulan");
  const [category, setCategory] = useState<PropertyCategory>("Hunian");
  const [propertyType, setPropertyType] = useState(CATEGORY_TYPES["Hunian"][0]);
  const [certificate, setCertificate] = useState("SHM - Sertifikat Hak Milik");
  const [description, setDescription] = useState("");

  // Dynamic Specifications
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [floors, setFloors] = useState("");
  const [electricity, setElectricity] = useState("");
  const [zoning, setZoning] = useState("Kuning (Permukiman)");
  const [facilityCapacity, setFacilityCapacity] = useState("");

  // Regional Cascading State
  const [provinces, setProvinces] = useState<{ id: string; name: string }[]>([
    { id: "32", name: "Jawa Barat" },
    { id: "31", name: "DKI Jakarta" },
    { id: "33", name: "Jawa Tengah" },
  ]);
  const [regencies, setRegencies] = useState<{ id: string; name: string }[]>([]);
  const [districts, setDistricts] = useState<{ id: string; name: string }[]>([]);
  const [villages, setVillages] = useState<{ id: string; name: string }[]>([]);

  const [selectedProv, setSelectedProv] = useState("");
  const [selectedReg, setSelectedReg] = useState("");
  const [selectedDist, setSelectedDist] = useState("");
  const [selectedVil, setSelectedVil] = useState("");

  // Image Upload State
  const [images, setImages] = useState<PropertyImage[]>([]);

  // Ads & Preview Modal State
  const [enableAds, setEnableAds] = useState(false);
  const [adsPackage, setAdsPackage] = useState("highlight");
  const [showPreviewModal, setShowPreviewModal] = useState(false);

  // Sync Property Type when Category Changes
  useEffect(() => {
    const defaultType = CATEGORY_TYPES[category][0];
    setPropertyType(defaultType);
  }, [category]);

  // Handle Region Cascading Logic
  const handleProvinceChange = (provId: string) => {
    setSelectedProv(provId);
    setSelectedReg("");
    setSelectedDist("");
    setSelectedVil("");

    if (provId === "32") {
      setRegencies([
        { id: "3273", name: "Kota Bandung" },
        { id: "3204", name: "Kab. Bandung" },
        { id: "3277", name: "Kota Cimahi" },
      ]);
    } else {
      setRegencies([{ id: "3171", name: "Jakarta Selatan" }]);
    }
  };

  const handleRegencyChange = (regId: string) => {
    setSelectedReg(regId);
    setSelectedDist("");
    setSelectedVil("");

    if (regId === "3273") {
      setDistricts([
        { id: "3273010", name: "Coblong" },
        { id: "3273020", name: "Buahbatu" },
      ]);
    } else {
      setDistricts([{ id: "3171010", name: "Kebayoran Baru" }]);
    }
  };

  const handleDistrictChange = (distId: string) => {
    setSelectedDist(distId);
    setSelectedVil("");

    if (distId === "3273010") {
      setVillages([
        { id: "1", name: "Dago" },
        { id: "2", name: "Lebak Siliwangi" },
      ]);
    } else {
      setVillages([{ id: "3", name: "Senayan" }]);
    }
  };

  // Convert Uploaded Image to SVG Embedded Wrapper
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target?.result as string;

        // Auto-generate SVG Wrapper holding the exact base64 raster image without quality loss
        const svgString = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%"><image href="${base64Data}" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"/></svg>`;
        const svgBlob = new Blob([svgString], { type: "image/svg+xml" });
        const svgUrl = URL.createObjectURL(svgBlob);

        const newImage: PropertyImage = {
          id: Math.random().toString(36).substring(2, 9),
          originalUrl: base64Data,
          svgUrl: svgUrl,
          name: file.name,
          isMain: images.length === 0, // First uploaded image becomes main automatically
        };

        setImages((prev) => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    });
  };

  const setMainImage = (id: string) => {
    setImages((prev) =>
      prev.map((img) => ({
        ...img,
        isMain: img.id === id,
      }))
    );
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
    alert("Iklan berhasil dikirim dan siap ditayangkan!");
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Pasang Iklan Properti Baru
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Lengkapi detail data properti Anda untuk menjangkau jutaan pembeli potensial di Teravia.
            </p>
          </div>
          <Link
            href="/dashboard/member/listings"
            className="text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-4 py-2 rounded-xl text-center self-start sm:self-auto"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* 1. STATUS TRANSAKSI & JUDUL */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2">1. Informasi Utama</h2>
            
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-2">
                Status Transaksi <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {(["Jual", "Sewa", "Take Over", "Lelang"] as const).map((st) => (
                  <button
                    key={st}
                    type="button"
                    onClick={() => setStatus(st)}
                    className={`py-2.5 px-4 rounded-xl text-xs font-bold transition ${
                      status === st
                        ? "bg-blue-600 text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Judul Iklan <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Rumah Minimalis Modern 2 Lantai Cluster Exclusive Kopo"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Harga Nominal (Rp) <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  required
                  placeholder="Contoh: 850000000"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>

              {status === "Sewa" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Periode Sewa</label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    value={rentPeriod}
                    onChange={(e) => setRentPeriod(e.target.value)}
                  >
                    <option value="Bulan">Per Bulan</option>
                    <option value="Tahun">Per Tahun</option>
                  </select>
                </div>
              )}
            </div>
          </div>

          {/* 2. UPLOAD FOTO & CONVERTER SVG */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2">2. Upload Foto Properti</h2>
            
            <div className="border-2 border-dashed border-slate-300 rounded-2xl p-6 text-center hover:bg-slate-50 transition cursor-pointer relative">
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <div className="text-3xl mb-2">📸</div>
              <p className="text-xs sm:text-sm font-semibold text-slate-700">
                Klik atau tarik beberapa foto properti ke sini
              </p>
              <p className="text-[11px] text-slate-400 mt-1">
                Format didukung: JPG, PNG, WebP. Sistem otomatis memproses ke SVG vector container.
              </p>
            </div>

            {/* Image Preview Grid */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className={`relative rounded-xl overflow-hidden border-2 bg-slate-100 ${
                      img.isMain ? "border-blue-600 ring-2 ring-blue-500/20" : "border-slate-200"
                    }`}
                  >
                    <div className="relative h-28 w-full">
                      <Image
                        src={img.svgUrl}
                        alt={img.name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                    
                    {img.isMain && (
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-[9px] font-bold px-2 py-0.5 rounded-md">
                        FOTO UTAMA
                      </span>
                    )}

                    <div className="p-2 bg-white flex justify-between items-center text-xs">
                      {!img.isMain && (
                        <button
                          type="button"
                          onClick={() => setMainImage(img.id)}
                          className="text-[10px] font-bold text-blue-600 hover:underline"
                        >
                          Jadikan Utama
                        </button>
                      )}
                      <button
                        type="button"
                        onClick={() => removeImage(img.id)}
                        className="text-[10px] font-bold text-red-500 hover:underline ml-auto"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 3. KATEGORI & DYNAMIC FIELDS */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b pb-2">3. Kategori & Detail Spesifikasi</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Kategori Properti <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  value={category}
                  onChange={(e) => setCategory(e.target.value as PropertyCategory)}
                >
                  <option value="Hunian">Hunian</option>
                  <option value="Komersial">Komersial</option>
                  <option value="Tanah & Lahan">Tanah & Lahan</option>
                  <option value="Institusi & Fasilitas">Institusi & Fasilitas</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Jenis Properti <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                >
                  {CATEGORY_TYPES[category].map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* DYNAMIC FIELD PER KATEGORI */}
            <div className="bg-slate-50 p-4 rounded-xl space-y-4 border border-slate-200/60 mt-4">
              <span className="text-xs font-bold text-blue-700">
                Spesifikasi Khusus ({category} - {propertyType}):
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* Field untuk Hunian & Komersial */}
                {(category === "Hunian" || category === "Komersial" || category === "Institusi & Fasilitas") && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Luas Bangunan (m²)</label>
                    <input
                      type="number"
                      placeholder="Contoh: 120"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                      value={buildingArea}
                      onChange={(e) => setBuildingArea(e.target.value)}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Luas Tanah (m²)</label>
                  <input
                    type="number"
                    placeholder="Contoh: 90"
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                    value={landArea}
                    onChange={(e) => setLandArea(e.target.value)}
                  />
                </div>

                {category === "Hunian" && (
                  <>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Kamar Tidur</label>
                      <input
                        type="number"
                        placeholder="Contoh: 3"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                        value={bedrooms}
                        onChange={(e) => setBedrooms(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Kamar Mandi</label>
                      <input
                        type="number"
                        placeholder="Contoh: 2"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                        value={bathrooms}
                        onChange={(e) => setBathrooms(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Jumlah Lantai</label>
                      <input
                        type="number"
                        placeholder="Contoh: 2"
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                        value={floors}
                        onChange={(e) => setFloors(e.target.value)}
                      />
                    </div>
                  </>
                )}

                {category === "Tanah & Lahan" && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Peruntukan (Zoning)</label>
                    <select
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                      value={zoning}
                      onChange={(e) => setZoning(e.target.value)}
                    >
                      <option value="Kuning (Permukiman)">Kuning (Permukiman)</option>
                      <option value="Merah (Komersial)">Merah (Komersial)</option>
                      <option value="Hijau (RTH / Pertanian)">Hijau (RTH / Pertanian)</option>
                      <option value="Industri / Pergudangan">Industri / Pergudangan</option>
                    </select>
                  </div>
                )}

                {category === "Institusi & Fasilitas" && (
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Kapasitas Orang / Mobil</label>
                    <input
                      type="text"
                      placeholder="Contoh: 500 Orang"
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs bg-white"
                      value={facilityCapacity}
                      onChange={(e) => setFacilityCapacity(e.target.value)}
                    />
                  </div>
          
