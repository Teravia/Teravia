// configs/hunian/kost/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Keamanan",
  description: "Fasilitas keamanan pada gedung kost.",

  fields: [
    { id: "security_guard", label: "Penjaga Kost / Ibu Kost Standby", type: "checkbox", required: false },
    { id: "cctv", label: "CCTV", type: "checkbox", required: false },
    { id: "access_card", label: "Access Card / Fingerprint", type: "checkbox", required: false },
    { id: "manual_door_lock", label: "Kunci Manual Pribadi", type: "checkbox", required: false },
    { id: "main_gate_lock", label: "Pintu Gerbang Terkunci Malam Hari", type: "checkbox", required: false },
    { id: "fire_extinguisher", label: "APAR", type: "checkbox", required: false },
    { id: "smoke_detector", label: "Smoke Detector", type: "checkbox", required: false },
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
