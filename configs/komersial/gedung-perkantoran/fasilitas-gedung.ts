// configs/komersial/gedung-perkantoran/fasilitas-gedung.ts

const fasilitasGedung = {
  id: "fasilitas-gedung",
  title: "Fasilitas Gedung",
  description: "Fasilitas penunjang yang tersedia di dalam area gedung perkantoran.",

  fields: [
    {
      id: "building_facilities",
      label: "Fasilitas Utama Gedung",
      type: "checkbox_group",
      required: false,
      options: [
        "Lobby / Resepsionis Utama",
        "Lift Penumpang (Passenger Lift)",
        "Lift Barang (Service/Freight Lift)",
        "Lift Eksekutif (VIP Lift)",
        "Eskalator",
        "Kantin / Food Court",
        "Mini Market / Convenience Store",
        "ATM Center",
        "Musholla / Masjid",
        "Ruang Helipad",
        "Area Merokok (Smoking Area)",
        "Ballroom / Auditorium",
        "Ruang Serbaguna (Function Room)",
        "Fasilitas Olahraga / Gym",
        "Klinik Kesehatan",
      ],
    },

    {
      id: "accessibility_features",
      label: "Aksesibilitas & Disabilitas",
      type: "checkbox_group",
      required: false,
      options: [
        "Ramp Kursi Roda",
        "Toilet Disabilitas",
        "Lift Khusus Disabilitas",
        "Jalur Pemandu (Guiding Block)",
      ],
    },

    {
      id: "loading_zone",
      label: "Fasilitas Loading Dock",
      type: "select",
      required: false,
      options: [
        "Tersedia (Loading Dock Khusus)",
        "Tersedia (Area Muat Bersama)",
        "Tidak Tersedia",
      ],
    },
  ],
};

export default fasilitasGedung;
