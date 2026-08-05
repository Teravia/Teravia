// configs/komersial/gedung-perkantoran/parkir.ts

const parkir = {
  id: "parkir",
  title: "Fasilitas & Kapasitas Parkir",
  description: "Detail kapasitas, sistem pengelolaan, dan fasilitas area parkir gedung perkantoran.",

  fields: [
    {
      id: "car_parking_capacity",
      label: "Kapasitas Parkir Mobil (Unit)",
      type: "number",
      required: false,
      placeholder: "Contoh: 250",
    },

    {
      id: "motorcycle_parking_capacity",
      label: "Kapasitas Parkir Motor (Unit)",
      type: "number",
      required: false,
      placeholder: "Contoh: 500",
    },

    {
      id: "parking_ratio",
      label: "Rasio Parkir Gedung",
      type: "text",
      required: false,
      placeholder: "Contoh: 1 : 100 m²",
    },

    {
      id: "parking_structure",
      label: "Tipe Area Parkir",
      type: "checkbox_group",
      required: false,
      options: [
        "Basement Parking",
        "Gedung Parkir Terpisah (Multi-Storey Parking)",
        "Parkir Outdoor / Surface Parking",
        "Mechanical / Automated Parking System",
      ],
    },

    {
      id: "parking_features",
      label: "Fasilitas & Fitur Parkir",
      type: "checkbox_group",
      required: false,
      options: [
        "VIP / Executive Parking Spot",
        "EV Charging Station (Stasiun Pengisian Kendaraan Listrik)",
        "Area Valet Parking",
        "Drop-off Zone Khusus Lobby Utama",
        "Akses Masuk Otomatis (ALPR / E-Tag)",
        "Petugas Parkir Khusus",
        "Sistem Indikator Tempat Parkir Kosong (Parking Guidance)",
      ],
    },
  ],
};

export default parkir;
