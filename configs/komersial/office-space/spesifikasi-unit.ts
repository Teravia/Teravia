// configs/komersial/office-space/spesifikasi-unit.ts

const spesifikasiUnit = {
  id: "spesifikasi-unit",
  title: "Spesifikasi Unit",
  description: "Detail ukuran dan kapasitas unit office space.",

  fields: [
    { id: "unit_area", label: "Luas Unit", type: "number", required: true, suffix: "m2" },
    { id: "ceiling_height", label: "Tinggi Plafon", type: "number", required: false, suffix: "m" },
    { id: "floor_loading_capacity", label: "Kapasitas Beban Lantai", type: "number", required: false, suffix: "kg/m2" },
    { id: "column_free_span", label: "Jarak Antar Kolom (Column Free Span)", type: "number", required: false, suffix: "m" },
    { id: "bathroom_count", label: "Jumlah Toilet Dalam Unit", type: "number", required: false },
    { id: "meeting_room", label: "Ruang Meeting Dalam Unit", type: "checkbox", required: false },
    { id: "pantry", label: "Pantry", type: "checkbox", required: false },
    { id: "server_room", label: "Ruang Server", type: "checkbox", required: false },
    { id: "storage_room", label: "Gudang", type: "checkbox", required: false },
    { id: "reception_area", label: "Area Resepsionis", type: "checkbox", required: false },
    { id: "private_lift_lobby", label: "Lift Lobby Pribadi", type: "checkbox", required: false },
    {
      id: "flooring_material",
      label: "Material Lantai",
      type: "select",
      required: false,
      options: ["Raised Floor", "Karpet Tile", "Vinyl", "Keramik/Granit"],
    },
  ],
};

export default spesifikasiUnit;
