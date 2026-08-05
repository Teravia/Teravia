// configs/komersial/gedung-perkantoran/spesifikasi-gedung.ts

const spesifikasiGedung = {
  id: "spesifikasi-gedung",
  title: "Spesifikasi Fisik & Teknis Gedung",
  description: "Rincian dimensi, spesifikasi konstruksi, dan sistem utilitas utama gedung perkantoran.",

  fields: [
    {
      id: "land_area",
      label: "Luas Tanah (m²)",
      type: "number",
      required: true,
      placeholder: "Contoh: 2500",
    },

    {
      id: "building_gross_area",
      label: "Luas Bangunan Kotor / Gross Floor Area (m²)",
      type: "number",
      required: true,
      placeholder: "Contoh: 15000",
    },

    {
      id: "building_semi_gross_area",
      label: "Luas Bangunan Bersih / Semi-Gross Area (m²)",
      type: "number",
      required: false,
      placeholder: "Contoh: 12500",
    },

    {
      id: "number_of_floors",
      label: "Jumlah Lantai (Floors)",
      type: "number",
      required: true,
      placeholder: "Contoh: 18",
    },

    {
      id: "basement_floors",
      label: "Jumlah Lantai Basement",
      type: "number",
      required: false,
      placeholder: "Contoh: 3",
    },

    {
      id: "floor_ceiling_height",
      label: "Tinggi Plafon ke Lantai / Floor to Ceiling (m)",
      type: "number",
      required: false,
      placeholder: "Contoh: 2.8",
    },

    {
      id: "electricity_capacity",
      label: "Kapasitas Daya Listrik Utama (kVA / Watt)",
      type: "text",
      required: true,
      placeholder: "Contoh: 1200 kVA",
    },

    {
      id: "power_backup",
      label: "Sistem Cadangan Listrik (Genset / Backup Power)",
      type: "select",
      required: false,
      options: [
        "100% Full Backup Genset",
        "Partial Backup Genset (Fasilitas Umum & Pencahayaan)",
        "Tidak Ada Genset",
      ],
    },

    {
      id: "ac_system",
      label: "Sistem Pendingin Ruangan (AC)",
      type: "select",
      required: false,
      options: [
        "Central Chiller / AHU",
        "VRV / VRF System (Multi-Split Smart)",
        "AC Split Duct / Cassette Mandiri",
        "AC Split Wall Standard",
      ],
    },

    {
      id: "fire_safety_system",
      label: "Sistem Proteksi Kebakaran",
      type: "checkbox_group",
      required: false,
      options: [
        "Hydrant System (Indoor & Outdoor)",
        "Automatic Fire Sprinkler",
        "Smoke & Heat Detector System",
        "APAR (Alat Pemadam Api Ringan)",
        "Tangga Darurat dengan Pressurized Fan",
        "FM200 / Gas Suppression System (Server Room)",
      ],
    },

    {
      id: "telecom_fiber_providers",
      label: "Penyedia Layanan Telekomunikasi / Fiber Optic",
      type: "text",
      required: false,
      placeholder: "Contoh: Telkom, Biznet, Indosat, CBN",
    },
  ],
};

export default spesifikasiGedung;
