"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

// Mock Data Sementara (Nantinya diganti dengan Fetch Data dari Supabase berdasarkan ID)
const MOCK_DETAIL = {
  id: "1",
  title: "Rumah Minimalis Modern 2 Lantai Cluster Exclusive",
  price: 850000000,
  type: "RUMAH DIJUAL",
  location: "Kopo, Bandung, Jawa Barat",
  phone: "628123456789", // Nomor WA Penjual
  beds: 3,
  baths: 2,
  landArea: 90,
  buildingArea: 70,
  images: [
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  ],
  aiDescription: `✨ **Hunian Impian Keluarga Modern di Lokasi Strategis!**

Rumah elegan dengan pencahayaan alami yang melimpah. Siap huni tanpa perlu renovasi! Dekat dengan pintu tol, pusat perbelanjaan, dan sekolah ternama.

• Sertifikat Hak Milik (SHM)
• Keamanan 24 Jam & One Gate System
• Bebas Banjir`,
  notary: {
    name: "Notaris Budi Santoso, S.H., M.Kn",
    address: "Jl. Raya Kopo No. 123 (Verified Partner)",
    phone: "6281987654321",
  },
  // Diisi otomatis dari pengaturan Co-Broke di profil agen pemilik listing
  coBrokeAvailable: true,
  commissionSplit: "50 : 50",
};

