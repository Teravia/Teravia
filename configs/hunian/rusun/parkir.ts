// configs/hunian/rusun/parkir.ts

const parkir = {
  id: "parkir",
  title: "Parkir",
  description: "Informasi parkir yang tersedia di gedung rusun.",

  fields: [
    { id: "motorcycle_parking", label: "Parkir Motor", type: "checkbox", required: false },
    { id: "car_parking", label: "Parkir Mobil", type: "checkbox", required: false },
    { id: "covered_parking", label: "Parkir Beratap", type: "checkbox", required: false },
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
