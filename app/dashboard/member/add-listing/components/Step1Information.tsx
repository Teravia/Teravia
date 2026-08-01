"use client";

import React, { useState } from "react";
import type { FieldConfig, SectionConfig } from "@/configs/types";
import { CONFIG } from "@/configs";

/* ============================================================================
 * Step1Information.tsx
 * ----------------------------------------------------------------------------
 * File ini HANYA berisi: (1) pilihan kategori/jenis properti, (2) generic
 * form-renderer, dan (3) state/validasi. TIDAK ADA data spesifikasi field
 * tertulis langsung di sini — semua data field hidup secara hierarkis di
 * folder ./configs/ (murni data, tanpa JSX/logic), supaya:
 *   - typo/format salah di satu file section ketahuan oleh TypeScript saat
 *     development, bukan bikin seluruh halaman crash saat runtime.
 *   - menambah section / jenis properti / kategori baru = edit atau
 *     tambah file kecil di level yang sesuai, tidak menyentuh file
 *     renderer ini sama sekali.
 *   - risiko "efek domino" React (satu komponen anak crash menjatuhkan
 *     seluruh pohon) diminimalkan karena file config tidak mengandung
 *     JSX/komponen sama sekali, cuma object literal biasa.
 *
 * Struktur folder (hierarchical modular — lihat configs/index.ts untuk detail):
 *   configs/
 *     types.ts                          <- definisi tipe (dipakai semua level)
 *     index.ts                          <- gabung SEMUA kategori -> CONFIG
 *     hunian/index.ts                   <- gabung 7 jenis properti Hunian
 *       rumah/index.ts + *.ts per section (informasi-dasar.ts, dst)
 *       apartemen/ , cluster/ , townhouse/ , penthouse/ , rusun/ , kontrakan/
 *     komersial/index.ts                <- gabung 8 jenis properti Komersial
 *       ruko/ , rukan/ , kios/ , gedung-perkantoran/ , hotel/ , resort/ ,
 *       rest-area/ , spbu/  (masing-masing index.ts + *.ts per section)
 *     industri/index.ts                 <- kategori Industri & Logistik (kosong)
 *     tanah/index.ts                    <- kategori Tanah & Lahan (kosong)
 *
 * Field umum lintas-properti (Harga, Foto, Video, Virtual Tour, Lokasi Peta,
 * Dokumen Pendukung, SEO, AI Description, Jadwal Open House/Viewing, dll)
 * SENGAJA TIDAK dimasukkan ke sini karena itu bagian dari modul umum
 * "Pasang Iklan" (step lain). "Jenis Transaksi" juga tidak dirender ulang
 * sebagai input — nilainya sudah ditentukan lewat prop `transactionType`
 * dari step sebelumnya, di sini hanya ditampilkan read-only.
 * ==========================================================================*/

// CONFIG sekarang diimpor langsung dari ./configs (lihat configs/index.ts)

/* ============================================================================
 * PROPS
 * ==========================================================================*/
interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

/* ============================================================================
 * ERROR BOUNDARY
 * ----------------------------------------------------------------------------
 * Membungkus area form dinamis. Kalau ada 1 jenis properti yang config-nya
 * bermasalah saat render (misalnya format tidak terduga lolos dari
 * TypeScript), yang gagal cuma area form itu saja — muncul pesan fallback,
 * bukan seluruh halaman jadi putih.
 * ==========================================================================*/
class FormErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error: unknown) {
    console.error("Step1Information form render error:", error);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-medium p-6 rounded-2xl">
          Terjadi kendala saat menampilkan form untuk jenis properti ini.
          Silakan pilih jenis properti lain atau muat ulang halaman.
        </div>
      );
    }
    return this.props.children;
  }
}

/* ============================================================================
 * KOMPONEN UTAMA
 * ==========================================================================*/
