"use client";

import React, { useState } from "react";

interface FormProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormRusun({ onNext, transactionType }: FormProps) {
  // Informasi Dasar
  const [title, setTitle] = useState("");
  const [rusunName, setRusunName] = useState("");
  const [blockTower, setBlockTower] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [manager, setManager] = useState("");
  const [developer, setDeveloper] = useState("");
  const [condition, setCondition] = useState("Baik");
  const [ownershipStatus, setOwnershipStatus] = useState("Properti Sendiri");

  // Informasi Unit
  const [unitArea, setUnitArea] = useState("");
  const [floor, setFloor] = useState("");
  const [unitType, setUnitType] = useState("2 Bedroom");
  const [bedrooms, setBedrooms] = useState("2");
  const [bathrooms, setBathrooms] = useState("1");
  const [hasBalcony, setHasBalcony] = useState(false);
  const [facing, setFacing] = useState("Utara");
  const [view, setView] = useState("");
  const [isCorner, setIsCorner] = useState(false);

  // Ruangan (Booleans)
  const [rooms, setRooms] = useState<Record<string, boolean>>({
    livingRoom: true,
    diningRoom: false,
    pantry: false,
    kitchen: true,
    storage: false,
    laundryArea: true,
    dryingArea: true,
  });

  // Furnitur & Utilitas
  const [furnished, setFurnished] = useState("Unfurnished");
  const [acCount, setAcCount] = useState("0");
  const [furniture, setFurniture] = useState<Record<string, boolean>>({
    kitchenSet: false,
    wardrobe: false,
    bed: false,
    sofa: false,
    waterHeater: false,
    tv: false,
  });

  const [electricity, setElectricity] = useState("1300");
  const [utilities, setUtilities] = useState<Record<string, boolean>>({
    pdam: true,
    internet: false,
    cableTv: false,
    intercom: false,
    fireAlarm: true,
    smokeDetector: true,
  });

  // Fasilitas Rusun
  const [facilities, setFacilities] = useState<Record<string, boolean>>({
    lift: true,
    emergencyStairs: true,
    playground: true,
    park: false,
    musholla: true,
    hall: false,
    posyandu: false,
    sharedDryingArea: true,
    centralTrash: true,
    parkingArea: true,
    koperasi: false,
    minimarket: true,
  });

  // Keamanan
  const [security, setSecurity] = useState<Record<string, boolean>>({
    security24h: true,
    cctv: true,
    accessCard: false,
    posSecurity: true,
    evacuationRoute: true,
  });

  // Biaya Pengelolaan
  const [iplFee, setIplFee] = useState("");
  const [cleaningFee, setCleaningFee] = useState("");
  const [parkingFee, setParkingFee] = useState("");

  // Legalitas
  const [certificate, setCertificate] = useState("SHMSRS");
  const [legalities, setLegalities] = useState<Record<string, boolean>>({
    shmsrs: true,
    ppjb: false,
    ajb: false,
    kprEligible: true,
  });

  // Lokasi & Akses
  const [access, setAccess] = useState<Record<string, boolean>>({
    nearSchool: true,
    nearHospital: false,
    nearMarket: true,
    nearTerminal: false,
    nearStation: false,
    nearBusStop: true,
    nearToll: false,
    floodFree: true,
  });

  // Lingkungan
  const [environment, setEnvironment] = useState<Record<string, boolean>>({
    quietEnv: true,
    childFriendly: true,
    elderlyFriendly: true,
    denseArea: false,
    goodForInvestment: true,
    goodForLiving: true,
  });

  // Informasi Tambahan
  const [unitStatus, setUnitStatus] = useState("Siap Huni");
  const [isOccupied, setIsOccupied] = useState(false);
  const [isReadyToOccupy, setIsReadyToOccupy] = useState(true);
  const [saleReason, setSaleReason] = useState("");
  const [notes, setNotes] = useState("");

