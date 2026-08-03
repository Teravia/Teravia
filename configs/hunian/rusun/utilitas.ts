// configs/hunian/rusun/utilitas.ts

const utilitas = {
  id: "utilitas",
  title: "Utilitas",
  description: "Ketersediaan utilitas pendukung unit rusun.",

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
      id: "gas_source",
      label: "Sumber Gas",
      type: "select",
      required: false,
      options: ["Tabung LPG", "Tidak Ada"],
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
