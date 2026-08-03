// configs/hunian/villa/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas",
  description: "Informasi legalitas dan izin usaha villa.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat",
      type: "select",
      required: true,
      options: ["SHM", "HGB", "Hak Pakai", "Leasehold", "Lainnya"],
    },
    { id: "certificate_number", label: "Nomor Sertifikat", type: "text", required: false, placeholder: "Masukkan Nomor Sertifikat" },
    { id: "certificate_holder_name", label: "Atas Nama Sertifikat", type: "text", required: false, placeholder: "Masukkan Atas Nama Sertifikat" },
    { id: "leasehold_years_remaining", label: "Sisa Masa Leasehold (Tahun)", type: "number", required: false },
    {
      id: "pbg_imb",
      label: "PBG / IMB",
      type: "select",
      required: false,
      options: ["Ada", "Tidak Ada", "Dalam Proses"],
    },
    {
      id: "tourism_business_license",
      label: "Izin Usaha Pariwisata / Pondok Wisata",
      type: "select",
      required: false,
      options: ["Ada", "Tidak Ada", "Dalam Proses"],
    },
    {
      id: "tax_status",
      label: "Status Pajak",
      type: "select",
      required: false,
      options: ["Lunas", "Belum Lunas", "Menunggak"],
    },
    {
      id: "dispute_status",
      label: "Status Sengketa",
      type: "radio",
      required: true,
      options: ["Ya", "Tidak"],
    },
    { id: "complete_documents", label: "Dokumen Lengkap", type: "checkbox", required: false },
    {
      id: "legal_notes",
      label: "Catatan Legalitas",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Legalitas",
    },
  ],
};

export default legalitas;
