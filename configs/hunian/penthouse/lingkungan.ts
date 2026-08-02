// configs/hunian/penthouse/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi penthouse relatif terhadap fasilitas umum sekitar.",

  fields: [
    { id: "near_hospital", label: "Dekat Rumah Sakit", type: "checkbox", required: false },
    { id: "near_international_school", label: "Dekat Sekolah Internasional", type: "checkbox", required: false },
    { id: "near_university", label: "Dekat Universitas", type: "checkbox", required: false },
    { id: "near_supermarket", label: "Dekat Supermarket", type: "checkbox", required: false },
    { id: "near_mall", label: "Dekat Mall", type: "checkbox", required: false },
    { id: "near_fine_dining", label: "Dekat Fine Dining / Restoran Premium", type: "checkbox", required: false },
    { id: "near_golf_course", label: "Dekat Lapangan Golf", type: "checkbox", required: false },
    { id: "near_toll_gate", label: "Dekat Gerbang Tol", type: "checkbox", required: false },
    { id: "near_mrt", label: "Dekat MRT", type: "checkbox", required: false },
    { id: "near_airport", label: "Dekat Bandara", type: "checkbox", required: false },
    { id: "near_cbd", label: "Dekat CBD", type: "checkbox", required: false },
    { id: "near_embassy_area", label: "Dekat Kawasan Kedutaan", type: "checkbox", required: false },
    { id: "flood_free", label: "Bebas Banjir", type: "checkbox", required: false },
    { id: "quiet_environment", label: "Lingkungan Tenang", type: "checkbox", required: false },
    { id: "exclusive_neighborhood", label: "Kawasan Eksklusif", type: "checkbox", required: false },

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