  const toggle = (setter: React.Dispatch<React.SetStateAction<Record<string, boolean>>>, key: string) => {
    setter((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) return alert("Judul Iklan wajib diisi");
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 text-xs text-slate-800 font-sans">
      {/* 1. INFORMASI DASAR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">Informasi Dasar Rusun</h2>
          <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg">
            {transactionType}
          </span>
        </div>

        <div>
          <label className="block font-semibold mb-1">Judul Iklan *</label>
          <input
            type="text"
            required
            placeholder="Contoh: Unit Rusunami Siap Huni Strategis Dekat Halte Bus"
            className="w-full p-2.5 rounded-xl border border-slate-300"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="block font-semibold mb-1">Nama Rusun *</label>
            <input type="text" required placeholder="Contoh: Rusunawa Bandar Kemayoran" className="w-full p-2.5 rounded-xl border border-slate-300" value={rusunName} onChange={(e) => setRusunName(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Blok / Tower *</label>
            <input type="text" required placeholder="Blok A / Tower 2" className="w-full p-2.5 rounded-xl border border-slate-300" value={blockTower} onChange={(e) => setBlockTower(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Nomor Unit *</label>
            <input type="text" required placeholder="A-05-12" className="w-full p-2.5 rounded-xl border border-slate-300" value={unitNumber} onChange={(e) => setUnitNumber(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
          <div>
            <label className="block font-semibold mb-1">Pengelola</label>
            <input type="text" placeholder="UPRS / UPT" className="w-full p-2.5 rounded-xl border border-slate-300" value={manager} onChange={(e) => setManager(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Developer</label>
            <input type="text" placeholder="Perum Perumnas" className="w-full p-2.5 rounded-xl border border-slate-300" value={developer} onChange={(e) => setDeveloper(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kondisi Properti *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={condition} onChange={(e) => setCondition(e.target.value)}>
              <option value="Baru">Baru</option>
              <option value="Sangat Baik">Sangat Baik</option>
              <option value="Baik">Baik</option>
              <option value="Perlu Renovasi Ringan">Perlu Renovasi Ringan</option>
              <option value="Perlu Renovasi Total">Perlu Renovasi Total</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Status Kepemilikan *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={ownershipStatus} onChange={(e) => setOwnershipStatus(e.target.value)}>
              <option value="Properti Sendiri">Properti Sendiri</option>
              <option value="Kuasa Jual">Kuasa Jual</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. INFORMASI UNIT */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Spesifikasi Unit</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
          <div>
            <label className="block font-semibold mb-1">Luas Unit (m²) *</label>
            <input type="number" required placeholder="36" className="w-full p-2.5 rounded-xl border border-slate-300" value={unitArea} onChange={(e) => setUnitArea(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Lantai *</label>
            <input type="number" required placeholder="5" className="w-full p-2.5 rounded-xl border border-slate-300" value={floor} onChange={(e) => setFloor(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Tipe Unit *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={unitType} onChange={(e) => setUnitType(e.target.value)}>
              <option value="Studio">Studio</option>
              <option value="1 Bedroom">1 Bedroom</option>
              <option value="2 Bedroom">2 Bedroom</option>
              <option value="3 Bedroom">3 Bedroom</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Kamar Tidur *</label>
            <input type="number" required className="w-full p-2.5 rounded-xl border border-slate-300" value={bedrooms} onChange={(e) => setBedrooms(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Kamar Mandi *</label>
            <input type="number" required className="w-full p-2.5 rounded-xl border border-slate-300" value={bathrooms} onChange={(e) => setBathrooms(e.target.value)} />
          </div>
        </div>

        <div className="flex flex-wrap gap-4 items-center pt-2">
          <label className="flex items-center gap-2 cursor-pointer font-medium">
            <input type="checkbox" checked={hasBalcony} onChange={(e) => setHasBalcony(e.target.checked)} className="rounded text-blue-600" />
            Memiliki Balkon
          </label>
          <label className="flex items-center gap-2 cursor-pointer font-medium">
            <input type="checkbox" checked={isCorner} onChange={(e) => setIsCorner(e.target.checked)} className="rounded text-blue-600" />
            Corner Unit (Sudut)
          </label>
        </div>
      </div>

      {/* 3. RUANGAN & FURNITUR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Ruangan & Furnitur</h2>
        <div>
          <label className="block font-semibold mb-2">Fasilitas Ruangan Unit</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "livingRoom", label: "Living Room" },
              { key: "diningRoom", label: "Ruang Makan" },
              { key: "pantry", label: "Pantry" },
              { key: "kitchen", label: "Dapur" },
              { key: "storage", label: "Gudang" },
              { key: "laundryArea", label: "Laundry Area" },
              { key: "dryingArea", label: "Jemuran" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setRooms, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${rooms[item.key] ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {rooms[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          <div>
            <label className="block font-semibold mb-1">Kondisi Perabotan</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={furnished} onChange={(e) => setFurnished(e.target.value)}>
              <option value="Unfurnished">Unfurnished</option>
              <option value="Semi Furnished">Semi Furnished</option>
              <option value="Fully Furnished">Fully Furnished</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold mb-1">Jumlah AC (Unit)</label>
            <input type="number" placeholder="1" className="w-full p-2.5 rounded-xl border border-slate-300" value={acCount} onChange={(e) => setAcCount(e.target.value)} />
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Kelengkapan Furnitur</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "kitchenSet", label: "Kitchen Set" },
              { key: "wardrobe", label: "Lemari" },
              { key: "bed", label: "Tempat Tidur" },
              { key: "sofa", label: "Sofa" },
              { key: "waterHeater", label: "Water Heater" },
              { key: "tv", label: "TV" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setFurniture, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${furniture[item.key] ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {furniture[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FASILITAS GEDUNG, UTILITAS & KEAMANAN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Fasilitas Gedung, Utilitas & Keamanan</h2>
        <div>
          <label className="block font-semibold mb-2">Fasilitas Rusun Bersama</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "lift", label: "Lift" },
              { key: "emergencyStairs", label: "Tangga Darurat" },
              { key: "playground", label: "Area Bermain" },
              { key: "park", label: "Taman" },
              { key: "musholla", label: "Musholla" },
              { key: "hall", label: "Aula Serbaguna" },
              { key: "posyandu", label: "Posyandu" },
              { key: "sharedDryingArea", label: "Area Jemur Bersama" },
              { key: "centralTrash", label: "Tempat Sampah Terpusat" },
              { key: "parkingArea", label: "Area Parkir" },
              { key: "koperasi", label: "Koperasi" },
              { key: "minimarket", label: "Minimarket" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setFacilities, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${facilities[item.key] ? "bg-emerald-600 text-white border-emerald-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {facilities[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div>
            <label className="block font-semibold mb-1">Daya Listrik (Watt)</label>
            <input type="number" placeholder="1300" className="w-full p-2.5 rounded-xl border border-slate-300" value={electricity} onChange={(e) => setElectricity(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">IPL (Rp/Bulan)</label>
            <input type="number" placeholder="150000" className="w-full p-2.5 rounded-xl border border-slate-300" value={iplFee} onChange={(e) => setIplFee(e.target.value)} />
          </div>
          <div>
            <label className="block font-semibold mb-1">Biaya Parkir (Rp/Bulan)</label>
            <input type="number" placeholder="50000" className="w-full p-2.5 rounded-xl border border-slate-300" value={parkingFee} onChange={(e) => setParkingFee(e.target.value)} />
          </div>
        </div>
      </div>

      {/* 5. LEGALITAS & LOKASI */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">Legalitas & Akses Lingkungan</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block font-semibold mb-1">Sertifikat Utama *</label>
            <select className="w-full p-2.5 rounded-xl border border-slate-300 bg-white" value={certificate} onChange={(e) => setCertificate(e.target.value)}>
              <option value="SHMSRS">SHMSRS</option>
              <option value="PPJB">PPJB</option>
              <option value="AJB">AJB</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Akses & Fasilitas Terdekat</label>
          <div className="flex flex-wrap gap-2">
            {[
              { key: "nearSchool", label: "Dekat Sekolah" },
              { key: "nearHospital", label: "Dekat Rumah Sakit" },
              { key: "nearMarket", label: "Dekat Pasar" },
              { key: "nearTerminal", label: "Dekat Terminal" },
              { key: "nearStation", label: "Dekat Stasiun" },
              { key: "nearBusStop", label: "Dekat Halte Bus" },
              { key: "nearToll", label: "Dekat Jalan Tol" },
              { key: "floodFree", label: "Bebas Banjir" },
            ].map((item) => (
              <button key={item.key} type="button" onClick={() => toggle(setAccess, item.key)} className={`px-3 py-1.5 rounded-xl border font-medium transition ${access[item.key] ? "bg-blue-600 text-white border-blue-600" : "bg-slate-50 text-slate-600 border-slate-200"}`}>
                {access[item.key] ? "✓ " : "+ "}{item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl text-sm transition shadow-md">
        Lanjut ke Step 2: Legalitas & Harga →
      </button>
    </form>
  );
}