// configs/tanah/peternakan/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi peternakan relatif terhadap fasilitas umum dan kawasan sekitar.",

  fields: [
    { id: "near_village", label: "Dekat Perkampungan", type: "checkbox", required: false },
    { id: "near_district_road", label: "Dekat Jalan Kabupaten/Provinsi", type: "checkbox", required: false },
    { id: "near_slaughterhouse", label: "Dekat Rumah Potong Hewan (RPH)", type: "checkbox", required: false },
    { id: "near_livestock_market", label: "Dekat Pasar Hewan", type: "checkbox", required: false },
    { id: "near_vet_clinic", label: "Dekat Dokter Hewan / Klinik Hewan", type: "checkbox", required: false },
    { id: "near_feed_supplier", label: "Dekat Pemasok Pakan Ternak", type: "checkbox", required: false },
    { id: "isolated_from_residential", label: "Terpisah Jauh dari Pemukiman Padat", type: "checkbox", required: false },

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
