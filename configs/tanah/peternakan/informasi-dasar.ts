// configs/tanah/peternakan/informasi-dasar.ts

const informasiDasar = {
  id: "informasi-dasar",
  title: "Informasi Dasar",
  description: "Informasi umum mengenai listing lahan peternakan.",

  fields: [
    {
      id: "property_category",
      label: "Kategori Properti",
      type: "hidden",
      value: "Tanah",
    },

    {
      id: "property_type",
      label: "Jenis Properti",
      type: "hidden",
      value: "Peternakan",
    },

    {
      id: "land_condition",
      label: "Kondisi Lahan",
      type: "select",
      required: true,
      options: [
        "Aktif Beroperasi",
        "Tidak Beroperasi (Kandang Kosong)",
        "Lahan Kosong (Belum Ada Kandang)",
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
        "Ahli Waris",
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
        "Pending",
      ],
    },

    {
      id: "certificate_status",
      label: "Status Sertifikat",
      type: "select",
      required: true,
      options: [
        "SHM",
        "HGU",
        "Girik",
        "Petok D",
        "Letter C",
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
      placeholder: "Jelaskan keunggulan lahan peternakan secara lengkap...",
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
