// configs/hunian/kontrakan/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Keamanan",
  description: "Fasilitas keamanan rumah kontrakan.",

  fields: [
    { id: "security_24h", label: "Security 24 Jam (Komplek)", type: "checkbox", required: false },
    { id: "cctv", label: "CCTV", type: "checkbox", required: false },
    { id: "perimeter_fence", label: "Pagar Keliling", type: "checkbox", required: false },
    { id: "manual_door_lock", label: "Gembok / Kunci Manual", type: "checkbox", required: false },
    { id: "digital_lock", label: "Digital Lock", type: "checkbox", required: false },
    { id: "security_lighting", label: "Lampu Keamanan", type: "checkbox", required: false },
    { id: "smoke_detector", label: "Smoke Detector", type: "checkbox", required: false },
    { id: "fire_extinguisher", label: "APAR", type: "checkbox", required: false },
    { id: "neighborhood_watch", label: "Ronda Warga / Siskamling", type: "checkbox", required: false },
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
