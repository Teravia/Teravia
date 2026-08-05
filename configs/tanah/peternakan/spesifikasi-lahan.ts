// configs/tanah/peternakan/spesifikasi-lahan.ts

const spesifikasiLahan = {
  id: "spesifikasi-lahan",
  title: "Spesifikasi Lahan",
  description: "Detail ukuran dan kontur lahan peternakan.",

  fields: [
    { id: "land_area", label: "Luas Lahan", type: "number", required: true, suffix: "m2" },
    { id: "land_area_hectare", label: "Luas Lahan (Hektar)", type: "number", required: false, suffix: "Ha" },
    {
      id: "land_contour",
      label: "Kontur Lahan",
      type: "select",
      required: false,
      options: ["Datar", "Berbukit", "Berundak (Terasering)"],
    },
    {
      id: "land_shape",
      label: "Bentuk Lahan",
      type: "select",
      required: false,
      options: ["Kotak / Persegi Panjang", "Bentuk L", "Tidak Beraturan"],
    },
    { id: "boundary_markers_available", label: "Sudah Ada Patok Batas", type: "checkbox", required: false },
    { id: "fence_available", label: "Sudah Ada Pagar Keliling", type: "checkbox", required: false },
    {
      id: "distance_to_settlement",
      label: "Jarak ke Pemukiman Terdekat",
      type: "number",
      required: true,
      suffix: "m",
    },
  ],
};

export default spesifikasiLahan;
