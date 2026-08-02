// configs/hunian/penthouse/fasilitas-eksklusif.ts

const fasilitasEksklusif = {
  id: "fasilitas-eksklusif",
  title: "Fasilitas Eksklusif",
  description: "Fasilitas premium yang menjadi ciri khas unit penthouse.",

  fields: [
    { id: "private_pool", label: "Kolam Renang Pribadi", type: "checkbox", required: false },
    { id: "private_rooftop_terrace", label: "Rooftop Terrace Pribadi", type: "checkbox", required: false },
    { id: "private_garden", label: "Taman Pribadi", type: "checkbox", required: false },
    { id: "outdoor_jacuzzi", label: "Jacuzzi Outdoor", type: "checkbox", required: false },
    { id: "private_elevator_lobby", label: "Lobby Lift Pribadi", type: "checkbox", required: false },
    { id: "private_sky_lounge", label: "Sky Lounge Pribadi", type: "checkbox", required: false },
    { id: "home_theater", label: "Home Theater", type: "checkbox", required: false },
    { id: "wine_cellar", label: "Wine Cellar", type: "checkbox", required: false },
    { id: "private_gym", label: "Gym Pribadi", type: "checkbox", required: false },
    { id: "private_sauna", label: "Sauna Pribadi", type: "checkbox", required: false },
    { id: "bbq_deck", label: "BBQ Deck", type: "checkbox", required: false },
    { id: "outdoor_dining_area", label: "Outdoor Dining Area", type: "checkbox", required: false },
    { id: "full_smart_home_package", label: "Smart Home Full Package", type: "checkbox", required: false },
    { id: "concierge_service", label: "Concierge / Butler Service", type: "checkbox", required: false },
    { id: "private_guest_suite", label: "Guest Suite Terpisah", type: "checkbox", required: false },
    {
      id: "exclusive_notes",
      label: "Catatan Fasilitas Eksklusif",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Fasilitas Eksklusif",
    },
  ],
};

export default fasilitasEksklusif;
