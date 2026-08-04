// configs/tanah/kavling/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas",
  description: "Informasi legalitas dan status kepemilikan tanah kavling.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat",
      type: "select",
      required: true,
      options: ["SHM", "HGB", "Girik", "Petok D", "AJB", "Lainnya"],
    },
    { id: "certificate_number", label: "Nomor Sertifikat", type: "text", required: false, placeholder: "Masukkan Nomor Sertifikat" },
    { id: "certificate_holder_name", label: "Atas Nama Sertifikat", type: "text", required: false, placeholder: "Masukkan Atas Nama Sertifikat" },
    { id: "certificate_area_match", label: "Luas Sesuai Sertifikat (Belum Ada Selisih Ukur)", type: "checkbox", required: false },
    {
      id: "certificate_scope",
      label: "Status Sertifikat",
      type: "select",
      required: false,
      options: ["Sudah Pecah / Sertifikat Sendiri", "Masih Induk / Belum Dipecah"],
    },
    { id: "can_split_certificate", label: "Bisa Dipecah Sertifikat (Jika Beli Sebagian)", type: "checkbox", required: false },
    {
      id: "ownership_history",
      label: "Riwayat Kepemilikan",
      type: "select",
      required: false,
      options: ["Milik Sendiri Sejak Awal", "Warisan", "Hibah", "Jual Beli"],
    },
    {
      id: "tax_status",
      label: "Status Pajak (PBB)",
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
      options: ["Tidak Dijaminkan", "Sedang Dijaminkan", "Lunas Dijaminkan"],
    },
    { id: "ready_for_notary", label: "Siap AJB di Notaris", type: "checkbox", required: false },
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
