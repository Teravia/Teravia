// configs/hunian/villa/fasilitas-eksklusif.ts

const fasilitasEksklusif = {
  id: "fasilitas-eksklusif",
  title: "Fasilitas Eksklusif",
  description: "Fasilitas premium yang menjadi ciri khas villa.",

  fields: [
    { id: "private_pool", label: "Kolam Renang Pribadi", type: "checkbox", required: true },
    { id: "pool_size", label: "Ukuran Kolam Renang", type: "number", required: false, suffix: "m2" },
    { id: "infinity_pool", label: "Infinity Pool", type: "checkbox", required: false },
    { id: "outdoor_jacuzzi", label: "Jacuzzi Outdoor", type: "checkbox", required: false },
    { id: "gazebo", label: "Gazebo / Bale Bengong", type: "checkbox", required: false },
    { id: "outdoor_shower", label: "Outdoor Shower", type: "checkbox", required: false },
    { id: "bbq_area", label: "Area BBQ", type: "checkbox", required: false },
    { id: "outdoor_dining_area", label: "Outdoor Dining Area", type: "checkbox", required: false },
    { id: "private_garden", label: "Taman Pribadi", type: "checkbox", required: false },
    { id: "rooftop_deck", label: "Rooftop Deck", type: "checkbox", required: false },
    { id: "home_theater", label: "Home Theater", type: "checkbox", required: false },
    { id: "yoga_deck", label: "Yoga Deck", type: "checkbox", required: false },
    { id: "private_gym", label: "Gym Pribadi", type: "checkbox", required: false },
    { id: "koi_pond", label: "Kolam Ikan Koi", type: "checkbox", required: false },
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
