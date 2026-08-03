// configs/hunian/villa/investasi-sewa.ts

const investasiSewa = {
  id: "investasi-sewa",
  title: "Investasi & Sewa Wisata",
  description: "Informasi pengelolaan sewa dan potensi investasi villa.",

  fields: [
    {
      id: "managed_by_operator",
      label: "Dikelola Manajemen Villa / Property Management",
      type: "checkbox",
      required: false,
    },

    {
      id: "operator_name",
      label: "Nama Manajemen Pengelola",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Manajemen Pengelola",
    },

    {
      id: "current_rental_status",
      label: "Status Sewa Saat Ini",
      type: "select",
      required: false,
      options: [
        "Disewakan Harian/Mingguan",
        "Disewakan Bulanan/Tahunan",
        "Kosong",
        "Dihuni Sendiri",
      ],
    },

    {
      id: "price_per_night",
      label: "Harga Sewa per Malam",
      type: "currency",
      required: false,
    },

    {
      id: "price_per_week",
      label: "Harga Sewa per Minggu",
      type: "currency",
      required: false,
    },

    {
      id: "average_occupancy_rate",
      label: "Rata-Rata Tingkat Okupansi",
      type: "number",
      required: false,
      suffix: "%",
    },

    {
      id: "rental_yield_estimate",
      label: "Estimasi Yield Sewa per Tahun",
      type: "number",
      required: false,
      suffix: "%",
    },

    {
      id: "target_market",
      label: "Target Pasar",
      type: "multiselect",
      required: false,
      options: ["Turis Lokal", "Turis Asing", "Ekspatriat", "Digital Nomad"],
    },

    {
      id: "listed_on_ota",
      label: "Terdaftar di Platform OTA (Airbnb/Booking.com)",
      type: "checkbox",
      required: false,
    },

    {
      id: "investment_notes",
      label: "Catatan Investasi",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Investasi",
    },
  ],
};

export default investasiSewa;
