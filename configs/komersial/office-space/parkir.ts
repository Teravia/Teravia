// configs/komersial/office-space/parkir.ts

const parkir = {
  id: "parkir",
  title: "Parkir",
  description: "Informasi parkir yang tersedia untuk unit office space.",

  fields: [
    {
      id: "parking_type",
      label: "Tipe Parkir",
      type: "select",
      required: false,
      options: ["Basement", "Podium", "Outdoor"],
    },
    {
      id: "parking_ratio",
      label: "Rasio Parkir",
      type: "text",
      required: false,
      placeholder: "Contoh: 1:100 (1 slot per 100 m2)",
    },
    { id: "reserved_parking_slots", label: "Jumlah Slot Parkir Reserved", type: "number", required: false },
    { id: "guest_parking", label: "Area Parkir Tamu", type: "checkbox", required: false },
    { id: "ev_charging", label: "EV Charging", type: "checkbox", required: false },
    {
      id: "parking_notes",
      label: "Catatan Parkir",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Parkir",
    },
  ],
};

export default parkir;
