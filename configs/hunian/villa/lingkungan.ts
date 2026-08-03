// configs/hunian/villa/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi villa relatif terhadap fasilitas dan daya tarik wisata sekitar.",

  fields: [
    { id: "near_beach", label: "Dekat Pantai", type: "checkbox", required: false },
    { id: "near_rice_field", label: "Dekat Sawah / Rice Field", type: "checkbox", required: false },
    { id: "near_tourist_center", label: "Dekat Pusat Wisata", type: "checkbox", required: false },
    { id: "near_restaurant_cafe", label: "Dekat Restoran / Cafe", type: "checkbox", required: false },
    { id: "near_hospital", label: "Dekat Rumah Sakit", type: "checkbox", required: false },
    { id: "near_supermarket", label: "Dekat Supermarket", type: "checkbox", required: false },
    { id: "near_airport", label: "Dekat Bandara", type: "checkbox", required: false },
    { id: "near_golf_course", label: "Dekat Lapangan Golf", type: "checkbox", required: false },
    { id: "near_temple", label: "Dekat Pura / Tempat Ibadah", type: "checkbox", required: false },
    { id: "quiet_environment", label: "Lingkungan Tenang", type: "checkbox", required: false },
    { id: "flood_free", label: "Bebas Banjir", type: "checkbox", required: false },
    { id: "gated_community", label: "Kawasan Berpagar / Estate", type: "checkbox", required: false },

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
