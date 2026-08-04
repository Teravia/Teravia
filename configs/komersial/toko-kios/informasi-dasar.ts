// configs/komersial/toko-kios/informasi-dasar.ts

const informasiDasar = {
  id: "informasi-dasar",
  title: "Informasi Dasar",
  description: "Informasi umum mengenai listing toko/kios.",

  fields: [
    {
      id: "property_category",
      label: "Kategori Properti",
      type: "hidden",
      value: "Komersial",
    },

    {
      id: "property_type",
      label: "Jenis Properti",
      type: "hidden",
      value: "Toko/Kios",
    },

    {
      id: "location_type",
      label: "Tipe Lokasi",
      type: "select",
      required: true,
      options: [
        "Berdiri Sendiri (Pinggir Jalan)",
        "Unit Dalam Mall / Pusat Perbelanjaan",
        "Unit Dalam Pertokoan / Ruko Komplek",
        "Unit Dalam Pasar",
      ],
    },

    {
      id: "property_condition",
      label: "Kondisi Properti",
      type: "select",
      required: true,
      options: [
        "Baru",
        "Bekas",
        "Renovasi",
      ],
    },

    {
      id: "ownership_status",
      label: "Status Kepemilikan Listing",
      type: "radio",
      required: true,
      options: [
        "Pemilik Langsung",
        "Agen Properti",
        "Pengelola Mall/Pertokoan",
      ],
    },

    {
      id: "availability_status",
      label: "Status Ketersediaan",
      type: "select",
      required: true,
      options: [
        "Tersedia",
        "Booking",
        "Terjual",
        "Disewakan",
        "Pending",
      ],
    },

    {
      id: "building_status",
      label: "Status Bangunan",
      type: "select",
      required: true,
      options: [
        "Siap Pakai",
        "Dalam Pembangunan",
        "Renovasi",
      ],
    },

    {
      id: "certificate_status",
      label: "Status Sertifikat",
      type: "select",
      required: false,
      options: [
        "SHM",
        "HGB",
        "Strata Title",
        "Hak Sewa/Kontrak Pengelola",
        "Lainnya",
      ],
    },

    {
      id: "language",
      label: "Bahasa Listing",
      type: "select",
      required: true,
      options: [
        "Indonesia",
        "English",
      ],
    },

    {
      id: "description",
      label: "Deskripsi Properti",
      type: "textarea",
      required: true,
      rows: 8,
      maxLength: 5000,
      placeholder: "Jelaskan keunggulan toko/kios secara lengkap...",
    },

    {
      id: "teravia_verification",
      label: "Verifikasi TERAVIA",
      type: "hidden",
      value: "Belum Diverifikasi",
    },

    {
      id: "listing_status",
      label: "Status Listing",
      type: "hidden",
      value: "Draft",
    },

    {
      id: "created_at",
      label: "Tanggal Dibuat",
      type: "hidden",
      autoGenerate: true,
    },

    {
      id: "updated_at",
      label: "Tanggal Diperbarui",
      type: "hidden",
      autoGenerate: true,
    },
  ],
};

export default informasiDasar;
      
