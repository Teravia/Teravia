// configs/komersial/gedung-perkantoran/informasi-tambahan.ts

const informasiTambahan = {
  id: "informasi-tambahan",
  title: "Informasi Tambahan",
  description: "Informasi pendukung mengenai zonasi, peruntukan bisnis, dan ketentuan khusus gedung.",

  fields: [
    {
      id: "zoning_type",
      label: "Zonasi Tata Ruang / Tata Kota",
      type: "select",
      required: false,
      options: [
        "Zona Komersial / Perkantoran (K.1)",
        "Zona Campuran (K3 / C1)",
        "Zona Industri / Pergudangan",
        "Lainnya",
      ],
    },

    {
      id: "building_orientation",
      label: "Arah Hadap Muka Gedung",
      type: "select",
      required: false,
      options: [
        "Utara",
        "Selatan",
        "Timur",
        "Barat",
        "Barat Daya",
        "Barat Laut",
        "Tenggara",
        "Timur Laut",
      ],
    },

    {
      id: "kdb_kdb_kdh",
      label: "Koefisien Bangunan (KDB / KLB / KDH)",
      type: "text",
      required: false,
      placeholder: "Contoh: KDB 60%, KLB 4.0, KDH 20%",
    },

    {
      id: "green_building_certification",
      label: "Sertifikasi Ramah Lingkungan (Green Building)",
      type: "select",
      required: false,
      options: [
        "GBCI (Green Building Council Indonesia)",
        "EDGE Certification",
        "LEED Certification",
        "Tidak Ada / Belum Tersertifikasi",
      ],
    },

    {
      id: "operational_hours",
      label: "Jam Operasional Gedung Utama",
      type: "text",
      required: false,
      placeholder: "Contoh: Senin - Jumat (07.00 - 18.00), Sabtu (07.00 - 13.00)",
    },

    {
      id: "suitable_business_types",
      label: "Peruntukan Usaha / Tenant Ideal",
      type: "checkbox_group",
      required: false,
      options: [
        "Kantor Pusat / Corporate Headquarter",
        "Kantor Instansi Pemerintah / BUMN",
        "Perusahaan Teknologi / Start-up",
        "Kantor Hukum & Konsultan Finance",
        "Co-working Space / Shared Office",
        "Pusat Edukasi / Lembaga Pelatihan",
      ],
    },

    {
      id: "sale_lease_terms",
      label: "Ketentuan Khusus Penjualan / Penyewaan",
      type: "textarea",
      rows: 4,
      required: false,
      placeholder: "Tambahkan ketentuan khusus seperti minimum masa sewa, syarat deposit, atau klausul perjanjian jual-beli gedung...",
    },
  ],
};

export default informasiTambahan;
