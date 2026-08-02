// configs/hunian/penthouse/fasilitas-gedung.ts

const fasilitasGedung = {
  id: "fasilitas-gedung",
  title: "Fasilitas Gedung",
  description: "Fasilitas bersama yang tersedia di gedung.",

  fields: [
    { id: "swimming_pool", label: "Kolam Renang", type: "checkbox", required: false },
    { id: "gym", label: "Fitness Center / Gym", type: "checkbox", required: false },
    { id: "sky_lounge", label: "Sky Lounge / Rooftop", type: "checkbox", required: false },
    { id: "function_hall", label: "Function Hall / Ballroom", type: "checkbox", required: false },
    { id: "lobby_lounge", label: "Lobby Lounge", type: "checkbox", required: false },
    { id: "coworking_space", label: "Coworking Space", type: "checkbox", required: false },
    { id: "spa", label: "Spa", type: "checkbox", required: false },
    { id: "sauna", label: "Sauna", type: "checkbox", required: false },
    { id: "garden", label: "Taman Gedung", type: "checkbox", required: false },
    { id: "prayer_room", label: "Musholla / Ruang Ibadah", type: "checkbox", required: false },
    { id: "concierge_desk", label: "Concierge Desk", type: "checkbox", required: false },
    { id: "valet_service", label: "Valet Service", type: "checkbox", required: false },
    { id: "lift_count", label: "Jumlah Lift Penumpang", type: "number", required: false },
    { id: "service_lift", label: "Lift Barang / Servis", type: "checkbox", required: false },
  ],
};

export default fasilitasGedung;
