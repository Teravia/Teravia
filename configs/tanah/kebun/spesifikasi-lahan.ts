// configs/tanah/kebun/spesifikasi-lahan.ts

const spesifikasiLahan = {
  id: "spesifikasi-lahan",
  title: "Spesifikasi Lahan",
  description: "Detail ukuran, kontur, dan kualitas lahan kebun.",

  fields: [
    { id: "land_area", label: "Luas Kebun", type: "number", required: true, suffix: "m2" },
    { id: "land_area_hectare", label: "Luas Kebun (Hektar)", type: "number", required: false, suffix: "Ha" },
    {
      id: "garden_type",
      label: "Jenis Kebun",
      type: "select",
      required: true,
      options: [
        "Kebun Buah",
        "Kebun Sawit",
        "Kebun Karet",
        "Kebun Kopi",
        "Kebun Kakao",
        "Kebun Cengkeh",
        "Kebun Kelapa",
        "Kebun Kayu (Sengon/Jati/dll)",
        "Kebun Campuran",
      ],
    },
    {
      id: "soil_quality",
      label: "Kualitas Tanah",
      type: "select",
      required: false,
      options: ["Sangat Subur", "Subur", "Cukup Subur", "Kurang Subur"],
    },
    {
      id: "land_contour",
      label: "Kontur Lahan",
      type: "select",
      required: true,
      options: ["Datar", "Berbukit", "Pegunungan", "Berundak (Terasering)"],
    },
    {
      id: "land_shape",
      label: "Bentuk Lahan",
      type: "select",
      required: false,
      options: ["Kotak / Persegi Panjang", "Bentuk L", "Tidak Beraturan"],
    },
    {
      id: "boundary_markers_available",
      label: "Sudah Ada Patok Batas",
      type: "checkbox",
      required: false,
    },
  ],
};

export default spesifikasiLahan;
