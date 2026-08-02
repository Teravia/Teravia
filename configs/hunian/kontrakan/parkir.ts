// configs/hunian/kontrakan/parkir.ts

const parkir = {
  id: "parkir",
  title: "Parkir",
  description: "Informasi parkir yang tersedia di rumah kontrakan.",

  fields: [
    { id: "garage", label: "Garasi", type: "checkbox", required: false },
    { id: "carport", label: "Carport", type: "checkbox", required: false },
    { id: "car_parking_capacity", label: "Kapasitas Parkir Mobil", type: "number", required: false, suffix: "Mobil" },
    { id: "motorcycle_parking_capacity", label: "Kapasitas Parkir Motor", type: "number", required: false, suffix: "Motor" },
    { id: "covered_parking", label: "Parkir Beratap", type: "checkbox", required: false },
    { id: "shared_parking", label: "Parkir Bersama (Gang/Komplek)", type: "checkbox", required: false },
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
