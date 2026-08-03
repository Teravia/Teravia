// configs/komersial/ruko-rukan/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi ruko/rukan relatif terhadap kawasan bisnis dan fasilitas sekitar.",

  fields: [
    { id: "near_main_road", label: "Dekat Jalan Utama / Protokol", type: "checkbox", required: false },
    { id: "near_business_district", label: "Dekat Kawasan Bisnis (CBD)", type: "checkbox", required: false },
    { id: "near_market", label: "Dekat Pasar", type: "checkbox", required: false },
    { id: "near_mall", label: "Dekat Mall", type: "checkbox", required: false },
    { id: "near_office_area", label: "Dekat Perkantoran", type: "checkbox", required: false },
    { id: "near_residential_area", label: "Dekat Kawasan Perumahan Padat", type: "checkbox", required: false },
    { id: "near_toll_gate", label: "Dekat Gerbang Tol", type: "checkbox", required: false },
    { id: "near_public_transport", label: "Dekat Transportasi Umum", type: "checkbox", required: false },
    { id: "near_bank", label: "Dekat Bank / ATM", type: "checkbox", required: false },
    { id: "flood_free", label: "Bebas Banjir", type: "checkbox", required: false },

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
