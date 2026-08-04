// configs/komersial/office-space/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Keamanan",
  description: "Fasilitas keamanan gedung dan unit office space.",

  fields: [
    { id: "security_24h", label: "Security 24 Jam", type: "checkbox", required: false },
    { id: "cctv", label: "CCTV", type: "checkbox", required: false },
    { id: "access_card", label: "Access Card", type: "checkbox", required: false },
    { id: "fingerprint_access", label: "Fingerprint Access", type: "checkbox", required: false },
    { id: "visitor_management", label: "Sistem Manajemen Tamu", type: "checkbox", required: false },
    { id: "smoke_detector", label: "Smoke Detector", type: "checkbox", required: false },
    { id: "fire_alarm", label: "Fire Alarm", type: "checkbox", required: false },
    { id: "sprinkler", label: "Sprinkler", type: "checkbox", required: false },
    { id: "hydrant", label: "Hydrant", type: "checkbox", required: false },
    { id: "apar", label: "APAR", type: "checkbox", required: false },
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
