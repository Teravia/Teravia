// configs/komersial/ruko-rukan/parkir.ts

const parkir = {
  id: "parkir",
  title: "Parkir",
  description: "Informasi parkir yang tersedia di ruko/rukan.",

  fields: [
    { id: "front_parking_area", label: "Area Parkir Depan", type: "checkbox", required: false },
    { id: "car_parking_capacity", label: "Kapasitas Parkir Mobil", type: "number", required: false, suffix: "Mobil" },
    { id: "motorcycle_parking_capacity", label: "Kapasitas Parkir Motor", type: "number", required: false, suffix: "Motor" },
    { id: "shared_parking_area", label: "Parkir Bersama Komplek", type: "checkbox", required: false },
    { id: "customer_parking", label: "Parkir Khusus Pelanggan", type: "checkbox", required: false },
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
