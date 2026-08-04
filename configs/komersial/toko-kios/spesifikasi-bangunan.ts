// configs/komersial/toko-kios/spesifikasi-bangunan.ts

const spesifikasiBangunan = {
  id: "spesifikasi-bangunan",
  title: "Spesifikasi Bangunan",
  description: "Detail ukuran dan fitur unit toko/kios.",

  fields: [
    { id: "unit_area", label: "Luas Unit", type: "number", required: true, suffix: "m2" },
    { id: "facade_width", label: "Lebar Muka / Etalase", type: "number", required: false, suffix: "m" },
    { id: "ceiling_height", label: "Tinggi Plafon", type: "number", required: false, suffix: "m" },
    { id: "mezzanine", label: "Mezzanine", type: "checkbox", required: false },
    { id: "storage_room", label: "Gudang", type: "checkbox", required: false },
    { id: "bathroom_available", label: "Toilet Dalam Unit", type: "checkbox", required: false },
    { id: "glass_facade", label: "Etalase Kaca", type: "checkbox", required: false },
    { id: "electrical_power", label: "Daya Listrik", type: "number", required: true, suffix: "Watt" },
    {
      id: "flooring_material",
      label: "Material Lantai",
      type: "select",
      required: false,
      options: ["Keramik", "Granit", "Semen Aci", "Vinyl"],
    },
  ],
};

export default spesifikasiBangunan;
