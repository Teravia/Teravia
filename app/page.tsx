"use client";

import { useState } from "react";
import Link from "next/link";

// Mock Data Properti untuk Tampilan Awal
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
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    badge: "Emerald Member",
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
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=600&q=80",
    badge: "Gold Member",
  }
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar Minimalis */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          <Link href="/" className="text-xl font-black text-blue-600 tracking-tight">
            PROPERTI<span className="text-purple-600">HUB</span>
          </Link>
          <div className="flex gap-2">
            <Link
              href="/dashboard/member/add-listing"
              className="bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              + Pasang Iklan
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section & Search Bar */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white py-12 px-4 text-center">
        <h1 className="text-2xl sm:text-4xl font-extrabold mb-3">
          Cari Properti Impian & Bangun Ekosistemmu
        </h1>
        <p className="text-blue-200 text-sm sm:text-base max-w-2xl mx-auto mb-6">
          Platform marketplace properti terpadu dilengkapi fitur Marketing Ads, AI Copywriter, dan Jasa Konstruksi Professional.
        </p>

        {/* Quick Search Box */}
        <div className="max-w-xl mx-auto bg-white p-2 rounded-xl shadow-lg flex gap-2">
          <input
            type="text"
            placeholder="Cari lokasi, kota, atau nama cluster..."
            className="w-full px-3 py-2 text-gray-800 focus:outline-none text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-purple-600 text-white font-semibold px-5 py-2 rounded-lg hover:bg-purple-700 text-sm">
            Cari
          </button>
        </div>
      </section>

      {/* Shortcut Ekosistem Properti */}
      <section className="max-w-7xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-3 gap-3 bg-white p-4 rounded-xl shadow-md border text-center">
          <Link href="/jasa-konstruksi" className="p-2 rounded-lg hover:bg-blue-50 transition">
            <div className="text-2xl mb-1">🏗️</div>
            <div className="text-xs font-bold text-gray-700">Jasa Konstruksi</div>
          </Link>
          <Link href="/jasa-profesional" className="p-2 rounded-lg hover:bg-purple-50 transition">
            <div className="text-2xl mb-1">📐</div>
            <div className="text-xs font-bold text-gray-700">Arsitek & Sipil</div>
          </Link>
          <Link href="/mitra-notaris" className="p-2 rounded-lg hover:bg-emerald-50 transition">
            <div className="text-2xl mb-1">⚖️</div>
            <div className="text-xs font-bold text-gray-700">Mitra Notaris/PPAT</div>
          </Link>
        </div>
      </section>

      {/* Listing Properti Feed */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">Properti Terbaru</h2>
          <span className="text-xs bg-purple-100 text-purple-700 font-semibold px-2.5 py-1 rounded-full">
            ⚡ Auto-Bump Active
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_PROPERTIES.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition border">
              <div className="relative h-48 bg-gray-200">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded">
                  {item.badge}
                </span>
              </div>
              <div className="p-4 space-y-2">
                <div className="text-lg font-extrabold text-blue-600">
                  Rp {item.price.toLocaleString("id-ID")}
                </div>
                <h3 className="font-bold text-gray-800 text-sm line-clamp-1">{item.title}</h3>
                <p className="text-xs text-gray-500">📍 {item.location}</p>
                <div className="flex gap-4 pt-2 border-t text-xs text-gray-600 font-medium">
                  <span>🛏️ {item.beds} KT</span>
                  <span>🚿 {item.baths} KM</span>
                  <span>📐 {item.landArea} m²</span>
                </div>
                <Link
                  href={`/listing/${item.id}`}
                  className="block text-center mt-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold text-xs py-2 rounded-lg transition"
                >
                  Lihat Detail Properti
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
      }
