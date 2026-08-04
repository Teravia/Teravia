// configs/komersial/office-space/fasilitas-gedung.ts

const fasilitasGedung = {
  id: "fasilitas-gedung",
  title: "Fasilitas Gedung",
  description: "Fasilitas bersama yang tersedia di gedung perkantoran.",

  fields: [
    { id: "main_lobby", label: "Lobby Utama", type: "checkbox", required: false },
    { id: "lift_count", label: "Jumlah Lift Penumpang", type: "number", required: false },
    { id: "service_lift", label: "Lift Barang / Servis", type: "checkbox", required: false },
    { id: "meeting_room_shared", label: "Meeting Room Bersama", type: "checkbox", required: false },
    { id: "auditorium", label: "Auditorium / Function Hall", type: "checkbox", required: false },
    { id: "cafeteria", label: "Cafeteria / Food Court", type: "checkbox", required: false },
    { id: "atm_center", label: "ATM Center", type: "checkbox", required: false },
    { id: "prayer_room", label: "Musholla / Ruang Ibadah", type: "checkbox", required: false },
    { id: "gym", label: "Gym / Fitness Center", type: "checkbox", required: false },
    { id: "rooftop_lounge", label: "Rooftop Lounge", type: "checkbox", required: false },
    { id: "coworking_area", label: "Coworking Area Bersama", type: "checkbox", required: false },
    { id: "smoking_area", label: "Smoking Area", type: "checkbox", required: false },
    { id: "clinic", label: "Klinik", type: "checkbox", required: false },
  ],
};

export default fasilitasGedung;
