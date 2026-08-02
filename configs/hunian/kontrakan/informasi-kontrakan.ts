// configs/hunian/kontrakan/informasi-kontrakan.ts

const informasiKontrakan = {
  id: "informasi-kontrakan",
  title: "Informasi Kontrakan",
  description: "Informasi mengenai lokasi dan detail rumah kontrakan.",

  fields: [
    {
      id: "house_name_or_street",
      label: "Nama Perumahan / Nama Jalan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Perumahan atau Nama Jalan",
    },

    {
      id: "house_number",
      label: "Nomor Rumah",
      type: "text",
      required: false,
      placeholder: "Masukkan Nomor Rumah",
    },

    {
      id: "house_type",
      label: "Tipe Rumah",
      type: "text",
      required: false,
      placeholder: "Contoh: 36/72",
    },

    {
      id: "floor_count",
      label: "Jumlah Lantai",
      type: "select",
      required: true,
      options: ["1", "2", "3+"],
    },

    {
      id: "year_built",
      label: "Tahun Dibangun",
      type: "number",
      required: false,
    },

    {
      id: "house_position",
      label: "Posisi Rumah",
      type: "select",
      required: false,
      options: [
        "Hook",
        "Tengah",
        "Ujung",
      ],
    },

    {
      id: "house_facing",
      label: "Hadap Rumah",
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
      id: "occupancy_status",
      label: "Status Hunian Saat Ini",
      type: "select",
      required: false,
      options: [
        "Kosong",
        "Masih Dihuni Penyewa Lama",
      ],
    },

    {
      id: "ever_occupied",
      label: "Pernah Disewakan Sebelumnya",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },
  ],
};

export default informasiKontrakan;
