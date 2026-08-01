// configs/hunian/apartemen/spesifikasi-unit.ts

const spesifikasiUnit = {
  id: "spesifikasi-unit",
  title: "Spesifikasi Unit",
  description: "Detail ukuran dan ruangan pada unit apartemen.",

  fields: [
    {
      id: "unit_area",
      label: "Luas Unit",
      type: "number",
      required: true,
      suffix: "m2",
    },

    {
      id: "bedroom_count",
      label: "Kamar Tidur",
      type: "number",
      required: true,
    },

    {
      id: "bathroom_count",
      label: "Kamar Mandi",
      type: "number",
      required: true,
    },

    {
      id: "ceiling_height",
      label: "Tinggi Plafon",
      type: "number",
      required: false,
      suffix: "m",
    },

    {
      id: "electrical_power",
      label: "Daya Listrik",
      type: "number",
      required: false,
      suffix: "Watt",
    },

    {
      id: "flooring_material",
      label: "Material Lantai",
      type: "multiselect",
      required: false,
      options: [
        "Keramik",
        "Granit",
        "Marmer",
        "Vinyl",
        "Parket",
      ],
    },

    {
      id: "wall_material",
      label: "Material Dinding",
      type: "select",
      required: false,
      options: [
        "Bata",
        "Beton",
        "Panel",
      ],
    },

    {
      id: "maid_room",
      label: "Kamar Pembantu",
      type: "checkbox",
      required: false,
    },

    {
      id: "maid_bathroom",
      label: "Kamar Mandi Pembantu",
      type: "checkbox",
      required: false,
    },

    {
      id: "balcony",
      label: "Balkon",
      type: "checkbox",
      required: false,
    },

    {
      id: "living_room",
      label: "Ruang Tamu",
      type: "checkbox",
      required: false,
    },

    {
      id: "dining_room",
      label: "Ruang Makan",
      type: "checkbox",
      required: false,
    },

    {
      id: "kitchen",
      label: "Dapur",
      type: "checkbox",
      required: false,
    },

    {
      id: "storage_room",
      label: "Gudang",
      type: "checkbox",
      required: false,
    },

    {
      id: "laundry_area",
      label: "Area Laundry",
      type: "checkbox",
      required: false,
    },

    {
      id: "walk_in_closet",
      label: "Walk In Closet",
      type: "checkbox",
      required: false,
    },
  ],
};

export default spesifikasiUnit;

