// configs/tanah/kebun/informasi-kebun.ts

const informasiKebun = {
  id: "informasi-kebun",
  title: "Informasi Kebun",
  description: "Informasi mengenai lokasi dan pengelolaan lahan kebun.",

  fields: [
    {
      id: "village_name",
      label: "Nama Desa / Kecamatan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Desa/Kecamatan",
    },
    {
      id: "block_name",
      label: "Blok Kebun",
      type: "text",
      required: false,
      placeholder: "Masukkan Blok Kebun (jika ada)",
    },
    {
      id: "current_management_status",
      label: "Status Pengelolaan Saat Ini",
      type: "select",
      required: false,
      options: [
        "Dikelola Sendiri",
        "Disewakan ke Petani/Pengelola",
        "Bagi Hasil dengan Penggarap",
        "Tidak Dikelola",
      ],
    },
    {
      id: "first_planting_year",
      label: "Tahun Tanam Pertama",
      type: "number",
      required: false,
    },
  ],
};

export default informasiKebun;
