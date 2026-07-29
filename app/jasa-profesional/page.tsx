"use client";

import { useState } from "react";

const CATEGORIES = [
  "Semua",
  "Arsitek",
  "Drafter",
  "MEP",
  "Quantity Surveyor",
  "Quality Control",
];

const MOCK_PROFESSIONALS = [
  {
    id: "1",
    name: "Arch. Hendra Wijaya, S.T., IAI",
    role: "Arsitek",
    location: "Bandung",
    experience: "10 Tahun",
    rating: 5.0,
    skills: ["Arsitek", "3D Rendering", "Desain Fasad"],
    bio: "Anggota IAI Aktif. Menguasai desain hunian tropis modern, perancangan layout efisien, dan gambar IMB/PBG.",
    badge: "Sertifikasi IAI",
  },
  {
    id: "2",
    name: "Budi Santoso, S.T.",
    role: "Quantity Surveyor",
    location: "Jakarta & Bandung",
    experience: "7 Tahun",
    rating: 4.9,
    skills: ["Quantity Surveyor", "Hitung RAB", "Estimasi Material"],
    bio: "Spesialis perhitungan RAB presisi untuk rumah tinggal, gedung low-rise, hingga perhitungan BoQ kontraktor.",
    badge: "Verified Expert",
  },
  {
    id: "3",
    name: "Tim MEP Tech Engineering",
    role: "MEP",
    location: "Jawa Barat",
    experience: "6 Tahun",
    rating: 4.8,
    skills: ["MEP", "Drafter", "Instalasi Listrik & Plambing"],
    bio: "Tim konsultan Mekanikal, Elektrikal, dan Plumbing (MEP). Mengerjakan skematik jalur kelistrikan & sanitasi air.",
    badge: "Verified Team",
  },
  {
    id: "4",
    name: "Rian Studio CAD",
    role: "Drafter",
    location: "Remote / Bandung",
    experience: "4 Tahun",
    rating: 4.7,
    skills: ["Drafter", "AutoCAD 2D", "Gambar Kerja DED"],
    bio: "Layanan jasa pembuatan Gambar Kerja DED (Detail Engineering Design) siap konstruksi dan pengurusan IMB.",
    badge: "Fast Delivery",
  },
];

export default function JasaProfesionalPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [search, setSearch] = useState("");

  const filteredData = MOCK_PROFESSIONALS.filter((item) => {
    const matchCat =
      selectedCategory === "Semua" || item.skills.includes(selectedCategory);
    const matchSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.role.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-purple-950 via-slate-900 to-indigo-950 text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-3">
          <span className="bg-purple-500/20 text-purple-300 text-xs font-semibold px-3 py-1 rounded-full border border-purple-400/30">
            Professional Talent Teravia
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Tenaga Ahli Arsitek, Sipil & Konsultan
          </h1>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Sewa jasa Arsitek, Drafter DED, Ahli MEP, Perencana RAB (Quantity Surveyor), hingga Quality Control secara profesional.
          </p>

          {/* Search Box */}
          <div className="max-w-xl mx-auto pt-4">
            <input
              type="text"
              placeholder="Cari keahlian (misal: RAB, AutoCAD, Arsitek)..."
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
                  ? "bg-purple-600 text-white shadow-md shadow-purple-500/20"
                  : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* List Professional */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredData.map((pro) => (
            <div
              key={pro.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <span className="bg-purple-50 text-purple-700 border border-purple-200 text-[11px] font-bold px-2.5 py-0.5 rounded-md">
                    ★ {pro.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold">
                    ★ <span>{pro.rating}</span>
                  </div>
                </div>

                <h3 className="font-bold text-slate-900 text-lg mb-0.5">{pro.name}</h3>
                <p className="text-xs font-semibold text-purple-600 mb-2">{pro.role}</p>
                <p className="text-xs text-slate-500 mb-3">📍 {pro.location} • Pengalaman {pro.experience}</p>

                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {pro.bio}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {pro.skills.map((sk) => (
                    <span
                      key={sk}
                      className="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex gap-3">
                <button
                  onClick={() => alert(`Lihat Portofolio ${pro.name}`)}
                  className="w-1/2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs py-2.5 rounded-xl transition"
                >
                  Lihat Portofolio
                </button>
                <button
                  onClick={() => alert(`Menghubungi ${pro.name}`)}
                  className="w-1/2 bg-purple-600 hover:bg-purple-700 text-white font-semibold text-xs py-2.5 rounded-xl transition"
                >
                  Hubungi Expert
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
              }
