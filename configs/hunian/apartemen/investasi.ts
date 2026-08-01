// configs/hunian/apartemen/investasi.ts

const investasi = {
  id: "investasi",
  title: "Investasi",
  description: "Informasi potensi investasi unit apartemen.",

  fields: [
    {
      id: "current_rental_status",
      label: "Status Sewa Saat Ini",
      type: "select",
      required: false,
      options: [
        "Disewakan",
        "Kosong",
        "Dihuni Sendiri",
      ],
    },

    {
      id: "rental_yield_estimate",
      label: "Estimasi Yield Sewa per Tahun",
      type: "number",
      required: false,
      suffix: "%",
    },

    {
      id: "monthly_rental_income",
      label: "Pendapatan Sewa Bulanan",
      type: "currency",
      required: false,
    },

    {
      id: "managed_by_operator",
      label: "Dikelola Operator / Manajemen Sewa",
      type: "checkbox",
      required: false,
    },

    {
      id: "suitable_for_investment",
      label: "Cocok Untuk Investasi",
      type: "checkbox",
      required: false,
    },

    {
      id: "rental_history",
      label: "Riwayat Sewa",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Riwayat Sewa",
    },

    {
      id: "capital_gain_potential",
      label: "Potensi Kenaikan Harga",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Jelaskan potensi kenaikan harga di kawasan ini...",
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

export default investasi;

