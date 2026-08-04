// configs/komersial/office-space/informasi-unit.ts

const informasiUnit = {
  id: "informasi-unit",
  title: "Informasi Unit",
  description: "Informasi mengenai gedung dan unit office space.",

  fields: [
    {
      id: "building_name",
      label: "Nama Gedung",
      type: "text",
      required: true,
      placeholder: "Masukkan Nama Gedung",
    },
    {
      id: "developer",
      label: "Developer / Pengelola",
      type: "text",
      required: false,
      placeholder: "Masukkan Developer / Pengelola Gedung",
    },
    {
      id: "unit_number",
      label: "Nomor Unit",
      type: "text",
      required: false,
      placeholder: "Masukkan Nomor Unit",
    },
    {
      id: "floor_number",
      label: "Lantai Unit",
      type: "text",
      required: true,
      placeholder: "Contoh: Lantai 12",
    },
    {
      id: "total_floors",
      label: "Total Lantai Gedung",
      type: "number",
      required: false,
    },
    {
      id: "fitting_condition",
      label: "Kondisi Fitting Out",
      type: "select",
      required: true,
      options: [
        "Bare / Cold Shell",
        "Semi Fitted",
        "Fully Fitted",
      ],
    },
    {
      id: "view_type",
      label: "Pemandangan",
      type: "select",
      required: false,
      options: [
        "City View",
        "Garden View",
        "Sea View",
        "Tidak Ada View Khusus",
      ],
    },
    {
      id: "year_built",
      label: "Tahun Dibangun",
      type: "number",
      required: false,
    },
    {
      id: "handover_year",
      label: "Tahun Serah Terima",
      type: "number",
      required: false,
    },
  ],
};

export default informasiUnit;
