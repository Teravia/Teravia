// configs/hunian/kontrakan/spesifikasi-bangunan.ts

const spesifikasiBangunan = {
  id: "spesifikasi-bangunan",
  title: "Spesifikasi Bangunan",
  description: "Detail ukuran dan ruangan rumah kontrakan.",

  fields: [
    { id: "land_area", label: "Luas Tanah", type: "number", required: false, suffix: "m2" },
    { id: "building_area", label: "Luas Bangunan", type: "number", required: true, suffix: "m2" },
    { id: "bedroom_count", label: "Kamar Tidur", type: "number", required: true },
    { id: "bathroom_count", label: "Kamar Mandi", type: "number", required: true },
    { id: "living_room", label: "Ruang Tamu", type: "checkbox", required: false },
    { id: "family_room", label: "Ruang Keluarga", type: "checkbox", required: false },
    { id: "dining_room", label: "Ruang Makan", type: "checkbox", required: false },
    { id: "kitchen", label: "Dapur", type: "checkbox", required: false },
    { id: "storage_room", label: "Gudang", type: "checkbox", required: false },
    { id: "laundry_area", label: "Area Jemuran / Laundry", type: "checkbox", required: false },
    { id: "front_terrace", label: "Teras Depan", type: "checkbox", required: false },
    { id: "backyard", label: "Halaman Belakang", type: "checkbox", required: false },
    { id: "electrical_power", label: "Daya Listrik", type: "number", required: true, suffix: "Watt" },
    {
      id: "electricity_type",
      label: "Jenis Listrik",
      type: "select",
      required: false,
      options: ["Token / Prabayar", "Pascabayar"],
    },
    {
      id: "water_source",
      label: "Sumber Air",
      type: "select",
      required: false,
      options: ["PDAM", "Sumur Bor", "Sumur Gali"],
    },
    {
      id: "roof_material",
      label: "Material Atap",
      type: "select",
      required: false,
      options: ["Genteng Beton", "Genteng Keramik", "Genteng Metal", "Asbes", "Spandek"],
    },
    {
      id: "wall_material",
      label: "Material Dinding",
      type: "select",
      required: false,
      options: ["Bata Merah", "Bata Ringan (Hebel)", "Panel Beton"],
    },
    {
      id: "floor_material",
      label: "Material Lantai",
      type: "select",
      required: false,
      options: ["Keramik", "Semen Aci", "Vinyl", "Granit"],
    },
  ],
};

export default spesifikasiBangunan;
