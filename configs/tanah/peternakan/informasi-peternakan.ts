// configs/tanah/peternakan/informasi-peternakan.ts

const informasiPeternakan = {
  id: "informasi-peternakan",
  title: "Informasi Peternakan",
  description: "Informasi mengenai lokasi dan status operasional peternakan.",

  fields: [
    {
      id: "village_name",
      label: "Nama Desa / Kecamatan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Desa/Kecamatan",
    },
    {
      id: "farm_name",
      label: "Nama Peternakan (Jika Ada)",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Peternakan",
    },
    {
      id: "current_management_status",
      label: "Status Pengelolaan Saat Ini",
      type: "select",
      required: false,
      options: [
        "Dikelola Sendiri",
        "Disewakan / Kerja Sama Kemitraan",
        "Tidak Dikelola",
      ],
    },
    {
      id: "operation_start_year",
      label: "Tahun Mulai Beroperasi",
      type: "number",
      required: false,
    },
  ],
};

export default informasiPeternakan;
