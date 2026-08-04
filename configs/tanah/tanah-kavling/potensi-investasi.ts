// configs/tanah/kavling/potensi-investasi.ts

const potensiInvestasi = {
  id: "potensi-investasi",
  title: "Potensi & Investasi",
  description: "Informasi potensi pengembangan dan nilai investasi tanah kavling.",

  fields: [
    {
      id: "suitable_for",
      label: "Cocok Untuk",
      type: "multiselect",
      required: false,
      options: [
        "Rumah Tinggal",
        "Kos-kosan",
        "Ruko / Usaha",
        "Gudang",
        "Kavling Investasi (Ditahan)",
      ],
    },

    {
      id: "nearby_development",
      label: "Dekat Pengembangan Infrastruktur Baru",
      type: "multiselect",
      required: false,
      options: [
        "Jalan Tol Baru",
        "Stasiun MRT/LRT/KRL Baru",
        "Kawasan Industri Baru",
        "Perumahan Baru Berkembang",
      ],
    },

    {
      id: "price_appreciation_potential",
      label: "Potensi Kenaikan Harga",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Jelaskan potensi kenaikan harga di kawasan ini...",
    },

    {
      id: "suitable_for_investment",
      label: "Cocok Untuk Investasi Jangka Panjang",
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

export default potensiInvestasi;
