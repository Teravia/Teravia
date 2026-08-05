// configs/komersial/gedung-perkantoran/informasi-dasar.ts

const informasiDasar = {
  id: "informasi-dasar",
  title: "Informasi Dasar",
  description: "Informasi umum mengenai listing gedung perkantoran.",

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
      value: "Gedung Perkantoran",
    },

    {
      id: "building_grade",
      label: "Grade Gedung",
      type: "select",
      required: true,
      options: [
        "Grade Premium",
        "Grade A",
        "Grade B",
        "Grade C",
      ],
    },

    {
      id: "property_condition",
      label: "Kondisi Gedung",
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
        "Pengelola Gedung",
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
        "Serah Terima",
      ],
    },

    {
      id: "certificate_status",
      label: "Status Sertifikat",
      type: "select",
      required: false,
      options: [
        "SHGB (Sertifikat Hak Guna Bangunan)",
        "SHM (Sertifikat Hak Milik)",
        "HPL (Hak Pengelolaan)",
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
      placeholder: "Jelaskan keunggulan gedung perkantoran secara lengkap...",
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
