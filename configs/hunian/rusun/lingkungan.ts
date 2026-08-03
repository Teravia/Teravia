// configs/hunian/rusun/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi rusun relatif terhadap fasilitas umum sekitar.",

  fields: [
    { id: "near_kindergarten", label: "Dekat TK", type: "checkbox", required: false },
    { id: "near_elementary", label: "Dekat SD", type: "checkbox", required: false },
    { id: "near_junior_high", label: "Dekat SMP", type: "checkbox", required: false },
    { id: "near_senior_high", label: "Dekat SMA/SMK", type: "checkbox", required: false },
    { id: "near_hospital", label: "Dekat Rumah Sakit", type: "checkbox", required: false },
    { id: "near_clinic", label: "Dekat Klinik / Puskesmas", type: "checkbox", required: false },
    { id: "near_traditional_market", label: "Dekat Pasar Tradisional", type: "checkbox", required: false },
    { id: "near_minimarket", label: "Dekat Minimarket", type: "checkbox", required: false },
    { id: "near_bus_stop", label: "Dekat Halte Bus", type: "checkbox", required: false },
    { id: "near_commuter_line", label: "Dekat Stasiun KRL", type: "checkbox", required: false },
    { id: "near_industrial_area", label: "Dekat Kawasan Industri", type: "checkbox", required: false },
    { id: "near_office_area", label: "Dekat Perkantoran", type: "checkbox", required: false },
    { id: "flood_free", label: "Bebas Banjir", type: "checkbox", required: false },
    { id: "easy_public_transport", label: "Mudah Transportasi Umum", type: "checkbox", required: false },

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
