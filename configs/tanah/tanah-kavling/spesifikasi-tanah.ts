// configs/tanah/kavling/spesifikasi-tanah.ts

const spesifikasiTanah = {
  id: "spesifikasi-tanah",
  title: "Spesifikasi Tanah",
  description: "Detail ukuran, bentuk, dan kontur tanah kavling.",

  fields: [
    { id: "land_area", label: "Luas Tanah", type: "number", required: true, suffix: "m2" },
    { id: "facade_width", label: "Lebar Muka", type: "number", required: true, suffix: "m" },
    { id: "land_length", label: "Panjang Tanah", type: "number", required: false, suffix: "m" },
    {
      id: "land_shape",
      label: "Bentuk Tanah",
      type: "select",
      required: false,
      options: ["Kotak / Persegi Panjang", "Bentuk L", "Tidak Beraturan"],
    },
    {
      id: "land_contour",
      label: "Kontur Tanah",
      type: "select",
      required: true,
      options: ["Datar", "Miring", "Berbukit", "Berundak (Bertingkat)"],
    },
    {
      id: "elevation_from_road",
      label: "Ketinggian dari Jalan",
      type: "select",
      required: false,
      options: ["Sejajar Jalan", "Lebih Tinggi dari Jalan", "Lebih Rendah dari Jalan"],
    },
    {
      id: "land_position",
      label: "Posisi Kavling",
      type: "select",
      required: false,
      options: ["Hook / Sudut", "Tengah", "Ujung"],
    },
    {
      id: "facing_direction",
      label: "Hadap Kavling",
      type: "select",
      required: false,
      options: [
        "Utara",
        "Selatan",
        "Timur",
        "Barat",
        "Timur Laut",
        "Timur Tenggara",
        "Barat Laut",
        "Barat Daya",
      ],
    },
    { id: "boundary_markers_available", label: "Sudah Ada Patok Batas", type: "checkbox", required: false },
    { id: "fence_available", label: "Sudah Ada Pagar Keliling", type: "checkbox", required: false },
  ],
};

export default spesifikasiTanah;
