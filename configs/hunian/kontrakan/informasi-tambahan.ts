// configs/hunian/kontrakan/informasi-tambahan.ts

const informasiTambahan = {
  id: "informasi-tambahan",
  title: "Informasi Tambahan",
  description: "Informasi pendukung mengenai rumah kontrakan.",

  fields: [
    {
      id: "property_advantages",
      label: "Keunggulan Properti",
      type: "textarea",
      required: false,
      rows: 5,
      maxLength: 3000,
      placeholder: "Jelaskan keunggulan utama rumah kontrakan...",
    },
    {
      id: "negotiable",
      label: "Harga Bisa Nego",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },
    {
      id: "available_for_survey",
      label: "Bersedia Survey",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },
    {
      id: "survey_schedule",
      label: "Jadwal Survey",
      type: "textarea",
      required: false,
      rows: 3,
      maxLength: 1000,
      placeholder: "Contoh: Setiap hari pukul 09.00–17.00",
    },
    {
      id: "owner_notes",
      label: "Catatan Pemilik",
      type: "textarea",
      required: false,
      rows: 4,
      maxLength: 2000,
    },
    {
      id: "agent_notes",
      label: "Catatan Agen",
      type: "textarea",
      required: false,
      rows: 4,
      maxLength: 2000,
    },
    {
      id: "internal_reference",
      label: "Referensi Internal",
      type: "text",
      required: false,
      maxLength: 100,
    },
    {
      id: "tags",
      label: "Tag Properti",
      type: "tags",
      required: false,
      placeholder: "Kontrakan Murah, Dekat Kampus, dll",
    },
    {
      id: "seo_keywords",
      label: "Keyword SEO",
      type: "tags",
      required: false,
      placeholder: "Rumah Kontrakan Bulanan Jakarta, dll",
    },
    {
      id: "additional_information",
      label: "Informasi Tambahan",
      type: "textarea",
      required: false,
      rows: 6,
      maxLength: 5000,
      placeholder: "Informasi lain yang belum tercakup...",
    },
  ],
};

export default informasiTambahan;
