// configs/komersial/toko-kios/fasilitas.ts

const fasilitas = {
  id: "fasilitas",
  title: "Fasilitas",
  description: "Fasilitas yang tersedia di dalam unit toko/kios.",

  fields: [
    { id: "ac", label: "AC", type: "number", required: false, suffix: "Unit" },
    { id: "central_ac", label: "AC Sentral (Ikut Mall)", type: "checkbox", required: false },
    { id: "roller_door", label: "Rolling Door", type: "checkbox", required: false },
    { id: "signage_space", label: "Ruang Papan Nama / Signage", type: "checkbox", required: false },
    { id: "data_cabling", label: "Instalasi Kabel Data / Internet", type: "checkbox", required: false },
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
