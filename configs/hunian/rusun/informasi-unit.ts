// configs/hunian/rusun/informasi-unit.ts

const informasiUnit = {
  id: "informasi-unit",
  title: "Informasi Unit",
  description: "Informasi mengenai gedung dan unit rumah susun.",

  fields: [
    {
      id: "building_name",
      label: "Nama Rusun",
      type: "text",
      required: true,
      placeholder: "Masukkan Nama Rusun",
    },
    {
      id: "block_name",
      label: "Nama Blok / Tower",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Blok / Tower",
    },
    {
      id: "manager",
      label: "Pengelola",
      type: "text",
      required: false,
      placeholder: "Contoh: Perumnas, UPT Rusun, Pemda",
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
      type: "number",
      required: true,
    },
    {
      id: "total_floors",
      label: "Total Lantai Gedung",
      type: "number",
      required: false,
    },
    {
      id: "unit_type",
      label: "Tipe Unit",
      type: "select",
      required: true,
      options: [
        "Studio",
        "Tipe 21",
        "Tipe 24",
        "Tipe 36",
        "Tipe 45",
      ],
    },
    {
      id: "facing_direction",
      label: "Hadap Unit",
      type: "select",
      required: false,
      options: [
        "Utara",
        "Selatan",
        "Timur",
        "Barat",
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
