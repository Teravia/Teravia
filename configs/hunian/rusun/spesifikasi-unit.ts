// configs/hunian/rusun/spesifikasi-unit.ts

const spesifikasiUnit = {
  id: "spesifikasi-unit",
  title: "Spesifikasi Unit",
  description: "Detail ukuran dan ruangan unit rumah susun.",

  fields: [
    { id: "unit_area", label: "Luas Unit", type: "number", required: true, suffix: "m2" },
    { id: "bedroom_count", label: "Kamar Tidur", type: "number", required: true },
    { id: "bathroom_count", label: "Kamar Mandi", type: "number", required: true },
    { id: "living_room", label: "Ruang Tamu", type: "checkbox", required: false },
    { id: "kitchen", label: "Dapur", type: "checkbox", required: false },
    { id: "balcony", label: "Balkon", type: "checkbox", required: false },
    { id: "drying_area", label: "Area Jemuran", type: "checkbox", required: false },
    { id: "electrical_power", label: "Daya Listrik", type: "number", required: false, suffix: "Watt" },
    {
      id: "flooring_material",
      label: "Material Lantai",
      type: "select",
      required: false,
      options: ["Keramik", "Semen Aci", "Vinyl"],
    },
    {
      id: "wall_material",
      label: "Material Dinding",
      type: "select",
      required: false,
      options: ["Bata", "Beton Precast", "Panel"],
    },
  ],
};

export default spesifikasiUnit;
