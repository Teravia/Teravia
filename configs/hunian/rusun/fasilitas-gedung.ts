// configs/hunian/rusun/fasilitas-gedung.ts

const fasilitasGedung = {
  id: "fasilitas-gedung",
  title: "Fasilitas Gedung",
  description: "Fasilitas bersama yang tersedia di gedung rusun.",

  fields: [
    { id: "lift_count", label: "Jumlah Lift", type: "number", required: false },
    { id: "communal_drying_area", label: "Area Jemuran Bersama", type: "checkbox", required: false },
    { id: "multipurpose_hall", label: "Ruang Serbaguna", type: "checkbox", required: false },
    { id: "prayer_room", label: "Musholla / Ruang Ibadah", type: "checkbox", required: false },
    { id: "mini_market", label: "Minimarket / Koperasi", type: "checkbox", required: false },
    { id: "playground", label: "Taman Bermain Anak", type: "checkbox", required: false },
    { id: "communal_garden", label: "Taman Bersama", type: "checkbox", required: false },
    { id: "waste_management", label: "Pengelolaan Sampah Terpadu", type: "checkbox", required: false },
    { id: "posyandu", label: "Posyandu / Klinik Kesehatan", type: "checkbox", required: false },
  ],
};

export default fasilitasGedung;
