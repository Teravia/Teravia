"use client";

import React, { useState } from "react";

interface Step1Props {
  onNext: () => void;
  transactionType?: string;
}

export default function Step1Information({ onNext }: Step1Props) {
  const [listingTitle, setListingTitle] = useState("");
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");

  // ==========================================
  // STATE SPESIFIKASI RUMAH (LENGKAP)
  // ==========================================
  const [houseForm, setHouseForm] = useState<Record<string, any>>({
    // 1. Informasi Dasar
    tipeRumah: "",
    kondisiProperti: "",
    statusKepemilikan: "",
    tahunDibangun: "",
    tahunRenovasi: "",
    statusListing: "",

    // 2. Informasi Bangunan
    luasTanah: "",
    luasBangunan: "",
    jumlahLantai: "",
    kamarTidur: "",
    kamarMandi: "",
    kamarTidurPembantu: "",
    kamarMandiPembantu: "",
    ruangTamu: false,
    ruangKeluarga: false,
    ruangMakan: false,
    dapurBersih: false,
    dapurKotor: false,
    gudang: false,
    loteng: false,
    basement: false,
    balkon: false,
    terasDepan: false,
    terasBelakang: false,

    // 3. Garasi & Parkir
    garasiMobil: "",
    carport: "",
    parkirMotor: "",
    chargingEV: false,

    // 4. Spesifikasi Bangunan
    dayaListrik: "",
    sumberAir: "",
    airPanas: false,
    ac: "",
    internetFiber: false,
    tvKabel: false,
    teleponRumah: false,
    materialAtap: "",
    materialLantai: "",
    materialDinding: "",
    plafon: "",

    // 5. Fasilitas Rumah
    tamanDepan: false,
    tamanBelakang: false,
    kolamRenangPribadi: false,
    gazebo: false,
    bbqArea: false,
    rooftop: false,
    mushola: false,
    walkInCloset: false,
    pantry: false,
    laundryRoom: false,
    ruangKerja: false,
    ruangHobi: false,

    // 6. Keamanan
    oneGateSystem: false,
    security24Jam: false,
    cctv: false,
    smartLock: false,
    alarm: false,
    smokeDetector: false,
    fireExtinguisher: false,

    // 7. Lingkungan
    dalamCluster: false,
    dalamPerumahan: false,
    bebasBanjir: false,
    dekatTaman: false,
    dekatSekolah: false,
    dekatRumahSakit: false,
    dekatMall: false,
    dekatJalanTol: false,
    dekatTransportasiUmum: false,

    // 8. Legalitas
    sertifikat: "",
    shm: false,
    shgb: false,
    imbPbg: false,
    pbb: false,
    ajb: false,
    siapKpr: false,

    // 9. Informasi Investasi & Tambahan
    cocokInvestasi: false,
    cocokDisewakan: false,
    potensiCapitalGain: false,
    potensiRentalYield: false,
    furnished: "",
    hadap: "",
    hook: false,
    smartHome: false,
    catatanTambahan: "",
  });

  const handleHouseFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setHouseForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setHouseForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setPropertyType("");
  };

  // Validasi input required
  const isHouseFormValid =
    propertyType === "Rumah"
      ? houseForm.tipeRumah !== "" &&
        houseForm.kondisiProperti !== "" &&
        houseForm.statusKepemilikan !== "" &&
        houseForm.statusListing !== ""
      : true;

  const isFormValid =
    listingTitle.trim() !== "" &&
    category.trim() !== "" &&
    propertyType.trim() !== "" &&
    isHouseFormValid;

  const handleNextClick = () => {
    if (isFormValid) {
      onNext();
    }
  };

  // Helper render checkbox aman untuk SWC / JSX Parser
  const renderCheckbox = (key: string, label: string) => {
    return (
      <label key={key} className="flex items-center space-x-2 border p-2 rounded-lg cursor-pointer hover:bg-slate-50">
        <input
          type="checkbox"
          name={key}
          checked={Boolean(houseForm[key])}
          onChange={handleHouseFormChange}
          className="rounded"
        />
        <span>{label}</span>
      </label>
    );
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        {/* INPUT 1: JUDUL LISTINGAN */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Judul Listingan <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={listingTitle}
            onChange={(e) => setListingTitle(e.target.value)}
            placeholder="Masukkan judul listingan (contoh: Rumah Mewah Minimalis di Jakarta Selatan)"
            className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white text-xs font-medium focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-slate-400"
            required
          />
        </div>

        {/* INPUT 2 & 3: DROPDOWN KATEGORI & JENIS PROPERTI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          
          {/* KATEGORI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium text-center focus:ring-2 focus:ring-blue-500 outline-none cursor-pointer"
              required
            >
              <option value="" disabled hidden>
                Pilih Kategori Properti
              </option>
              <option value="Hunian">Hunian</option>
              <option value="Komersial">Komersial</option>
              <option value="Tanah / Lahan">Tanah / Lahan</option>
              <option value="Industrial">Industrial</option>
              <option value="Properti Khusus">Properti Khusus</option>
            </select>
          </div>

          {/* JENIS PROPERTI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              disabled={!category}
              className={`w-full px-3 py-2.5 rounded-xl border font-medium text-center outline-none transition-all ${
                !category
                  ? "bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed"
                  : "bg-white border-slate-300 text-slate-900 focus:ring-2 focus:ring-blue-500 cursor-pointer"
              }`}
              required
            >
              <option value="" disabled hidden>
                Pilih Jenis Properti
              </option>
              <option value="Rumah">Rumah</option>
              <option value="Apartemen">Apartemen</option>
              <option value="Penthouse">Penthouse</option>
              <option value="Cluster">Cluster</option>
              <option value="Townhouse">Townhouse</option>
            </select>
          </div>

        </div>
      </div>

      {/* ================================================
                    SPESIFIKASI DETAIL RUMAH
      ================================================ */}
      {propertyType === "Rumah" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-xs">
          <h3 className="text-sm font-bold text-slate-900 border-b pb-3">
            Spesifikasi Detail Rumah
          </h3>

          {/* 1. INFORMASI DASAR */}
          <div className="space-y-3">
            <h4 className="font-semibold text-blue-600">1. Informasi Dasar</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">Tipe Rumah <span className="text-red-500">*</span></label>
                <select name="tipeRumah" value={houseForm.tipeRumah} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" required>
                  <option value="">Pilih Tipe Rumah</option>
                  <option value="Rumah Subsidi">Rumah Subsidi</option>
                  <option value="Rumah Komersial">Rumah Komersial</option>
                  <option value="Rumah Second">Rumah Second</option>
                  <option value="Rumah Baru">Rumah Baru</option>
                  <option value="Rumah Minimalis">Rumah Minimalis</option>
                  <option value="Rumah Modern">Rumah Modern</option>
                  <option value="Rumah Klasik">Rumah Klasik</option>
                  <option value="Rumah Scandinavian">Rumah Scandinavian</option>
                  <option value="Rumah Industrial">Rumah Industrial</option>
                  <option value="Rumah Tropis">Rumah Tropis</option>
                  <option value="Rumah Mewah">Rumah Mewah</option>
                  <option value="Smart Home">Smart Home</option>
                  <option value="Villa Residence">Villa Residence</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Kondisi Properti <span className="text-red-500">*</span></label>
                <select name="kondisiProperti" value={houseForm.kondisiProperti} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" required>
                  <option value="">Pilih Kondisi</option>
                  <option value="Baru">Baru</option>
                  <option value="Bekas">Bekas</option>
                  <option value="Renovasi Total">Renovasi Total</option>
                  <option value="Renovasi Sebagian">Renovasi Sebagian</option>
                  <option value="Siap Huni">Siap Huni</option>
                  <option value="Dalam Pembangunan">Dalam Pembangunan</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Status Kepemilikan <span className="text-red-500">*</span></label>
                <select name="statusKepemilikan" value={houseForm.statusKepemilikan} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" required>
                  <option value="">Pilih Status</option>
                  <option value="Milik Sendiri">Milik Sendiri</option>
                  <option value="Warisan">Warisan</option>
                  <option value="Dalam Jaminan Bank">Dalam Jaminan Bank</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Tahun Dibangun</label>
                <input type="number" name="tahunDibangun" value={houseForm.tahunDibangun} onChange={handleHouseFormChange} placeholder="Contoh: 2020" className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Tahun Renovasi</label>
                <input type="number" name="tahunRenovasi" value={houseForm.tahunRenovasi} onChange={handleHouseFormChange} placeholder="Contoh: 2023" className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Status Listing <span className="text-red-500">*</span></label>
                <select name="statusListing" value={houseForm.statusListing} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" required>
                  <option value="">Pilih Status Listing</option>
                  <option value="Tersedia">Tersedia</option>
                  <option value="Terjual">Terjual</option>
                  <option value="Tersewa">Tersewa</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
            </div>
          </div>

          {/* 2. INFORMASI BANGUNAN */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">2. Informasi Bangunan</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block font-medium mb-1">Luas Tanah (m²)</label>
                <input type="number" name="luasTanah" value={houseForm.luasTanah} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Luas Bangunan (m²)</label>
                <input type="number" name="luasBangunan" value={houseForm.luasBangunan} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Jumlah Lantai</label>
                <input type="number" name="jumlahLantai" value={houseForm.jumlahLantai} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Kamar Tidur</label>
                <input type="number" name="kamarTidur" value={houseForm.kamarTidur} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Kamar Mandi</label>
                <input type="number" name="kamarMandi" value={houseForm.kamarMandi} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Kamar Tidur Pembantu</label>
                <input type="number" name="kamarTidurPembantu" value={houseForm.kamarTidurPembantu} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Kamar Mandi Pembantu</label>
                <input type="number" name="kamarMandiPembantu" value={houseForm.kamarMandiPembantu} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
            </div>

            <p className="font-medium mt-2">Ruangan Tersedia:</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {renderCheckbox("ruangTamu", "Ruang Tamu")}
              {renderCheckbox("ruangKeluarga", "Ruang Keluarga")}
              {renderCheckbox("ruangMakan", "Ruang Makan")}
              {renderCheckbox("dapurBersih", "Dapur Bersih")}
              {renderCheckbox("dapurKotor", "Dapur Kotor")}
              {renderCheckbox("gudang", "Gudang")}
              {renderCheckbox("loteng", "Loteng")}
              {renderCheckbox("basement", "Basement")}
              {renderCheckbox("balkon", "Balkon")}
              {renderCheckbox("terasDepan", "Teras Depan")}
              {renderCheckbox("terasBelakang", "Teras Belakang")}
            </div>
          </div>

          {/* 3. GARASI & PARKIR */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">3. Garasi & Parkir</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">Garasi Mobil</label>
                <input type="number" name="garasiMobil" value={houseForm.garasiMobil} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Carport</label>
                <input type="number" name="carport" value={houseForm.carport} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Parkir Motor</label>
                <input type="number" name="parkirMotor" value={houseForm.parkirMotor} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
            </div>
            {renderCheckbox("chargingEV", "Pengisian Daya Kendaraan Listrik (Charging EV)")}
          </div>

          {/* 4. SPESIFIKASI BANGUNAN & MATERIAL */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">4. Spesifikasi Bangunan & Material</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">Daya Listrik (VA)</label>
                <input type="number" name="dayaListrik" value={houseForm.dayaListrik} onChange={handleHouseFormChange} placeholder="Contoh: 2200" className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Sumber Air</label>
                <select name="sumberAir" value={houseForm.sumberAir} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl">
                  <option value="">Pilih Sumber Air</option>
                  <option value="PAM / PDAM">PAM / PDAM</option>
                  <option value="Sumur Bor">Sumur Bor</option>
                  <option value="Sumur Gali">Sumur Gali</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Jumlah AC</label>
                <input type="number" name="ac" value={houseForm.ac} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl" />
              </div>
              <div>
                <label className="block font-medium mb-1">Material Atap</label>
                <select name="materialAtap" value={houseForm.materialAtap} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl">
                  <option value="">Pilih Atap</option>
                  <option value="Genteng Beton">Genteng Beton</option>
                  <option value="Genteng Keramik">Genteng Keramik</option>
                  <option value="Baja Ringan">Baja Ringan</option>
                  <option value="Metal">Metal</option>
                  <option value="Dak Beton">Dak Beton</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Material Lantai</label>
                <select name="materialLantai" value={houseForm.materialLantai} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl">
                  <option value="">Pilih Lantai</option>
                  <option value="Keramik">Keramik</option>
                  <option value="Granit">Granit</option>
                  <option value="Marmer">Marmer</option>
                  <option value="Vinyl">Vinyl</option>
                  <option value="Parket">Parket</option>
                  <option value="Homogeneous Tile">Homogeneous Tile</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Material Dinding</label>
                <select name="materialDinding" value={houseForm.materialDinding} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl">
                  <option value="">Pilih Dinding</option>
                  <option value="Bata Merah">Bata Merah</option>
                  <option value="Bata Ringan">Bata Ringan</option>
                  <option value="Beton">Beton</option>
                  <option value="Precast">Precast</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              {renderCheckbox("airPanas", "Air Panas")}
              {renderCheckbox("internetFiber", "Internet Fiber")}
              {renderCheckbox("tvKabel", "TV Kabel")}
              {renderCheckbox("teleponRumah", "Telepon Rumah")}
            </div>
          </div>

          {/* 5. FASILITAS RUMAH */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">5. Fasilitas Rumah</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {renderCheckbox("tamanDepan", "Taman Depan")}
              {renderCheckbox("tamanBelakang", "Taman Belakang")}
              {renderCheckbox("kolamRenangPribadi", "Kolam Renang Pribadi")}
              {renderCheckbox("gazebo", "Gazebo")}
              {renderCheckbox("bbqArea", "BBQ Area")}
              {renderCheckbox("rooftop", "Rooftop")}
              {renderCheckbox("mushola", "Mushola")}
              {renderCheckbox("walkInCloset", "Walk-in Closet")}
              {renderCheckbox("pantry", "Pantry")}
              {renderCheckbox("laundryRoom", "Laundry Room")}
              {renderCheckbox("ruangKerja", "Ruang Kerja")}
              {renderCheckbox("ruangHobi", "Ruang Hobi")}
            </div>
          </div>

          {/* 6. KEAMANAN */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">6. Keamanan</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {renderCheckbox("oneGateSystem", "One Gate System")}
              {renderCheckbox("security24Jam", "Security 24 Jam")}
              {renderCheckbox("cctv", "CCTV")}
              {renderCheckbox("smartLock", "Smart Lock")}
              {renderCheckbox("alarm", "Alarm")}
              {renderCheckbox("smokeDetector", "Smoke Detector")}
              {renderCheckbox("fireExtinguisher", "Fire Extinguisher")}
            </div>
          </div>

          {/* 7. LINGKUNGAN SEKITAR */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">7. Lingkungan Sekitar</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {renderCheckbox("dalamCluster", "Dalam Cluster")}
              {renderCheckbox("dalamPerumahan", "Dalam Perumahan")}
              {renderCheckbox("bebasBanjir", "Bebas Banjir")}
              {renderCheckbox("dekatTaman", "Dekat Taman")}
              {renderCheckbox("dekatSekolah", "Dekat Sekolah")}
              {renderCheckbox("dekatRumahSakit", "Dekat Rumah Sakit")}
              {renderCheckbox("dekatMall", "Dekat Mall")}
              {renderCheckbox("dekatJalanTol", "Dekat Jalan Tol")}
              {renderCheckbox("dekatTransportasiUmum", "Dekat Transportasi Umum")}
            </div>
          </div>

          {/* 8. LEGALITAS & DOKUMEN */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">8. Legalitas & Dokumen</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {renderCheckbox("shm", "SHM")}
              {renderCheckbox("shgb", "SHGB")}
              {renderCheckbox("imbPbg", "IMB / PBG")}
              {renderCheckbox("pbb", "PBB")}
              {renderCheckbox("ajb", "AJB")}
              {renderCheckbox("siapKpr", "Siap KPR")}
            </div>
          </div>

          {/* 9. INFORMASI INVESTASI & TAMBAHAN */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">9. Informasi Investasi & Tambahan</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-medium mb-1">Furnished</label>
                <select name="furnished" value={houseForm.furnished} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl">
                  <option value="">Pilih Kondisi Furnish</option>
                  <option value="Unfurnished">Unfurnished</option>
                  <option value="Semi Furnished">Semi Furnished</option>
                  <option value="Fully Furnished">Fully Furnished</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Hadap Bangunan</label>
                <select name="hadap" value={houseForm.hadap} onChange={handleHouseFormChange} className="w-full p-2.5 border rounded-xl">
                  <option value="">Pilih Arah Hadap</option>
                  <option value="Utara">Utara</option>
                  <option value="Selatan">Selatan</option>
                  <option value="Timur">Timur</option>
                  <option value="Barat">Barat</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              {renderCheckbox("hook", "Posisi Hook")}
              {renderCheckbox("smartHome", "Fitur Smart Home")}
              {renderCheckbox("cocokInvestasi", "Cocok Investasi")}
              {renderCheckbox("cocokDisewakan", "Cocok Disewakan")}
            </div>
            <div className="mt-2">
              <label className="block font-medium mb-1">Catatan Tambahan</label>
              <textarea name="catatanTambahan" value={houseForm.catatanTambahan} onChange={handleHouseFormChange} rows={3} placeholder="Tambahkan deskripsi atau informasi penting lainnya..." className="w-full p-2.5 border rounded-xl" />
            </div>
          </div>

        </div>
      )}

      {/* OTHER PROPERTY PLACEHOLDERS */}
      {propertyType === "Apartemen" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-500 text-center py-8">
          Form Spesifikasi Apartemen
        </div>
      )}
      {propertyType === "Penthouse" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-500 text-center py-8">
          Form Spesifikasi Penthouse
        </div>
      )}
      {propertyType === "Cluster" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-500 text-center py-8">
          Form Spesifikasi Cluster
        </div>
      )}
      {propertyType === "Townhouse" && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-xs text-slate-500 text-center py-8">
          Form Spesifikasi Townhouse
        </div>
      )}

      {/* BUTTON NEXT */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={handleNextClick}
          disabled={!isFormValid}
          className={`px-6 py-3 rounded-xl font-semibold text-xs text-white transition-all ${
            isFormValid
              ? "bg-blue-600 hover:bg-blue-700 shadow-md cursor-pointer"
              : "bg-slate-300 cursor-not-allowed"
          }`}
        >
          Lanjut &rarr;
        </button>
      </div>
    </div>
  );
}