export default function Step1Information({ onNext, transactionType }: Step1Props) {
  const [category, setCategory] = useState("Hunian");
  const [propertyType, setPropertyType] = useState("Rumah");

  // Data form disimpan per jenis properti, supaya kalau user pindah-pindah
  // jenis properti lalu kembali lagi, isian sebelumnya tidak hilang.
  const [formDataByType, setFormDataByType] = useState<Record<string, Record<string, any>>>({});
  const [errorsByType, setErrorsByType] = useState<Record<string, Record<string, boolean>>>({});

  const sections = CONFIG[propertyType];
  const currentData = formDataByType[propertyType] || {};
  const currentErrors = errorsByType[propertyType] || {};

  // Handler Ganti Kategori & Reset Jenis Properti Default
  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCat = e.target.value;
    setCategory(selectedCat);

    if (selectedCat === "Hunian") setPropertyType("Rumah");
    else if (selectedCat === "Komersial") setPropertyType("Ruko");
    else if (selectedCat === "Industri & Logistik") setPropertyType("Gudang");
    else if (selectedCat === "Tanah & Lahan") setPropertyType("Tanah Kavling");
  };

  const handleFieldChange = (fieldKey: string, value: any) => {
    setFormDataByType((prev) => ({
      ...prev,
      [propertyType]: { ...(prev[propertyType] || {}), [fieldKey]: value },
    }));

    setErrorsByType((prev) => {
      if (!prev[propertyType] || !prev[propertyType][fieldKey]) return prev;
      const updated = { ...prev[propertyType] };
      delete updated[fieldKey];
      return { ...prev, [propertyType]: updated };
    });
  };

  const handleSubmit = () => {
    // Jenis properti yang belum ada konfigurasinya (kategori Industri &
    // Logistik / Tanah & Lahan yang masih kosong) -> langsung lanjut tanpa
    // validasi, karena belum ada field untuk divalidasi.
    if (!sections) {
      onNext();
      return;
    }

    const data = currentData;
    const newErrors: Record<string, boolean> = {};

    sections.forEach((section, si) => {
      section.fields.forEach((field, fi) => {
        if (!field.required) return;
        const key = `s${si}_f${fi}`;
        const val = data[key];
        if (val === undefined || val === null || val === "") {
          newErrors[key] = true;
        }
      });
    });

    if (Object.keys(newErrors).length > 0) {
      setErrorsByType((prev) => ({ ...prev, [propertyType]: newErrors }));
      return;
    }

    onNext();
  };

  const missingCount = Object.keys(currentErrors).length;

  return (
    <div className="space-y-6 font-sans">
      {/* SELEKSI KATEGORI & JENIS PROPERTI */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3">
          <h2 className="text-sm font-bold text-slate-900">
            Pilih Kategori & Jenis Properti
          </h2>
          <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-lg">
            Kategori: {category}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          {/* PILIHAN KATEGORI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Kategori Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={category}
              onChange={handleCategoryChange}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
            >
              <option value="Hunian">Hunian / Residence</option>
              <option value="Komersial">Komersial / Usaha</option>
              <option value="Industri & Logistik">Industri & Logistik</option>
              <option value="Tanah & Lahan">Tanah & Lahan</option>
              {/* TAMBAH KATEGORI DI SINI */}
            </select>
          </div>

          {/* PILIHAN JENIS PROPERTI */}
          <div>
            <label className="block font-semibold text-slate-700 mb-1">
              Jenis Properti <span className="text-red-500">*</span>
            </label>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-300 bg-white font-medium focus:ring-2 focus:ring-blue-500 outline-none"
            >
              {category === "Hunian" && (
                <>
                  <option value="Rumah">Rumah</option>
                  <option value="Apartemen">Apartemen</option>
                  <option value="Cluster">Cluster</option>
                  <option value="Townhouse">Townhouse</option>
                  <option value="Penthouse">Penthouse</option>
                  <option value="Rusun">Rusun (Rumah Susun)</option>
                  <option value="Kontrakan">Rumah Kontrakan</option>
                  {/* TAMBAH JENIS PROPERTI HUNIAN DI SINI */}
                </>
              )}

              {category === "Komersial" && (
                <>
                  <option value="Ruko">Ruko (Rumah Toko)</option>
                  <option value="Rukan">Rukan (Rumah Kantor)</option>
                  <option value="Kios">Kios / Toko</option>
                  <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                  <option value="Hotel">Hotel</option>
                  <option value="Resort">Resort</option>
                  <option value="Rest Area">Rest Area</option>
                  <option value="SPBU">SPBU</option>
                  {/* TAMBAH JENIS PROPERTI KOMERSIAL DI SINI */}
                </>
              )}

              {category === "Industri & Logistik" && (
                <>
                  <option value="Gudang">Gudang Logistik</option>
                  <option value="Distribution Center">Distribution Center (DC)</option>
                  <option value="Logistics Hub">Logistics Hub</option>
                  <option value="Cold Storage">Cold Storage</option>
                  <option value="Pabrik">Pabrik (Factory / Plant)</option>
                  <option value="Workshop">Workshop / Bengkel Industri</option>
                  <option value="Hanggar">Hanggar Pesawat</option>
                  <option value="Dry Port">Dry Port / ICD</option>
                  <option value="Kawasan Industri">Lahan / Kawasan Industri</option>
                  {/* TAMBAH JENIS PROPERTI INDUSTRI & LOGISTIK DI SINI */}
                </>
              )}

              {category === "Tanah & Lahan" && (
                <>
                  <option value="Tanah Kavling">Tanah Kavling / Residensial</option>
                  <option value="Tanah Komersial">Tanah Komersial</option>
                  <option value="Tanah Industri">Tanah Industri</option>
                  <option value="Tanah Pertanian">Tanah Pertanian</option>
                  <option value="Tanah Perkebunan">Tanah Perkebunan</option>
                  <option value="Tanah Peternakan">Tanah Peternakan</option>
                  <option value="Tanah Perikanan">Tanah Perikanan</option>
                  <option value="Tanah Perumahan">Tanah Perumahan / Developer</option>
                  {/* TAMBAH JENIS PROPERTI TANAH & LAHAN DI SINI */}
                </>
              )}
            </select>
          </div>
        </div>

        {/* Info Jenis Transaksi (read-only, sudah ditentukan di step sebelumnya) */}
        <div className="text-xs bg-blue-50 border border-blue-100 text-blue-700 font-medium px-3 py-2 rounded-xl">
          Jenis Transaksi: <span className="font-bold">{transactionType || "-"}</span>
        </div>
      </div>

      {/* FORM DINAMIS SESUAI JENIS PROPERTI */}
      <FormErrorBoundary>
        {sections ? (
          sections.map((section, si) => (
            <FormSection
              key={si}
              section={section}
              sectionIndex={si}
              data={currentData}
              errors={currentErrors}
              onChange={handleFieldChange}
            />
          ))
        ) : (
          <div className="bg-white p-8 rounded-2xl border border-dashed border-slate-300 text-center text-sm text-slate-500">
            Form spesifikasi untuk kategori{" "}
            <span className="font-semibold text-slate-700">{category}</span> — jenis{" "}
            <span className="font-semibold text-slate-700">{propertyType}</span>{" "}
            belum tersedia. Anda tetap dapat melanjutkan ke langkah berikutnya.
          </div>
        )}
      </FormErrorBoundary>

      {/* TOMBOL LANJUT */}
      <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
        {missingCount > 0 ? (
          <span className="text-xs font-semibold text-red-500">
            Lengkapi {missingCount} field wajib sebelum melanjutkan
          </span>
        ) : (
          <span className="text-xs text-slate-400">
            Pastikan seluruh data sudah benar sebelum melanjutkan
          </span>
        )}
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm transition-colors"
        >
          Lanjut ke Langkah Berikutnya
        </button>
      </div>
    </div>
  );
}

