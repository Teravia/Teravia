// configs/hunian/apartemen/fasilitas-unit.ts

const fasilitasUnit = {
  id: "fasilitas-unit",
  title: "Fasilitas Unit",
  description: "Fasilitas yang tersedia di dalam unit apartemen.",

  fields: [
    {
      id: "furnished",
      label: "Kondisi Furnitur",
      type: "select",
      required: false,
      options: [
        "Unfurnished",
        "Semi Furnished",
        "Fully Furnished",
      ],
    },

    {
      id: "ac",
      label: "AC",
      type: "number",
      required: false,
      suffix: "Unit",
    },

    {
      id: "kitchen_set",
      label: "Kitchen Set",
      type: "checkbox",
      required: false,
    },

    {
      id: "cooker_hood",
      label: "Cooker Hood",
      type: "checkbox",
      required: false,
    },

    {
      id: "gas_stove",
      label: "Kompor Gas",
      type: "checkbox",
      required: false,
    },

    {
      id: "electric_stove",
      label: "Kompor Listrik",
      type: "checkbox",
      required: false,
    },

    {
      id: "oven",
      label: "Oven",
      type: "checkbox",
      required: false,
    },

    {
      id: "microwave",
      label: "Microwave",
      type: "checkbox",
      required: false,
    },

    {
      id: "refrigerator",
      label: "Kulkas",
      type: "checkbox",
      required: false,
    },

    {
      id: "washing_machine",
      label: "Mesin Cuci",
      type: "checkbox",
      required: false,
    },

    {
      id: "water_heater",
      label: "Water Heater",
      type: "checkbox",
      required: false,
    },

    {
      id: "smart_tv",
      label: "Smart TV",
      type: "checkbox",
      required: false,
    },

    {
      id: "wifi",
      label: "WiFi",
      type: "checkbox",
      required: false,
    },

    {
      id: "tv_cable",
      label: "TV Kabel",
      type: "checkbox",
      required: false,
    },

    {
      id: "smart_home",
      label: "Smart Home",
      type: "checkbox",
      required: false,
    },

    {
      id: "smart_door_lock",
      label: "Smart Door Lock",
      type: "checkbox",
      required: false,
    },

    {
      id: "smart_curtain",
      label: "Smart Curtain",
      type: "checkbox",
      required: false,
    },
  ],
};

export default fasilitasUnit;

