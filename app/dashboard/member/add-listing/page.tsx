"use client";

import { useState } from "react";
import Link from "next/link";

interface ImageFile {
  id: string;
  url: string;
  name: string;
  isMain: boolean;
}

export default function AddListingPage() {
  // 1. Status & Informasi Utama
  const [status, setStatus] = useState("Jual");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [rentPeriod, setRentPeriod] = useState("Tahun");
  const [certificate, setCertificate] = useState("SHM");

  // 2. Kategori & Jenis Properti
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // 3. Detail Properti (Dinamis)
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [floors, setFloors] = useState("");
  const [zoning, setZoning] = useState("Kuning (Permukiman)");
  const [facilityCapacity, setFacilityCapacity] = useState("");
  const [electricity, setElectricity] = useState("");

  // 4. Deskripsi & Lokasi
  const [description, setDescription] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [subdistrict, setSubdistrict] = useState("");

  // 5. Image Upload & Feature Ads
  const [images, setImages] = useState<ImageFile[]>([]);
  const [enableAds, setEnableAds] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);

  // Pilihan Jenis Properti berdasarkan Kategori
  const getPropertyTypeOptions = () => {
    switch (category) {
      case "Hunian":
        return ["Rumah", "Apartemen", "Town House", "Cluster", "Vila", "Kondominium"];
      case "Komersial":
        return ["Ruko", "Rukan", "Kontrakan", "Kost", "Hotel", "Gedung Perkantoran", "Pabrik", "Gudang"];
      case "Tanah & Lahan":
        return ["Tanah Matang", "Kavling Siap Bangun", "Lahan Pertanian", "Lahan Industri"];
      case "Institusi & Fasilitas":
        return ["Gedung Sekolah/Kampus", "Rumah Sakit/Klinik", "Gedung Olahraga", "Gedung Pertemuan"];
      default:
        return [];
    }
  };

  // Handler Upload Gambar (Simulasi konversi aman & preview)
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const files = Array.from(e.target.files);

    const newImages: ImageFile[] = files.map((file, index) => {
      const objectUrl = URL.createObjectURL(file);
      return {
        id: Math.random().toString(36).substring(2, 9),
        url: objectUrl,
        name: file.name,
        isMain: images.length === 0 && index === 0,
      };
    });

    setImages((prev) => [...prev, ...newImages]);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Iklan berhasil dipublikasikan!");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Pasang Iklan Properti</h1>
            <p className="text-sm text-slate-500">Lengkapi data properti Anda untuk mulai memasarkan</p>
          </div>
          <Link
            href="/dashboard/member"
            className="text-xs font-semibold text-slate-600 hover:text-blue-600 bg-white border border-slate-200 px-3 py-2 rounded-xl"
          >
            ← Kembali ke Dashboard
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Status Iklan */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Status Iklan <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {["Jual", "Sewa", "Take Over", "Lelang"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStatus(item)}
                  className={`py-3 rounded-xl text-xs font-bold border transition ${
                    status === item
                      ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                      : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Informasi Utama */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
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
                  Harga (Rp) <span className="text-red-500">*</span>
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
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Legalitas / Sertifikat <span className="text-red-500">*</span>
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                  value={certificate}
                  onChange={(e) => setCertificate(e.target.value)}
                >
                  <option value="SHM">SHM (Sertifikat Hak Milik)</option>
                  <option value="HGB">HGB (Hak Guna Bangunan)</option>
                  <option value="Girik">Girik / Adat</option>
                  <option value="PPJB">PPJB</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            </div>
          </div>

          {/* Upload Foto */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
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
                <p className="text-xs text-slate-400 mt-1">PNG, JPG, WebP (Otomatis teroptimasi)</p>
              </label>
            </div>

            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {images.map((img) => (
                  <div key={img.id} className="relative group rounded-xl overflow-hidden border border-slate-200 aspect-square bg-slate-100">
                    <img src={img.url} alt="Upload Preview" className="w-full h-full object-cover" />
                    {img.isMain && (
                      <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow">
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

          {/* Kategori & Jenis Properti */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
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
                    if (newCat === "Tanah & Lahan") setPropertyType("Tanah Matang");
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

          {/* Detail Properti Dinamis */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
              Detail {propertyType}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(category === "Hunian" || category === "Komersial" || category === "Tanah & Lahan" || category === "Institusi & Fasilitas") && (
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

              {category === "Hunian" && (
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

              {category !== "Tanah & Lahan" && (
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

              {category === "Tanah & Lahan" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Peruntukan / Zoning</label>
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
              )}

              {category === "Institusi & Fasilitas" && (
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Kapasitas Fasilitas</label>
                  <input
                    type="text"
                    placeholder="Contoh: 500 Orang"
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                    value={facilityCapacity}
                    onChange={(e) => setFacilityCapacity(e.target.value)}
                  />
                </div>
              )}

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
            </div>
          </div>

          {/* Deskripsi & Lokasi */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">Deskripsi & Lokasi</h2>
            
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Deskripsi Lengkap</label>
              <textarea
                rows={4}
                placeholder="Jelaskan keunggulan properti, akses jalan, fasilitas terdekat..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Provinsi</label>
                <input
                  type="text"
                  placeholder="Contoh: DKI Jakarta / Jawa Barat"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kabupaten / Kota</label>
                <input
                  type="text"
                  placeholder="Contoh: Jakarta Selatan / Bandung"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kecamatan</label>
                <input
                  type="text"
                  placeholder="Contoh: Cilandak"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Kelurahan</label>
                <input
                  type="text"
                  placeholder="Contoh: Cilandak Barat"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                  value={subdistrict}
                  onChange={(e) => setSubdistrict(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Opsi Fitur Ads */}
          <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl flex items-start gap-4">
            <input
              type="checkbox"
              id="enable-ads"
              className="mt-1 w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              checked={enableAds}
              onChange={(e) => setEnableAds(e.target.value === "true" || e.target.checked)}
            />
            <div>
              <label htmlFor="enable-ads" className="text-sm font-bold text-amber-900 cursor-pointer">
                🚀 Terbitkan Sebagai Iklan Prioritas (Fitur Ads)
              </label>
              <p className="text-xs text-amber-700 mt-0.5">
                Tampilkan listingan Anda di bagian paling atas (Featured Banner) untuk jangkauan pembeli 5x lebih cepat.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="w-1/2 bg-white border border-slate-300 text-slate-700 font-bold py-3.5 rounded-xl text-sm hover:bg-slate-50 transition"
            >
              👁️ Preview Iklan
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md shadow-blue-500/20"
            >
              {loading ? "Menerbitkan..." : "Publikasikan Sekarang"}
            </button>
          </div>
        </form>

        {/* Modal Preview Iklan */}
        {showPreview && (
          <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto space-y-4">
              <div className="flex justify-between items-center border-b pb-3">
                <h3 className="font-bold text-slate-900">Preview Tampilan Iklan</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="text-slate-400 hover:text-slate-600 font-bold text-lg"
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
                      Belum ada gambar
                    </div>
                  )}
                  <span className="absolute top-2 left-2 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {status}
                  </span>
                </div>

                <div className="text-lg font-black text-blue-600">
                  Rp {price ? parseInt(price).toLocaleString("id-ID") : "0"}{" "}
                  {status === "Sewa" ? `/ ${rentPeriod}` : ""}
                </div>

                <h4 className="font-bold text-slate-800">{title || "Judul Properti Belum Diisi"}</h4>

                <p className="text-xs text-slate-500">
                  📍 {[subdistrict, district, city, province].filter(Boolean).join(", ") || "Lokasi belum diisi"}
                </p>

                <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <div>Kategori: <b>{category}</b></div>
                  <div>Jenis: <b>{propertyType}</b></div>
                  <div>LT: <b>{landArea || "-"} m²</b></div>
                  <div>LB: <b>{buildingArea || "-"} m²</b></div>
                  <div>Sertifikat: <b>{certificate}</b></div>
                  <div>Listrik: <b>{electricity || "-"} VA</b></div>
                </div>

                <p className="text-xs text-slate-600 italic line-clamp-3">
                  "{description || "Belum ada deskripsi."}"
                </p>
              </div>

              <button
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