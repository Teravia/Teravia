// configs/tanah/kebun/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi kebun relatif terhadap fasilitas umum dan kawasan sekitar.",

  fields: [
    { id: "near_village", label: "Dekat Perkampungan", type: "checkbox", required: false },
    { id: "near_district_road", label: "Dekat Jalan Kabupaten/Provinsi", type: "checkbox", required: false },
    { id: "near_collection_point", label: "Dekat Tempat Penampungan / Pengepul Hasil Panen", type: "checkbox", required: false },
    { id: "near_processing_plant", label: "Dekat Pabrik Pengolahan (PKS/Pabrik Karet/dll)", type: "checkbox", required: false },
    { id: "near_traditional_market", label: "Dekat Pasar Tradisional", type: "checkbox", required: false },
    { id: "landslide_prone", label: "Rawan Longsor", type: "checkbox", required: false },
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
