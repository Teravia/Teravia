"use client";

import { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

interface PropertyItem {
  id: string;
  title: string;
  price: number;
  category: string; // Hunian | Komersial | Tanah
  type: string; // Rumah | Apartemen | Ruko | Kavling | dst
  location: string;
  beds?: number;
  baths?: number;
  area: number;
  image: string;
  badge?: string;
  coBroke?: boolean;
}

const MOCK_BUY_PROPERTIES: PropertyItem[] = [
  {
    id: "1",
    title: "Rumah Minimalis Modern 2 Lantai Cluster Exclusive",
    price: 850000000,
    category: "Hunian",
    type: "Rumah",
    location: "Kopo, Bandung",
    beds: 3,
    baths: 2,
    area: 90,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "Verified",
    coBroke: true,
  },
  {
    id: "2",
    title: "Ruko Strategis Pinggir Jalan Utama Siap Pakai",
    price: 1500000000,
    category: "Komersial",
    type: "Ruko/Rukan",
    location: "Buah Batu, Bandung",
    area: 120,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    badge: "Gold Member",
  },
  {
    id: "3",
    title: "Apartemen Studio View Kota, Fully Furnished",
    price: 450000000,
    category: "Hunian",
    type: "Apartemen",
    location: "Antapani, Bandung",
    beds: 1,
    baths: 1,
    area: 32,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    coBroke: true,
  },
  {
    id: "4",
    title: "Tanah Kavling Siap Bangun Dalam Kawasan",
    price: 320000000,
    category: "Tanah",
    type: "Kavling",
    location: "Cileunyi, Bandung",
    area: 150,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "5",
    title: "Villa Private Pool Dekat Kawasan Wisata",
    price: 2800000000,
    category: "Hunian",
    type: "Villa",
    location: "Lembang, Bandung",
    beds: 4,
    baths: 3,
    area: 210,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
    badge: "Premium",
    coBroke: true,
  },
  {
    id: "6",
    title: "Rumah Cluster Nyaman Bebas Banjir One Gate System",
    price: 980000000,
    category: "Hunian",
    type: "Cluster",
    location: "Margahayu, Bandung",
    beds: 3,
    baths: 2,
    area: 84,
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
  },
];

const CATEGORY_OPTIONS = ["Semua Kategori", "Hunian", "Komersial", "Tanah"];
const SORT_OPTIONS = [
  { id: "terbaru", label: "Terbaru" },
  { id: "termurah", label: "Harga Termurah" },
  { id: "termahal", label: "Harga Termahal" },
];

function formatRupiah(value: number) {
  return "Rp " + value.toLocaleString("id-ID");
}

function PropertyCardSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 animate-pulse">
      <div className="h-52 bg-slate-200" />
      <div className="p-5 space-y-3">
        <div className="h-5 w-2/3 bg-slate-200 rounded" />
        <div className="h-4 w-full bg-slate-200 rounded" />
        <div className="h-3 w-1/2 bg-slate-200 rounded" />
        <div className="pt-3 border-t border-slate-100 space-y-3">
          <div className="h-3 w-full bg-slate-200 rounded" />
          <div className="h-9 w-full bg-slate-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}

function EmptyState({ onReset }: { onReset: () => void }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4">
      <div className="text-5xl mb-4">🔍</div>
      <h3 className="text-sm font-bold text-slate-800 mb-1">
        Tidak ada properti yang cocok
      </h3>
      <p className="text-xs text-slate-500 max-w-xs mb-5">
        Coba ubah kata kunci lokasi atau filter kategori & harga yang kamu
        pakai.
      </p>
      <button
        onClick={onReset}
        className="bg-green-700 hover:bg-green-800 text-white text-xs font-bold px-5 py-2.5 rounded-xl transition"
      >
        Reset Filter
      </button>
    </div>
  );
}

function PropertyCard({ item }: { item: PropertyItem }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
      <div className="relative h-52 bg-slate-100 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          unoptimized
        />
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 items-start">
          {item.badge && (
            <span className="bg-green-700 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md">
              {item.badge}
            </span>
          )}
          {item.coBroke && (
            <span className="bg-white/95 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md flex items-center gap-1">
              🤝 Co-Broke
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="text-xl font-extrabold text-green-700 mb-1">
            {formatRupiah(item.price)}
          </div>
          <h3 className="font-bold text-slate-800 text-sm sm:text-base line-clamp-2 leading-snug group-hover:text-green-700 transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
            <span>📍</span> {item.location}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium mb-3">
            {item.beds !== undefined && <span>🛏️ {item.beds} KT</span>}
            {item.baths !== undefined && <span>🚿 {item.baths} KM</span>}
            <span>📐 {item.area} m²</span>
          </div>

          <Link
            href={`/listing/${item.id}`}
            className="block text-center bg-slate-50 hover:bg-green-700 hover:text-white text-slate-700 font-semibold text-xs py-2.5 rounded-xl transition-all duration-200 border border-slate-200/80 hover:border-green-700"
          >
            Lihat Detail Properti
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function BuyPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua Kategori");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("terbaru");

  // Simulasi fetch data dari server — di sinilah nanti diganti
  // dengan pemanggilan Supabase/API asli
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const filtered = useMemo(() => {
    let result = MOCK_BUY_PROPERTIES.filter((item) => {
      const matchSearch =
        search.trim() === "" ||
        item.location.toLowerCase().includes(search.toLowerCase()) ||
        item.title.toLowerCase().includes(search.toLowerCase());
      const matchCategory =
        category === "Semua Kategori" || item.category === category;
      const matchMin = minPrice === "" || item.price >= Number(minPrice);
      const matchMax = maxPrice === "" || item.price <= Number(maxPrice);
      return matchSearch && matchCategory && matchMin && matchMax;
    });

    if (sortBy === "termurah") result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === "termahal") result = [...result].sort((a, b) => b.price - a.price);

    return result;
  }, [search, category, minPrice, maxPrice, sortBy]);

  const resetFilter = () => {
    setSearch("");
    setCategory("Semua Kategori");
    setMinPrice("");
    setMaxPrice("");
    setSortBy("terbaru");
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header halaman */}
      <div className="bg-gradient-to-b from-slate-900 to-slate-800 py-10 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-1">
            Cari Properti Dijual
          </h1>
          <p className="text-sm text-slate-300">
            {isLoading ? "Memuat listing..." : `${filtered.length} properti ditemukan`}
          </p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="max-w-6xl mx-auto px-4 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-4 sm:p-5">
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            <div className="sm:col-span-2">
              <input
                type="text"
                placeholder="Cari lokasi atau nama listing..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
            >
              {CATEGORY_OPTIONS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <input
              type="number"
              placeholder="Harga Min"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
            />
            <input
              type="number"
              placeholder="Harga Max"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-green-500 outline-none text-slate-800"
            />
          </div>

          <div className="flex items-center justify-between mt-3 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500 font-medium">Urutkan:</span>
              {SORT_OPTIONS.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setSortBy(opt.id)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg transition ${
                    sortBy === opt.id
                      ? "bg-green-100 text-green-700"
                      : "text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
            {(search || category !== "Semua Kategori" || minPrice || maxPrice) && (
              <button
                onClick={resetFilter}
                className="text-xs font-semibold text-red-500 hover:underline"
              >
                Reset Filter
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Grid Listing */}
      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, i) => <PropertyCardSkeleton key={i} />)
          ) : filtered.length === 0 ? (
            <EmptyState onReset={resetFilter} />
          ) : (
            filtered.map((item) => <PropertyCard key={item.id} item={item} />)
          )}
        </div>
      </main>
    </div>
  );
}
