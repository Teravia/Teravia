"use client";

import React, { useState } from "react";

/* ============================================================================
 * Step1Information.tsx
 * ----------------------------------------------------------------------------
 * File ini SUDAH BERDIRI SENDIRI (single-file / self-contained).
 * Tidak ada lagi import ke folder "./step1-forms/..." — semua konfigurasi
 * field per jenis properti didefinisikan langsung di file ini melalui objek
 * CONFIG di bawah, dan dirender oleh satu generic form-renderer
 * (renderSection / renderField).
 *
 * Sumber data field & pilihan (Select) untuk 7 jenis properti Hunian diambil
 * dari:
 *   - Hunian-Rumah-Classification.md
 *   - Hunian-Cluster-Classification.md
 *   - Hunian-Townhouse-Classification.md
 *   - Hunian-Apartemen-Classification.md
 *   - Hunian-Penthouse-Classification.md
 *   - Hunian-Rusun-Classification.md
 *   - Hunian-Kontrakan-Classification.md
 *
 * Field umum lintas-properti (Harga, Foto, Video, Virtual Tour, Lokasi Peta,
 * Dokumen Pendukung, SEO, AI Description, Jadwal Open House, dll) SENGAJA
 * TIDAK dimasukkan ke sini karena menurut catatan di setiap file .md,
 * field-field tsb adalah bagian dari modul umum "Pasang Iklan" (step lain).
 *
 * "Jenis Transaksi" juga tidak dirender ulang sebagai input, karena nilainya
 * sudah ditentukan sebelumnya lewat prop `transactionType` dari step
 * sebelumnya — di sini hanya ditampilkan sebagai info read-only.
 * ==========================================================================*/

/* ============================================================================
 * 1. TIPE DATA KONFIGURASI FIELD
 * ==========================================================================*/
type FieldType =
  | "text"
  | "number"
  | "currency"
  | "select"
  | "boolean"
  | "textarea"
  | "date";

interface FieldConfig {
  label: string;
  type: FieldType;
  required?: boolean;
  options?: string[];
}

interface SectionConfig {
  title: string;
  fields: FieldConfig[];
}

/* ============================================================================
 * 2. KONFIGURASI PER KATEGORI
 * ----------------------------------------------------------------------------
 * Struktur: CONFIG["<PropertyType>"] = SectionConfig[]
 *
 * >>> CARA MENAMBAH JENIS PROPERTI BARU (di kategori yang sudah ada) <<<
 *   Tinggal tambahkan key baru di objek kategori terkait, contoh:
 *     KOMERSIAL_CONFIG["Ruko"] = [
 *       { title: "Informasi Dasar", fields: [
 *         { label: "Judul Iklan", type: "text", required: true },
 *         ...
 *       ]},
 *     ];
 *
 * >>> CARA MENAMBAH KATEGORI BARU <<<
 *   1. Buat const baru, misal `const KATEGORI_BARU_CONFIG: Record<string, SectionConfig[]> = {...}`
 *   2. Spread ke dalam `CONFIG` di bagian bawah.
 *   3. Tambahkan opsi <option> kategori & jenis propertinya di JSX
 *      pada bagian "PILIHAN KATEGORI & JENIS PROPERTI" (cari komentar
 *      // TAMBAH KATEGORI DI SINI).
 * ==========================================================================*/

