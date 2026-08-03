// configs/hunian/kost/informasi-dasar.ts

const informasiDasar = {
  id: "informasi-dasar",
  title: "Informasi Dasar",
  description: "Informasi umum mengenai listing kost.",

  fields: [
    {
      id: "property_category",
      label: "Kategori Properti",
      type: "hidden",
      value: "Hunian",
    },

    {
      id: "property_type",
      label: "Jenis Properti",
      type: "hidden",
      value: "Kost",
    },

    {
      id: "kost_type",
      label: "Tipe Kost",
      type: "select",
      required: true,
      options: [
        "Kost Putra",
        "Kost Putri",
        "Kost Campur",
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
        "Manajemen Kost (mis. Mamikos/OYO Life)",
      ],
    },

    {
      id: "availability_status",
      label: "Status Ketersediaan",
      type: "select",
      required: true,
      options: [
        "Tersedia",
        "Kamar Terbatas",
        "Penuh",
        "Pending",
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
      placeholder: "Jelaskan keunggulan kost secara lengkap...",
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
