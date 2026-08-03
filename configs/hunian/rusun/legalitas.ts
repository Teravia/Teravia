// configs/hunian/rusun/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas",
  description: "Informasi legalitas dan status kepemilikan unit rusun.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat",
      type: "select",
      required: true,
      options: [
        "SHM Sarusun",
        "SKBG (Sertifikat Kepemilikan Bangunan Gedung)",
        "Perjanjian Sewa (Rusunawa)",
        "Belum Bersertifikat",
      ],
    },
    { id: "certificate_number", label: "Nomor Sertifikat", type: "text", required: false, placeholder: "Masukkan Nomor Sertifikat" },
    { id: "certificate_holder_name", label: "Atas Nama Sertifikat", type: "text", required: false, placeholder: "Masukkan Atas Nama Sertifikat" },
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
    { id: "can_mortgage", label: "Bisa KPR", type: "checkbox", required: false },
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
