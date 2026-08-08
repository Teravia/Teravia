"use client";

import React, { useState, useEffect } from "react";

interface MediaItem {
  id: string;
  file: File;
  previewUrl: string;
  isCover: boolean;
}

interface Step5Props {
  onPrev: () => void;
  onPublish: () => void;
  formData?: Record<string, any>;
  transactionType?: string;
  updateFormData?: (data: Record<string, any>) => void;
}

export default function Step5Preview({
  onPrev,
  onPublish,
  formData = {},
  transactionType = "Jual",
  updateFormData,
}: Step5Props) {
  // Extracting data dari Step 1 - 4
  const statusTransaksi = formData.statusTransaksi || transactionType || "Jual";
  const judul = formData.judul || "-";
  const kategori = formData.kategori || "-";
  const jenisProperti = formData.jenisProperti || "-";
  const detailData = formData.detailData || {};

  const price = formData.price ? Number(formData.price).toLocaleString("id-ID") : "0";
  const priceNegotiable = formData.priceNegotiable || "-";

  const provinceName = formData.provinceName || "";
  const regencyName = formData.regencyName || "";
  const districtName = formData.districtName || "";
  const villageName = formData.villageName || "";
  const address = formData.address || "-";

  const fullLocation = [villageName, districtName, regencyName, provinceName]
    .filter(Boolean)
    .join(", ");

  const images: MediaItem[] = formData.images || [];
  const coverImage =
    formData.coverImage || images.find((img) => img.isCover) || images[0];

  const [selectedImage, setSelectedImage] = useState<string>(
    coverImage?.previewUrl || ""
  );

  // =========================================================================
  // STATE & FUNGSI OTOMATIS AI COPYWRITER
  // =========================================================================
  const [aiDescription, setAiDescription] = useState<string>(
    formData.aiDescription || ""
  );
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  // Fungsi memanggil API AI Copywriter
  const generateCopywriting = async () => {
    setIsGenerating(true);
    try {
      // Panggil API Next.js /api/generate-copywriting (atau simulasi sementara)
      const res = await fetch("/api/generate-copywriting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          statusTransaksi,
          judul,
          kategori,
          jenisProperti,
          harga: price,
          lokasi: fullLocation,
          alamat: address,
          spesifikasi: detailData,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setAiDescription(data.text);
        if (updateFormData) updateFormData({ aiDescription: data.text });
      } else {
        // Fallback dummy jika API belum dibuat
        const dummyText = `🔥 PROPERTI IMPIAN DIJUAL! 🔥\n\n${judul}\n\nNikmati hunian nyaman berjenis ${jenisProperti} yang berlokasi sangat strategis di ${fullLocation}. Properti ini menawarkan fasilitas terbaik dengan harga penawaran Rp ${price} (${priceNegotiable}).\n\n✨ Keunggulan Utama:\n- Lokasi aman, bebas banjir, dan akses mudah.\n- Lingkungan asri & bernilai investasi tinggi.\n- Kondisi bangunan siap huni.\n\nJangan lewatkan kesempatan emas ini! Segera hubungi kami untuk survei lokasi dan informasi lebih lanjut.`;
        setAiDescription(dummyText);
        if (updateFormData) updateFormData({ aiDescription: dummyText });
      }
    } catch (error) {
      console.error("Error generating AI copywriting:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  // OTOMATIS GENERATE AI saat halaman Step 5 pertama kali dibuka (jika belum ada deskripsi)
  useEffect(() => {
    if (!aiDescription && !isGenerating) {
      generateCopywriting();
    }
  }, []);

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <div className="border-b pb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-slate-900">
            Step 5: Ringkasan & Pratinjau Listing
          </h2>
          <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-[11px] border border-blue-200">
            Status: {statusTransaksi}
          </span>
        </div>

        {/* 1. GALERI FOTO */}
        {images.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Foto Properti ({images.length})
            </p>
            <div className="relative aspect-video w-full max-h-[360px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={selectedImage || coverImage?.previewUrl}
                alt={judul}
                className="w-full h-full object-cover"
              />
            </div>
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1">
                {images.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImage(img.previewUrl)}
                    className={`relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      (selectedImage || coverImage?.previewUrl) === img.previewUrl
                        ? "border-blue-600 scale-95"
                        : "border-transparent opacity-70"
                    }`}
                  >
                    <img
                      src={img.previewUrl}
                      alt="Thumbnail"
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 2. INFORMASI HARGA & LOKASI */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
          <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
            {kategori} • {jenisProperti}
          </span>
          <h1 className="text-lg font-bold text-slate-900">{judul}</h1>
          <p className="text-xl font-extrabold text-emerald-600">Rp {price}</p>
          <p className="text-xs text-slate-500">📍 {address}, {fullLocation}</p>
        </div>

        {/* 3. KARTU HASIL AI COPYWRITER (OTOMATIS) */}
        <div className="p-5 rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50/50 via-indigo-50/30 to-white space-y-3 relative">
          <div className="flex items-center justify-between border-b border-purple-100 pb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-purple-600 text-white text-xs font-bold shadow-sm">
                ✨
              </span>
              <div>
                <h3 className="text-xs font-bold text-slate-800">
                  Deskripsi Iklan Auto-Generated (AI Copywriter)
                </h3>
                <p className="text-[10px] text-slate-500">
                  Disusun otomatis dari data spesifikasi properti Anda
                </p>
              </div>
            </div>

            {/* Action Buttons AI */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsEditing(!isEditing)}
                className="text-[11px] font-semibold text-slate-600 hover:text-slate-900 px-2.5 py-1 rounded-lg border border-slate-200 bg-white"
              >
                {isEditing ? "Selesai Edit" : "✏️ Edit"}
              </button>
              <button
                type="button"
                onClick={generateCopywriting}
                disabled={isGenerating}
                className="text-[11px] font-bold text-purple-700 hover:text-purple-900 bg-purple-100 hover:bg-purple-200 px-2.5 py-1 rounded-lg transition-all border border-purple-200 disabled:opacity-50"
              >
                {isGenerating ? "⏳ Menyusun..." : "🔄 Buat Ulang"}
              </button>
            </div>
          </div>

          {/* Konten Deskripsi AI */}
          {isGenerating ? (
            <div className="py-8 flex flex-col items-center justify-center space-y-2 text-slate-400">
              <div className="animate-spin text-2xl">✨</div>
              <p className="text-xs font-medium">AI sedang merangkum deskripsi terbaik untuk properti Anda...</p>
            </div>
          ) : isEditing ? (
            <textarea
              rows={8}
              value={aiDescription}
              onChange={(e) => {
                setAiDescription(e.target.value);
                if (updateFormData) updateFormData({ aiDescription: e.target.value });
              }}
              className="w-full p-3 rounded-xl border border-purple-300 text-xs font-medium focus:ring-2 focus:ring-purple-500 bg-white leading-relaxed resize-y"
            />
          ) : (
            <div className="text-xs text-slate-700 whitespace-pre-line leading-relaxed font-normal bg-white/80 p-4 rounded-xl border border-purple-100/60 shadow-xs">
              {aiDescription}
            </div>
          )}
        </div>
      </div>

      {/* FOOTER NAVIGASI STEP 5 */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-50 text-xs font-bold transition-colors"
        >
          &larr; Kembali
        </button>
        <button
          type="button"
          onClick={onPublish}
          className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-sm transition-colors cursor-pointer"
        >
          Publikasikan
        </button>
      </div>
    </div>
  );
}
