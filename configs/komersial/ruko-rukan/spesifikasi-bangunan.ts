// configs/komersial/ruko-rukan/spesifikasi-bangunan.ts

const spesifikasiBangunan = {
  id: "spesifikasi-bangunan",
  title: "Spesifikasi Bangunan",
  description: "Detail ukuran dan ruangan bangunan ruko/rukan.",

  fields: [
    { id: "land_area", label: "Luas Tanah", type: "number", required: true, suffix: "m2" },
    { id: "building_area", label: "Luas Bangunan (Total Semua Lantai)", type: "number", required: true, suffix: "m2" },
    { id: "ground_floor_area", label: "Luas Lantai Dasar", type: "number", required: false, suffix: "m2" },
    { id: "facade_width", label: "Lebar Muka Bangunan", type: "number", required: false, suffix: "m" },
    { id: "building_length", label: "Panjang Bangunan", type: "number", required: false, suffix: "m" },
    { id: "ceiling_height_ground_floor", label: "Tinggi Plafon Lantai Dasar", type: "number", required: false, suffix: "m" },
    { id: "bathroom_count", label: "Jumlah Kamar Mandi", type: "number", required: false },
    { id: "mezzanine", label: "Mezzanine", type: "checkbox", required: false },
    { id: "rooftop", label: "Rooftop / Dak Atas", type: "checkbox", required: false },
    { id: "basement", label: "Basement", type: "checkbox", required: false },
    { id: "storage_room", label: "Gudang", type: "checkbox", required: false },
    { id: "pantry", label: "Pantry", type: "checkbox", required: false },
    { id: "loading_dock", label: "Area Bongkar Muat", type: "checkbox", required: false },
    { id: "electrical_power", label: "Daya Listrik", type: "number", required: true, suffix: "Watt" },
    {
      id: "water_source",
      label: "Sumber Air",
      type: "select",
      required: false,
      options: ["PDAM", "Sumur Bor"],
    },
    {
      id: "flooring_material",
      label: "Material Lantai",
      type: "select",
      required: false,
      options: ["Keramik", "Granit", "Semen Aci", "Vinyl"],
    },
    {
      id: "wall_material",
      label: "Material Dinding",
      type: "select",
      required: false,
      options: ["Bata Merah", "Bata Ringan (Hebel)", "Panel Beton"],
    },
  ],
};

export default spesifikasiBangunan;
