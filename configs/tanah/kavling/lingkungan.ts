// configs/tanah/kavling/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi kavling relatif terhadap fasilitas umum sekitar.",

  fields: [
    { id: "near_kindergarten", label: "Dekat TK", type: "checkbox", required: false },
    { id: "near_elementary", label: "Dekat SD", type: "checkbox", required: false },
    { id: "near_senior_high", label: "Dekat SMA/SMK", type: "checkbox", required: false },
    { id: "near_hospital", label: "Dekat Rumah Sakit", type: "checkbox", required: false },
    { id: "near_traditional_market", label: "Dekat Pasar Tradisional", type: "checkbox", required: false },
    { id: "near_minimarket", label: "Dekat Minimarket", type: "checkbox", required: false },
    { id: "near_toll_gate", label: "Dekat Gerbang Tol", type: "checkbox", required: false },
    { id: "near_public_transport", label: "Dekat Transportasi Umum", type: "checkbox", required: false },
    { id: "near_industrial_area", label: "Dekat Kawasan Industri", type: "checkbox", required: false },
    { id: "near_office_area", label: "Dekat Perkantoran", type: "checkbox", required: false },
    { id: "flood_free", label: "Bebas Banjir", type: "checkbox", required: false },
    { id: "quiet_environment", label: "Lingkungan Tenang", type: "checkbox", required: false },

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
