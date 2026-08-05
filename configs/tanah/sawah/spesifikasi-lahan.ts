// configs/tanah/sawah/spesifikasi-lahan.ts

const spesifikasiLahan = {
  id: "spesifikasi-lahan",
  title: "Spesifikasi Lahan",
  description: "Detail ukuran, jenis, dan kualitas lahan sawah.",

  fields: [
    { id: "land_area", label: "Luas Sawah", type: "number", required: true, suffix: "m2" },
    { id: "land_area_hectare", label: "Luas Sawah (Hektar)", type: "number", required: false, suffix: "Ha" },
    {
      id: "rice_field_type",
      label: "Jenis Sawah",
      type: "select",
      required: true,
      options: [
        "Sawah Irigasi Teknis",
        "Sawah Irigasi Setengah Teknis",
        "Sawah Tadah Hujan",
        "Sawah Pasang Surut",
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
      required: false,
      options: ["Datar", "Berundak (Terasering)", "Miring"],
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
