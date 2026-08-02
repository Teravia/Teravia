// configs/hunian/kontrakan/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi rumah kontrakan relatif terhadap fasilitas umum sekitar.",

  fields: [
    { id: "near_kindergarten", label: "Dekat TK", type: "checkbox", required: false },
    { id: "near_elementary", label: "Dekat SD", type: "checkbox", required: false },
    { id: "near_junior_high", label: "Dekat SMP", type: "checkbox", required: false },
    { id: "near_senior_high", label: "Dekat SMA/SMK", type: "checkbox", required: false },
    { id: "near_university", label: "Dekat Universitas", type: "checkbox", required: false },
    { id: "near_hospital", label: "Dekat Rumah Sakit", type: "checkbox", required: false },
    { id: "near_clinic", label: "Dekat Klinik", type: "checkbox", required: false },
    { id: "near_supermarket", label: "Dekat Supermarket", type: "checkbox", required: false },
    { id: "near_minimarket", label: "Dekat Minimarket", type: "checkbox", required: false },
    { id: "near_traditional_market", label: "Dekat Pasar Tradisional", type: "checkbox", required: false },
    { id: "near_mall", label: "Dekat Mall", type: "checkbox", required: false },
    { id: "near_toll_gate", label: "Dekat Gerbang Tol", type: "checkbox", required: false },
    { id: "near_bus_stop", label: "Dekat Halte Bus", type: "checkbox", required: false },
    { id: "near_commuter_line", label: "Dekat Stasiun KRL", type: "checkbox", required: false },
    { id: "near_mrt", label: "Dekat MRT", type: "checkbox", required: false },
    { id: "near_lrt", label: "Dekat LRT", type: "checkbox", required: false },
    { id: "near_office_area", label: "Dekat Perkantoran", type: "checkbox", required: false },
    { id: "near_campus", label: "Dekat Kampus", type: "checkbox", required: false },
    { id: "flood_free", label: "Bebas Banjir", type: "checkbox", required: false },
    { id: "easy_public_transport", label: "Mudah Transportasi Umum", type: "checkbox", required: false },
    { id: "wide_road_access", label: "Akses Jalan Lebar (Bisa Mobil)", type: "checkbox", required: false },
    { id: "quiet_environment", label: "Lingkungan Tenang", type: "checkbox", required: false },
    { id: "family_friendly", label: "Ramah Keluarga", type: "checkbox", required: false },

    {
      id: "environment_notes",
      label: "Catatan Lingkungan",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Lingkungan",
    },
  ],
};

export default lingkungan;
