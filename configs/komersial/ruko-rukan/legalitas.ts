// configs/komersial/ruko-rukan/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas",
  description: "Informasi legalitas dan izin usaha ruko/rukan.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat",
      type: "select",
      required: true,
      options: ["SHM", "HGB", "Hak Pakai", "Lainnya"],
    },
    { id: "certificate_number", label: "Nomor Sertifikat", type: "text", required: false, placeholder: "Masukkan Nomor Sertifikat" },
    { id: "certificate_holder_name", label: "Atas Nama Sertifikat", type: "text", required: false, placeholder: "Masukkan Atas Nama Sertifikat" },
    {
      id: "pbg_imb",
      label: "PBG / IMB",
      type: "select",
      required: false,
      options: ["Ada (Peruntukan Komersial)", "Ada (Peruntukan Hunian)", "Tidak Ada", "Dalam Proses"],
    },
    {
      id: "zoning_compliance",
      label: "Sesuai Peruntukan Lahan (RTRW Komersial)",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },
    { id: "business_license_siup", label: "SIUP / NIB Tersedia", type: "checkbox", required: false },
    { id: "ho_disturbance_permit", label: "Izin Gangguan (HO)", type: "checkbox", required: false },
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
    { id: "can_mortgage", label: "Bisa KPR / Kredit Usaha", type: "checkbox", required: false },
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
