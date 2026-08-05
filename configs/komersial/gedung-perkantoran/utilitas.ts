// configs/komersial/gedung-perkantoran/utilitas.ts

const utilitas = {
  id: "utilitas",
  title: "Utilitas & Infrastruktur",
  description: "Rincian sumber daya, sistem air, listrik, dan konektivitas digital pendukung operasional gedung perkantoran.",

  fields: [
    {
      id: "water_source",
      label: "Sumber Air Utama",
      type: "checkbox_group",
      required: false,
      options: [
        "PDAM",
        "Sumur Bor / Deep Well (Dengan Izin Resmi)",
        "STP (Sewage Treatment Plant) / Daur Ulang Air",
      ],
    },

    {
      id: "water_reservoir_capacity",
      label: "Kapasitas Tangki Penampungan Air / Ground Water Tank (Liter)",
      type: "number",
      required: false,
      placeholder: "Contoh: 50000",
    },

    {
      id: "internet_infrastructure",
      label: "Infrastruktur Internet & Fiber Optik",
      type: "checkbox_group",
      required: false,
      options: [
        "Fiber Optic Backbone",
        "High-Speed Dedicated Line (Up to 1 Gbps)",
        "Multi-ISP Redundancy (Jaringan Cadangan)",
        "Wi-Fi / Public Hotspot di Area Publik & Lobby",
      ],
    },

    {
      id: "cellular_signal_booster",
      label: "Penguat Sinyal Seluler / In-Building Coverage (IBC)",
      type: "select",
      required: false,
      options: [
        "Tersedia (Semua Operator Utama)",
        "Tersedia (Operator Terbatas)",
        "Belum Tersedia",
      ],
    },

    {
      id: "power_substation",
      label: "Sumber / Layanan Listrik PLN",
      type: "select",
      required: false,
      options: [
        "Layanan Premium (Dual Power Source / Prioritas Bebas Padam)",
        "Layanan Regular Industri / Komersial",
      ],
    },

    {
      id: "waste_management_system",
      label: "Sistem Pengolahan & Pembuangan Limbah",
      type: "checkbox_group",
      required: false,
      options: [
        "STP (Sewage Treatment Plant) Mandiri",
        "TPS B3 (Tempat Penampungan Sementara Bahan Berbahaya & Beracun)",
        "Layanan Pengangkutan Sampah Mandiri / Vendor Khusus",
      ],
    },
  ],
};

export default utilitas;
