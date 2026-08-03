// configs/hunian/kost/fasilitas-kamar.ts

const fasilitasKamar = {
  id: "fasilitas-kamar",
  title: "Fasilitas Kamar",
  description: "Fasilitas yang tersedia di dalam kamar kost.",

  fields: [
    { id: "bed", label: "Tempat Tidur", type: "checkbox", required: false },
    { id: "mattress", label: "Kasur", type: "checkbox", required: false },
    { id: "wardrobe", label: "Lemari Pakaian", type: "checkbox", required: false },
    { id: "study_desk", label: "Meja Belajar / Kerja", type: "checkbox", required: false },
    { id: "chair", label: "Kursi", type: "checkbox", required: false },
    { id: "ac", label: "AC", type: "checkbox", required: false },
    { id: "ceiling_fan", label: "Kipas Angin", type: "checkbox", required: false },
    { id: "private_wifi", label: "WiFi Dalam Kamar", type: "checkbox", required: false },
    { id: "tv", label: "TV", type: "checkbox", required: false },
    { id: "water_heater", label: "Water Heater", type: "checkbox", required: false },
    { id: "private_bathroom", label: "Kamar Mandi Dalam", type: "checkbox", required: false },
    { id: "mirror", label: "Cermin", type: "checkbox", required: false },
    { id: "curtain", label: "Gorden", type: "checkbox", required: false },
    { id: "private_balcony", label: "Balkon Pribadi", type: "checkbox", required: false },
  ],
};

export default fasilitasKamar;