/* ============================================================================
 * GENERIC FORM SECTION RENDERER
 * ==========================================================================*/
function FormSection({
  section,
  sectionIndex,
  data,
  errors,
  onChange,
}: {
  section: SectionConfig;
  sectionIndex: number;
  data: Record<string, any>;
  errors: Record<string, boolean>;
  onChange: (fieldKey: string, value: any) => void;
}) {
  const inputFields = section.fields.filter((f) => f.type !== "boolean");
  const toggleFields = section.fields.filter((f) => f.type === "boolean");

  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
      <h3 className="text-sm font-bold text-slate-900 border-b pb-3">{section.title}</h3>

      {inputFields.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {inputFields.map((field) => {
            const fi = section.fields.indexOf(field);
            const key = `s${sectionIndex}_f${fi}`;
            return (
              <FormField
                key={key}
                fieldKey={key}
                field={field}
                value={data[key]}
                hasError={!!errors[key]}
                onChange={onChange}
              />
            );
          })}
        </div>
      )}

      {toggleFields.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {toggleFields.map((field) => {
            const fi = section.fields.indexOf(field);
            const key = `s${sectionIndex}_f${fi}`;
            const checked = !!data[key];
            return (
              <label
                key={key}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors ${
                  checked
                    ? "bg-blue-50 border-blue-300 text-blue-700"
                    : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={(e) => onChange(key, e.target.checked)}
                  className="accent-blue-600"
                />
                {field.label}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}

/* ============================================================================
 * GENERIC FIELD RENDERER (text / number / currency / select / textarea / date)
 * ==========================================================================*/
function FormField({
  fieldKey,
  field,
  value,
  hasError,
  onChange,
}: {
  fieldKey: string;
  field: FieldConfig;
  value: any;
  hasError: boolean;
  onChange: (fieldKey: string, value: any) => void;
}) {
  const baseClass = `w-full px-3 py-2.5 rounded-xl border bg-white font-medium focus:ring-2 focus:ring-blue-500 outline-none ${
    hasError ? "border-red-400" : "border-slate-300"
  }`;

  return (
    <div>
      <label className="block font-semibold text-slate-700 mb-1">
        {field.label} {field.required && <span className="text-red-500">*</span>}
      </label>

      {field.type === "select" && (
        <select value={value ?? ""} onChange={(e) => onChange(fieldKey, e.target.value)} className={baseClass}>
          <option value="">Pilih {field.label}</option>
          {(field.options || []).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      {field.type === "textarea" && (
        <textarea
          value={value ?? ""}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          rows={3}
          className={baseClass}
          placeholder={`Masukkan ${field.label}`}
        />
      )}

      {field.type === "number" && (
        <input
          type="number"
          value={value ?? ""}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          className={baseClass}
          placeholder="0"
        />
      )}

      {field.type === "currency" && (
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">Rp</span>
          <input
            type="number"
            value={value ?? ""}
            onChange={(e) => onChange(fieldKey, e.target.value)}
            className={`${baseClass} pl-9`}
            placeholder="0"
          />
        </div>
      )}

      {field.type === "date" && (
        <input
          type="date"
          value={value ?? ""}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          className={baseClass}
        />
      )}

      {field.type === "text" && (
        <input
          type="text"
          value={value ?? ""}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          className={baseClass}
          placeholder={`Masukkan ${field.label}`}
        />
      )}
    </div>
  );
}
