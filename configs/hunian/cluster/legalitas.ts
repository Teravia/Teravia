// configs/hunian/cluster/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas",
  description: "Informasi legalitas dan status kepemilikan rumah cluster.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat",
      type: "select",
      required: true,
      options: ["SHM", "HGB", "Hak Pakai", "Girik", "AJB", "PPJB", "Lainnya"],
    },
    { id: "certificate_number", label: "Nomor Sertifikat", type: "text", required: false, placeholder: "Masukkan Nomor Sertifikat" },
    { id: "certificate_holder_name", label: "Atas Nama Sertifikat", type: "text", required: false, placeholder: "Masukkan Atas Nama Sertifikat" },
    {
      id: "ownership_status",
      label: "Status Kepemilikan",
      type: "select",
      required: true,
      options: ["Milik Sendiri", "Warisan", "Hibah", "Sedang KPR"],
    },
    { id: "certificate_year", label: "Tahun Sertifikat", type: "number", required: false },
    {
      id: "pbg_imb",
      label: "PBG / IMB",
      type: "select",
      required: false,
      options: ["Ada", "Tidak Ada", "Dalam Proses"],
    },
    { id: "pbg_imb_number", label: "Nomor PBG / IMB", type: "text", required: false, placeholder: "Masukkan Nomor PBG / IMB" },
    { id: "slf_certificate", label: "Sertifikat Laik Fungsi (SLF)", type: "checkbox", required: false },
    { id: "npwp_penjual", label: "NPWP Penjual", type: "checkbox", required: false },
    { id: "pbb_available", label: "PBB Tersedia", type: "checkbox", required: false },
    { id: "pbb_last_year", label: "PBB Tahun Terakhir", type: "number", required: false },
    {
      id: "pbb_status",
      label: "Status PBB",
      type: "select",
      required: false,
      options: ["Lunas", "Belum Lunas", "Menunggak"],
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
    {
      id: "collateral_status",
      label: "Status Agunan / Hak Tanggungan",
      type: "select",
      required: false,
      options: ["Tidak Dijaminkan", "Sedang Dijaminkan / KPR Berjalan", "Lunas Dijaminkan"],
    },
    {
      id: "inheritance_status",
      label: "Status Waris",
      type: "select",
      required: false,
      options: ["Bukan Warisan", "Warisan Sudah Selesai", "Warisan Dalam Proses"],
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
