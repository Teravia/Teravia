"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock Data Properti Teravia
const MOCK_PROPERTIES = [
  {
    id: "1",
    title: "Rumah Minimalis Modern 2 Lantai Cluster Exclusive",
    price: 850000000,
    type: "Rumah",
    location: "Kopo, Bandung",
    beds: 3,
    baths: 2,
    landArea: 90,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    badge: "Emerald Member",
    badgeColor: "bg-emerald-600",
  },
  {
    id: "2",
    title: "Ruko Strategis Pinggir Jalan Utama Siap Pakai",
    price: 1500000000,
    type: "Ruko",
    location: "Buah Batu, Bandung",
    beds: 1,
    baths: 2,
    landArea: 120,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
    badge: "Gold Member",
    badgeColor: "bg-amber-500",
  },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* 1. Hero Section & Quick Search */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-950 text-white py-14 sm:py-20 px-4 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full mb-4 border border-blue-400/30">
             Marketplace Properti Terpadu
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Cari Properti Impian & Bangun Ekosistemmu
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Platform jual beli properti terlengkap dengan fitur Marketing Ads, AI Copywriter, dan Jasa Konstruksi Profesional.
          </p>

          {/* Search Box */}
          <div className="max-w-2xl mx-auto bg-white p-2 sm:p-2.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-2">
            <div className="pl-3 text-slate-400">
              🔍
            </div>
            <input
              type="text"
              placeholder="Cari lokasi, kota, atau nama cluster..."
              className="w-full px-2 py-2 text-slate-800 focus:outline-none text-sm placeholder:text-slate-400"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-md shadow-blue-500/20">
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* 2. Shortcut Ekosistem Teravia */}
      <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-20">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-slate-100 text-center">
          <Link 
            href="/jasa-konstruksi" 
            className="p-3 rounded-xl hover:bg-blue-50/80 transition-all duration-200 group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🏗️</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Jasa Konstruksi</div>
          </Link>

          <Link 
            href="/jasa-profesional" 
            className="p-3 rounded-xl hover:bg-purple-50/80 transition-all duration-200 group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">📐</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Arsitek & Sipil</div>
          </Link>

          <Link 
            href="/mitra-notaris" 
            className="p-3 rounded-xl hover:bg-emerald-50/80 transition-all duration-200 group"
          >
            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">⚖️</div>
            <div className="text-xs sm:text-sm font-bold text-slate-800">Mitra Notaris/PPAT</div>
          </Link>
        </div>
      </section>

      {/* 3. Listing Properti Terbaru */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Properti Terbaru</h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">Pilihan properti paling gres siap huni atau investasi</p>
          </div>
          <span className="text-xs bg-purple-50 text-purple-700 border border-purple-200 font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
            <span>⚡</span> Auto-Bump Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PROPERTIES.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group"
            >
              {/* Gambar Properti */}
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  unoptimized
                />
                <span className={`absolute top-3 left-3 ${item.badgeColor} text-white text-[10px] font-bold px-2.5 py-1 rounded-md shadow-md`}>
                  {item.badge}
                </span>
              </div>

              {/* Detail Properti */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="text-xl font-extrabold text-blue-600 mb-1">
                    Rp {item.price.toLocaleString("id-ID")}
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm sm:text-base line-clamp-2 leading-snug group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-2 flex items-center gap-1">
                    <span>📍</span> {item.location}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs text-slate-600 font-medium mb-3">
                    <span>🛏️ {item.beds} KT</span>
                    <span>🚿 {item.baths} KM</span>
                    <span>📐 {item.landArea} m²</span>
                  </div>

                  <Link
                    href={`/listing/${item.id}`}
                    className="block text-center bg-slate-50 hover:bg-blue-600 hover:text-white text-slate-700 font-semibold text-xs py-2.5 rounded-xl transition-all duration-200 border border-slate-200/80 hover:border-blue-600"
                  >
                    Lihat Detail Properti
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
