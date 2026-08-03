// configs/komersial/ruko-rukan/fasilitas.ts

const fasilitas = {
  id: "fasilitas",
  title: "Fasilitas",
  description: "Fasilitas yang tersedia di dalam ruko/rukan.",

  fields: [
    { id: "ac", label: "AC", type: "number", required: false, suffix: "Unit" },
    { id: "central_ac", label: "AC Sentral", type: "checkbox", required: false },
    { id: "partition_wall", label: "Partisi Ruangan", type: "checkbox", required: false },
    { id: "roller_door", label: "Rolling Door", type: "checkbox", required: false },
    { id: "glass_facade", label: "Fasad Kaca", type: "checkbox", required: false },
    { id: "toilet", label: "Toilet", type: "checkbox", required: false },
    { id: "wifi", label: "Instalasi Kabel Data / Internet", type: "checkbox", required: false },
    { id: "signage_space", label: "Ruang Papan Nama / Signage", type: "checkbox", required: false },
    { id: "elevator", label: "Lift", type: "checkbox", required: false },
    { id: "backup_generator", label: "Genset Cadangan", type: "checkbox", required: false },
    {
      id: "fire_protection",
      label: "Sistem Proteksi Kebakaran",
      type: "multiselect",
      required: false,
      options: ["APAR", "Sprinkler", "Hydrant", "Fire Alarm"],
    },
  ],
};

export default fasilitas;
