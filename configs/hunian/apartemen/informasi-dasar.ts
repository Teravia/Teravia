// configs/hunian/apartemen/informasi-dasar.ts

const informasiDasar = {
  id: "informasi-dasar",
  title: "Informasi Dasar",
  description: "Informasi umum mengenai listing apartemen.",

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
      value: "Apartemen",
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
        "Siap Huni",
        "Dalam Pembangunan",
        "Indent",
        "Pre Launch",
        "Serah Terima",
      ],
    },

    {
      id: "certificate_status",
      label: "Status Sertifikat",
      type: "select",
      required: false,
      options: [
        "SHM Sarusun",
        "HGB Sarusun",
        "Strata Title",
        "PPJB",
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
      placeholder: "Jelaskan keunggulan unit apartemen secara lengkap...",
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

