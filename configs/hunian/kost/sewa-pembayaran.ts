// configs/hunian/kost/sewa-pembayaran.ts

const sewaPembayaran = {
  id: "sewa-pembayaran",
  title: "Sewa & Pembayaran",
  description: "Ketentuan sewa dan pembayaran kost.",

  fields: [
    {
      id: "minimum_stay",
      label: "Minimal Masa Sewa",
      type: "select",
      required: true,
      options: [
        "1 Bulan",
        "3 Bulan",
        "6 Bulan",
        "1 Tahun",
      ],
    },

    {
      id: "security_deposit",
      label: "Uang Jaminan / Deposit",
      type: "currency",
      required: false,
    },

    {
      id: "down_payment",
      label: "DP / Booking Fee",
      type: "currency",
      required: false,
    },

    {
      id: "included_utilities",
      label: "Termasuk Dalam Harga Sewa",
      type: "multiselect",
      required: false,
      options: [
        "Listrik",
        "Air",
        "WiFi",
        "Kebersihan Kamar",
        "Laundry",
        "Sarapan",
      ],
    },

    {
      id: "electricity_billing",
      label: "Sistem Tagihan Listrik",
      type: "select",
      required: false,
      options: [
        "Sudah Termasuk Sewa",
        "Token Terpisah",
        "Patungan Meteran",
      ],
    },

    {
      id: "refundable_deposit",
      label: "Deposit Bisa Dikembalikan",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "available_from",
      label: "Tersedia Mulai Tanggal",
      type: "text",
      required: false,
      placeholder: "Contoh: 1 September 2026",
    },

    {
      id: "payment_notes",
      label: "Catatan Pembayaran",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Pembayaran",
    },
  ],
};

export default sewaPembayaran;
