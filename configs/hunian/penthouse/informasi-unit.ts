// configs/hunian/penthouse/informasi-unit.ts

const informasiUnit = {
  id: "informasi-unit",
  title: "Informasi Unit",
  description: "Informasi detail mengenai gedung dan unit penthouse.",

  fields: [
    {
      id: "building_name",
      label: "Nama Gedung / Apartemen",
      type: "text",
      required: true,
      placeholder: "Masukkan Nama Gedung",
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
      type: "text",
      required: true,
      placeholder: "Contoh: Lantai 38-39 (Top Floor)",
    },

    {
      id: "total_floors",
      label: "Total Lantai Gedung",
      type: "number",
      required: false,
    },

    {
      id: "unit_layout",
      label: "Layout Unit",
      type: "select",
      required: true,
      options: [
        "Simplex (1 Lantai)",
        "Duplex (2 Lantai)",
        "Triplex (3 Lantai)",
      ],
    },

    {
      id: "bedroom_configuration",
      label: "Konfigurasi Kamar",
      type: "select",
      required: false,
      options: [
        "2 Bedroom",
        "3 Bedroom",
        "4 Bedroom",
        "5+ Bedroom",
      ],
    },

    {
      id: "view_type",
      label: "Pemandangan Unit",
      type: "multiselect",
      required: false,
      options: [
        "City Skyline View",
        "Sea View",
        "Sunset View",
        "Golf Course View",
        "Garden View",
        "360 Panoramic View",
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
      id: "private_lift_access",
      label: "Akses Lift Pribadi",
      type: "checkbox",
      required: false,
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
