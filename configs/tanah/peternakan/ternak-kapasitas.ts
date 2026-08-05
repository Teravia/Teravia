// configs/tanah/peternakan/ternak-kapasitas.ts

const ternakKapasitas = {
  id: "ternak-kapasitas",
  title: "Jenis Ternak & Kapasitas",
  description: "Informasi jenis ternak, sistem pemeliharaan, dan kapasitas peternakan.",

  fields: [
    {
      id: "livestock_type",
      label: "Jenis Ternak",
      type: "multiselect",
      required: true,
      options: [
        "Ayam Broiler",
        "Ayam Petelur",
        "Sapi Potong",
        "Sapi Perah",
        "Kambing / Domba",
        "Babi",
        "Bebek / Itik",
        "Ikan (Perikanan Darat)",
        "Lainnya",
      ],
    },

    {
      id: "farming_system",
      label: "Sistem Pemeliharaan",
      type: "select",
      required: true,
      options: [
        "Intensif (Kandang Tertutup)",
        "Semi Intensif",
        "Ekstensif / Umbaran (Free Range)",
      ],
    },

    {
      id: "cage_count",
      label: "Jumlah Kandang",
      type: "number",
      required: false,
    },

    {
      id: "cage_area",
      label: "Total Luas Kandang",
      type: "number",
      required: false,
      suffix: "m2",
    },

    {
      id: "cage_construction",
      label: "Konstruksi Kandang",
      type: "select",
      required: false,
      options: ["Permanen (Beton/Batako)", "Semi Permanen (Kayu/Bambu)", "Sederhana"],
    },

    {
      id: "maximum_capacity",
      label: "Kapasitas Maksimal",
      type: "text",
      required: false,
      placeholder: "Contoh: 10.000 ekor ayam / 50 ekor sapi",
    },

    {
      id: "livestock_included",
      label: "Ternak Saat Ini Ikut Dijual",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak", "Tidak Ada Ternak (Kandang Kosong)"],
    },

    {
      id: "livestock_notes",
      label: "Catatan Ternak & Kapasitas",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Ternak & Kapasitas",
    },
  ],
};

export default ternakKapasitas;
