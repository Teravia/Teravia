// configs/komersial/gedung-perkantoran/biaya-rutin.ts

const biayaRutin = {
  id: "biaya-rutin",
  title: "Biaya Rutin & Operasional",
  description: "Rincian biaya pengelolaan, pemeliharaan, dan operasional rutin gedung perkantoran.",

  fields: [
    {
      id: "service_charge",
      label: "Service Charge / Maintenance Fee (per m²/bulan)",
      type: "number",
      required: false,
      placeholder: "Masukkan besaran biaya service charge...",
    },

    {
      id: "sinking_fund",
      label: "Sinking Fund (per m²/bulan)",
      type: "number",
      required: false,
      placeholder: "Masukkan besaran sinking fund...",
    },

    {
      id: "parking_rates",
      label: "Tarif Parkir (Bulan / Langganan)",
      type: "checkbox_group",
      required: false,
      options: [
        "Parkir Mobil Unreserved (Langganan)",
        "Parkir Mobil Reserved (VIP / Berlangganan Khusus)",
        "Parkir Motor (Langganan)",
        "Gratis Alokasi Parkir untuk Tenant Utama",
      ],
    },

    {
      id: "utility_billing",
      label: "Sistem Pembayaran Utilitas (Listrik & Air)",
      type: "select",
      required: false,
      options: [
        "Sesuai Pemakaian Sub-Meter (Token/Meteran Mandiri)",
        "Incorporate dalam Service Charge",
        "Pro-rata Berdasarkan Luas Area Usaha",
      ],
    },

    {
      id: "overtime_charge",
      label: "Tarif Overtime AC / Listrik (per jam)",
      type: "number",
      required: false,
      placeholder: "Masukkan biaya lembur AC/listrik jika ada...",
    },

    {
      id: "other_operational_costs",
      label: "Biaya Tambahan Lainnya",
      type: "checkbox_group",
      required: false,
      options: [
        "Biaya Kebersihan & Pengangkutan Sampah",
        "Biaya Keamanan Terpadu",
        "Biaya Perawatan Fasilitas Umum & Taman",
        "Asuransi Gedung",
      ],
    },
  ],
};

export default biayaRutin;
