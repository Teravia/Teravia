// configs/hunian/rusun/fasilitas-unit.ts

const fasilitasUnit = {
  id: "fasilitas-unit",
  title: "Fasilitas Unit",
  description: "Fasilitas dasar yang tersedia di dalam unit rusun.",

  fields: [
    {
      id: "furnished",
      label: "Kondisi Furnitur",
      type: "select",
      required: false,
      options: ["Unfurnished", "Semi Furnished"],
    },
    { id: "ceiling_fan", label: "Kipas Angin", type: "checkbox", required: false },
    { id: "ac", label: "AC", type: "checkbox", required: false },
    { id: "water_heater", label: "Water Heater", type: "checkbox", required: false },
    { id: "kitchen_set", label: "Kitchen Set Sederhana", type: "checkbox", required: false },
    { id: "wardrobe", label: "Lemari Pakaian", type: "checkbox", required: false },
    { id: "bed", label: "Tempat Tidur", type: "checkbox", required: false },
  ],
};

export default fasilitasUnit;
