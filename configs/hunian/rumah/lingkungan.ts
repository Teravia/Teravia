// configs/hunian/rumah/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Informasi fasilitas dan akses di sekitar properti.",

  fields: [
    // Pendidikan
    {
      id: "near_kindergarten",
      label: "Dekat TK",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_elementary_school",
      label: "Dekat SD",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_junior_high_school",
      label: "Dekat SMP",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_senior_high_school",
      label: "Dekat SMA/SMK",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_university",
      label: "Dekat Universitas",
      type: "checkbox",
      required: false,
    },

    // Kesehatan
    {
      id: "near_hospital",
      label: "Dekat Rumah Sakit",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_clinic",
      label: "Dekat Klinik",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_pharmacy",
      label: "Dekat Apotek",
      type: "checkbox",
      required: false,
    },

    // Perbelanjaan
    {
      id: "near_supermarket",
      label: "Dekat Supermarket",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_minimarket",
      label: "Dekat Minimarket",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_traditional_market",
      label: "Dekat Pasar Tradisional",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_modern_market",
      label: "Dekat Pasar Modern",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_mall",
      label: "Dekat Mall",
      type: "checkbox",
      required: false,
    },

    // Transportasi
    {
      id: "near_toll_gate",
      label: "Dekat Gerbang Tol",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_bus_stop",
      label: "Dekat Halte Bus",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_terminal",
      label: "Dekat Terminal",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_train_station",
      label: "Dekat Stasiun KRL",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_mrt",
      label: "Dekat MRT",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_lrt",
      label: "Dekat LRT",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_airport",
      label: "Dekat Bandara",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_port",
      label: "Dekat Pelabuhan",
      type: "checkbox",
      required: false,
    },

    // Tempat Ibadah
    {
      id: "near_mosque",
      label: "Dekat Masjid",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_church",
      label: "Dekat Gereja",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_temple",
      label: "Dekat Pura",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_vihara",
      label: "Dekat Vihara",
      type: "checkbox",
      required: false,
    },

    // Hiburan
    {
      id: "near_city_park",
      label: "Dekat Taman Kota",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_playground",
      label: "Dekat Playground",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_sport_center",
      label: "Dekat Sport Center",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_golf_course",
      label: "Dekat Lapangan Golf",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_tourist_attraction",
      label: "Dekat Tempat Wisata",
      type: "checkbox",
      required: false,
    },

    // Kawasan
    {
      id: "near_business_district",
      label: "Dekat CBD",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_office_area",
      label: "Dekat Perkantoran",
      type: "checkbox",
      required: false,
    },
    {
      id: "near_industrial_area",
      label: "Dekat Kawasan Industri",
      type: "checkbox",
      required: false,
    },

    // Lingkungan
    {
      id: "flood_free",
      label: "Bebas Banjir",
      type: "checkbox",
      required: false,
    },
    {
      id: "wide_road_access",
      label: "Akses Jalan Lebar",
      type: "checkbox",
      required: false,
    },
    {
      id: "public_transport",
      label: "Mudah Transportasi Umum",
      type: "checkbox",
      required: false,
    },
    {
      id: "quiet_environment",
      label: "Lingkungan Tenang",
      type: "checkbox",
      required: false,
    },
    {
      id: "family_friendly",
      label: "Ramah Keluarga",
      type: "checkbox",
      required: false,
    },
    {
      id: "environment_notes",
      label: "Catatan Lingkungan",
      type: "textarea",
      required: false,
      rows: 4,
      maxLength: 1000,
    },
  ],
};

export default lingkungan;
