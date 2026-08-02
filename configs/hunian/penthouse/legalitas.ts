// configs/hunian/penthouse/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas",
  description: "Informasi legalitas dan status kepemilikan unit penthouse.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat",
      type: "select",
      required: true,
      options: ["SHM Sarusun", "HGB Sarusun", "Strata Title", "PPJB", "Lainnya"],
    },
    { id: "certificate_number", label: "Nomor Sertifikat", type: "text", required: false, placeholder: "Masukkan Nomor Sertifikat" },
    { id: "certificate_holder_name", label: "Atas Nama Sertifikat", type: "text", required: false, placeholder: "Masukkan Atas Nama Sertifikat" },
    { id: "certificate_year", label: "Tahun Sertifikat", type: "number", required: false },
    {
      id: "pbg_imb",
      label: "PBG / IMB",
      type: "select",
      required: false,
      options: ["Ada", "Tidak Ada", "Dalam Proses"],
    },
    { id: "slf_certificate", label: "Sertifikat Laik Fungsi (SLF)", type: "checkbox", required: false },
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
    {
      id: "collateral_status",
      label: "Status Agunan / Hak Tanggungan",
      type: "select",
      required: false,
      options: ["Tidak Dijaminkan", "Sedang Dijaminkan / KPR Berjalan", "Lunas Dijaminkan"],
    },
    { id: "ready_for_notary", label: "Siap AJB di Notaris", type: "checkbox", required: false },
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
