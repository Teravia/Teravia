// configs/hunian/cluster/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Keamanan",
  description: "Fasilitas keamanan cluster dan unit rumah.",

  fields: [
    { id: "security_24h", label: "Security 24 Jam", type: "checkbox", required: false },
    { id: "security_post", label: "Pos Keamanan", type: "checkbox", required: false },
    { id: "security_patrol", label: "Patroli Keamanan", type: "checkbox", required: false },
    { id: "cctv", label: "CCTV", type: "checkbox", required: false },
    { id: "smart_cctv", label: "Smart CCTV", type: "checkbox", required: false },
    { id: "access_card", label: "Access Card", type: "checkbox", required: false },
    { id: "digital_lock", label: "Digital Lock", type: "checkbox", required: false },
    { id: "smart_door_lock", label: "Smart Door Lock", type: "checkbox", required: false },
    { id: "fingerprint_access", label: "Fingerprint Access", type: "checkbox", required: false },
    { id: "face_recognition", label: "Face Recognition", type: "checkbox", required: false },
    { id: "video_doorbell", label: "Video Doorbell", type: "checkbox", required: false },
    { id: "intercom", label: "Interkom", type: "checkbox", required: false },
    { id: "alarm_system", label: "Alarm Keamanan", type: "checkbox", required: false },
    { id: "door_sensor", label: "Sensor Pintu", type: "checkbox", required: false },
    { id: "window_sensor", label: "Sensor Jendela", type: "checkbox", required: false },
    { id: "motion_sensor", label: "Motion Sensor", type: "checkbox", required: false },
    { id: "electric_fence", label: "Pagar Listrik", type: "checkbox", required: false },
    { id: "perimeter_fence", label: "Pagar Keliling", type: "checkbox", required: false },
    { id: "security_lighting", label: "Lampu Keamanan", type: "checkbox", required: false },
    { id: "panic_button", label: "Panic Button", type: "checkbox", required: false },
    { id: "evacuation_route", label: "Jalur Evakuasi", type: "checkbox", required: false },
    { id: "smoke_detector", label: "Smoke Detector", type: "checkbox", required: false },
    { id: "heat_detector", label: "Heat Detector", type: "checkbox", required: false },
    { id: "fire_alarm", label: "Fire Alarm", type: "checkbox", required: false },
    { id: "sprinkler", label: "Sprinkler", type: "checkbox", required: false },
    { id: "hydrant", label: "Hydrant", type: "checkbox", required: false },
    { id: "apar", label: "APAR", type: "checkbox", required: false },
    { id: "lightning_rod", label: "Penangkal Petir", type: "checkbox", required: false },
    { id: "backup_generator", label: "Genset Darurat", type: "checkbox", required: false },
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
