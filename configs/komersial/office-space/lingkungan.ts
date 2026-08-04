// configs/komersial/office-space/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan",
  description: "Lokasi office space relatif terhadap kawasan bisnis sekitar.",

  fields: [
    { id: "near_cbd", label: "Dekat CBD", type: "checkbox", required: false },
    { id: "near_toll_gate", label: "Dekat Gerbang Tol", type: "checkbox", required: false },
    { id: "near_mrt", label: "Dekat MRT", type: "checkbox", required: false },
    { id: "near_commuter_line", label: "Dekat Stasiun KRL", type: "checkbox", required: false },
    { id: "near_bus_stop", label: "Dekat Halte Bus / TransJakarta", type: "checkbox", required: false },
    { id: "near_airport", label: "Dekat Bandara", type: "checkbox", required: false },
    { id: "near_hotel", label: "Dekat Hotel Bisnis", type: "checkbox", required: false },
    { id: "near_bank", label: "Dekat Bank", type: "checkbox", required: false },
    { id: "near_mall", label: "Dekat Mall / Pusat Perbelanjaan", type: "checkbox", required: false },
    { id: "near_restaurant", label: "Dekat Restoran / Food Court", type: "checkbox", required: false },
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
