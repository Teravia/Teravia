// configs/hunian/kontrakan/sewa-kontrak.ts

const sewaKontrak = {
  id: "sewa-kontrak",
  title: "Sewa & Kontrak",
  description: "Ketentuan sewa dan kontrak rumah kontrakan.",

  fields: [
    {
      id: "rental_price_period",
      label: "Periode Harga Sewa",
      type: "select",
      required: true,
      options: [
        "per Bulan",
        "per Tahun",
        "per 2 Tahun",
      ],
    },

    {
      id: "minimum_lease_duration",
      label: "Minimal Masa Sewa",
      type: "select",
      required: true,
      options: [
        "1 Bulan",
        "3 Bulan",
        "6 Bulan",
        "1 Tahun",
        "2 Tahun",
      ],
    },

    {
      id: "payment_terms",
      label: "Sistem Pembayaran",
      type: "select",
      required: true,
      options: [
        "Bayar di Muka Penuh",
        "Bisa Dicicil / Termin",
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
        "Internet/WiFi",
        "Kebersihan",
        "Iuran Keamanan",
        "Iuran Sampah",
      ],
    },

    {
      id: "contract_extension",
      label: "Bisa Perpanjang Kontrak",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "early_termination_allowed",
      label: "Bisa Putus Kontrak Lebih Awal",
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
      id: "rental_notes",
      label: "Catatan Sewa & Kontrak",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Sewa & Kontrak",
    },
  ],
};

export default sewaKontrak;
