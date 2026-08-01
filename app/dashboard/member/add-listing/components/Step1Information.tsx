"use client";

import React, { useState } from "react";

interface Step1Props {
  onNext: () => void;
  transactionType?: string;
}

// HELPER FUNCTION DITAROH DI LUAR KOMPONEN (AMAN UNTUK PARSER JSX)
function RenderCheckboxItem({
  nameKey,
  label,
  checked,
  onChange,
}: {
  nameKey: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <label className="flex items-center space-x-2 border p-2 rounded-lg cursor-pointer hover:bg-slate-50">
      <input
        type="checkbox"
        name={nameKey}
        checked={checked}
        onChange={onChange}
        className="rounded"
      />
      <span>{label}</span>
    </label>
  );
}

export default function Step1Information({ onNext }: Step1Props) {
  const [listingTitle, setListingTitle] = useState("");
  const [category, setCategory] = useState("");
  const [propertyType, setPropertyType] = useState("");

  // STATE SPESIFIKASI RUMAH
  const [houseForm, setHouseForm] = useState<Record<string, any>>({
    tipeRumah: "",
    kondisiProperti: "",
    statusKepemilikan: "",
    tahunDibangun: "",
    tahunRenovasi: "",
    statusListing: "",
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
    garasiMobil: "",
    carport: "",
    parkirMotor: "",
    chargingEV: false,
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
    oneGateSystem: false,
    security24Jam: false,
    cctv: false,
    smartLock: false,
    alarm: false,
    smokeDetector: false,
    fireExtinguisher: false,
    dalamCluster: false,
    dalamPerumahan: false,
    bebasBanjir: false,
    dekatTaman: false,
    dekatSekolah: false,
    dekatRumahSakit: false,
    dekatMall: false,
    dekatJalanTol: false,
    dekatTransportasiUmum: false,
    sertifikat: "",
    shm: false,
    shgb: false,
    imbPbg: false,
    pbb: false,
    ajb: false,
    siapKpr: false,
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

  // Helper pemanggil komponen Checkbox agar sintaks ringkas
  const chk = (key: string, label: string) => (
    <RenderCheckboxItem
      key={key}
      nameKey={key}
      label={label}
      checked={Boolean(houseForm[key])}
      onChange={handleHouseFormChange}
    />
  );
// STATE SPESIFIKASI APARTEMEN
const [apartmentForm, setApartmentForm] = useState<Record<string, any>>({
  // 1. Informasi Dasar
  judulIklan: "",
  jenisTransaksi: "",
  namaApartemen: "",
  tower: "",
  nomorUnit: "",
  developer: "",
  kondisiProperti: "",
  statusKepemilikan: "",

  // 2. Informasi Unit
  luasUnit: "",
  tipeUnit: "",
  lantai: "",
  kamarTidur: "",
  kamarMandi: "",
  kamarMandiDalam: "",
  ceilingHeight: "",
  balkon: false,
  luasBalkon: "",
  arahHadap: "",
  viewUnit: "",
  cornerUnit: false,

  // 3. Ruangan
  livingRoom: false,
  diningArea: false,
  pantry: false,
  kitchenSetRuangan: false,
  walkInCloset: false,
  storageRoom: false,
  laundryArea: false,
  maidRoom: false,
  maidBathroom: false,
  workspace: false,
  studyRoom: false,

  // 4. Furnitur & Interior
  furnished: "",
  ac: "",
  waterHeater: false,
  kitchenSetFurniture: false,
  lemariBuiltIn: false,
  sofa: false,
  diningSet: false,
  tempatTidur: false,
  kulkas: false,
  mesinCuci: false,
  microwave: false,
  tv: false,
  smartHome: false,
  smartDoorLock: false,

  // 5. Fasilitas Apartemen
  lobby: false,
  reception: false,
  liftPenumpang: false,
  liftService: false,
  swimmingPool: false,
  childrensPool: false,
  gym: false,
  sauna: false,
  jacuzzi: false,
  playground: false,
  joggingTrack: false,
  tennisCourt: false,
  basketballCourt: false,
  functionHall: false,
  meetingRoom: false,
  coWorkingSpace: false,
  miniMarket: false,
  atmCenter: false,
  laundryService: false,
  cafe: false,
  restaurant: false,
  skyGarden: false,
  rooftopGarden: false,
  bbqArea: false,

  // 6. Parkir
  hakParkir: false,
  jumlahSlotParkir: "",
  parkirMotor: false,
  parkirTamu: false,

  // 7. Utilitas
  dayaListrik: "",
  airPdam: false,
  internetFiber: false,
  tvKabel: false,
  interkom: false,
  smokeDetector: false,
  sprinkler: false,
  fireAlarm: false,
  genset: false,

  // 8. Keamanan
  security24Jam: false,
  cctv: false,
  accessCard: false,
  faceRecognition: false,
  visitorManagement: false,
  videoIntercom: false,
  emergencyExit: false,

  // 9. Biaya Pengelolaan
  iplServiceCharge: "",
  sinkingFund: "",
  biayaParkir: "",

  // 10. Legalitas
  sertifikat: "",
  shmsrs: false,
  ppjb: false,
  ajb: false,
  bisaKpa: false,

  // 11. Lokasi & Akses
  dekatMrt: false,
  dekatLrt: false,
  dekatStasiun: false,
  dekatHalteBus: false,
  dekatJalanTol: false,
  dekatBandara: false,
  dekatMall: false,
  dekatRumahSakit: false,
  dekatSekolah: false,
  dekatUniversitas: false,
  dekatPerkantoran: false,
  dekatPusatBisnis: false,

  // 12. Informasi Lingkungan
  petFriendly: false,
  bebasBanjir: false,
  kawasanPremium: false,
  cocokInvestasi: false,
  cocokDisewakan: false,
  cocokTinggal: false,

  // 13. Informasi Tambahan
  statusUnit: "",
  sedangDisewakan: false,
  siapHuni: false,
  alasanDijual: "",
  catatanTambahan: "",
});

  // Helper untuk handle input teks/number/select
const handleApartmentChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
  const { name, value, type } = e.target;
  if (type === 'checkbox') {
    const checked = (e.target as HTMLInputElement).checked;
    setApartmentForm(prev => ({ ...prev, [name]: checked }));
  } else {
    setApartmentForm(prev => ({ ...prev, [name]: value }));
  }
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

      {/* SPESIFIKASI DETAIL RUMAH */}
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
              {chk("ruangTamu", "Ruang Tamu")}
              {chk("ruangKeluarga", "Ruang Keluarga")}
              {chk("ruangMakan", "Ruang Makan")}
              {chk("dapurBersih", "Dapur Bersih")}
              {chk("dapurKotor", "Dapur Kotor")}
              {chk("gudang", "Gudang")}
              {chk("loteng", "Loteng")}
              {chk("basement", "Basement")}
              {chk("balkon", "Balkon")}
              {chk("terasDepan", "Teras Depan")}
              {chk("terasBelakang", "Teras Belakang")}
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
            {chk("chargingEV", "Pengisian Daya Kendaraan Listrik (Charging EV)")}
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
              {chk("airPanas", "Air Panas")}
              {chk("internetFiber", "Internet Fiber")}
              {chk("tvKabel", "TV Kabel")}
              {chk("teleponRumah", "Telepon Rumah")}
            </div>
          </div>

          {/* 5. FASILITAS RUMAH */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">5. Fasilitas Rumah</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {chk("tamanDepan", "Taman Depan")}
              {chk("tamanBelakang", "Taman Belakang")}
              {chk("kolamRenangPribadi", "Kolam Renang Pribadi")}
              {chk("gazebo", "Gazebo")}
              {chk("bbqArea", "BBQ Area")}
              {chk("rooftop", "Rooftop")}
              {chk("mushola", "Mushola")}
              {chk("walkInCloset", "Walk-in Closet")}
              {chk("pantry", "Pantry")}
              {chk("laundryRoom", "Laundry Room")}
              {chk("ruangKerja", "Ruang Kerja")}
              {chk("ruangHobi", "Ruang Hobi")}
            </div>
          </div>

          {/* 6. KEAMANAN */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">6. Keamanan</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {chk("oneGateSystem", "One Gate System")}
              {chk("security24Jam", "Security 24 Jam")}
              {chk("cctv", "CCTV")}
              {chk("smartLock", "Smart Lock")}
              {chk("alarm", "Alarm")}
              {chk("smokeDetector", "Smoke Detector")}
              {chk("fireExtinguisher", "Fire Extinguisher")}
            </div>
          </div>

          {/* 7. LINGKUNGAN SEKITAR */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">7. Lingkungan Sekitar</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {chk("dalamCluster", "Dalam Cluster")}
              {chk("dalamPerumahan", "Dalam Perumahan")}
              {chk("bebasBanjir", "Bebas Banjir")}
              {chk("dekatTaman", "Dekat Taman")}
              {chk("dekatSekolah", "Dekat Sekolah")}
              {chk("dekatRumahSakit", "Dekat Rumah Sakit")}
              {chk("dekatMall", "Dekat Mall")}
              {chk("dekatJalanTol", "Dekat Jalan Tol")}
              {chk("dekatTransportasiUmum", "Dekat Transportasi Umum")}
            </div>
          </div>

          {/* 8. LEGALITAS & DOKUMEN */}
          <div className="space-y-3 pt-3 border-t">
            <h4 className="font-semibold text-blue-600">8. Legalitas & Dokumen</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {chk("shm", "SHM")}
              {chk("shgb", "SHGB")}
              {chk("imbPbg", "IMB / PBG")}
              {chk("pbb", "PBB")}
              {chk("ajb", "AJB")}
              {chk("siapKpr", "Siap KPR")}
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
              {chk("hook", "Posisi Hook")}
              {chk("smartHome", "Fitur Smart Home")}
              {chk("cocokInvestasi", "Cocok Investasi")}
              {chk("cocokDisewakan", "Cocok Disewakan")}
            </div>
            <div className="mt-2">
              <label className="block font-medium mb-1">Catatan Tambahan</label>
              <textarea name="catatanTambahan" value={houseForm.catatanTambahan} onChange={handleHouseFormChange} rows={3} placeholder="Tambahkan deskripsi atau informasi penting lainnya..." className="w-full p-2.5 border rounded-xl" />
            </div>
          </div>

        </div>
      )}

      {propertyType === "Apartemen" && (
{/* ======================================================================== */}
{/* SPESIFIKASI DETAIL APARTEMEN                                             */}
{/* ======================================================================== */}
<div className="space-y-8 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
  <h3 className="text-xl font-bold text-gray-800 border-b pb-3">Spesifikasi Detail Apartemen</h3>

  {/* 1. INFORMASI DASAR */}
  <div className="space-y-4">
    <h4 className="font-semibold text-blue-600 text-base">1. Informasi Dasar</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Judul Iklan *</label>
        <input type="text" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Jenis Transaksi *</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required defaultValue="">
          <option value="" disabled>Pilih Jenis Transaksi</option>
          <option value="Jual">Jual</option>
          <option value="Sewa">Sewa</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Nama Apartemen *</label>
        <input type="text" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tower *</label>
        <input type="text" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Nomor Unit *</label>
        <input type="text" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Developer</label>
        <input type="text" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Kondisi Properti *</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required defaultValue="">
          <option value="" disabled>Pilih Kondisi Properti</option>
          <option value="Baru">Baru</option>
          <option value="Sangat Baik">Sangat Baik</option>
          <option value="Baik">Baik</option>
          <option value="Perlu Renovasi Ringan">Perlu Renovasi Ringan</option>
          <option value="Perlu Renovasi Total">Perlu Renovasi Total</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Status Kepemilikan *</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required defaultValue="">
          <option value="" disabled>Pilih Status Kepemilikan</option>
          <option value="Milik Sendiri">Milik Sendiri</option>
          <option value="Sewa">Sewa</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>
    </div>
  </div>

  {/* 2. INFORMASI UNIT */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">2. Informasi Unit</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Luas Unit (m²) *</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Tipe Unit *</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required defaultValue="">
          <option value="" disabled>Pilih Tipe Unit</option>
          <option value="Studio">Studio</option>
          <option value="1 Bedroom">1 Bedroom</option>
          <option value="2 Bedroom">2 Bedroom</option>
          <option value="3 Bedroom">3 Bedroom</option>
          <option value="4 Bedroom">4 Bedroom</option>
          <option value="Penthouse">Penthouse</option>
          <option value="Duplex">Duplex</option>
          <option value="Loft">Loft</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Lantai *</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Jumlah Kamar Tidur *</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Jumlah Kamar Mandi *</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" required />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Kamar Mandi Dalam</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Ceiling Height (m)</label>
        <input type="number" step="0.1" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Luas Balkon (m²)</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Arah Hadap</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" defaultValue="">
          <option value="" disabled>Pilih Arah Hadap</option>
          <option value="Utara">Utara</option>
          <option value="Selatan">Selatan</option>
          <option value="Timur">Timur</option>
          <option value="Barat">Barat</option>
          <option value="Barat Daya">Barat Daya</option>
          <option value="Barat Laut">Barat Laut</option>
          <option value="Tenggara">Tenggara</option>
          <option value="Timur Laut">Timur Laut</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">View Unit</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" defaultValue="">
          <option value="" disabled>Pilih View Unit</option>
          <option value="City View">City View</option>
          <option value="Pool View">Pool View</option>
          <option value="Garden View">Garden View</option>
          <option value="Mountain View">Mountain View</option>
          <option value="Sea View">Sea View</option>
          <option value="Lake View">Lake View</option>
          <option value="River View">River View</option>
          <option value="Golf View">Golf View</option>
        </select>
      </div>
      <div className="flex items-center space-x-2 pt-6">
        <input type="checkbox" id="balkon" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        <label htmlFor="balkon" className="text-sm text-gray-700">Balkon</label>
      </div>
      <div className="flex items-center space-x-2 pt-6">
        <input type="checkbox" id="cornerUnit" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
        <label htmlFor="cornerUnit" className="text-sm text-gray-700">Corner Unit</label>
      </div>
    </div>
  </div>

  {/* 3. RUANGAN */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">3. Ruangan</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        "Living Room", "Dining Area", "Pantry", "Kitchen Set",
        "Walk-in Closet", "Storage Room", "Laundry Area", "Maid Room",
        "Maid Bathroom", "Workspace", "Study Room"
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 4. FURNITUR & INTERIOR */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">4. Furnitur & Interior</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Furnished</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" defaultValue="">
          <option value="" disabled>Pilih Furnished</option>
          <option value="Fully Furnished">Fully Furnished</option>
          <option value="Semi Furnished">Semi Furnished</option>
          <option value="Unfurnished">Unfurnished</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">AC (Jumlah)</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        "Water Heater", "Kitchen Set", "Lemari Built-in", "Sofa",
        "Dining Set", "Tempat Tidur", "Kulkas", "Mesin Cuci",
        "Microwave", "TV", "Smart Home", "Smart Door Lock"
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 5. FASILITAS APARTEMEN */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">5. Fasilitas Apartemen</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        "Lobby", "Reception", "Lift Penumpang", "Lift Service",
        "Swimming Pool", "Children's Pool", "Gym", "Sauna",
        "Jacuzzi", "Playground", "Jogging Track", "Tennis Court",
        "Basketball Court", "Function Hall", "Meeting Room", "Co-Working Space",
        "Mini Market", "ATM Center", "Laundry Service", "Cafe",
        "Restaurant", "Sky Garden", "Rooftop Garden", "BBQ Area"
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 6. PARKIR */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">6. Parkir</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Jumlah Slot Parkir</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
      <div className="flex flex-col justify-center space-y-2">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm text-gray-700">Hak Parkir</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm text-gray-700">Parkir Motor</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm text-gray-700">Parkir Tamu</span>
        </label>
      </div>
    </div>
  </div>

  {/* 7. UTILITAS */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">7. Utilitas</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
      <div>
        <label className="block text-sm font-medium text-gray-700">Daya Listrik (Watt)</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        "Air PDAM", "Internet Fiber", "TV Kabel", "Interkom",
        "Smoke Detector", "Sprinkler", "Fire Alarm", "Genset"
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 8. KEAMANAN */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">8. Keamanan</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        "Security 24 Jam", "CCTV", "Access Card", "Face Recognition",
        "Visitor Management", "Video Intercom", "Emergency Exit"
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 9. BIAYA PENGELOLAAN */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">9. Biaya Pengelolaan</h4>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">IPL / Service Charge (Rp/Bulan)</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Sinking Fund (Rp/Bulan)</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Biaya Parkir (Rp/Bulan)</label>
        <input type="number" className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" />
      </div>
    </div>
  </div>

  {/* 10. LEGALITAS */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">10. Legalitas</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
      <div>
        <label className="block text-sm font-medium text-gray-700">Sertifikat</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" defaultValue="">
          <option value="" disabled>Pilih Sertifikat</option>
          <option value="SHMSRS">SHMSRS</option>
          <option value="PPJB">PPJB</option>
          <option value="AJB">AJB</option>
          <option value="Hak Pakai">Hak Pakai</option>
          <option value="Lainnya">Lainnya</option>
        </select>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {["SHMSRS", "PPJB", "AJB", "Bisa KPA"].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 11. LOKASI & AKSES */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">11. Lokasi & Akses</h4>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        "Dekat MRT", "Dekat LRT", "Dekat Stasiun", "Dekat Halte Bus",
        "Dekat Jalan Tol", "Dekat Bandara", "Dekat Mall", "Dekat Rumah Sakit",
        "Dekat Sekolah", "Dekat Universitas", "Dekat Perkantoran", "Dekat Pusat Bisnis"
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 12. INFORMASI LINGKUNGAN */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">12. Informasi Lingkungan</h4>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {[
        "Pet Friendly", "Bebas Banjir", "Kawasan Premium",
        "Cocok untuk Investasi", "Cocok untuk Disewakan", "Cocok untuk Tinggal"
      ].map((item) => (
        <label key={item} className="flex items-center space-x-2 border rounded p-2 text-sm cursor-pointer hover:bg-gray-50">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-gray-700">{item}</span>
        </label>
      ))}
    </div>
  </div>

  {/* 13. INFORMASI TAMBAHAN */}
  <div className="space-y-4 pt-4 border-t">
    <h4 className="font-semibold text-blue-600 text-base">13. Informasi Tambahan</h4>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
      <div>
        <label className="block text-sm font-medium text-gray-700">Status Unit</label>
        <select className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" defaultValue="">
          <option value="" disabled>Pilih Status Unit</option>
          <option value="Kosong">Kosong</option>
          <option value="Siap Huni">Siap Huni</option>
          <option value="Disewakan">Disewakan</option>
          <option value="Owner Occupied">Owner Occupied</option>
          <option value="Booking">Booking</option>
        </select>
      </div>
      <div className="flex items-center space-x-4 pt-6">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm text-gray-700">Sedang Disewakan</span>
        </label>
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          <span className="text-sm text-gray-700">Siap Huni</span>
        </label>
      </div>
    </div>
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Alasan Dijual</label>
        <textarea rows={3} className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Masukkan alasan dijual..."></textarea>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Catatan Tambahan</label>
        <textarea rows={3} className="mt-1 w-full rounded-md border border-gray-300 p-2 text-sm focus:ring-2 focus:ring-blue-500" placeholder="Masukkan catatan tambahan..."></textarea>
      </div>
    </div>
  </div>
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

      {/* TOMBOL NEXT */}
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
