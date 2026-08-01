// configs/hunian/rumah/fasilitas.ts

const fasilitas = {
  id: "fasilitas",
  title: "Fasilitas",
  description: "Fasilitas yang tersedia pada rumah.",

  fields: [
    // Furnitur
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

    // Pendingin Ruangan
    {
      id: "ac",
      label: "AC",
      type: "number",
      required: false,
      suffix: "Unit",
    },

    {
      id: "ceiling_fan",
      label: "Ceiling Fan",
      type: "checkbox",
      required: false,
    },

    {
      id: "exhaust_fan",
      label: "Exhaust Fan",
      type: "checkbox",
      required: false,
    },

    // Dapur
    {
      id: "kitchen_set",
      label: "Kitchen Set",
      type: "checkbox",
      required: false,
    },

    {
      id: "pantry",
      label: "Pantry",
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
      id: "freezer",
      label: "Freezer",
      type: "checkbox",
      required: false,
    },

    {
      id: "dishwasher",
      label: "Dishwasher",
      type: "checkbox",
      required: false,
    },

    // Laundry
    {
      id: "washing_machine",
      label: "Mesin Cuci",
      type: "checkbox",
      required: false,
    },

    {
      id: "dryer",
      label: "Dryer",
      type: "checkbox",
      required: false,
    },

    // Air
    {
      id: "water_heater",
      label: "Water Heater",
      type: "checkbox",
      required: false,
    },

    {
      id: "bathtub",
      label: "Bathtub",
      type: "checkbox",
      required: false,
    },

    {
      id: "jacuzzi",
      label: "Jacuzzi",
      type: "checkbox",
      required: false,
    },

    // Hiburan
    {
      id: "smart_tv",
      label: "Smart TV",
      type: "checkbox",
      required: false,
    },

    {
      id: "home_theater",
      label: "Home Theater",
      type: "checkbox",
      required: false,
    },

    // Internet
    {
      id: "wifi",
      label: "WiFi",
      type: "checkbox",
      required: false,
    },

    {
      id: "fiber_optic",
      label: "Internet Fiber Optic",
      type: "checkbox",
      required: false,
    },

    {
      id: "tv_cable",
      label: "TV Kabel",
      type: "checkbox",
      required: false,
    },

    // Smart Home
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
      id: "smart_lighting",
      label: "Smart Lighting",
      type: "checkbox",
      required: false,
    },

    {
      id: "smart_curtain",
      label: "Smart Curtain",
      type: "checkbox",
      required: false,
    },

    {
      id: "smart_cctv",
      label: "Smart CCTV",
      type: "checkbox",
      required: false,
    },

    // Outdoor
    {
      id: "garden",
      label: "Taman",
      type: "checkbox",
      required: false,
    },

    {
      id: "gazebo",
      label: "Gazebo",
      type: "checkbox",
      required: false,
    },

    {
      id: "fish_pond",
      label: "Kolam Ikan",
      type: "checkbox",
      required: false,
    },

    {
      id: "private_pool",
      label: "Kolam Renang Pribadi",
      type: "checkbox",
      required: false,
    },

    {
      id: "bbq_area",
      label: "Area BBQ",
      type: "checkbox",
      required: false,
    },

    {
      id: "playground",
      label: "Playground",
      type: "checkbox",
      required: false,
    },

    // Lainnya
    {
      id: "prayer_room",
      label: "Ruang Ibadah",
      type: "checkbox",
      required: false,
    },

    {
      id: "walk_in_closet",
      label: "Walk In Closet",
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
      id: "laundry_room",
      label: "Laundry Room",
      type: "checkbox",
      required: false,
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
  ],
};

export default fasilitas;
