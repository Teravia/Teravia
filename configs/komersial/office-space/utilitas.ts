// configs/komersial/office-space/utilitas.ts

const utilitas = {
  id: "utilitas",
  title: "Utilitas",
  description: "Ketersediaan utilitas pendukung unit office space.",

  fields: [
    { id: "electrical_power", label: "Daya Listrik per Unit", type: "number", required: true, suffix: "VA" },
    {
      id: "electricity_type",
      label: "Jenis Listrik",
      type: "select",
      required: false,
      options: ["Token / Prabayar", "Pascabayar"],
    },
    { id: "backup_generator", label: "Genset Cadangan", type: "checkbox", required: false },
    {
      id: "internet_provider",
      label: "Provider Internet Tersedia",
      type: "multiselect",
      required: false,
      options: ["IndiHome", "Biznet", "MyRepublic", "First Media", "Lainnya"],
    },
    {
      id: "water_source",
      label: "Sumber Air",
      type: "select",
      required: false,
      options: ["PDAM", "Tandon Gedung"],
    },
    {
      id: "utilities_notes",
      label: "Catatan Utilitas",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Utilitas",
    },
  ],
};

export default utilitas;
