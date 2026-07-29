"use client";

import React, { useState } from "react";

interface FormApartemenProps {
  onNext: () => void;
  transactionType: string;
}

export default function FormApartemen({ onNext, transactionType }: FormApartemenProps) {
  // --- INFORMASI DASAR & UNIT ---
  const [apartmentName, setApartmentName] = useState("");
  const [tower, setTower] = useState("");
  const [unitNumber, setUnitNumber] = useState("");
  const [developer, setDeveloper] = useState("");
  const [condition, setCondition] = useState("Baik");
  const [ownershipStatus, setOwnershipStatus] = useState("SHMSRS");
  const [unitArea, setUnitArea] = useState("");
  const [unitType, setUnitType] = useState("2 Bedroom");
  const [floor, setFloor] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [insideBathrooms, setInsideBathrooms] = useState("");
  const [ceilingHeight, setCeilingHeight] = useState("");
  const [balcony, setBalcony] = useState(false);
  const [balconyArea, setBalconyArea] = useState("");
  const [facing, setFacing] = useState("Utara");
  const [viewUnit, setViewUnit] = useState("City View");
  const [isCorner, setIsCorner] = useState(false);

  // --- RUANGAN & FURNITUR ---
  const [rooms, setRooms] = useState<string[]>([]);
  const [furnished, setFurnished] = useState("Fully Furnished");
  const [acUnits, setAcUnits] = useState("");
  const [furnitureItems, setFurnitureItems] = useState<string[]>([]);

  // --- FASILITAS & PARKIR ---
  const [buildingFacilities, setBuildingFacilities] = useState<string[]>([]);
  const [parkingRights, setParkingRights] = useState(false);
  const [parkingSlots, setParkingSlots] = useState("");
  const [parkingFeatures, setParkingFeatures] = useState<string[]>([]);

  // --- UTILITAS, KEAMANAN & BIAYA PENGELOLAAN ---
  const [electricity, setElectricity] = useState("2200");
  const [utilities, setUtilities] = useState<string[]>([]);
  const [securityFeatures, setSecurityFeatures] = useState<string[]>([]);
  const [iplCost, setIplCost] = useState("");
  const [sinkingFund, setSinkingFund] = useState("");
  const [parkingFee, setParkingFee] = useState("");

  // --- LEGALITAS, LOKASI & LINGKUNGAN ---
  const [legalities, setLegalities] = useState<string[]>([]);
  const [nearbyAccess, setNearbyAccess] = useState<string[]>([]);
  const [environmentTraits, setEnvironmentTraits] = useState<string[]>([]);

  // --- INFORMASI TAMBAHAN ---
  const [unitStatus, setUnitStatus] = useState("Siap Huni");
  const [isRented, setIsRented] = useState(false);
  const [readyToMove, setReadyToMove] = useState(true);
  const [saleReason, setSaleReason] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const toggleItem = (array: string[], setArray: (val: string[]) => void, item: string) => {
    if (array.includes(item)) {
      setArray(array.filter((i) => i !== item));
    } else {
      setArray([...array, item]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 font-sans">
      {/* 1. INFORMASI DASAR APARTEMEN */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Informasi Dasar Apartemen</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nama Apartemen *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Taman Rasuna"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={apartmentName}
              onChange={(e) => setApartmentName(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tower *</label>
            <input
              type="text"
              required
              placeholder="Contoh: Tower 1"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={tower}
              onChange={(e) => setTower(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Nomor Unit *</label>
            <input
              type="text"
              required
              placeholder="Contoh: 12B"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={unitNumber}
              onChange={(e) => setUnitNumber(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Developer</label>
            <input
              type="text"
              placeholder="Contoh: Agung Podomoro"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={developer}
              onChange={(e) => setDeveloper(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kondisi Properti *</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={condition}
              onChange={(e) => setCondition(e.target.value)}
            >
              <option value="Baru">Baru</option>
              <option value="Sangat Baik">Sangat Baik</option>
              <option value="Baik">Baik</option>
              <option value="Perlu Renovasi Ringan">Perlu Renovasi Ringan</option>
              <option value="Perlu Renovasi Total">Perlu Renovasi Total</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Status Kepemilikan *</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={ownershipStatus}
              onChange={(e) => setOwnershipStatus(e.target.value)}
            >
              <option value="SHMSRS">SHMSRS</option>
              <option value="PPJB">PPJB</option>
              <option value="AJB">AJB</option>
              <option value="Hak Pakai">Hak Pakai</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>
        </div>
      </div>

      {/* 2. SPESIFIKASI INFORMASI UNIT */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Spesifikasi Unit</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Luas Unit (m²) *</label>
            <input
              type="number"
              required
              placeholder="Contoh: 45"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none focus:ring-2 focus:ring-blue-500"
              value={unitArea}
              onChange={(e) => setUnitArea(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Tipe Unit *</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={unitType}
              onChange={(e) => setUnitType(e.target.value)}
            >
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
            <label className="block font-semibold text-slate-700 mb-1">Lantai *</label>
            <input
              type="number"
              required
              placeholder="Contoh: 15"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={floor}
              onChange={(e) => setFloor(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah Kamar Tidur *</label>
            <input
              type="number"
              required
              placeholder="Contoh: 2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah Kamar Mandi *</label>
            <input
              type="number"
              required
              placeholder="Contoh: 1"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Kamar Mandi Dalam</label>
            <input
              type="number"
              placeholder="0"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={insideBathrooms}
              onChange={(e) => setInsideBathrooms(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Ceiling Height (m)</label>
            <input
              type="number"
              placeholder="3.2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={ceilingHeight}
              onChange={(e) => setCeilingHeight(e.target.value)}
            />
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Arah Hadap</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={facing}
              onChange={(e) => setFacing(e.target.value)}
            >
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
          <div>
            <label className="block font-semibold text-slate-700 mb-1">View Unit</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={viewUnit}
              onChange={(e) => setViewUnit(e.target.value)}
            >
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
          {balcony && (
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Luas Balkon (m²)</label>
              <input
                type="number"
                placeholder="4"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
                value={balconyArea}
                onChange={(e) => setBalconyArea(e.target.value)}
              />
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-4 pt-2 text-xs">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={balcony}
              onChange={(e) => setBalcony(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span className="font-medium text-slate-700">Memiliki Balkon</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={isCorner}
              onChange={(e) => setIsCorner(e.target.checked)}
              className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
            />
            <span className="font-medium text-slate-700">Corner Unit (Pojok)</span>
          </label>
        </div>
      </div>

      {/* 3. RUANGAN & INTERIOR FURNITUR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Ruangan & Furnitur</h3>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Tata Ruang Unit</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Living Room",
              "Dining Area",
              "Pantry",
              "Kitchen Set",
              "Walk-in Closet",
              "Storage Room",
              "Laundry Area",
              "Maid Room",
              "Maid Bathroom",
              "Workspace",
              "Study Room",
            ].map((room) => {
              const active = rooms.includes(room);
              return (
                <button
                  type="button"
                  key={room}
                  onClick={() => toggleItem(rooms, setRooms, room)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {room}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Furnished Status</label>
            <select
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-white"
              value={furnished}
              onChange={(e) => setFurnished(e.target.value)}
            >
              <option value="Fully Furnished">Fully Furnished</option>
              <option value="Semi Furnished">Semi Furnished</option>
              <option value="Unfurnished">Unfurnished</option>
            </select>
          </div>
          <div>
            <label className="block font-semibold text-slate-700 mb-1">Jumlah AC (Unit)</label>
            <input
              type="number"
              placeholder="2"
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 outline-none"
              value={acUnits}
              onChange={(e) => setAcUnits(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Item Furnitur & Elekronik</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Water Heater",
              "Kitchen Set",
              "Lemari Built-in",
              "Sofa",
              "Dining Set",
              "Tempat Tidur",
              "Kulkas",
              "Mesin Cuci",
              "Microwave",
              "TV",
              "Smart Home",
              "Smart Door Lock",
            ].map((item) => {
              const active = furnitureItems.includes(item);
              return (
                <button
                  type="button"
                  key={item}
                  onClick={() => toggleItem(furnitureItems, setFurnitureItems, item)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 4. FASILITAS APARTEMEN & PARKIR */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <h3 className="text-sm font-bold text-slate-900 border-b pb-3">Fasilitas Gedung & Parkir</h3>
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">Fasilitas Apartemen</label>
          <div className="flex flex-wrap gap-2 text-xs">
            {[
              "Lobby",
              "Reception",
              "Lift Penumpang",
              "Lift Service",
              "Swimming Pool",
              "Children's Pool",
              "Gym",
              "Sauna",
              "Jacuzzi",
              "Playground",
              "Jogging Track",
              "Tennis Court",
              "Basketball Court",
              "Function Hall",
              "Meeting Room",
              "Co-Working Space",
              "Mini Market",
              "ATM Center",
              "Laundry Service",
              "Cafe",
              "Restaurant",
              "Sky Garden",
              "Rooftop Garden",
              "BBQ Area",
            ].map((facility) => {
              const active = buildingFacilities.includes(facility);
              return (
                <button
                  type="button"
                  key={facility}
                  onClick={() => toggleItem(buildingFacilities, setBuildingFacilities, facility)}
                  className={`px-3 py-1.5 rounded-xl border transition font-medium ${
                    active
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {active ? "✓ " : "+ "}
                  {facility}
                </button>
              );
            })}
          </div>
        </div>

        <div className="pt-2 border-t text-xs space-y-3">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={parkingRights}
                onChange={(e) => setParkingRights(e.target.checked)}
                className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
              />
              <span className="font-semibold text-slate-700">Memiliki Hak Parkir</span>
            </label>
            {parkingRights && (
              <div className="flex items-center gap-2">
                <span className="text-slate-600">Jumlah Slot Parkir:</span>
                <input
                  type="number"
                  placeholder="1"
       
