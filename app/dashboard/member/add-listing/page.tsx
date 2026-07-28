"use client";

import { useState, useEffect } from "react";

interface RegionOption {
  id: string;
  name: string;
}

export default function AddListingPage() {
  // Form State
  const [title, setTitle] = useState("");
  const [propertyType, setPropertyType] = useState("rumah");
  const [price, setPrice] = useState("");
  const [landArea, setLandArea] = useState("");
  const [buildingArea, setBuildingArea] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [description, setDescription] = useState("");

  // Region State (Berjenjang)
  const [provinces, setProvinces] = useState<RegionOption[]>([]);
  const [cities, setCities] = useState<RegionOption[]>([]);
  const [districts, setDistricts] = useState<RegionOption[]>([]);
  const [subDistricts, setSubDistricts] = useState<RegionOption[]>([]);

  const [selectedProv, setSelectedProv] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedSubDistrict, setSelectedSubDistrict] = useState("");

  // UI Loading State
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Fetch Provinsi saat komponen di-load
  useEffect(() => {
    fetch("/api/region?level=1")
      .then((res) => res.json())
      .then((res) => { if (res.success) setProvinces(res.data); });
  }, []);

  // 2. Event Handler Dropdown Wilayah Berjenjang
  const handleProvChange = async (provId: string) => {
    setSelectedProv(provId);
    setSelectedCity("");
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setCities([]);
    setDistricts([]);
    setSubDistricts([]);

    if (!provId) return;
    const res = await fetch(`/api/region?parentId=${provId}`);
    const data = await res.json();
    if (data.success) setCities(data.data);
  };

  const handleCityChange = async (cityId: string) => {
    setSelectedCity(cityId);
    setSelectedDistrict("");
    setSelectedSubDistrict("");
    setDistricts([]);
    setSubDistricts([]);

    if (!cityId) return;
    const res = await fetch(`/api/region?parentId=${cityId}`);
    const data = await res.json();
    if (data.success) setDistricts(data.data);
  };

  const handleDistrictChange = async (districtId: string) => {
    setSelectedDistrict(districtId);
    setSelectedSubDistrict("");
    setSubDistricts([]);

    if (!districtId) return;
    const res = await fetch(`/api/region?parentId=${districtId}`);
    const data = await res.json();
    if (data.success) setSubDistricts(data.data);
  };

  // 3. Handler Generate AI Description
  const handleGenerateAI = async () => {
    if (!title) {
      alert("Isi Judul Iklan terlebih dahulu!");
      return;
    }

    setIsAiLoading(true);
    try {
      const selectedProvObj = provinces.find((p) => p.id === selectedProv);
      const selectedCityObj = cities.find((c) => c.id === selectedCity);
      const locationName = [selectedCityObj?.name, selectedProvObj?.name].filter(Boolean).join(", ");

      const response = await fetch("/api/ai/description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          propertyType,
          price,
          landArea,
          buildingArea,
          bedrooms,
          bathrooms,
          locationName,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setDescription(result.description);
      } else {
        alert("Gagal Generate AI: " + result.error);
      }
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setIsAiLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-md my-6">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Pasang Iklan Properti</h1>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {/* Informasi Dasar */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">1. Informasi Utama</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Judul Properti</label>
            <input
              type="text"
              className="mt-1 w-full p-2 border rounded-md"
              placeholder="Contoh: Rumah Minimalis Modern Dekat Stasiun"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Tipe Properti</label>
              <select
                className="mt-1 w-full p-2 border rounded-md bg-white"
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
              >
                <option value="rumah">Rumah</option>
                <option value="ruko">Ruko</option>
                <option value="tanah">Tanah</option>
                <option value="apartemen">Apartemen</option>
                <option value="gudang">Gudang</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Harga (Rp)</label>
              <input
                type="number"
                className="mt-1 w-full p-2 border rounded-md"
                placeholder="500000000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Dropdown Wilayah Berjenjang */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">2. Lokasi Wilayah</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Provinsi */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Provinsi</label>
              <select
                className="mt-1 w-full p-2 border rounded-md bg-white"
                value={selectedProv}
                onChange={(e) => handleProvChange(e.target.value)}
              >
                <option value="">-- Pilih Provinsi --</option>
                {provinces.map((p) => (
                  <option key={p.id} value={p.id}>{p.name}</option>
                ))}
              </select>
            </div>

            {/* Kota / Kabupaten */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Kota / Kabupaten</label>
              <select
                className="mt-1 w-full p-2 border rounded-md bg-white disabled:bg-gray-100"
                value={selectedCity}
                disabled={!selectedProv}
                onChange={(e) => handleCityChange(e.target.value)}
              >
                <option value="">-- Pilih Kota/Kab --</option>
                {cities.map((c) => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Kecamatan */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Kecamatan</label>
              <select
                className="mt-1 w-full p-2 border rounded-md bg-white disabled:bg-gray-100"
                value={selectedDistrict}
                disabled={!selectedCity}
                onChange={(e) => handleDistrictChange(e.target.value)}
              >
                <option value="">-- Pilih Kecamatan --</option>
                {districts.map((d) => (
                  <option key={d.id} value={d.id}>{d.name}</option>
                ))}
              </select>
            </div>

            {/* Kelurahan / Desa */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Kelurahan / Desa</label>
              <select
                className="mt-1 w-full p-2 border rounded-md bg-white disabled:bg-gray-100"
                value={selectedSubDistrict}
                disabled={!selectedDistrict}
                onChange={(e) => setSelectedSubDistrict(e.target.value)}
              >
                <option value="">-- Pilih Kelurahan --</option>
                {subDistricts.map((s) => (
                  <option key={s.id} value={s.id}>{s.name}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Spesifikasi Properti */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-gray-700 border-b pb-2">3. Spesifikasi</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">LT (m²)</label>
              <input
                type="number"
                className="mt-1 w-full p-2 border rounded-md"
                value={landArea}
                onChange={(e) => setLandArea(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">LB (m²)</label>
              <input
                type="number"
                className="mt-1 w-full p-2 border rounded-md"
                value={buildingArea}
                onChange={(e) => setBuildingArea(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">K. Tidur</label>
              <input
                type="number"
                className="mt-1 w-full p-2 border rounded-md"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">K. Mandi</label>
              <input
                type="number"
                className="mt-1 w-full p-2 border rounded-md"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* AI Deskripsi Generator Section */}
        <div className="space-y-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-700">4. Deskripsi Penjualan</h2>
            <button
              type="button"
              onClick={handleGenerateAI}
              disabled={isAiLoading}
              className="bg-purple-600 hover:bg-purple-700 text-white text-xs sm:text-sm font-medium py-1.5 px-3 rounded-md transition disabled:opacity-50"
            >
              {isAiLoading ? "Sedang Mengolah..." : "✨ Buatkan Deskripsi AI"}
            </button>
          </div>

          <textarea
            rows={8}
            className="w-full p-3 border rounded-md text-sm leading-relaxed"
            placeholder="Tuliskan deskripsi atau klik tombol AI diatas untuk membuat otomatis..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        {/* Submit Button Placeholder */}
        <button
          type="button"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-md transition"
        >
          Lanjut ke Upload Foto & Publikasikan
        </button>
      </form>
    </div>
  );
}
