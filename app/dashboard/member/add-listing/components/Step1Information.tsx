"use client";

import React, { useState } from "react";
import { CONFIG } from "@/configs";
import type { FieldConfig, SectionConfig } from "@/configs/types";

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
  // State Utama Form
  const [statusTransaksi, setStatusTransaksi] = useState<string>(
    initialData.statusTransaksi || transactionType || "Jual"
  );
  const [judul, setJudul] = useState<string>(initialData.judul || "");
  const [kategori, setKategori] = useState<string>(initialData.kategori || "");
  const [jenisProperti, setJenisProperti] = useState<string>(initialData.jenisProperti || "");

  // State nilai dinamis untuk field-field detail dari config
  const [detailData, setDetailData] = useState<Record<string, any>>(
    initialData.detailData || {}
  );

  // State Error Validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Reset Jenis Properti jika Kategori diubah
  const handleKategoriChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setKategori(val);
    setJenisProperti(""); // Reset jenis properti
    if (errors.kategori) setErrors((prev) => ({ ...prev, kategori: "" }));
  };

  // Handler ubah nilai field spesifikasi/detail
  const handleDetailFieldChange = (key: string, value: any) => {
    setDetailData((prev) => ({ ...prev, [key]: value }));
  };

  // Handler Lanjut & Validasi
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
        detailData,
      });
    }
    onNext();
  };

  // Ambil struktur section detail dari configs/index.ts
  const dynamicSections: SectionConfig[] | undefined = CONFIG[jenisProperti];

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
                    if (errors.statusTransaksi)
                      setErrors((prev) => ({ ...prev, statusTransaksi: "" }));
                  }}
                  className="accent-blue-600 w-3.5 h-3.5"
                />
                {item}
              </label>
            ))}
          </div>
          {errors.statusTransaksi && (
            <p className="text-red-500 text-[10px] font-medium mt-1">
              {errors.statusTransaksi}
            </p>
          )}
        </div>

        {/* 2. KOLOM JUDUL LISTING */}
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
            placeholder="Masukkan judul listing"
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
              errors.judul ? "border-red-400 bg-red-50/50" : "border-slate-300"
            }`}
          />
          {errors.judul && (
            <p className="text-red-500 text-[10px] font-medium mt-1">{errors.judul}</p>
          )}
        </div>

        {/* 3. DROPDOWN MENU BERDAMPINGAN */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Kategori Properti */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={kategori}
              onChange={handleKategoriChange}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all ${
                errors.kategori ? "border-red-400 bg-red-50/50" : "border-slate-300"
              }`}
            >
              <option value="">-- Pilih Kategori --</option>
              <option value="Hunian">Hunian</option>
            </select>
            {errors.kategori && (
              <p className="text-red-500 text-[10px] font-medium mt-1">{errors.kategori}</p>
            )}
          </div>

          {/* Jenis Properti (Terkunci jika Kategori belum dipilih) */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={jenisProperti}
              disabled={!kategori}
              onChange={(e) => {
                setJenisProperti(e.target.value);
                if (errors.jenisProperti)
                  setErrors((prev) => ({ ...prev, jenisProperti: "" }));
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                !kategori
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200"
                  : errors.jenisProperti
                  ? "border-red-400 bg-red-50/50"
                  : "bg-white border-slate-300"
              }`}
            >
              <option value="">-- Pilih Jenis --</option>
              {kategori === "Hunian" && <option value="Rumah">Rumah</option>}
            </select>
            {errors.jenisProperti && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                {errors.jenisProperti}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 4. DETAIL SPESIFIKASI DINAMIS DARI CONFIG */}
      {jenisProperti && dynamicSections && dynamicSections.length > 0 && (
        <div className="space-y-6">
          {dynamicSections.map((section, sectionIdx) => (
            <div
              key={sectionIdx}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4"
            >
              <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider border-b pb-2">
                {section.title}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {section.fields?.map((field, fieldIdx) => {
                  const fieldKey = `s${sectionIdx}_f${fieldIdx}`;
                  return (
                    <DynamicFieldRenderer
                      key={fieldKey}
                      fieldKey={fieldKey}
                      field={field}
                      value={detailData[fieldKey]}
                      onChange={(val) => handleDetailFieldChange(fieldKey, val)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

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

/* ============================================================================
 * HELPER RENDERER UNTUK FIELD SPESIFIKASI DINAMIS
 * ==========================================================================*/
function DynamicFieldRenderer({
  fieldKey,
  field,
  value,
  onChange,
}: {
  fieldKey: string;
  field: FieldConfig;
  value: any;
  onChange: (val: any) => void;
}) {
  const baseInputClass =
    "w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-blue-500 bg-white transition-all";

  // Field Boolean (Checkbox/Toggle)
  if (field.type === "boolean") {
    return (
      <div className="flex items-center pt-5">
        <label className="flex items-center gap-2 cursor-pointer text-xs font-semibold text-slate-700">
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            className="w-4 h-4 accent-blue-600 rounded"
          />
          {field.label}
        </label>
      </div>
    );
  }

  return (
    <div>
      <label className="block text-xs font-semibold text-slate-700 mb-1">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>

      {/* Dropdown Select */}
      {field.type === "select" && (
        <select
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
        >
          <option value="">Pilih {field.label}</option>
{(field.options || []).map((opt, optIdx) => {
  const optValue = typeof opt === "object" && opt !== null ? opt.value : opt;
  const optLabel = typeof opt === "object" && opt !== null ? opt.label : opt;
  const optKey = `${optValue}_${optIdx}`;

  return (
    <option key={optKey} value={optValue}>
      {optLabel}
    </option>
  );
})}
        </select>
      )}

      {/* Textarea */}
      {field.type === "textarea" && (
        <textarea
          rows={3}
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
          placeholder={`Masukkan ${field.label}`}
        />
      )}

      {/* Input Number */}
      {field.type === "number" && (
        <input
          type="number"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
          placeholder="0"
        />
      )}

      {/* Input Currency */}
      {field.type === "currency" && (
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">
            Rp
          </span>
          <input
            type="number"
            value={value ?? ""}
            onChange={(e) => onChange(e.target.value)}
            className={`${baseInputClass} pl-9`}
            placeholder="0"
          />
        </div>
      )}

      {/* Input Date */}
      {field.type === "date" && (
        <input
          type="date"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
        />
      )}

      {/* Input Text Standard */}
      {field.type === "text" && (
        <input
          type="text"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
          placeholder={`Masukkan ${field.label}`}
        />
      )}
    </div>
  );
  }
