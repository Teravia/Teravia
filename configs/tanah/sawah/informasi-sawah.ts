// configs/tanah/sawah/informasi-sawah.ts

const informasiSawah = {
  id: "informasi-sawah",
  title: "Informasi Sawah",
  description: "Informasi mengenai lokasi dan pengelolaan lahan sawah.",

  fields: [
    {
      id: "village_name",
      label: "Nama Desa / Kecamatan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Desa/Kecamatan",
    },
    {
      id: "block_or_petak",
      label: "Blok / Petak Sawah",
      type: "text",
      required: false,
      placeholder: "Masukkan Blok/Petak (jika ada)",
    },
    {
      id: "current_management_status",
      label: "Status Pengelolaan Saat Ini",
      type: "select",
      required: false,
      options: [
        "Dikelola Sendiri",
        "Disewakan ke Petani (Sewa Tahunan)",
        "Bagi Hasil dengan Petani Penggarap",
        "Tidak Dikelola",
      ],
    },
    {
      id: "last_harvest_year",
      label: "Tahun Panen Terakhir",
      type: "number",
      required: false,
    },
  ],
};

export default informasiSawah;
