// configs/hunian/apartemen/informasi-unit.ts

const informasiUnit = {
  id: "informasi-unit",
  title: "Informasi Unit",
  description: "Informasi detail mengenai gedung dan unit apartemen.",

  fields: [
    {
      id: "building_name",
      label: "Nama Apartemen",
      type: "text",
      required: true,
      placeholder: "Masukkan Nama Apartemen",
    },

    {
      id: "tower_name",
      label: "Nama Tower",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Tower",
    },

    {
      id: "developer",
      label: "Developer",
      type: "text",
      required: false,
      placeholder: "Masukkan Developer",
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
        "1 Bedroom",
        "2 Bedroom",
        "3 Bedroom",
        "4 Bedroom",
        "Penthouse",
        "Loft",
      ],
    },

    {
      id: "view_type",
      label: "Pemandangan Unit",
      type: "select",
      required: false,
      options: [
        "City View",
        "Pool View",
        "Garden View",
        "Sea View",
        "Mountain View",
        "Courtyard View",
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
        "Timur Laut",
        "Timur Tenggara",
        "Barat Laut",
        "Barat Daya",
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

