// configs/hunian/rumah/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas",
  description: "Informasi legalitas, perizinan, dan dokumen kepemilikan rumah.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat",
      type: "select",
      required: true,
      options: [
        "SHM",
        "SHGB",
        "Hak Pakai",
        "Hak Guna Usaha (HGU)",
        "Girik",
        "Letter C",
        "Petok D",
        "AJB",
        "PPJB",
        "Lainnya",
      ],
    },
    {
      id: "certificate_number",
      label: "Nomor Sertifikat",
      type: "text",
      required: false,
    },
    {
      id: "certificate_name",
      label: "Atas Nama Sertifikat",
      type: "text",
      required: false,
    },
    {
      id: "ownership_status",
      label: "Status Kepemilikan",
      type: "select",
      required: true,
      options: [
        "Milik Pribadi",
        "Suami Istri",
        "Perusahaan",
        "Ahli Waris",
        "Developer",
        "Lainnya",
      ],
    },
    {
      id: "certificate_year",
      label: "Tahun Sertifikat",
      type: "number",
      required: false,
    },
    {
      id: "building_permit",
      label: "PBG / IMB",
      type: "select",
      required: false,
      options: [
        "PBG",
        "IMB",
        "Tidak Ada",
      ],
    },
    {
      id: "building_permit_number",
      label: "Nomor PBG / IMB",
      type: "text",
      required: false,
    },
    {
      id: "slf",
      label: "Sertifikat Laik Fungsi (SLF)",
      type: "checkbox",
      required: false,
    },
    {
      id: "npwp_available",
      label: "NPWP Penjual",
      type: "checkbox",
      required: false,
    },
    {
      id: "pbb_available",
      label: "PBB Tersedia",
      type: "checkbox",
      required: false,
    },
    {
      id: "pbb_year",
      label: "PBB Tahun Terakhir",
      type: "number",
      required: false,
    },
    {
      id: "pbb_status",
      label: "Status PBB",
      type: "select",
      required: false,
      options: [
        "Lunas",
        "Belum Lunas",
      ],
    },
    {
      id: "tax_status",
      label: "Status Pajak",
      type: "select",
      required: false,
      options: [
        "Tidak Ada Tunggakan",
        "Masih Ada Tunggakan",
      ],
    },
    {
      id: "dispute_status",
      label: "Status Sengketa",
      type: "radio",
      required: true,
      options: [
        "Tidak",
        "Ya",
      ],
    },
    {
      id: "mortgage_status",
      label: "Status Agunan / Hak Tanggungan",
      type: "select",
      required: false,
      options: [
        "Tidak Diagunkan",
        "Masih Diagunkan",
        "Dalam Proses Roya",
      ],
    },
    {
      id: "inheritance_status",
      label: "Status Waris",
      type: "select",
      required: false,
      options: [
        "Bukan Warisan",
        "Warisan Belum Dibagi",
        "Warisan Sudah Dibagi",
      ],
    },
    {
      id: "notary_ready",
      label: "Siap AJB di Notaris",
      type: "checkbox",
      required: false,
    },
    {
      id: "bank_financing",
      label: "Bisa KPR",
      type: "checkbox",
      required: false,
    },
    {
      id: "document_complete",
      label: "Dokumen Lengkap",
      type: "checkbox",
      required: false,
    },
    {
      id: "legal_notes",
      label: "Catatan Legalitas",
      type: "textarea",
      required: false,
      rows: 4,
      maxLength: 1000,
    },
  ],
};

export default legalitas;
