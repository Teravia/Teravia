// configs/komersial/toko-kios/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Keamanan",
  description: "Fasilitas keamanan toko/kios.",

  fields: [
    { id: "security_24h", label: "Security 24 Jam", type: "checkbox", required: false },
    { id: "cctv", label: "CCTV", type: "checkbox", required: false },
    { id: "roller_door_lock", label: "Kunci Rolling Door", type: "checkbox", required: false },
    { id: "alarm_system", label: "Alarm Keamanan", type: "checkbox", required: false },
    { id: "fire_extinguisher", label: "APAR", type: "checkbox", required: false },
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
