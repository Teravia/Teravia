// configs/hunian/penthouse/spesifikasi-unit.ts

const spesifikasiUnit = {
  id: "spesifikasi-unit",
  title: "Spesifikasi Unit",
  description: "Detail ukuran dan ruangan pada unit penthouse.",

  fields: [
    { id: "unit_area", label: "Luas Unit", type: "number", required: true, suffix: "m2" },
    { id: "terrace_area", label: "Luas Rooftop / Terrace", type: "number", required: false, suffix: "m2" },
    { id: "bedroom_count", label: "Kamar Tidur", type: "number", required: true },
    { id: "bathroom_count", label: "Kamar Mandi", type: "number", required: true },
    { id: "maid_room", label: "Kamar Pembantu", type: "checkbox", required: false },
    { id: "maid_bathroom", label: "Kamar Mandi Pembantu", type: "checkbox", required: false },
    { id: "ceiling_height", label: "Tinggi Plafon", type: "number", required: false, suffix: "m" },
    { id: "electrical_power", label: "Daya Listrik", type: "number", required: false, suffix: "Watt" },

    { id: "living_room", label: "Ruang Tamu", type: "checkbox", required: false },
    { id: "family_room", label: "Ruang Keluarga", type: "checkbox", required: false },
    { id: "dining_room", label: "Ruang Makan", type: "checkbox", required: false },
    { id: "study_room", label: "Ruang Kerja / Studi", type: "checkbox", required: false },
    { id: "kitchen", label: "Dapur", type: "checkbox", required: false },
    { id: "dry_kitchen", label: "Dapur Kering", type: "checkbox", required: false },
    { id: "wet_kitchen", label: "Dapur Basah", type: "checkbox", required: false },
    { id: "pantry", label: "Pantry", type: "checkbox", required: false },
    { id: "storage_room", label: "Gudang", type: "checkbox", required: false },
    { id: "laundry_area", label: "Area Laundry", type: "checkbox", required: false },
    { id: "walk_in_closet", label: "Walk In Closet", type: "checkbox", required: false },
    { id: "family_lounge", label: "Family Lounge", type: "checkbox", required: false },

    {
      id: "flooring_material",
      label: "Material Lantai",
      type: "multiselect",
      required: false,
      options: ["Marmer", "Granit", "Parket", "Keramik Premium"],
    },
    {
      id: "wall_material",
      label: "Material Dinding",
      type: "select",
      required: false,
      options: ["Bata", "Beton", "Panel"],
    },
  ],
};

export default spesifikasiUnit;