// --- 2.1 KATEGORI: HUNIAN (7 jenis properti — sudah lengkap) ---
const HUNIAN_CONFIG: Record<string, SectionConfig[]> = {
  "Rumah": [
    {
      "title": "Informasi Dasar",
      "fields": [
        {
          "label": "Judul Iklan",
          "type": "text",
          "required": true
        },
        {
          "label": "Tipe Rumah",
          "type": "select",
          "required": true,
          "options": [
            "Rumah Subsidi",
            "Rumah Komersial",
            "Rumah Second",
            "Rumah Baru",
            "Rumah Minimalis",
            "Rumah Modern",
            "Rumah Klasik",
            "Rumah Scandinavian",
            "Rumah Industrial",
            "Rumah Tropis",
            "Rumah Mewah",
            "Smart Home",
            "Villa Residence"
          ]
        },
        {
          "label": "Kondisi Properti",
          "type": "select",
          "required": true,
          "options": [
            "Baru",
            "Bekas",
            "Renovasi Total",
            "Renovasi Sebagian",
            "Siap Huni",
            "Dalam Pembangunan"
          ]
        },
        {
          "label": "Status Kepemilikan",
          "type": "select",
          "required": true,
          "options": [
            "Milik Sendiri",
            "Milik Keluarga",
            "Warisan",
            "Atas Nama PT/Badan Usaha",
            "Lainnya"
          ]
        },
        {
          "label": "Tahun Dibangun",
          "type": "number",
          "required": false
        },
        {
          "label": "Tahun Renovasi",
          "type": "number",
          "required": false
        },
        {
          "label": "Status Listing",
          "type": "select",
          "required": true,
          "options": [
            "Tersedia",
            "Dalam Proses Negosiasi",
            "Terjual",
            "Tersewa",
            "Nonaktif"
          ]
        }
      ]
    },
    {
      "title": "Informasi Bangunan",
      "fields": [
        {
          "label": "Luas Tanah (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Luas Bangunan (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Jumlah Lantai",
          "type": "number",
          "required": true
        },
        {
          "label": "Kamar Tidur",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Mandi",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Tidur Pembantu",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Mandi Pembantu",
          "type": "number",
          "required": false
        },
        {
          "label": "Ruang Tamu",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Keluarga",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Makan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur Bersih",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur Kotor",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gudang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Loteng",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Basement",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Balkon",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Depan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Belakang",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Garasi & Parkir",
      "fields": [
        {
          "label": "Garasi Mobil",
          "type": "number",
          "required": false
        },
        {
          "label": "Carport",
          "type": "number",
          "required": false
        },
        {
          "label": "Parkir Motor",
          "type": "number",
          "required": false
        },
        {
          "label": "Charging EV",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Spesifikasi Bangunan",
      "fields": [
        {
          "label": "Daya Listrik (VA)",
          "type": "number",
          "required": false
        },
        {
          "label": "Sumber Air",
          "type": "select",
          "required": false,
          "options": [
            "PDAM",
            "Sumur Bor",
            "Sumur Gali",
            "PDAM & Sumur Bor",
            "Lainnya"
          ]
        },
        {
          "label": "Air Panas",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AC",
          "type": "number",
          "required": false
        },
        {
          "label": "Internet Fiber",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV Kabel",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Telepon Rumah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Material Atap",
          "type": "select",
          "required": false,
          "options": [
            "Genteng Beton",
            "Genteng Keramik",
            "Baja Ringan",
            "Metal",
            "Dak Beton"
          ]
        },
        {
          "label": "Material Lantai",
          "type": "select",
          "required": false,
          "options": [
            "Keramik",
            "Granit",
            "Marmer",
            "Vinyl",
            "Parket",
            "Homogeneous Tile"
          ]
        },
        {
          "label": "Material Dinding",
          "type": "select",
          "required": false,
          "options": [
            "Bata Merah",
            "Bata Ringan",
            "Beton",
            "Precast"
          ]
        },
        {
          "label": "Plafon",
          "type": "select",
          "required": false,
          "options": [
            "Gypsum",
            "GRC",
            "Kayu",
            "Beton Ekspos",
            "Lainnya"
          ]
        }
      ]
    },
    {
      "title": "Fasilitas Rumah",
      "fields": [
        {
          "label": "Taman Depan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Taman Belakang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kolam Renang Pribadi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gazebo",
          "type": "boolean",
          "required": false
        },
        {
          "label": "BBQ Area",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Rooftop",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Mushola",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Walk-in Closet",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pantry",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Kerja",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Hobi",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Keamanan",
      "fields": [
        {
          "label": "One Gate System",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Security 24 Jam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Lock",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Alarm",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smoke Detector",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Fire Extinguisher",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Lingkungan",
      "fields": [
        {
          "label": "Dalam Cluster",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dalam Perumahan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bebas Banjir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Taman",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Sekolah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Rumah Sakit",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Mall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Jalan Tol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Transportasi Umum",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Legalitas",
      "fields": [
        {
          "label": "Sertifikat",
          "type": "select",
          "required": false,
          "options": [
            "SHM",
            "HGB",
            "AJB",
            "Hak Pakai",
            "Girik",
            "Lainnya"
          ]
        },
        {
          "label": "SHM",
          "type": "boolean",
          "required": false
        },
        {
          "label": "SHGB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "IMB/PBG",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PBB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Siap KPR",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Investasi",
      "fields": [
        {
          "label": "Cocok Investasi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok Disewakan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Potensi Capital Gain",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Potensi Rental Yield",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Tambahan",
      "fields": [
        {
          "label": "Furnished",
          "type": "select",
          "required": false,
          "options": [
            "Unfurnished",
            "Semi Furnished",
            "Fully Furnished"
          ]
        },
        {
          "label": "Hadap",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "Hook",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Home",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Catatan Tambahan",
          "type": "textarea",
          "required": false
        }
      ]
    }
  ],
  "Cluster": [
    {
      "title": "Informasi Dasar",
      "fields": [
        {
          "label": "Judul Iklan",
          "type": "text",
          "required": true
        },
        {
          "label": "Nama Cluster",
          "type": "text",
          "required": true
        },
        {
          "label": "Nama Perumahan",
          "type": "text",
          "required": true
        },
        {
          "label": "Developer",
          "type": "text",
          "required": false
        },
        {
          "label": "Kondisi Properti",
          "type": "select",
          "required": true,
          "options": [
            "Baru",
            "Sangat Baik",
            "Baik",
            "Perlu Renovasi Ringan",
            "Perlu Renovasi Total"
          ]
        },
        {
          "label": "Status Kepemilikan",
          "type": "select",
          "required": true,
          "options": [
            "Milik Sendiri",
            "Milik Keluarga",
            "Warisan",
            "Atas Nama PT/Badan Usaha",
            "Lainnya"
          ]
        }
      ]
    },
    {
      "title": "Informasi Bangunan",
      "fields": [
        {
          "label": "Luas Tanah (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Luas Bangunan (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Lebar Muka (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Panjang Tanah (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Jumlah Lantai",
          "type": "number",
          "required": true
        },
        {
          "label": "Tinggi Plafon (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Tahun Dibangun",
          "type": "number",
          "required": false
        },
        {
          "label": "Tahun Renovasi",
          "type": "number",
          "required": false
        },
        {
          "label": "Tipe Rumah",
          "type": "text",
          "required": false
        },
        {
          "label": "Posisi Unit",
          "type": "select",
          "required": false,
          "options": [
            "Tengah",
            "Hook",
            "Tusuk Sate",
            "Cul-de-sac",
            "Dekat Taman",
            "Dekat Club House",
            "Dekat Gerbang"
          ]
        }
      ]
    },
    {
      "title": "Spesifikasi Ruangan",
      "fields": [
        {
          "label": "Jumlah Kamar Tidur",
          "type": "number",
          "required": false
        },
        {
          "label": "Jumlah Kamar Mandi",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Mandi Dalam",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Pembantu",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Mandi Pembantu",
          "type": "number",
          "required": false
        },
        {
          "label": "Ruang Tamu",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Keluarga",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Makan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur Bersih",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur Kotor",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gudang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Musholla",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Kerja",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Balkon",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Depan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Belakang",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Area Parkir",
      "fields": [
        {
          "label": "Carport",
          "type": "number",
          "required": false
        },
        {
          "label": "Garasi",
          "type": "number",
          "required": false
        },
        {
          "label": "Kapasitas Mobil",
          "type": "number",
          "required": false
        },
        {
          "label": "Kapasitas Motor",
          "type": "number",
          "required": false
        }
      ]
    },
    {
      "title": "Area Outdoor Pribadi",
      "fields": [
        {
          "label": "Taman Depan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Taman Belakang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kolam Renang Pribadi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gazebo",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kolam Ikan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Area BBQ",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Fasilitas Cluster",
      "fields": [
        {
          "label": "One Gate System",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Security 24 Jam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV Kawasan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Access Card",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Club House",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Swimming Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Children's Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Playground",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jogging Track",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Taman Cluster",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lapangan Basket",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lapangan Tenis",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gym",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Function Hall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Mini Market",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Musholla",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Area Komersial",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Guest Parking",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Utilitas",
      "fields": [
        {
          "label": "Daya Listrik (Watt)",
          "type": "number",
          "required": false
        },
        {
          "label": "Sumber Air",
          "type": "select",
          "required": false,
          "options": [
            "PDAM",
            "Sumur Bor",
            "Sumur Gali",
            "PDAM & Sumur Bor",
            "Lainnya"
          ]
        },
        {
          "label": "Internet Fiber",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Telepon Rumah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV Kabel",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tandon Air",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Water Heater",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Home System",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Door Lock",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AC",
          "type": "number",
          "required": false
        }
      ]
    },
    {
      "title": "Keamanan",
      "fields": [
        {
          "label": "Pos Satpam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Security Patrol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Visitor Management",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV Rumah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Emergency Call",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Biaya Kawasan",
      "fields": [
        {
          "label": "IPL / Maintenance (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Keamanan (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Sampah (Rp/Bulan)",
          "type": "currency",
          "required": false
        }
      ]
    },
    {
      "title": "Legalitas",
      "fields": [
        {
          "label": "Sertifikat",
          "type": "select",
          "required": false,
          "options": [
            "SHM",
            "HGB",
            "AJB",
            "PPJB",
            "Hak Pakai",
            "Girik",
            "Letter C",
            "Lainnya"
          ]
        },
        {
          "label": "SHM",
          "type": "boolean",
          "required": false
        },
        {
          "label": "HGB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PPJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PBG / IMB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bisa KPR",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Lokasi & Akses",
      "fields": [
        {
          "label": "Lebar Jalan Depan",
          "type": "number",
          "required": false
        },
        {
          "label": "Jalan Aspal",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jalan Beton",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Posisi Hook",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cul-de-sac",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Hadap Rumah",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "Bebas Banjir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Tol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Stasiun",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat MRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat LRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Sekolah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Rumah Sakit",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Mall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Pasar",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Tempat Ibadah",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Lingkungan",
      "fields": [
        {
          "label": "Kawasan Premium",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kawasan Bebas Banjir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lingkungan Asri",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lingkungan Tenang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ramah Anak",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ramah Lansia",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Investasi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Hunian",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Tambahan",
      "fields": [
        {
          "label": "Furnished",
          "type": "select",
          "required": false,
          "options": [
            "Fully Furnished",
            "Semi Furnished",
            "Unfurnished"
          ]
        },
        {
          "label": "Arah Hadap",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "View",
          "type": "text",
          "required": false
        },
        {
          "label": "Alasan Dijual",
          "type": "textarea",
          "required": false
        },
        {
          "label": "Catatan Tambahan",
          "type": "textarea",
          "required": false
        }
      ]
    }
  ],
  "Townhouse": [
    {
      "title": "Informasi Dasar",
      "fields": [
        {
          "label": "Judul Iklan",
          "type": "text",
          "required": true
        },
        {
          "label": "Nama Townhouse",
          "type": "text",
          "required": true
        },
        {
          "label": "Nama Developer",
          "type": "text",
          "required": false
        },
        {
          "label": "Jumlah Unit Townhouse",
          "type": "number",
          "required": false
        },
        {
          "label": "Kondisi Properti",
          "type": "select",
          "required": true,
          "options": [
            "Baru",
            "Sangat Baik",
            "Baik",
            "Perlu Renovasi Ringan",
            "Perlu Renovasi Total"
          ]
        },
        {
          "label": "Status Kepemilikan",
          "type": "select",
          "required": true,
          "options": [
            "Milik Sendiri",
            "Milik Keluarga",
            "Warisan",
            "Atas Nama PT/Badan Usaha",
            "Lainnya"
          ]
        }
      ]
    },
    {
      "title": "Informasi Bangunan",
      "fields": [
        {
          "label": "Luas Tanah (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Luas Bangunan (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Lebar Muka (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Panjang Tanah (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Jumlah Lantai",
          "type": "number",
          "required": true
        },
        {
          "label": "Tinggi Plafon (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Tahun Dibangun",
          "type": "number",
          "required": false
        },
        {
          "label": "Tahun Renovasi",
          "type": "number",
          "required": false
        },
        {
          "label": "Tipe Bangunan",
          "type": "text",
          "required": false
        },
        {
          "label": "Posisi Unit",
          "type": "select",
          "required": false,
          "options": [
            "Tengah",
            "Hook",
            "Cul-de-sac",
            "Dekat Club House",
            "Dekat Gerbang",
            "Dekat Taman"
          ]
        }
      ]
    },
    {
      "title": "Spesifikasi Ruangan",
      "fields": [
        {
          "label": "Jumlah Kamar Tidur",
          "type": "number",
          "required": false
        },
        {
          "label": "Jumlah Kamar Mandi",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Mandi Dalam",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Pembantu",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Mandi Pembantu",
          "type": "number",
          "required": false
        },
        {
          "label": "Living Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Family Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dining Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur Bersih",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur Kotor",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pantry",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gudang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Kerja",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Walk-in Closet",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Balkon",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Rooftop Terrace",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Depan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Belakang",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Area Parkir",
      "fields": [
        {
          "label": "Carport",
          "type": "number",
          "required": false
        },
        {
          "label": "Garasi",
          "type": "number",
          "required": false
        },
        {
          "label": "Kapasitas Mobil",
          "type": "number",
          "required": false
        },
        {
          "label": "Kapasitas Motor",
          "type": "number",
          "required": false
        },
        {
          "label": "Charging Station EV",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Area Outdoor Pribadi",
      "fields": [
        {
          "label": "Private Garden",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Backyard",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kolam Renang Pribadi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gazebo",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Deck Area",
          "type": "boolean",
          "required": false
        },
        {
          "label": "BBQ Area",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kolam Ikan",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Fasilitas Townhouse",
      "fields": [
        {
          "label": "One Gate System",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Security 24 Jam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV Kawasan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Access Card",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Gate",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Club House",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Swimming Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Children's Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gym",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Playground",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jogging Track",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Function Hall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Taman Kawasan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Guest Parking",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Musholla",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Mini Market",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Utilitas",
      "fields": [
        {
          "label": "Daya Listrik (Watt)",
          "type": "number",
          "required": false
        },
        {
          "label": "Sumber Air",
          "type": "select",
          "required": false,
          "options": [
            "PDAM",
            "Sumur Bor",
            "Sumur Gali",
            "PDAM & Sumur Bor",
            "Lainnya"
          ]
        },
        {
          "label": "Internet Fiber",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV Kabel",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Telepon Rumah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Home System",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Door Lock",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Water Heater",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AC",
          "type": "number",
          "required": false
        },
        {
          "label": "Tandon Air",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pompa Air",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV Rumah",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Keamanan",
      "fields": [
        {
          "label": "Pos Satpam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Security Patrol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Visitor Management",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Panic Button",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Emergency Call",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Biaya Kawasan",
      "fields": [
        {
          "label": "IPL / Maintenance (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Keamanan (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Kebersihan (Rp/Bulan)",
          "type": "currency",
          "required": false
        }
      ]
    },
    {
      "title": "Legalitas",
      "fields": [
        {
          "label": "Sertifikat",
          "type": "select",
          "required": false,
          "options": [
            "SHM",
            "HGB",
            "AJB",
            "PPJB",
            "Hak Pakai",
            "Girik",
            "Lainnya"
          ]
        },
        {
          "label": "SHM",
          "type": "boolean",
          "required": false
        },
        {
          "label": "HGB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PPJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PBG / IMB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bisa KPR",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Lokasi & Akses",
      "fields": [
        {
          "label": "Lebar Jalan Depan",
          "type": "number",
          "required": false
        },
        {
          "label": "Jalan Aspal",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jalan Beton",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Posisi Hook",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cul-de-sac",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Arah Hadap",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "Bebas Banjir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Jalan Tol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat MRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat LRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Stasiun",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Mall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Sekolah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Rumah Sakit",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat CBD",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Pusat Kuliner",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Lingkungan",
      "fields": [
        {
          "label": "Kawasan Premium",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lingkungan Eksklusif",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lingkungan Tenang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ramah Anak",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ramah Lansia",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pet Friendly",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Investasi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Hunian",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Tambahan",
      "fields": [
        {
          "label": "Furnished",
          "type": "select",
          "required": false,
          "options": [
            "Fully Furnished",
            "Semi Furnished",
            "Unfurnished"
          ]
        },
        {
          "label": "Arah Hadap",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "View",
          "type": "text",
          "required": false
        },
        {
          "label": "Alasan Dijual",
          "type": "textarea",
          "required": false
        },
        {
          "label": "Catatan Tambahan",
          "type": "textarea",
          "required": false
        }
      ]
    }
  ],
  "Apartemen": [
    {
      "title": "Informasi Dasar",
      "fields": [
        {
          "label": "Judul Iklan",
          "type": "text",
          "required": true
        },
        {
          "label": "Nama Apartemen",
          "type": "text",
          "required": true
        },
        {
          "label": "Tower",
          "type": "text",
          "required": true
        },
        {
          "label": "Nomor Unit",
          "type": "text",
          "required": true
        },
        {
          "label": "Developer",
          "type": "text",
          "required": false
        },
        {
          "label": "Kondisi Properti",
          "type": "select",
          "required": true,
          "options": [
            "Baru",
            "Sangat Baik",
            "Baik",
            "Perlu Renovasi Ringan",
            "Perlu Renovasi Total"
          ]
        },
        {
          "label": "Status Kepemilikan",
          "type": "select",
          "required": true,
          "options": [
            "Milik Sendiri",
            "Milik Keluarga",
            "Warisan",
            "Atas Nama PT/Badan Usaha",
            "Lainnya"
          ]
        }
      ]
    },
    {
      "title": "Informasi Unit",
      "fields": [
        {
          "label": "Luas Unit (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Tipe Unit",
          "type": "select",
          "required": true,
          "options": [
            "Studio",
            "1 Bedroom",
            "2 Bedroom",
            "3 Bedroom",
            "4 Bedroom",
            "Penthouse",
            "Duplex",
            "Loft"
          ]
        },
        {
          "label": "Lantai",
          "type": "number",
          "required": true
        },
        {
          "label": "Jumlah Kamar Tidur",
          "type": "number",
          "required": true
        },
        {
          "label": "Jumlah Kamar Mandi",
          "type": "number",
          "required": true
        },
        {
          "label": "Kamar Mandi Dalam",
          "type": "number",
          "required": false
        },
        {
          "label": "Ceiling Height (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Balkon",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Luas Balkon (m²)",
          "type": "number",
          "required": false
        },
        {
          "label": "Arah Hadap",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "View Unit",
          "type": "select",
          "required": false,
          "options": [
            "City View",
            "Pool View",
            "Garden View",
            "Mountain View",
            "Sea View",
            "Lake View",
            "River View",
            "Golf View"
          ]
        },
        {
          "label": "Corner Unit",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Ruangan",
      "fields": [
        {
          "label": "Living Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dining Area",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pantry",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kitchen Set",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Walk-in Closet",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Storage Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Area",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Maid Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Maid Bathroom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Workspace",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Study Room",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Furnitur & Interior",
      "fields": [
        {
          "label": "Furnished",
          "type": "select",
          "required": false,
          "options": [
            "Fully Furnished",
            "Semi Furnished",
            "Unfurnished"
          ]
        },
        {
          "label": "AC",
          "type": "number",
          "required": false
        },
        {
          "label": "Water Heater",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kitchen Set",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lemari Built-in",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sofa",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dining Set",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tempat Tidur",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kulkas",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Mesin Cuci",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Microwave",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Home",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Door Lock",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Fasilitas Apartemen",
      "fields": [
        {
          "label": "Lobby",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Reception",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lift Penumpang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lift Service",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Swimming Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Children's Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gym",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sauna",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jacuzzi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Playground",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jogging Track",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tennis Court",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Basketball Court",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Function Hall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Meeting Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Co-Working Space",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Mini Market",
          "type": "boolean",
          "required": false
        },
        {
          "label": "ATM Center",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Service",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cafe",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Restaurant",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sky Garden",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Rooftop Garden",
          "type": "boolean",
          "required": false
        },
        {
          "label": "BBQ Area",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Parkir",
      "fields": [
        {
          "label": "Hak Parkir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jumlah Slot Parkir",
          "type": "number",
          "required": false
        },
        {
          "label": "Parkir Motor",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Parkir Tamu",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Utilitas",
      "fields": [
        {
          "label": "Daya Listrik (Watt)",
          "type": "number",
          "required": false
        },
        {
          "label": "Air PDAM",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Internet Fiber",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV Kabel",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Interkom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smoke Detector",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sprinkler",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Fire Alarm",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Genset",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Keamanan",
      "fields": [
        {
          "label": "Security 24 Jam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Access Card",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Face Recognition",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Visitor Management",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Video Intercom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Emergency Exit",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Biaya Pengelolaan",
      "fields": [
        {
          "label": "IPL / Service Charge (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Sinking Fund (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Parkir (Rp/Bulan)",
          "type": "currency",
          "required": false
        }
      ]
    },
    {
      "title": "Legalitas",
      "fields": [
        {
          "label": "Sertifikat",
          "type": "select",
          "required": false,
          "options": [
            "SHMSRS",
            "PPJB",
            "AJB",
            "Hak Pakai",
            "Lainnya"
          ]
        },
        {
          "label": "SHMSRS",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PPJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bisa KPA",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Lokasi & Akses",
      "fields": [
        {
          "label": "Dekat MRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat LRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Stasiun",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Halte Bus",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Jalan Tol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Bandara",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Mall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Rumah Sakit",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Sekolah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Universitas",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Perkantoran",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Pusat Bisnis",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Lingkungan",
      "fields": [
        {
          "label": "Pet Friendly",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bebas Banjir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kawasan Premium",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Investasi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Disewakan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Tinggal",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Tambahan",
      "fields": [
        {
          "label": "Status Unit",
          "type": "select",
          "required": false,
          "options": [
            "Kosong",
            "Siap Huni",
            "Disewakan",
            "Owner Occupied",
            "Booking"
          ]
        },
        {
          "label": "Sedang Disewakan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Siap Huni",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Alasan Dijual",
          "type": "textarea",
          "required": false
        },
        {
          "label": "Catatan Tambahan",
          "type": "textarea",
          "required": false
        }
      ]
    }
  ],
  "Penthouse": [
    {
      "title": "Informasi Dasar",
      "fields": [
        {
          "label": "Judul Iklan",
          "type": "text",
          "required": true
        },
        {
          "label": "Nama Apartemen",
          "type": "text",
          "required": true
        },
        {
          "label": "Tower",
          "type": "text",
          "required": true
        },
        {
          "label": "Nomor Unit",
          "type": "text",
          "required": true
        },
        {
          "label": "Developer",
          "type": "text",
          "required": false
        },
        {
          "label": "Kelas Properti",
          "type": "select",
          "required": true,
          "options": [
            "Luxury",
            "Ultra Luxury",
            "Super Luxury"
          ]
        },
        {
          "label": "Kondisi Properti",
          "type": "select",
          "required": true,
          "options": [
            "Baru",
            "Sangat Baik",
            "Baik",
            "Baru Renovasi",
            "Perlu Renovasi"
          ]
        },
        {
          "label": "Status Kepemilikan",
          "type": "select",
          "required": true,
          "options": [
            "Milik Sendiri",
            "Milik Keluarga",
            "Warisan",
            "Atas Nama PT/Badan Usaha",
            "Lainnya"
          ]
        }
      ]
    },
    {
      "title": "Informasi Unit",
      "fields": [
        {
          "label": "Luas Unit (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Luas Balkon (m²)",
          "type": "number",
          "required": false
        },
        {
          "label": "Jumlah Lantai Unit",
          "type": "number",
          "required": false
        },
        {
          "label": "Duplex",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Triple Level",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lantai Unit",
          "type": "number",
          "required": true
        },
        {
          "label": "Ceiling Height (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Corner Unit",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Private Floor",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Arah Hadap",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "View Utama",
          "type": "select",
          "required": false,
          "options": [
            "City View",
            "Skyline View",
            "Sea View",
            "Mountain View",
            "River View",
            "Lake View",
            "Golf View",
            "Marina View"
          ]
        }
      ]
    },
    {
      "title": "Spesifikasi Ruangan",
      "fields": [
        {
          "label": "Jumlah Kamar Tidur",
          "type": "number",
          "required": false
        },
        {
          "label": "Master Bedroom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Walk-in Closet",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jumlah Kamar Mandi",
          "type": "number",
          "required": false
        },
        {
          "label": "Jacuzzi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Powder Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Living Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Family Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dining Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dry Kitchen",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Wet Kitchen",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pantry",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Wine Cellar",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Home Office",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Library",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Entertainment Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Home Theater",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Maid Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Maid Bathroom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Storage Room",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Area Outdoor",
      "fields": [
        {
          "label": "Private Balcony",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sky Terrace",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Rooftop Garden",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Private Garden",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Private Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jacuzzi Outdoor",
          "type": "boolean",
          "required": false
        },
        {
          "label": "BBQ Area",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Interior & Furnitur",
      "fields": [
        {
          "label": "Furnished",
          "type": "select",
          "required": false,
          "options": [
            "Fully Furnished",
            "Semi Furnished",
            "Designer Furnished",
            "Unfurnished"
          ]
        },
        {
          "label": "Interior Designer",
          "type": "text",
          "required": false
        },
        {
          "label": "Smart Home",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smart Door Lock",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Central AC",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AC Split",
          "type": "number",
          "required": false
        },
        {
          "label": "Water Heater",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kitchen Set Premium",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Built-in Wardrobe",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Marble Flooring",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Wooden Flooring",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Chandelier",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Premium Appliances",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Fasilitas Gedung",
      "fields": [
        {
          "label": "Private Lift",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Executive Lobby",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Concierge",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Reception",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Swimming Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Infinity Pool",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gym",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Spa",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sauna",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jacuzzi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sky Lounge",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sky Garden",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Function Hall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Meeting Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Co-Working Space",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Children's Playground",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tennis Court",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Basketball Court",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jogging Track",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Restaurant",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cafe",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Parkir",
      "fields": [
        {
          "label": "Private Parking",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jumlah Slot Parkir",
          "type": "number",
          "required": false
        },
        {
          "label": "Parkir Tamu",
          "type": "boolean",
          "required": false
        },
        {
          "label": "EV Charging Station",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Utilitas",
      "fields": [
        {
          "label": "Daya Listrik (Watt)",
          "type": "number",
          "required": false
        },
        {
          "label": "Air PDAM",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Internet Fiber",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV Kabel",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Interkom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Fire Alarm",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smoke Detector",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sprinkler",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Genset",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Keamanan",
      "fields": [
        {
          "label": "Security 24 Jam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Access Card",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Face Recognition",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Visitor Management",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Video Intercom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Private Lift Access",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Panic Button",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Biaya Pengelolaan",
      "fields": [
        {
          "label": "IPL / Service Charge (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Sinking Fund (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Parkir (Rp/Bulan)",
          "type": "currency",
          "required": false
        }
      ]
    },
    {
      "title": "Legalitas",
      "fields": [
        {
          "label": "Sertifikat",
          "type": "select",
          "required": false,
          "options": [
            "SHMSRS",
            "PPJB",
            "AJB",
            "Hak Pakai",
            "Lainnya"
          ]
        },
        {
          "label": "SHMSRS",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PPJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bisa KPA",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Lokasi & Akses",
      "fields": [
        {
          "label": "Dekat CBD",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat MRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat LRT",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Stasiun",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Jalan Tol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Bandara",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Mall Premium",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Hotel Bintang 5",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Rumah Sakit Internasional",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Sekolah Internasional",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Tambahan",
      "fields": [
        {
          "label": "Status Unit",
          "type": "select",
          "required": false,
          "options": [
            "Kosong",
            "Siap Huni",
            "Disewakan",
            "Owner Occupied"
          ]
        },
        {
          "label": "Siap Huni",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sedang Disewakan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Open House",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Virtual Tour",
          "type": "boolean",
          "required": false
        },
        {
          "label": "View 360°",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Catatan Tambahan",
          "type": "textarea",
          "required": false
        }
      ]
    }
  ],
  "Rusun": [
    {
      "title": "Informasi Dasar",
      "fields": [
        {
          "label": "Judul Iklan",
          "type": "text",
          "required": true
        },
        {
          "label": "Nama Rusun",
          "type": "text",
          "required": true
        },
        {
          "label": "Blok / Tower",
          "type": "text",
          "required": true
        },
        {
          "label": "Nomor Unit",
          "type": "text",
          "required": true
        },
        {
          "label": "Pengelola",
          "type": "text",
          "required": false
        },
        {
          "label": "Developer",
          "type": "text",
          "required": false
        },
        {
          "label": "Kondisi Properti",
          "type": "select",
          "required": true,
          "options": [
            "Baru",
            "Sangat Baik",
            "Baik",
            "Perlu Renovasi Ringan",
            "Perlu Renovasi Total"
          ]
        },
        {
          "label": "Status Kepemilikan",
          "type": "select",
          "required": true,
          "options": [
            "Milik Sendiri",
            "Milik Keluarga",
            "Warisan",
            "Atas Nama PT/Badan Usaha",
            "Lainnya"
          ]
        }
      ]
    },
    {
      "title": "Informasi Unit",
      "fields": [
        {
          "label": "Luas Unit (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Lantai",
          "type": "number",
          "required": true
        },
        {
          "label": "Tipe Unit",
          "type": "select",
          "required": true,
          "options": [
            "Studio",
            "1 Bedroom",
            "2 Bedroom",
            "3 Bedroom"
          ]
        },
        {
          "label": "Jumlah Kamar Tidur",
          "type": "number",
          "required": true
        },
        {
          "label": "Jumlah Kamar Mandi",
          "type": "number",
          "required": true
        },
        {
          "label": "Balkon",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Arah Hadap",
          "type": "select",
          "required": false,
          "options": [
            "Utara",
            "Timur Laut",
            "Timur",
            "Tenggara",
            "Selatan",
            "Barat Daya",
            "Barat",
            "Barat Laut"
          ]
        },
        {
          "label": "View",
          "type": "select",
          "required": false,
          "options": [
            "City View",
            "Pool View",
            "Garden View",
            "Mountain View",
            "Sea View",
            "Lake View",
            "River View",
            "Golf View"
          ]
        },
        {
          "label": "Corner Unit",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Ruangan",
      "fields": [
        {
          "label": "Living Room",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Makan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pantry",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gudang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Area",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jemuran",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Furnitur",
      "fields": [
        {
          "label": "Furnished",
          "type": "select",
          "required": false,
          "options": [
            "Fully Furnished",
            "Semi Furnished",
            "Unfurnished"
          ]
        },
        {
          "label": "Kitchen Set",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lemari",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tempat Tidur",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sofa",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AC",
          "type": "number",
          "required": false
        },
        {
          "label": "Water Heater",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Fasilitas Rusun",
      "fields": [
        {
          "label": "Lift",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tangga Darurat",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Area Bermain",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Taman",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Musholla",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Aula Serbaguna",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Posyandu",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Area Jemur Bersama",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tempat Sampah Terpusat",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Area Parkir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Koperasi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Minimarket",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Utilitas",
      "fields": [
        {
          "label": "Daya Listrik (Watt)",
          "type": "number",
          "required": false
        },
        {
          "label": "Air PDAM",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Internet",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV Kabel",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Interkom",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Fire Alarm",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Smoke Detector",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Keamanan",
      "fields": [
        {
          "label": "Security 24 Jam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Access Card",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pos Security",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jalur Evakuasi",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Biaya Pengelolaan",
      "fields": [
        {
          "label": "IPL (Rp/Bulan)",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Kebersihan",
          "type": "currency",
          "required": false
        },
        {
          "label": "Biaya Parkir",
          "type": "currency",
          "required": false
        }
      ]
    },
    {
      "title": "Legalitas",
      "fields": [
        {
          "label": "Sertifikat",
          "type": "select",
          "required": false,
          "options": [
            "SHMSRS",
            "PPJB",
            "AJB",
            "Hak Pakai",
            "Lainnya"
          ]
        },
        {
          "label": "SHMSRS",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PPJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bisa KPR",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Lokasi & Akses",
      "fields": [
        {
          "label": "Dekat Sekolah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Rumah Sakit",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Pasar",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Terminal",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Stasiun",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Halte Bus",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Jalan Tol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bebas Banjir",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Lingkungan",
      "fields": [
        {
          "label": "Lingkungan Tenang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ramah Anak",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ramah Lansia",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kawasan Padat",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Investasi",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Hunian",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Tambahan",
      "fields": [
        {
          "label": "Status Unit",
          "type": "select",
          "required": false,
          "options": [
            "Kosong",
            "Siap Huni",
            "Disewakan",
            "Dihuni Pemilik"
          ]
        },
        {
          "label": "Sedang Dihuni",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Siap Huni",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Alasan Dijual",
          "type": "textarea",
          "required": false
        },
        {
          "label": "Catatan Tambahan",
          "type": "textarea",
          "required": false
        }
      ]
    }
  ],
  "Kontrakan": [
    {
      "title": "Informasi Dasar",
      "fields": [
        {
          "label": "Judul Iklan",
          "type": "text",
          "required": true
        },
        {
          "label": "Status Kontrak",
          "type": "select",
          "required": true,
          "options": [
            "Disewakan",
            "Sedang Dikontrak",
            "Akan Tersedia"
          ]
        },
        {
          "label": "Durasi Kontrak Minimum",
          "type": "select",
          "required": true,
          "options": [
            "6 Bulan",
            "1 Tahun",
            "2 Tahun",
            ">2 Tahun"
          ]
        },
        {
          "label": "Kondisi Properti",
          "type": "select",
          "required": true,
          "options": [
            "Baru",
            "Sangat Baik",
            "Baik",
            "Perlu Renovasi Ringan",
            "Perlu Renovasi Total"
          ]
        },
        {
          "label": "Status Kepemilikan",
          "type": "select",
          "required": true,
          "options": [
            "Milik Sendiri",
            "Milik Keluarga",
            "Warisan",
            "Atas Nama PT/Badan Usaha",
            "Lainnya"
          ]
        }
      ]
    },
    {
      "title": "Informasi Bangunan",
      "fields": [
        {
          "label": "Luas Tanah (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Luas Bangunan (m²)",
          "type": "number",
          "required": true
        },
        {
          "label": "Jumlah Lantai",
          "type": "number",
          "required": true
        },
        {
          "label": "Tahun Dibangun",
          "type": "number",
          "required": false
        },
        {
          "label": "Tahun Renovasi",
          "type": "number",
          "required": false
        },
        {
          "label": "Lebar Muka (m)",
          "type": "number",
          "required": false
        },
        {
          "label": "Tinggi Plafon (m)",
          "type": "number",
          "required": false
        }
      ]
    },
    {
      "title": "Spesifikasi Ruangan",
      "fields": [
        {
          "label": "Jumlah Kamar Tidur",
          "type": "number",
          "required": false
        },
        {
          "label": "Jumlah Kamar Mandi",
          "type": "number",
          "required": false
        },
        {
          "label": "Kamar Mandi Dalam",
          "type": "number",
          "required": false
        },
        {
          "label": "Ruang Tamu",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Keluarga",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Ruang Makan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dapur",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Gudang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Musholla",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Laundry Area",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Balkon",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Depan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Teras Belakang",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Area Parkir",
      "fields": [
        {
          "label": "Carport",
          "type": "number",
          "required": false
        },
        {
          "label": "Garasi",
          "type": "number",
          "required": false
        },
        {
          "label": "Kapasitas Mobil",
          "type": "number",
          "required": false
        },
        {
          "label": "Kapasitas Motor",
          "type": "number",
          "required": false
        }
      ]
    },
    {
      "title": "Area Outdoor",
      "fields": [
        {
          "label": "Taman Depan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Taman Belakang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Halaman Belakang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jemuran",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Furnitur",
      "fields": [
        {
          "label": "Furnished",
          "type": "select",
          "required": false,
          "options": [
            "Fully Furnished",
            "Semi Furnished",
            "Unfurnished"
          ]
        },
        {
          "label": "AC",
          "type": "number",
          "required": false
        },
        {
          "label": "Kitchen Set",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Water Heater",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Lemari",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tempat Tidur",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sofa",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Meja Makan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Mesin Cuci",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Kulkas",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Utilitas",
      "fields": [
        {
          "label": "Daya Listrik (Watt)",
          "type": "number",
          "required": false
        },
        {
          "label": "Sumber Air",
          "type": "select",
          "required": false,
          "options": [
            "PDAM",
            "Sumur Bor",
            "Sumur Gali",
            "PDAM & Sumur Bor",
            "Lainnya"
          ]
        },
        {
          "label": "Internet Fiber",
          "type": "boolean",
          "required": false
        },
        {
          "label": "TV Kabel",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Telepon Rumah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tandon Air",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pompa Air",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Septic Tank",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Keamanan",
      "fields": [
        {
          "label": "Pagar",
          "type": "boolean",
          "required": false
        },
        {
          "label": "CCTV",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Security 24 Jam",
          "type": "boolean",
          "required": false
        },
        {
          "label": "One Gate System",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Pos Satpam",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Sewa",
      "fields": [
        {
          "label": "Harga Sewa per Tahun",
          "type": "currency",
          "required": false
        },
        {
          "label": "Deposit",
          "type": "currency",
          "required": false
        },
        {
          "label": "Minimal Kontrak",
          "type": "select",
          "required": false,
          "options": [
            "6 Bulan",
            "1 Tahun",
            "2 Tahun",
            ">2 Tahun"
          ]
        },
        {
          "label": "Maksimal Kontrak",
          "type": "select",
          "required": false,
          "options": [
            "1 Tahun",
            "2 Tahun",
            "3 Tahun",
            ">3 Tahun",
            "Tidak Terbatas"
          ]
        },
        {
          "label": "Bisa Perpanjang",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Sudah Tersewa",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Tanggal Tersedia",
          "type": "date",
          "required": false
        }
      ]
    },
    {
      "title": "Legalitas",
      "fields": [
        {
          "label": "Sertifikat",
          "type": "select",
          "required": false,
          "options": [
            "SHM",
            "HGB",
            "AJB",
            "Hak Pakai",
            "Girik",
            "Letter C",
            "Lainnya"
          ]
        },
        {
          "label": "SHM",
          "type": "boolean",
          "required": false
        },
        {
          "label": "HGB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "AJB",
          "type": "boolean",
          "required": false
        },
        {
          "label": "PBG / IMB",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Lokasi & Akses",
      "fields": [
        {
          "label": "Lebar Jalan Depan",
          "type": "number",
          "required": false
        },
        {
          "label": "Jalan Aspal",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jalan Beton",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Bebas Banjir",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Sekolah",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Rumah Sakit",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Pasar",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Mall",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Tol",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Stasiun",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Dekat Halte Bus",
          "type": "boolean",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Penyewa",
      "fields": [
        {
          "label": "Cocok untuk Keluarga",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Mahasiswa",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Cocok untuk Karyawan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Anak Diperbolehkan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Hewan Peliharaan Diizinkan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Maksimal Penghuni",
          "type": "number",
          "required": false
        }
      ]
    },
    {
      "title": "Aturan Kontrak",
      "fields": [
        {
          "label": "Merokok Diizinkan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Boleh Renovasi Ringan",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Boleh Subkontrak",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Jam Bertamu",
          "type": "text",
          "required": false
        },
        {
          "label": "Ketentuan Tambahan",
          "type": "textarea",
          "required": false
        }
      ]
    },
    {
      "title": "Informasi Tambahan",
      "fields": [
        {
          "label": "Alasan Disewakan",
          "type": "textarea",
          "required": false
        },
        {
          "label": "Catatan Tambahan",
          "type": "textarea",
          "required": false
        },
        {
          "label": "Siap Dihuni",
          "type": "boolean",
          "required": false
        },
        {
          "label": "Open House",
          "type": "boolean",
          "required": false
        }
      ]
    }
  ]
};

// --- 2.2 KATEGORI: KOMERSIAL / USAHA ---
// TODO: TAMBAHKAN KONFIGURASI JENIS PROPERTI DI SINI
// Jenis yang sudah tersedia di pilihan dropdown (lihat JSX di bawah) namun
// BELUM ada detail spesifikasinya: Ruko, Kios, Gedung Perkantoran,
// Coworking Space, Restoran Cafe, Hotel Resort, Pusat Perbelanjaan,
// Showroom Bengkel, Kesehatan Kecantikan, SPBU, Tempat Hiburan.
// Contoh format pengisian:
// const KOMERSIAL_CONFIG: Record<string, SectionConfig[]> = {
//   "Ruko": [
//     { title: "Informasi Dasar", fields: [
//       { label: "Judul Iklan", type: "text", required: true },
//     ]},
//   ],
// };
const KOMERSIAL_CONFIG: Record<string, SectionConfig[]> = {
  // <-- tambahkan jenis properti Komersial di sini -->
};

// --- 2.3 KATEGORI: INDUSTRI & LOGISTIK ---
// TODO: TAMBAHKAN KONFIGURASI JENIS PROPERTI DI SINI
// Jenis yang sudah tersedia di pilihan dropdown namun BELUM ada detail
// spesifikasinya: Gudang, Distribution Center, Logistics Hub, Cold Storage,
// Pabrik, Workshop, Hanggar, Dry Port, Kawasan Industri.
const INDUSTRI_CONFIG: Record<string, SectionConfig[]> = {
  // <-- tambahkan jenis properti Industri & Logistik di sini -->
};

// --- 2.4 KATEGORI: TANAH & LAHAN ---
// TODO: TAMBAHKAN KONFIGURASI JENIS PROPERTI DI SINI
// Jenis yang sudah tersedia di pilihan dropdown namun BELUM ada detail
// spesifikasinya: Tanah Kavling, Tanah Komersial, Tanah Industri,
// Tanah Pertanian, Tanah Perkebunan, Tanah Peternakan, Tanah Perikanan,
// Tanah Perumahan.
const TANAH_CONFIG: Record<string, SectionConfig[]> = {
  // <-- tambahkan jenis properti Tanah & Lahan di sini -->
};

// --- 2.5 GABUNGAN SEMUA KONFIGURASI ---
const CONFIG: Record<string, SectionConfig[]> = {
  ...HUNIAN_CONFIG,
  ...KOMERSIAL_CONFIG,
  ...INDUSTRI_CONFIG,
  ...TANAH_CONFIG,
};

/* ============================================================================
 * 3. PROPS
 * ==========================================================================*/
interface Step1Props {
  onNext: () => void;
  transactionType: string;
}

/* ============================================================================
 * 4. KOMPONEN UTAMA
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
    // Jenis properti yang belum ada konfigurasinya (kategori Komersial /
    // Industri & Logistik / Tanah & Lahan yang belum diisi) -> langsung
    // lanjut tanpa validasi, karena belum ada field untuk divalidasi.
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
                  <option value="Ruko">Ruko / Rukan</option>
                  <option value="Kios">Kios / Toko</option>
                  <option value="Gedung Perkantoran">Gedung Perkantoran</option>
                  <option value="Coworking Space">Co-Working Space</option>
                  <option value="Restoran Cafe">Restoran / Cafe / F&B</option>
                  <option value="Hotel Resort">Hotel / Resort</option>
                  <option value="Pusat Perbelanjaan">Pusat Perbelanjaan / Mall</option>
                  <option value="Showroom Bengkel">Showroom / Bengkel</option>
                  <option value="Kesehatan Kecantikan">Klinik / Spa / Salon</option>
                  <option value="SPBU">SPBU / Rest Area Tol</option>
                  <option value="Tempat Hiburan">Tempat Hiburan & Rekreasi</option>
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
          Jenis Transaksi:{" "}
          <span className="font-bold">{transactionType || "-"}</span>
        </div>
      </div>

      {/* FORM DINAMIS SESUAI JENIS PROPERTI */}
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
 * 5. GENERIC FORM SECTION RENDERER
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
      <h3 className="text-sm font-bold text-slate-900 border-b pb-3">
        {section.title}
      </h3>

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
 * 6. GENERIC FIELD RENDERER (text / number / currency / select / textarea / date)
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
        <select
          value={value ?? ""}
          onChange={(e) => onChange(fieldKey, e.target.value)}
          className={baseClass}
        >
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
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">
            Rp
          </span>
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
