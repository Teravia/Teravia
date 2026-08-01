// configs/hunian/apartemen/parkir.ts

const parkir = {
  id: "parkir",
  title: "Parkir",
  description: "Informasi parkir yang tersedia untuk unit apartemen.",

  fields: [
    {
      id: "parking_type",
      label: "Tipe Parkir",
      type: "select",
      required: false,
      options: [
        "Basement",
        "Podium",
        "Outdoor",
        "Valet",
      ],
    },

    {
      id: "parking_slot_count",
      label: "Jumlah Slot Parkir",
      type: "number",
      required: false,
    },

    {
      id: "parking_slot_number",
      label: "Nomor Slot Parkir",
      type: "text",
      required: false,
      placeholder: "Masukkan Nomor Slot Parkir",
    },

    {
      id: "motorcycle_parking",
      label: "Parkir Motor",
      type: "checkbox",
      required: false,
    },

    {
      id: "guest_parking",
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
      id: "automatic_gate",
      label: "Pintu Gerbang Otomatis",
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
      id: "parking_security",
      label: "Keamanan Parkir",
      type: "multiselect",
      required: false,
      options: [
        "CCTV",
        "Access Card",
        "Patroli Keamanan",
      ],
    },

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

