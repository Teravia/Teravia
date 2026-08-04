// configs/tanah/kavling/informasi-kavling.ts

const informasiKavling = {
  id: "informasi-kavling",
  title: "Informasi Kavling",
  description: "Informasi mengenai lokasi dan status kawasan kavling.",

  fields: [
    {
      id: "housing_estate_name",
      label: "Nama Perumahan / Kawasan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Perumahan/Kawasan (jika ada)",
    },
    {
      id: "developer",
      label: "Developer",
      type: "text",
      required: false,
      placeholder: "Masukkan Developer (jika dalam kawasan pengembang)",
    },
    {
      id: "block",
      label: "Blok",
      type: "text",
      required: false,
      placeholder: "Masukkan Blok",
    },
    {
      id: "kavling_number",
      label: "Nomor Kavling",
      type: "text",
      required: false,
      placeholder: "Masukkan Nomor Kavling",
    },
    {
      id: "land_use_zoning",
      label: "Peruntukan Lahan (RTRW)",
      type: "select",
      required: true,
      options: [
        "Hunian",
        "Komersial",
        "Campuran (Hunian & Komersial)",
        "Belum Diketahui",
      ],
    },
    {
      id: "kavling_status",
      label: "Status Kavling",
      type: "select",
      required: false,
      options: [
        "Kavling Mandiri (Bukan Dalam Kawasan)",
        "Dalam Kawasan Perumahan/Cluster",
        "Dalam Kawasan Industri",
      ],
    },
    {
      id: "year_opened",
      label: "Tahun Kavling Dibuka",
      type: "number",
      required: false,
    },
  ],
};

export default informasiKavling;
