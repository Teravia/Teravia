// configs/hunian/penthouse/utilitas.ts

const utilitas = {
  id: "utilitas",
  title: "Utilitas",
  description: "Ketersediaan utilitas pendukung unit penthouse.",

  fields: [
    {
      id: "electricity_type",
      label: "Jenis Listrik",
      type: "select",
      required: false,
      options: ["Token / Prabayar", "Pascabayar"],
    },
    { id: "electricity_capacity", label: "Kapasitas Listrik", type: "number", required: false, suffix: "VA" },
    {
      id: "water_source",
      label: "Sumber Air",
      type: "select",
      required: false,
      options: ["PDAM", "Tandon Gedung"],
    },
    {
      id: "internet_provider",
      label: "Provider Internet Tersedia",
      type: "multiselect",
      required: false,
      options: ["IndiHome", "Biznet", "MyRepublic", "First Media", "Lainnya"],
    },
    { id: "backup_power", label: "Genset Cadangan", type: "checkbox", required: false },
    {
      id: "water_heater_system",
      label: "Sistem Water Heater",
      type: "select",
      required: false,
      options: ["Individual", "Terpusat"],
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
