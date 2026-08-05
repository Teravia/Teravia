// configs/tanah/kebun/tanaman-produktivitas.ts

const tanamanProduktivitas = {
  id: "tanaman-produktivitas",
  title: "Tanaman & Produktivitas",
  description: "Informasi jenis tanaman, usia, dan produktivitas kebun.",

  fields: [
    {
      id: "planted_crops",
      label: "Jenis Tanaman",
      type: "multiselect",
      required: true,
      options: [
        "Kelapa Sawit",
        "Karet",
        "Kopi",
        "Kakao",
        "Cengkeh",
        "Kelapa",
        "Durian",
        "Rambutan",
        "Mangga",
        "Tanaman Kayu (Sengon/Jati/dll)",
        "Campuran",
      ],
    },

    {
      id: "tree_count",
      label: "Jumlah Pohon",
      type: "number",
      required: false,
    },

    {
      id: "tree_age",
      label: "Usia Tanaman",
      type: "number",
      required: false,
      suffix: "Tahun",
    },

    {
      id: "planting_density",
      label: "Kepadatan Tanam",
      type: "text",
      required: false,
      placeholder: "Contoh: 136 pohon/hektar",
    },

    {
      id: "productive_status",
      label: "Status Produktivitas",
      type: "select",
      required: true,
      options: [
        "Sudah Produktif / Berbuah",
        "Belum Produktif (Tanaman Muda)",
        "Sudah Tidak Produktif (Perlu Peremajaan)",
      ],
    },

    {
      id: "harvest_cycle",
      label: "Siklus Panen",
      type: "select",
      required: false,
      options: ["Mingguan", "Bulanan", "Musiman", "Tahunan"],
    },

    {
      id: "average_yield",
      label: "Rata-Rata Hasil Panen",
      type: "text",
      required: false,
      placeholder: "Contoh: 2 ton TBS/hektar/bulan",
    },

    {
      id: "land_conversion_potential",
      label: "Potensi Alih Fungsi Lahan Non-Perkebunan",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "price_appreciation_potential",
      label: "Potensi Kenaikan Harga",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Jelaskan potensi kenaikan harga di kawasan ini...",
    },

    {
      id: "productivity_notes",
      label: "Catatan Produktivitas",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Produktivitas",
    },
  ],
};

export default tanamanProduktivitas;
