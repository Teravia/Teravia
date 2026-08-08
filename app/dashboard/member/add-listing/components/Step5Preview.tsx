"use client";

import React, { useState } from "react";

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
}

export default function Step5Preview({
  onPrev,
  onPublish,
  formData = {},
  transactionType = "Jual",
}: Step5Props) {
  // Extracting data dari Step 1
  const statusTransaksi = formData.statusTransaksi || transactionType || "Jual";
  const judul = formData.judul || "-";
  const kategori = formData.kategori || "-";
  const jenisProperti = formData.jenisProperti || "-";
  const detailData = formData.detailData || {};

  // Extracting data dari Step 2
  const price = formData.price ? Number(formData.price).toLocaleString("id-ID") : "0";
  const priceNegotiable = formData.priceNegotiable || "-";
  const pricePerSqm = formData.pricePerSqm
    ? Number(formData.pricePerSqm).toLocaleString("id-ID")
    : null;
  const priceNotes = formData.priceNotes || "";

  // Detail Sewa / Over Kredit / Lelang
  const rentalPeriod = formData.rentalPeriod || "";
  const minimumRentalDuration = formData.minimumRentalDuration || "";
  const securityDeposit = formData.securityDeposit
    ? Number(formData.securityDeposit).toLocaleString("id-ID")
    : "";
  const originalBank = formData.originalBank || "";
  const remainingInstallmentCount = formData.remainingInstallmentCount || "";
  const monthlyInstallment = formData.monthlyInstallment
    ? Number(formData.monthlyInstallment).toLocaleString("id-ID")
    : "";
  const auctionDate = formData.auctionDate || "";
  const auctionOrganizer = formData.auctionOrganizer || "";
  const auctionLocation = formData.auctionLocation || "";

  // Extracting data dari Step 3 (Lokasi)
  const provinceName = formData.provinceName || "";
  const regencyName = formData.regencyName || "";
  const districtName = formData.districtName || "";
  const villageName = formData.villageName || "";
  const address = formData.address || "-";
  const postalCode = formData.postalCode || "";

  const fullLocation = [villageName, districtName, regencyName, provinceName]
    .filter(Boolean)
    .join(", ");

  // Extracting data dari Step 4 (Media)
  const images: MediaItem[] = formData.images || [];
  const coverImage =
    formData.coverImage || images.find((img) => img.isCover) || images[0];

  // Selected Image untuk Lightbox / View Modal
  const [selectedImage, setSelectedImage] = useState<string>(
    coverImage?.previewUrl || ""
  );

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

        {/* 1. SECTION GALERI FOTO (STEP 4) */}
        {images.length > 0 && (
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Foto Properti ({images.length})
            </p>

            {/* Foto Utama Besar */}
            <div className="relative aspect-video w-full max-h-[360px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
              <img
                src={selectedImage || coverImage?.previewUrl}
                alt={judul}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-slate-900/70 text-white text-[10px] font-semibold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                Foto Utama / Cover
              </span>
            </div>

            {/* Grid Thumbnail Kecil */}
            {images.length > 1 && (
              <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-thin">
                {images.map((img) => (
                  <button
                    key={img.id}
                    type="button"
                    onClick={() => setSelectedImage(img.previewUrl)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                      (selectedImage || coverImage?.previewUrl) === img.previewUrl
                        ? "border-blue-600 scale-95 shadow-sm"
                        : "border-transparent opacity-70 hover:opacity-100"
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

        {/* 2. INFORMASI UTAMA & HARGA (STEP 1 & 2) */}
        <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-100">
                {kategori} • {jenisProperti}
              </span>
              <h1 className="text-lg font-bold text-slate-900 mt-1">{judul}</h1>
            </div>

            <div className="text-right">
              <p className="text-xs text-slate-400 font-semibold">
                {statusTransaksi === "Sewa"
                  ? `Harga Sewa (${rentalPeriod})`
                  : statusTransaksi === "Lelang"
                  ? "Harga Limit Lelang"
                  : statusTransaksi === "Over Kredit"
                  ? "Harga Take Over"
                  : "Harga Jual"}
              </p>
              <p className="text-xl font-extrabold text-emerald-600">
                Rp {price}
              </p>
              <p className="text-[10px] font-medium text-slate-500">
                {priceNegotiable} {pricePerSqm && `• Rp ${pricePerSqm}/m²`}
              </p>
            </div>
          </div>

          {/* Catatan Tambahan Khusus Status Transaksi */}
          {statusTransaksi === "Sewa" && (minimumRentalDuration || securityDeposit) && (
            <div className="pt-2 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-xs">
              {minimumRentalDuration && (
                <p className="text-slate-600">
                  <strong className="text-slate-800">Min. Sewa:</strong> {minimumRentalDuration}
                </p>
              )}
              {securityDeposit && (
                <p className="text-slate-600">
                  <strong className="text-slate-800">Deposit:</strong> Rp {securityDeposit}
                </p>
              )}
            </div>
          )}

          {statusTransaksi === "Over Kredit" && (
            <div className="pt-2 border-t border-slate-200/60 grid grid-cols-3 gap-2 text-xs">
              {originalBank && (
                <p className="text-slate-600">
                  <strong className="text-slate-800">Bank:</strong> {originalBank}
                </p>
              )}
              {monthlyInstallment && (
                <p className="text-slate-600">
                  <strong className="text-slate-800">Cicilan:</strong> Rp {monthlyInstallment}/bln
                </p>
              )}
              {remainingInstallmentCount && (
                <p className="text-slate-600">
                  <strong className="text-slate-800">Sisa:</strong> {remainingInstallmentCount} Bln
                </p>
              )}
            </div>
          )}

          {statusTransaksi === "Lelang" && (
            <div className="pt-2 border-t border-slate-200/60 grid grid-cols-2 gap-2 text-xs">
              {auctionDate && (
                <p className="text-slate-600">
                  <strong className="text-slate-800">Tgl Lelang:</strong> {auctionDate}
                </p>
              )}
              {auctionOrganizer && (
                <p className="text-slate-600">
                  <strong className="text-slate-800">Penyelenggara:</strong> {auctionOrganizer}
                </p>
              )}
            </div>
          )}

          {priceNotes && (
            <p className="text-xs text-slate-500 italic pt-1 border-t border-slate-200/60">
              * Catatan: {priceNotes}
            </p>
          )}
        </div>

        {/* 3. LOKASI (STEP 3) */}
        <div className="space-y-2">
          <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
            Lokasi Properti
          </p>
          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-1">
            <p className="text-xs font-semibold text-slate-800">{address}</p>
            {fullLocation && (
              <p className="text-xs text-slate-500">{fullLocation}</p>
            )}
            {postalCode && (
              <p className="text-[11px] font-medium text-slate-400">
                Kode Pos: {postalCode}
              </p>
            )}
          </div>
        </div>

        {/* 4. DETAIL SPESIFIKASI DINAMIS (STEP 1) */}
        {Object.keys(detailData).length > 0 && (
          <div className="space-y-3">
            <p className="text-xs font-bold text-slate-800 uppercase tracking-wider">
              Spesifikasi Properti
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Object.entries(detailData).map(([key, val]) => {
                if (val === undefined || val === null || val === "") return null;
                const formattedVal = Array.isArray(val) ? val.join(", ") : String(val);

                return (
                  <div
                    key={key}
                    className="p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs"
                  >
                    <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-tight">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </p>
                    <p className="font-bold text-slate-800 mt-0.5 truncate">
                      {formattedVal === "true"
                        ? "Ya"
                        : formattedVal === "false"
                        ? "Tidak"
                        : formattedVal}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
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
