// configs/komersial/gedung-perkantoran/informasi-gedung.ts

const informasiGedung = {
  id: "informasi-gedung",
  title: "Informasi Gedung",
  description: "Informasi detail mengenai identitas dan profil gedung perkantoran.",

  fields: [
    {
      id: "building_name",
      label: "Nama Gedung",
      type: "text",
      required: true,
      placeholder: "Masukkan nama resmi gedung perkantoran...",
    },

    {
      id: "developer_name",
      label: "Nama Pengembang (Developer)",
      type: "text",
      required: false,
      placeholder: "Masukkan nama pengembang gedung...",
    },

    {
      id: "building_management",
      label: "Pengelola Gedung (Building Management)",
      type: "text",
      required: false,
      placeholder: "Masukkan nama perusahaan pengelola gedung...",
    },

    {
      id: "year_built",
      label: "Tahun Selesai Dibangun",
      type: "number",
      required: false,
      placeholder: "Contoh: 2018",
    },

    {
      id: "architect_designer",
      label: "Arsitek / Desainer Gedung",
      type: "text",
      required: false,
      placeholder: "Masukkan nama arsitek/konsultan...",
    },

    {
      id: "occupancy_rate",
      label: "Tingkat Okupansi Gedung (%)",
      type: "number",
      required: false,
      min: 0,
      max: 100,
      placeholder: "Contoh: 85",
    },

    {
      id: "anchor_tenants",
      label: "Penyewa Utama (Anchor Tenants)",
      type: "text",
      required: false,
      placeholder: "Masukkan nama-nama perusahaan/penyewa utama saat ini...",
    },
  ],
};

export default informasiGedung;
