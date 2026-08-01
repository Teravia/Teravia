// configs/hunian/rumah/garasi-parkir.ts

const garasiParkir = {
  id: "garasi-parkir",
  title: "Garasi & Parkir",
  description: "Informasi garasi, carport, dan area parkir.",

  fields: [
    {
      id: "garage",
      label: "Garasi",
      type: "checkbox",
      required: false,
    },
    {
      id: "garage_capacity",
      label: "Kapasitas Garasi",
      type: "number",
      required: false,
      suffix: "Mobil",
    },
    {
      id: "carport",
      label: "Carport",
      type: "checkbox",
      required: false,
    },
    {
      id: "carport_capacity",
      label: "Kapasitas Carport",
      type: "number",
      required: false,
      suffix: "Mobil",
    },
    {
      id: "motorcycle_capacity",
      label: "Kapasitas Parkir Motor",
      type: "number",
      required: false,
      suffix: "Motor",
    },
    {
      id: "visitor_parking",
      label: "Area Parkir Tamu",
      type: "checkbox",
      required: false,
    },
    {
      id: "covered_parking",
      label: "Parkir Beratap",
      type: "checkbox",
      required: false,
    },
    {
      id: "open_parking",
      label: "Parkir Terbuka",
      type: "checkbox",
      required: false,
    },
    {
      id: "electric_gate",
      label: "Pintu Garasi Otomatis",
      type: "checkbox",
      required: false,
    },
    {
      id: "ev_charging",
      label: "EV Charging",
      type: "checkbox",
      required: false,
    },
    {
      id: "garage_floor",
      label: "Material Lantai Garasi",
      type: "select",
      required: false,
      options: [
        "Keramik",
        "Granit",
        "Beton",
        "Paving Block",
        "Epoxy",
        "Lainnya",
      ],
    },
    {
      id: "garage_roof",
      label: "Kanopi Garasi",
      type: "checkbox",
      required: false,
    },
    {
      id: "garage_security",
      label: "Keamanan Garasi",
      type: "multiselect",
      required: false,
      options: [
        "CCTV",
        "Smart Lock",
        "Rolling Door",
        "Access Card",
      ],
    },
    {
      id: "bike_parking",
      label: "Parkir Sepeda",
      type: "checkbox",
      required: false,
    },
    {
      id: "parking_notes",
      label: "Catatan Garasi & Parkir",
      type: "textarea",
      required: false,
      rows: 3,
      maxLength: 500,
    },
  ],
};

export default garasiParkir;
