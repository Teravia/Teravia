// configs/hunian/penthouse/parkir.ts

const parkir = {
  id: "parkir",
  title: "Parkir",
  description: "Informasi parkir eksklusif untuk unit penthouse.",

  fields: [
    {
      id: "parking_type",
      label: "Tipe Parkir",
      type: "select",
      required: false,
      options: ["Basement", "Podium", "Reserved VIP", "Valet"],
    },
    { id: "parking_slot_count", label: "Jumlah Slot Parkir", type: "number", required: false },
    { id: "reserved_parking", label: "Slot Parkir Khusus / Reserved", type: "checkbox", required: false },
    { id: "covered_parking", label: "Parkir Beratap", type: "checkbox", required: false },
    { id: "ev_charging", label: "EV Charging", type: "checkbox", required: false },
    { id: "valet_available", label: "Layanan Valet Tersedia", type: "checkbox", required: false },
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
