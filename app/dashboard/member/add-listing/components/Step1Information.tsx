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

  // State Accordion - section pertama terbuka secara default
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({ 0: true });

  const toggleSection = (idx: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [idx]: !(prev[idx] ?? idx === 0),
    }));
  };

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
  const dynamicConfig = CONFIG[kategori]?.[jenisProperti];
  const dynamicSections: SectionConfig[] | undefined = Array.isArray(dynamicConfig)
    ? dynamicConfig
    : dynamicConfig?.sections;

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
                    ? "bg-green-50 border-green-600 text-green-600 shadow-sm"
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
                  className="accent-green-600 w-3.5 h-3.5"
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
            className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-green-500 transition-all ${
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
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-green-500 bg-white transition-all ${
                errors.kategori ? "border-red-400 bg-red-50/50" : "border-slate-300"
              }`}
            >
              <option value="">-- Pilih Kategori --</option>
              <option value="Hunian">Hunian</option>
              <option value="Komersial">Komersial</option>
              <option value="Tanah">Tanah</option>
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
                setOpenSections({ 0: true });
                if (errors.jenisProperti)
                  setErrors((prev) => ({ ...prev, jenisProperti: "" }));
              }}
              className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-medium outline-none focus:ring-2 focus:ring-green-500 transition-all ${
                !kategori
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed border-slate-200"
                  : errors.jenisProperti
                  ? "border-red-400 bg-red-50/50"
                  : "bg-white border-slate-300"
              }`}
            >
              <option value="">-- Pilih Jenis --</option>
              {kategori === "Hunian" && (
                <>
                  <option value="Rumah">Rumah</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Cluster">Cluster</option>
                  <option value="Kontrakan">Kontrakan</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Rusun">Rusun</option>
                  <option value="Kost">Kost</option>
                  <option value="Villa">Villa</option>
                </>
              )}
              {kategori === "Komersial" && (
                <>
                  <option value="Ruko/Rukan">Ruko / Rukan</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Toko/Kios">Toko / Kios</option>
                  <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                </>
              )}
              {kategori === "Tanah" && (
                <>
                  <option value="Kavling">Kavling</option>
                  <option value="Sawah">Sawah</option>
                  <option value="Kebun">Kebun</option>
                  <option value="Peternakan">Peternakan</option>
                </>
              )}
            </select>
            {errors.jenisProperti && (
              <p className="text-red-500 text-[10px] font-medium mt-1">
                {errors.jenisProperti}
              </p>
            )}
          </div>
        </div>
      </div>

      {/* 4. DETAIL SPESIFIKASI DINAMIS DARI CONFIG (ACCORDION) */}
      {jenisProperti && dynamicSections && dynamicSections.length > 0 && (
        <div className="space-y-4">
          {dynamicSections.map((section, sectionIdx) => {
            const isOpen = openSections[sectionIdx] ?? sectionIdx === 0;
            return (
              <div
                key={sectionIdx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => toggleSection(sectionIdx)}
                  className="w-full flex items-center justify-between text-left pb-2 border-b border-slate-100"
                >
                  <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                    {section.title}
                  </h3>
                  <svg
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ${
                        isOpen ? "pt-4" : ""
                      }`}
                    >
                      {section.fields?.map((field, fieldIdx) => {
                        const fieldKey = field.id || `s${sectionIdx}_f${fieldIdx}`;
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
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* FOOTER NAVIGASI STEP 1 */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-end">
        <button
          type="button"
          onClick={handleLanjut}
          className="px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold shadow-sm transition-colors"
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
  const [tagInput, setTagInput] = useState("");

  const baseInputClass =
    "w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-medium outline-none focus:ring-2 focus:ring-green-500 bg-white transition-all";

  // Field Hidden - tidak perlu tampil ke user, tidak makan slot grid
  if (field.type === "hidden") {
    return null;
  }

  // Field Boolean / Checkbox Tunggal
  if (field.type === "boolean" || field.type === "checkbox") {
    return (
      <div className="flex items-center gap-2 pt-6 min-h-[2.5rem]">
        <input
          id={fieldKey}
          type="checkbox"
          checked={!!value}
          onChange={(e) => onChange(e.target.checked)}
          className="w-4 h-4 accent-green-600 rounded shrink-0 cursor-pointer"
        />
        <label
          htmlFor={fieldKey}
          className="text-xs font-semibold text-slate-700 cursor-pointer select-none"
        >
          {field.label}
        </label>
      </div>
    );
  }

  // Field Radio (mis. Ya/Tidak, Ya/Sebagian/Tidak)
  if (field.type === "radio") {
    const radioOptions = field.options || ["Ya", "Tidak"];
    return (
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex flex-wrap gap-3 pt-1">
          {radioOptions.map((opt, optIdx) => {
            const optValue = typeof opt === "object" && opt !== null ? opt.value : opt;
            const optLabel = typeof opt === "object" && opt !== null ? opt.label : opt;
            const optKey = `${optValue}_${optIdx}`;
            return (
              <label
                key={optKey}
                className="flex items-center gap-1.5 text-xs font-medium text-slate-700 cursor-pointer"
              >
                <input
                  type="radio"
                  name={fieldKey}
                  value={optValue}
                  checked={value === optValue}
                  onChange={() => onChange(optValue)}
                  className="accent-green-600 w-3.5 h-3.5"
                />
                {optLabel}
              </label>
            );
          })}
        </div>
      </div>
    );
  }

  // Field Multiselect & Checkbox Group (Pilihan Banyak)
  if (field.type === "multiselect" || field.type === "checkbox_group") {
    const options = field.options || [];
    const selected: string[] = Array.isArray(value) ? value : [];
    const toggleOption = (optValue: string) => {
      if (selected.includes(optValue)) {
        onChange(selected.filter((v) => v !== optValue));
      } else {
        onChange([...selected, optValue]);
      }
    };
    return (
      <div className="sm:col-span-2 lg:col-span-3">
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        <div className="flex flex-wrap gap-2 pt-1">
          {options.map((opt, optIdx) => {
            const optValue = typeof opt === "object" && opt !== null ? opt.value : opt;
            const optLabel = typeof opt === "object" && opt !== null ? opt.label : opt;
            const optKey = `${optValue}_${optIdx}`;
            const active = selected.includes(optValue);
            return (
              <button
                type="button"
                key={optKey}
                onClick={() => toggleOption(optValue)}
                className={`px-3 py-1.5 rounded-lg border text-[11px] font-semibold transition-all ${
                  active
                    ? "bg-green-50 border-green-600 text-green-600 shadow-sm"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                {optLabel}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Field Tags (input bebas, tekan Enter/koma untuk menambah)
  if (field.type === "tags") {
    const tagsArr: string[] = Array.isArray(value) ? value : [];
    const addTag = () => {
      const trimmed = tagInput.trim();
      if (trimmed && !tagsArr.includes(trimmed)) {
        onChange([...tagsArr, trimmed]);
      }
      setTagInput("");
    };
    const removeTag = (tag: string) => {
      onChange(tagsArr.filter((t) => t !== tag));
    };
    return (
      <div>
        <label className="block text-xs font-semibold text-slate-700 mb-1">
          {field.label} {field.required && <span className="text-red-500">*</span>}
        </label>
        <input
          type="text"
          value={tagInput}
          onChange={(e) => setTagInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === ",") {
              e.preventDefault();
              addTag();
            }
          }}
          onBlur={addTag}
          placeholder={field.placeholder || `Tambah ${field.label}, tekan Enter`}
          className={baseInputClass}
        />
        {tagsArr.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {tagsArr.map((tag, tagIdx) => (
              <span
                key={`${tag}_${tagIdx}`}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 border border-green-200 text-[10px] font-semibold text-green-700"
              >
                {tag}
                <button
                  type="button"
                  onClick={() => removeTag(tag)}
                  className="text-green-400 hover:text-green-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}
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
          placeholder={field.placeholder || `Masukkan ${field.label}`}
        />
      )}

       {/* Input Number */}
      {field.type === "number" && (
        <input
          type="number"
          value={value ?? ""}
          onChange={(e) => onChange(e.target.value)}
          className={baseInputClass}
          placeholder={field.placeholder || "0"}
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
            placeholder={field.placeholder || "0"}
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
          placeholder={field.placeholder || `Masukkan ${field.label}`}
        />
      )}
    </div>
  );
}
