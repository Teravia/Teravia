// configs/tanah/kebun/akses-pengairan.ts

const aksesPengairan = {
  id: "akses-pengairan",
  title: "Akses & Pengairan",
  description: "Ketersediaan sumber air dan akses jalan menuju lahan kebun.",

  fields: [
    {
      id: "water_availability",
      label: "Ketersediaan Air",
      type: "select",
      required: true,
      options: [
        "Ada Sistem Irigasi/Penyiraman",
        "Tadah Hujan (Mengandalkan Curah Hujan)",
        "Tidak Perlu Pengairan Khusus",
      ],
    },

    {
      id: "water_source",
      label: "Sumber Air (Jika Ada)",
      type: "select",
      required: false,
      options: [
        "Sungai",
        "Sumur Bor",
        "Mata Air",
        "Tidak Ada",
      ],
    },

    {
      id: "road_access_type",
      label: "Jenis Akses Jalan Menuju Lahan",
      type: "select",
      required: true,
      options: [
        "Jalan Aspal/Beton",
        "Jalan Tanah Bisa Kendaraan",
        "Jalan Setapak (Hanya Bisa Jalan Kaki/Motor)",
        "Belum Ada Akses Jalan",
      ],
    },

    {
      id: "vehicle_access",
      label: "Bisa Diakses Kendaraan Roda 4",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "truck_access",
      label: "Bisa Dilalui Truk Angkut Hasil Panen",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "distance_to_main_road",
      label: "Jarak ke Jalan Utama",
      type: "number",
      required: false,
      suffix: "m",
    },

    {
      id: "access_notes",
      label: "Catatan Akses & Pengairan",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Akses & Pengairan",
    },
  ],
};

export default aksesPengairan;