export default function ListingDetailPage() {
  const property = MOCK_DETAIL;
  const [selectedImage, setSelectedImage] = useState(property.images[0]);

  // Format Pesan Otomatis WhatsApp Penjual
  const waText = encodeURIComponent(
    `Halo, saya tertarik dengan properti yang diiklankan di Teravia:\n\n*${property.title}*\nHarga: Rp ${property.price.toLocaleString("id-ID")}\n\nApakah properti ini masih tersedia?`
  );
  const waUrl = `https://wa.me/${property.phone}?text=${waText}`;

  return (
    <div className="min-h-screen bg-slate-50 pb-24">
      {/* 1. Header Back Button */}
      <div className="bg-white/80 backdrop-blur-md border-b border-slate-200 py-3 px-4 sticky top-0 z-40">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
          >
            ← Kembali ke Beranda
          </Link>
          <span className="text-[11px] font-bold text-slate-400">
            ID Listing: #{property.id}
          </span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* 2. Galeri Foto Interaktif */}
        <div className="space-y-3">
          <div className="relative rounded-2xl overflow-hidden shadow-md bg-slate-900 h-64 sm:h-96 border border-slate-200">
            <Image
              src={selectedImage}
              alt={property.title}
              fill
              priority
              className="object-cover"
              unoptimized
            />
          </div>

          {/* Thumbnail Selector */}
          {property.images.length > 1 && (
            <div className="flex gap-2.5 overflow-x-auto pb-1">
              {property.images.map((imgUrl, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`relative w-20 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                    selectedImage === imgUrl
                      ? "border-blue-600 scale-95 shadow-sm"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={imgUrl}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* 3. Info Utama & Harga */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] sm:text-xs bg-blue-50 text-blue-700 border border-blue-200 font-extrabold px-2.5 py-1 rounded-md tracking-wider">
                {property.type}
              </span>
              {property.coBrokeAvailable && (
                <span className="text-[10px] sm:text-xs bg-emerald-50 text-emerald-700 border border-emerald-200 font-extrabold px-2.5 py-1 rounded-md tracking-wider flex items-center gap-1">
                  🤝 Co-Broke Available
                </span>
              )}
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-2.5 leading-snug">
              {property.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 flex items-center gap-1 font-medium">
              <span>📍</span> {property.location}
            </p>
          </div>

          <div className="text-2xl sm:text-3xl font-black text-blue-600">
            Rp {property.price.toLocaleString("id-ID")}
          </div>

          {/* Grid Spesifikasi Kunci */}
          <div className="grid grid-cols-4 gap-2 pt-4 border-t border-slate-100 text-center text-xs sm:text-sm">
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 text-[11px] mb-0.5">🛏️ K. Tidur</div>
              <div className="font-extrabold text-slate-800">{property.beds}</div>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 text-[11px] mb-0.5">🚿 K. Mandi</div>
              <div className="font-extrabold text-slate-800">{property.baths}</div>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 text-[11px] mb-0.5">📐 L. Tanah</div>
              <div className="font-extrabold text-slate-800">{property.landArea} m²</div>
            </div>
            <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
              <div className="text-slate-400 text-[11px] mb-0.5">🏗️ L. Bangunan</div>
              <div className="font-extrabold text-slate-800">{property.buildingArea} m²</div>
            </div>
          </div>
        </div>

        {/* 4. Deskripsi AI Copywriter */}
        <div className="bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3">
          <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600 text-white text-xs font-bold">
              ✨
            </span>
            <h2 className="text-sm sm:text-base font-bold text-slate-900">
              Deskripsi Properti
            </h2>
          </div>
          <div className="text-xs sm:text-sm text-slate-700 whitespace-pre-line leading-relaxed font-normal">
            {property.aiDescription}
          </div>
        </div>

        {/* 4b. Info Co-Broke — hanya tampil kalau agen pemilik listing bersedia */}
        {property.coBrokeAvailable && (
          <div className="bg-emerald-50 border border-emerald-200 p-5 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-xs sm:text-sm">
              <span className="text-base">🤝</span>
              <span>Terbuka untuk Co-Broke</span>
            </div>
            <p className="text-xs text-emerald-800/80 leading-relaxed">
              Agen pemilik listing ini bersedia kerja sama closing bersama.
              Skema bagi komisi default: <strong>{property.commissionSplit}</strong>{" "}
              (bisa dinego langsung).
            </p>
            <p className="text-[10px] text-emerald-700/70">
              Hubungi lewat WhatsApp co-broke di halaman profil agen untuk
              koordinasi lebih lanjut.
            </p>
          </div>
        )}

        {/* 5. Section Rekomendasi Ekosistem: Notaris / PPAT Terdekat */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200/80 p-5 rounded-2xl space-y-3">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-xs sm:text-sm">
            <span className="text-base">⚖️</span>
            <span>Rekomendasi Notaris / PPAT Terdekat</span>
          </div>
          <p className="text-xs text-amber-800/80 leading-relaxed">
            Butuh bantuan resmi untuk pengurusan akta jual beli (AJB), balik nama sertifikat, atau cek keabsahan surat tanah di area ini?
          </p>
          <div className="bg-white/90 p-3.5 rounded-xl border border-amber-200/60 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <div className="font-bold text-slate-800 text-xs sm:text-sm">
                {property.notary.name}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1">
                <span className="text-emerald-600">Verified Partner</span> • {property.notary.address}
              </div>
            </div>
            <a
              href={`https://wa.me/${property.notary.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-amber-600 hover:bg-amber-700 text-white font-bold px-4 py-2 rounded-xl text-xs transition-colors shadow-xs shrink-0"
            >
              Konsultasi Notaris
            </a>
          </div>
        </div>
      </div>

      {/* 6. Sticky Floating Contact Bar (Bottom) */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-slate-200 p-3.5 z-40 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-3">
          <div className="hidden sm:block">
            <div className="text-[10px] text-slate-400 uppercase font-extrabold tracking-wider">
              Harga Penawaran
            </div>
            <div className="text-lg font-black text-blue-600">
              Rp {property.price.toLocaleString("id-ID")}
            </div>
          </div>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 sm:flex-none bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center py-3 px-8 rounded-xl transition-all duration-200 text-xs sm:text-sm flex justify-center items-center gap-2 shadow-md shadow-emerald-600/20 cursor-pointer"
          >
            <span>💬</span> Hubungi Penjual via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
