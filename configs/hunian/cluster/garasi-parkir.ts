// configs/hunian/cluster/garasi-parkir.ts

const garasiParkir = {
  id: "garasi-parkir",
  title: "Garasi & Parkir",
  description: "Informasi garasi dan parkir milik unit rumah.",

  fields: [
    { id: "garage", label: "Garasi", type: "checkbox", required: false },
    { id: "garage_capacity", label: "Kapasitas Garasi", type: "number", required: false, suffix: "Mobil" },
    { id: "carport", label: "Carport", type: "checkbox", required: false },
    { id: "carport_capacity", label: "Kapasitas Carport", type: "number", required: false, suffix: "Mobil" },
    { id: "motorcycle_parking_capacity", label: "Kapasitas Parkir Motor", type: "number", required: false, suffix: "Motor" },
    { id: "guest_parking_area", label: "Area Parkir Tamu", type: "checkbox", required: false },
    { id: "covered_parking", label: "Parkir Beratap", type: "checkbox", required: false },
    { id: "open_parking", label: "Parkir Terbuka", type: "checkbox", required: false },
    { id: "automatic_garage_door", label: "Pintu Garasi Otomatis", type: "checkbox", required: false },
    { id: "ev_charging", label: "EV Charging", type: "checkbox", required: false },
    {
      id: "garage_floor_material",
      label: "Material Lantai Garasi",
      type: "select",
      required: false,
      options: ["Keramik", "Semen Aci", "Coating Epoxy", "Paving Block"],
    },
    { id: "garage_canopy", label: "Kanopi Garasi", type: "checkbox", required: false },
    { id: "garage_security", label: "Keamanan Garasi", type: "checkbox", required: false },
    { id: "bicycle_parking", label: "Parkir Sepeda", type: "checkbox", required: false },
    {
      id: "parking_notes",
      label: "Catatan Garasi & Parkir",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Garasi & Parkir",
    },
  ],
};

export default garasiParkir;
