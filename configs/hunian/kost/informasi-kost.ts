// configs/hunian/kost/informasi-kost.ts

const informasiKost = {
  id: "informasi-kost",
  title: "Informasi Kost",
  description: "Informasi mengenai bangunan dan pengelolaan kost.",

  fields: [
    {
      id: "kost_name",
      label: "Nama Kost",
      type: "text",
      required: true,
      placeholder: "Masukkan Nama Kost",
    },
    {
      id: "street_name",
      label: "Nama Jalan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Jalan",
    },
    {
      id: "managed_by",
      label: "Dikelola Oleh",
      type: "select",
      required: false,
      options: [
        "Pemilik Langsung",
        "Manajemen Pihak Ketiga",
        "Platform Kost (Mamikos/OYO/RedDoorz)",
      ],
    },
    {
      id: "floor_count",
      label: "Jumlah Lantai",
      type: "select",
      required: false,
      options: ["1", "2", "3", "4+"],
    },
    {
      id: "total_rooms",
      label: "Total Jumlah Kamar",
      type: "number",
      required: true,
    },
    {
      id: "year_built",
      label: "Tahun Dibangun",
      type: "number",
      required: false,
    },
    {
      id: "building_condition",
      label: "Kondisi Bangunan",
      type: "select",
      required: true,
      options: [
        "Sangat Baik",
        "Baik",
        "Cukup",
        "Perlu Renovasi",
      ],
    },
    {
      id: "curfew_time",
      label: "Jam Malam / Akses 24 Jam",
      type: "select",
      required: false,
      options: [
        "Akses 24 Jam",
        "Ada Jam Malam",
      ],
    },
  ],
};

export default informasiKost;
