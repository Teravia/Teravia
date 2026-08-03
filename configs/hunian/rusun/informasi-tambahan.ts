// configs/hunian/rusun/informasi-tambahan.ts

const informasiTambahan = {
  id: "informasi-tambahan",
  title: "Informasi Tambahan",
  description: "Informasi pendukung mengenai unit rusun.",

  fields: [
    {
      id: "property_advantages",
      label: "Keunggulan Properti",
      type: "textarea",
      required: false,
      rows: 5,
      maxLength: 3000,
      placeholder: "Jelaskan keunggulan utama unit rusun...",
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
      placeholder: "Rusun Subsidi, Rusunami, dll",
    },
    {
      id: "seo_keywords",
      label: "Keyword SEO",
      type: "tags",
      required: false,
      placeholder: "Rusun Dijual Jakarta, Rusunami Murah, dll",
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
