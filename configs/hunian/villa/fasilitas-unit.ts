// configs/hunian/villa/fasilitas-unit.ts

const fasilitasUnit = {
  id: "fasilitas-unit",
  title: "Fasilitas Rumah",
  description: "Fasilitas standar yang tersedia di dalam villa.",

  fields: [
    {
      id: "furnished",
      label: "Kondisi Furnitur",
      type: "select",
      required: false,
      options: ["Unfurnished", "Semi Furnished", "Fully Furnished"],
    },
    { id: "ac", label: "AC", type: "number", required: false, suffix: "Unit" },
    { id: "kitchen_set", label: "Kitchen Set", type: "checkbox", required: false },
    { id: "refrigerator", label: "Kulkas", type: "checkbox", required: false },
    { id: "washing_machine", label: "Mesin Cuci", type: "checkbox", required: false },
    { id: "water_heater", label: "Water Heater", type: "checkbox", required: false },
    { id: "smart_tv", label: "Smart TV", type: "checkbox", required: false },
    { id: "wifi", label: "WiFi", type: "checkbox", required: false },
    { id: "sound_system", label: "Sound System", type: "checkbox", required: false },
    { id: "safe_deposit_box", label: "Safe Deposit Box", type: "checkbox", required: false },
  ],
};

export default fasilitasUnit;
