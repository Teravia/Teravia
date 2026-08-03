// configs/hunian/kost/fasilitas-bersama.ts

const fasilitasBersama = {
  id: "fasilitas-bersama",
  title: "Fasilitas Bersama",
  description: "Fasilitas bersama yang bisa digunakan seluruh penghuni kost.",

  fields: [
    { id: "shared_kitchen", label: "Dapur Bersama", type: "checkbox", required: false },
    { id: "shared_living_room", label: "Ruang Tamu Bersama", type: "checkbox", required: false },
    { id: "shared_wifi", label: "WiFi Area Bersama", type: "checkbox", required: false },
    { id: "shared_washing_machine", label: "Mesin Cuci Bersama", type: "checkbox", required: false },
    { id: "drying_area", label: "Area Jemuran", type: "checkbox", required: false },
    { id: "dispenser", label: "Dispenser Air", type: "checkbox", required: false },
    { id: "dining_area", label: "Ruang Makan Bersama", type: "checkbox", required: false },
    { id: "prayer_room", label: "Musholla / Ruang Ibadah", type: "checkbox", required: false },
    { id: "rooftop_area", label: "Rooftop / Area Santai", type: "checkbox", required: false },
    { id: "cctv_common_area", label: "CCTV Area Bersama", type: "checkbox", required: false },
    { id: "laundry_service", label: "Jasa Laundry", type: "checkbox", required: false },
    { id: "cleaning_service", label: "Cleaning Service Berkala", type: "checkbox", required: false },
    { id: "parking_area", label: "Area Parkir", type: "checkbox", required: false },
    { id: "vending_machine", label: "Vending Machine", type: "checkbox", required: false },
  ],
};

export default fasilitasBersama;
