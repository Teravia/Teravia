// configs/hunian/kontrakan/fasilitas.ts

const fasilitas = {
  id: "fasilitas",
  title: "Fasilitas",
  description: "Fasilitas yang tersedia di rumah kontrakan.",

  fields: [
    {
      id: "furnished",
      label: "Kondisi Furnitur",
      type: "select",
      required: true,
      options: ["Unfurnished", "Semi Furnished", "Fully Furnished"],
    },
    { id: "ac", label: "AC", type: "number", required: false, suffix: "Unit" },
    { id: "ceiling_fan", label: "Ceiling Fan", type: "checkbox", required: false },
    { id: "kitchen_set", label: "Kitchen Set", type: "checkbox", required: false },
    { id: "gas_stove", label: "Kompor Gas", type: "checkbox", required: false },
    { id: "refrigerator", label: "Kulkas", type: "checkbox", required: false },
    { id: "washing_machine", label: "Mesin Cuci", type: "checkbox", required: false },
    { id: "water_heater", label: "Water Heater", type: "checkbox", required: false },
    { id: "tv", label: "TV", type: "checkbox", required: false },
    { id: "wifi", label: "WiFi", type: "checkbox", required: false },
    { id: "wardrobe", label: "Lemari Pakaian", type: "checkbox", required: false },
    { id: "bed", label: "Tempat Tidur", type: "checkbox", required: false },
    { id: "sofa", label: "Sofa", type: "checkbox", required: false },
    { id: "dining_table", label: "Meja Makan", type: "checkbox", required: false },
    { id: "curtain", label: "Gorden", type: "checkbox", required: false },
    { id: "water_tank", label: "Tandon Air", type: "checkbox", required: false },
    { id: "backup_water_pump", label: "Pompa Air", type: "checkbox", required: false },
  ],
};

export default fasilitas;
