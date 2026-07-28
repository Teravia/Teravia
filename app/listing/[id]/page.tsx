"use client";

import Link from "next/link";

export default function ListingDetailPage() {
  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      {/* Header Back Button */}
      <div className="bg-white border-b py-3 px-4 sticky top-0 z-50">
        <Link href="/" className="text-sm font-semibold text-blue-600 flex items-center gap-1">
          ← Kembali ke Beranda
        </Link>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6">
        {/* Gambar Utama */}
        <div className="rounded-xl overflow-hidden shadow-md bg-black h-64 sm:h-96">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
            alt="Properti"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info Utama & Harga */}
        <div className="bg-white p-5 rounded-xl border shadow-sm space-y-3">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-xs bg-blue-100 text-blue-700 font-bold px-2 py-0.5 rounded">RUMAH DIJUAL</span>
              <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">
                Rumah Minimalis Modern 2 Lantai Cluster Exclusive
              </h1>
              <p className="text-sm text-gray-500">📍 Kopo, Bandung, Jawa Barat</p>
            </div>
          </div>
          <div className="text-2xl font-black text-blue-600">Rp 850.000.000</div>

          {/* Grid Spesifikasi */}
          <div className="grid grid-cols-4 gap-2 pt-3 border-t text-center text-xs sm:text-sm">
            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="text-gray-400">K. Tidur</div>
              <div className="font-bold text-gray-800">3</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="text-gray-400">K. Mandi</div>
              <div className="font-bold text-gray-800">2</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="text-gray-400">L. Tanah</div>
              <div className="font-bold text-gray-800">90 m²</div>
            </div>
            <div className="bg-gray-50 p-2 rounded-lg">
              <div className="text-gray-400">L. Bangunan</div>
              <div className="font-bold text-gray-800">70 m²</div>
            </div>
          </div>
        </div>

        {/* Deskripsi Sales (Hasil AI) */}
        <div className="bg-white p-5 rounded-xl border shadow-sm space-y-3">
          <h2 className="text-md font-bold text-gray-800 border-b pb-2">Deskripsi Properti</h2>
          <div className="text-sm text-gray-700 space-y-2 leading-relaxed">
            <p>
              ✨ <strong>Hunian Impian Keluarga Modern di Lokasi Strategis!</strong>
            </p>
            <p>
              Rumah elegan dengan pencahayaan alami yang melimpah. Siap huni tanpa perlu renovasi! Dekat dengan pintu tol, pusat perbelanjaan, dan sekolah ternama.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>Sertifikat Hak Milik (SHM)</li>
              <li>Keamanan 24 Jam & One Gate System</li>
              <li>Bebas Banjir</li>
            </ul>
          </div>
        </div>

        {/* Section Rekomendasi Notaris/PPAT Terdekat */}
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-amber-800 font-bold text-sm">
            <span>⚖️</span> Rekomendasi Notaris / PPAT Terdekat
          </div>
          <p className="text-xs text-amber-700">
            Butuh bantuan pengurusan balik nama sertifikat & AJB untuk lokasi Kopo?
          </p>
          <div className="bg-white p-3 rounded-lg border border-amber-200 flex justify-between items-center text-xs">
            <div>
              <div className="font-bold text-gray-800">Notaris Budi Santoso, S.H., M.Kn</div>
              <div className="text-gray-500">Jl. Raya Kopo No. 123 ( Verified Partner)</div>
            </div>
            <button className="bg-amber-600 text-white font-semibold px-3 py-1.5 rounded hover:bg-amber-700">
              Kontak
            </button>
          </div>
        </div>

        {/* Floating Action Button Kontak Penjual */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-3 z-50">
          <div className="max-w-4xl mx-auto flex gap-2">
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-center py-3 rounded-xl transition text-sm flex justify-center items-center gap-2"
            >
              <span>💬</span> Hubungi Penjual (WhatsApp)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
      }
