// configs/hunian/rumah/informasi-dasar.ts

const informasiDasar = {
  id: "informasi-dasar",
  title: "Informasi Dasar",
  description: "Informasi umum mengenai listing rumah.",

  fields: [
    {
      id: "listing_title",
      label: "Judul Iklan",
      type: "text",
      required: true,
      placeholder: "Contoh: Dijual Rumah Minimalis Siap Huni di Bogor",
      maxLength: 120,
    },

    {
      id: "listing_type",
      label: "Tujuan Listing",
      type: "radio",
      required: true,
      options: [
        "Dijual",
        "Disewakan",
        "Dijual & Disewakan",
      ],
    },

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
      value: "Rumah",
    },

    {
      id: "property_condition",
      label: "Kondisi Properti",
      type: "select",
      required: true,
      options: [
        "Baru",
        "Bekas",
        "Dalam Pembangunan",
        "Renovasi",
        "Fully Renovated",
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
        "Developer",
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
        "Siap Huni",
        "Dalam Pembangunan",
        "Indent",
        "Pre Launch",
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
        "Hak Pakai",
        "Girik",
        "AJB",
        "PPJB",
        "Lainnya",
      ],
    },

    {
      id: "property_code",
      label: "Kode Properti",
      type: "text",
      required: false,
      placeholder: "Auto Generate / Manual",
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
      placeholder: "Jelaskan keunggulan rumah secara lengkap...",
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
