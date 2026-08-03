// configs/hunian/villa/spesifikasi-bangunan.ts

const spesifikasiBangunan = {
  id: "spesifikasi-bangunan",
  title: "Spesifikasi Bangunan",
  description: "Detail ukuran dan ruangan villa.",

  fields: [
    { id: "land_area", label: "Luas Tanah", type: "number", required: true, suffix: "m2" },
    { id: "building_area", label: "Luas Bangunan", type: "number", required: true, suffix: "m2" },
    { id: "bedroom_count", label: "Kamar Tidur", type: "number", required: true },
    { id: "bathroom_count", label: "Kamar Mandi", type: "number", required: true },
    { id: "staff_room", label: "Kamar Staff / Pembantu", type: "checkbox", required: false },

    { id: "living_room", label: "Ruang Tamu", type: "checkbox", required: false },
    { id: "dining_room", label: "Ruang Makan", type: "checkbox", required: false },
    { id: "open_kitchen", label: "Dapur Terbuka", type: "checkbox", required: false },
    { id: "closed_kitchen", label: "Dapur Tertutup", type: "checkbox", required: false },
    { id: "outdoor_living_area", label: "Outdoor Living Area", type: "checkbox", required: false },
    { id: "storage_room", label: "Gudang", type: "checkbox", required: false },
    { id: "laundry_area", label: "Area Laundry", type: "checkbox", required: false },

    { id: "electrical_power", label: "Daya Listrik", type: "number", required: false, suffix: "Watt" },
    {
      id: "water_source",
      label: "Sumber Air",
      type: "select",
      required: false,
      options: ["PDAM", "Sumur Bor", "Tandon"],
    },
    {
      id: "roof_material",
      label: "Material Atap",
      type: "select",
      required: false,
      options: ["Genteng Tanah Liat", "Alang-Alang", "Genteng Beton", "Metal"],
    },
    {
      id: "flooring_material",
      label: "Material Lantai",
      type: "select",
      required: false,
      options: ["Batu Alam", "Keramik", "Kayu / Parket", "Marmer"],
    },
  ],
};

export default spesifikasiBangunan;
