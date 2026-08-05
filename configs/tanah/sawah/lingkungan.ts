// configs/tanah/sawah/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi sawah relatif terhadap fasilitas umum dan kawasan sekitar.",

  fields: [
    { id: "near_village", label: "Dekat Perkampungan", type: "checkbox", required: false },
    { id: "near_district_road", label: "Dekat Jalan Kabupaten/Provinsi", type: "checkbox", required: false },
    { id: "near_traditional_market", label: "Dekat Pasar Tradisional", type: "checkbox", required: false },
    { id: "near_rice_mill", label: "Dekat Penggilingan Padi", type: "checkbox", required: false },
    { id: "near_school", label: "Dekat Sekolah", type: "checkbox", required: false },
    { id: "flood_prone", label: "Rawan Banjir", type: "checkbox", required: false },
    { id: "quiet_environment", label: "Lingkungan Tenang / Pedesaan", type: "checkbox", required: false },

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
