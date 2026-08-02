// configs/hunian/penthouse/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Keamanan",
  description: "Fasilitas keamanan pada gedung dan unit penthouse.",

  fields: [
    { id: "security_24h", label: "Security 24 Jam", type: "checkbox", required: false },
    { id: "one_gate_system", label: "One Gate System", type: "checkbox", required: false },
    { id: "cctv", label: "CCTV", type: "checkbox", required: false },
    { id: "smart_cctv", label: "Smart CCTV", type: "checkbox", required: false },
    { id: "access_card", label: "Access Card", type: "checkbox", required: false },
    { id: "smart_door_lock", label: "Smart Door Lock", type: "checkbox", required: false },
    { id: "fingerprint_access", label: "Fingerprint Access", type: "checkbox", required: false },
    { id: "face_recognition", label: "Face Recognition", type: "checkbox", required: false },
    { id: "private_security_post", label: "Pos Keamanan Khusus Lantai Atas", type: "checkbox", required: false },
    { id: "video_doorbell", label: "Video Doorbell", type: "checkbox", required: false },
    { id: "panic_button", label: "Panic Button", type: "checkbox", required: false },
    { id: "smoke_detector", label: "Smoke Detector", type: "checkbox", required: false },
    { id: "fire_alarm", label: "Fire Alarm", type: "checkbox", required: false },
    { id: "sprinkler", label: "Sprinkler", type: "checkbox", required: false },
    { id: "hydrant", label: "Hydrant", type: "checkbox", required: false },
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
