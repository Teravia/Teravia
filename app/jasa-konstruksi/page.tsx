"use client";

import { useState } from "react";
import Link from "next/link";

const CATEGORIES = [
  "Semua",
  "Main Contractor",
  "Sub Contractor",
  "Design & Build",
  "Renovasi",
  "Interior - Custom",
  "Landscape",
];

const MOCK_CONTRACTORS = [
  {
    id: "1",
    name: "PT Teravia Karya Tama",
    category: "Design & Build",
    location: "Bandung & Jabodetabek",
    experience: "8 Tahun",
    completedProjects: 45,
    rating: 4.9,
    services: ["Design & Build", "Renovasi", "Main Contractor"],
    description: "Spesialis pembangunan rumah tinggal mewah, ruko, dan renovasi total dengan garansi pemeliharaan 3 bulan.",
    badge: "Verified SBU",
  },
  {
    id: "2",
    name: "CV Griya Indah Jaya",
    category: "Interior - Custom",
    location: "Bandung",
    experience: "5 Tahun",
    completedProjects: 32,
    rating: 4.8,
    services: ["Interior - Custom", "Renovasi"],
    description: "Produsen furniture custom, kitchen set, dan penataan interior kantor / rumah minimalis modern.",
    badge: "Top Vendor",
  },
  {
    id: "3",
    name: "Nusantara Landscape & Garden",
    category: "Landscape",
    location: "Jawa Barat",
    experience: "6 Tahun",
    completedProjects: 28,
    rating: 4.7,
    services: ["Landscape", "Sub Contractor"],
    description: "Jasa pembuatan taman minimalis, kolam renang, vertikal garden, dan perawatan area hijau commercial.",
    badge: "Verified Partner",
  },
];

export default function JasaKonstruksiPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredData = MOCK_CONTRACTORS.filter((item) => {
    const matchCat =
      selectedCategory === "Semua" || item.services.includes(selectedCategory);
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.location.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-950 text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full border border-blue-400/30">
            Ekosistem Konstruksi Teravia
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Mitra Jasa Konstruksi & Kontraktor Terpercaya
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Temukan vendor kontraktor, tim renovasi, spesialis interior, hingga arsitek landscape berpengalaman untuk proyek Anda.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto pt-4">
            <input
              type="text"
              placeholder="Cari nama vendor atau lokasi..."
              className="w-full px-4 py-3 rounded-xl text-slate-800 text-sm focus:outline-none shadow-md"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Category Pills Filter */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List Vendor / Kontraktor */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((vendor) => (
            <div
              key={vendor.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    ✓ {vendor.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    ★ <span>{vendor.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-1">{vendor.name}</h3>
                <p className="text-xs text-slate-500 mb-3">📍 {vendor.location}</p>

                <p className="text-xs text-slate-600 line-clamp-3 mb-4 leading-relaxed">
                  {vendor.description}
                </p>

                {/* Service Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {vendor.services.map((srv) => (
                    <span
                      key={srv}
                      className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Stat & CTA */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex justify-between text-xs text-slate-500">
                  <span>Pengalaman: <strong>{vendor.experience}</strong></span>
                  <span>Proyek: <strong>{vendor.completedProjects}+ Selesai</strong></span>
                </div>

                <button
                  onClick={() => alert(`Menghubungi ${vendor.name} via WhatsApp`)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs py-2.5 rounded-xl transition"
                >
                  Konsultasi & Request RAB
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
        }
