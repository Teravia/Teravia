"use client";

import React, { useState } from "react";

interface Step1Props {
  transactionType?: string;
  onNext: () => void;
  updateFormData?: (data: Record<string, any>) => void;
  initialData?: Record<string, any>;
}

export default function Step1Information({
  transactionType = "Jual",
  onNext,
  updateFormData,
  initialData = {},
}: Step1Props) {
  // State Form
  const [statusTransaksi, setStatusTransaksi] = useState<string>(
    initialData.statusTransaksi || transactionType || "Jual"
  );
  const [judul, setJudul] = useState<string>(initialData.judul || "");
  const [kategori, setKategori] = useState<string>(initialData.kategori || "");
  const [jenisProperti, setJenisProperti] = useState<string>(initialData.jenisProperti || "");

  // State Error Validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Handler Submit & Validasi
  const handleLanjut = () => {
    const newErrors: Record<string, string> = {};

    if (!statusTransaksi) newErrors.statusTransaksi = "Pilih salah satu status transaksi";
    if (!judul.trim()) newErrors.judul = "Judul listing wajib diisi";
    if (!kategori) newErrors.kategori = "Pilih kategori properti";
    if (!jenisProperti) newErrors.jenisProperti = "Pilih jenis properti";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    if (updateFormData) {
      updateFormData({
        statusTransaksi,
        judul,
        kategori,
        jenisProperti,
      });
    }
    onNext();
  };

  return (
    <div className="space-y-6 font-sans">
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
        <h2 className="text-sm font-bold text-slate-900 border-b pb-3">
          Step 1: Informasi Properti
        </h2>

        {/* 1. CHECKBOX / RADIO STATUS TRANSAKSI */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-2">
            Status Transaksi <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {["Jual", "Sewa", "Over Kredit", "Lelang"].map((item) => (
              <label
                key={item}
                className={`flex items-center justify-center gap-2 p-3 rounded-xl border text-xs font-bold cursor-pointer transition-all ${
                  statusTransaksi === item
                    ? "bg-blue-50 border-blue-600 text-blue-600 shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <input
                  type="radio"
                  name="statusTransaksi"
                  value={item}
                  checked={statusTransaksi === item}
                  onChange={(e) => {
                    setStatusTransaksi(e.target.value);
                    if (errors.statusTransaksi) setErrors((prev) => ({ ...prev, statusTransaksi: "" }));
                  }}
                  className="accent-blue-600 w-3.5 h-3.5"
                />
                {item}
              </label>
            ))}
          </div>
          {errors.statusTransaksi && (
            <p className="text-red-500 text-[10px] font-medium mt-1">{errors.statusTransaksi}</p>
          )}
        </div>

        {/* 2. KOLOM JUDUL */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 mb-1">
            Judul Listing <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={judul}
            onChange={(e) => {
              setJudul(e.target.value);
              if (errors.judul) setErrors((prev) => ({ ...prev, judul: "" }));
            }}
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.judul ? "border-red-400 bg-red-50/50" : "border-slate-300"
            }`}
          />
          {errors.judul && (
            <p className="text-red-500 text-[10px] font-medium mt-1">{errors.judul}</p>
          )}
        </div>

        {/* 3. DROPDOWN MENU BERDAMPINGAN: KATEGORI & JENIS PROPERTI (KOSONG) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Kategori Properti */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={kategori}
              onChange={(e) => {
                setKategori(e.target.value);
                if (errors.kategori) setErrors((prev) => ({ ...prev, kategori: "" }));
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all ${
                errors.kategori ? "border-red-400 bg-red-50/50" : "border-slate-300"
              }`}
            >
              <option value="">-- Pilih --</option>
              {/* Opsi kategori nanti diisi sesuai arahan */}
            </select>
            {errors.kategori && (
              <p className="text-red-500 text-[10px] font-medium mt-1">{errors.kategori}</p>
            )}
          </div>

          {/* Jenis Properti */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={jenisProperti}
              onChange={(e) => {
                setJenisProperti(e.target.value);
                if (errors.jenisProperti) setErrors((prev) => ({ ...prev, jenisProperti: "" }));
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all ${
                errors.jenisProperti ? "border-red-400 bg-red-50/50" : "border-slate-300"
              }`}
            >
              <option value="">-- Pilih --</option>
              {/* Opsi jenis properti nanti diisi sesuai arahan */}
            </select>
            {errors.jenisProperti && (
              <p className="text-red-500 text-[10px] font-medium mt-1">{errors.jenisProperti}</p>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER NAVIGASI STEP 1 */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-end">
        <button
          type="button"
          onClick={handleLanjut}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
        >
          Lanjut &rarr;
        </button>
      </div>
    </div>
  );
            }
