// configs/hunian/rusun/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Keamanan",
  description: "Fasilitas keamanan gedung dan unit rusun.",

  fields: [
    { id: "security_post", label: "Pos Keamanan", type: "checkbox", required: false },
    { id: "cctv", label: "CCTV", type: "checkbox", required: false },
    { id: "manual_door_lock", label: "Kunci Manual", type: "checkbox", required: false },
    { id: "fire_extinguisher", label: "APAR", type: "checkbox", required: false },
    { id: "fire_hydrant", label: "Hydrant", type: "checkbox", required: false },
    { id: "emergency_stairs", label: "Tangga Darurat", type: "checkbox", required: false },
    {
      id: "security_notes",
      label: "Catatan Keamanan",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Keamanan",
    },
  ],
};

export default keamanan;
