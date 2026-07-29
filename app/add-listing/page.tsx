"use client";

import { useState } from "react";
import Link from "next/link";

export default function AddListingPage() {
  const [loadingAI, setLoadingAI] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    specs: "",
    description: "",
    imageUrl: "",
  });

  const generateAIDescription = async () => {
    // 1. Validasi Input
    if (!formData.title && !formData.location) {
      alert("Harap isi minimal Judul atau Lokasi terlebih dahulu!");
      return;
    }

    setLoadingAI(true);
    try {
      const res = await fetch("/api/generate-description", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: formData.title,
          location: formData.location,
          price: formData.price,
          specs: formData.specs,
        }),
      });

      // 2. Baca respon sebagai teks mentah dulu (agar aman dari error HTML Vercel)
      const rawText = await res.text();

      let data;
      try {
        data = JSON.parse(rawText);
      } catch (e) {
        console.error("Non-JSON Response:", rawText);
        throw new Error(
          `Server merespons HTML (Status ${res.status}). Kemungkinan GEMINI_API_KEY belum terpasang di Vercel atau belum di-Redeploy.`
        );
      }

      // 3. Cek jika HTTP status bukan 200 OK
      if (!res.ok) {
        throw new Error(data.error || `Error status ${res.status}`);
      }

      // 4. Jika sukses, isi ke state deskripsi
      if (data.description) {
        setFormData((prev) => ({ ...prev, description: data.description }));
      } else {
        alert("Deskripsi gagal dihasilkan oleh AI.");
      }
    } catch (err: any) {
      // 5. Tangkap error dan munculkan pesan yang jelas
      alert(err.message || "Terjadi kesalahan jaringan.");
    } finally {
      setLoadingAI(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Iklan berhasil dibuat! (Nanti kita hubungkan ke Supabase)");
  };

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Pasang Iklan Properti</h1>
            <p className="text-sm text-slate-500">Jangkau ribuan pembeli di Teravia</p>
          </div>
          <Link href="/" className="text-sm text-blue-600 hover:underline">
            ← Kembali
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Judul Properti */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Judul Properti
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Rumah Minimalis Modern Cluster Emerald"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>

          {/* Lokasi & Harga */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Lokasi / Kota
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: BSD City, Tangerang Selatan"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Harga (Rp)
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: 1.250.000.000"
                className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              />
            </div>
          </div>

          {/* Spesifikasi Singkat */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Spesifikasi Singkat
            </label>
            <input
              type="text"
              placeholder="Contoh: LT 90m2 / LB 120m2, 3 KT, 2 KM, Smart Home"
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800"
              value={formData.specs}
              onChange={(e) => setFormData({ ...formData, specs: e.target.value })}
            />
          </div>

          {/* URL Gambar */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              URL Foto Properti (Unsplash/Direct Link)
            </label>
            <input
              type="url"
              placeholder="https://images.unsplash.com/photo-..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            />
          </div>

          {/* Deskripsi & Magic AI Button */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-sm font-medium text-slate-700">
                Deskripsi Lengkap
              </label>
              <button
                type="button"
                onClick={generateAIDescription}
                disabled={loadingAI}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 border border-purple-200 px-3 py-1 rounded-full transition"
              >
                {loadingAI ? "✨ AI Sedang Menulis..." : "✨ Buat Deskripsi Otomatis (AI)"}
              </button>
            </div>
            <textarea
              rows={6}
              required
              placeholder="Tulis deskripsi atau klik tombol AI di atas untuk buat otomatis..."
              className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-800"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition shadow-md shadow-blue-200"
          >
            Terbitkan Iklan Properti
          </button>
        </form>
      </div>
    </div>
  );
              }
