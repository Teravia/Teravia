// configs/hunian/rusun/program-subsidi.ts

const programSubsidi = {
  id: "program-subsidi",
  title: "Program & Subsidi",
  description: "Informasi program pembiayaan dan status subsidi rumah susun.",

  fields: [
    {
      id: "financing_program",
      label: "Program Pembiayaan",
      type: "select",
      required: true,
      options: [
        "FLPP",
        "Tapera",
        "BSPS",
        "Non-Subsidi / Komersial",
        "Tidak Ada",
      ],
    },

    {
      id: "eligible_for_mbr",
      label: "Diperuntukkan MBR (Masyarakat Berpenghasilan Rendah)",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "max_income_requirement",
      label: "Batas Maksimal Penghasilan Pemohon",
      type: "currency",
      required: false,
    },

    {
      id: "subsidy_status",
      label: "Status Subsidi",
      type: "select",
      required: false,
      options: [
        "Masih Berlaku",
        "Sudah Lunas / Bebas Subsidi",
        "Tidak Bersubsidi",
      ],
    },

    {
      id: "transfer_restriction",
      label: "Ada Larangan Pengalihan/Dijual dalam Periode Tertentu",
      type: "checkbox",
      required: false,
    },

    {
      id: "transfer_restriction_years",
      label: "Sisa Masa Larangan Pengalihan (Tahun)",
      type: "number",
      required: false,
    },

    {
      id: "developer_or_government_program",
      label: "Nama Program / Developer Pelaksana",
      type: "text",
      required: false,
      placeholder: "Contoh: Program Sejuta Rumah, Perumnas",
    },

    {
      id: "program_notes",
      label: "Catatan Program & Subsidi",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Program & Subsidi",
    },
  ],
};

export default programSubsidi;
