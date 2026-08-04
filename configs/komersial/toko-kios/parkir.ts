// configs/komersial/toko-kios/parkir.ts

const parkir = {
  id: "parkir",
  title: "Parkir",
  description: "Informasi parkir yang tersedia untuk unit toko/kios.",

  fields: [
    { id: "front_parking_area", label: "Area Parkir Depan (Jika Berdiri Sendiri)", type: "checkbox", required: false },
    { id: "shared_mall_parking", label: "Parkir Bersama Mall/Pertokoan", type: "checkbox", required: false },
    { id: "car_parking_capacity", label: "Kapasitas Parkir Mobil", type: "number", required: false, suffix: "Mobil" },
    { id: "motorcycle_parking_capacity", label: "Kapasitas Parkir Motor", type: "number", required: false, suffix: "Motor" },
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
