// configs/tanah/sawah/produktivitas.ts

const produktivitas = {
  id: "produktivitas",
  title: "Produktivitas",
  description: "Informasi hasil panen dan potensi produktivitas lahan sawah.",

  fields: [
    {
      id: "planted_crops",
      label: "Jenis Tanaman yang Biasa Ditanam",
      type: "multiselect",
      required: false,
      options: [
        "Padi",
        "Palawija (Jagung/Kedelai)",
        "Sayuran",
        "Lainnya",
      ],
    },

    {
      id: "planting_seasons_per_year",
      label: "Jumlah Musim Tanam per Tahun",
      type: "select",
      required: false,
      options: ["1 Kali", "2 Kali", "3 Kali"],
    },

    {
      id: "average_yield_per_hectare",
      label: "Rata-Rata Hasil Panen per Hektar",
      type: "text",
      required: false,
      placeholder: "Contoh: 6 ton gabah/hektar/musim",
    },

    {
      id: "current_land_use",
      label: "Status Penggunaan Saat Ini",
      type: "select",
      required: false,
      options: [
        "Aktif Digarap Petani",
        "Ditahan / Tidak Digarap",
      ],
    },

    {
      id: "land_conversion_potential",
      label: "Potensi Alih Fungsi Lahan Non-Pertanian",
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

export default produktivitas;
