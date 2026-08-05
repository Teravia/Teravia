// configs/tanah/sawah/irigasi-pengairan.ts

const irigasiPengairan = {
  id: "irigasi-pengairan",
  title: "Irigasi & Pengairan",
  description: "Ketersediaan sistem pengairan dan akses menuju lahan sawah.",

  fields: [
    {
      id: "irrigation_system",
      label: "Sistem Irigasi",
      type: "select",
      required: true,
      options: [
        "Irigasi Teknis (Saluran Permanen)",
        "Irigasi Setengah Teknis",
        "Irigasi Sederhana",
        "Tadah Hujan (Tidak Ada Irigasi)",
      ],
    },

    {
      id: "water_source",
      label: "Sumber Air",
      type: "select",
      required: false,
      options: [
        "Sungai",
        "Waduk / Bendungan",
        "Sumur Bor",
        "Mata Air",
      ],
    },

    {
      id: "water_availability",
      label: "Ketersediaan Air Sepanjang Tahun",
      type: "select",
      required: false,
      options: ["Sepanjang Tahun", "Musiman (Tergantung Musim Hujan)"],
    },

    {
      id: "distance_to_water_source",
      label: "Jarak ke Sumber Air",
      type: "number",
      required: false,
      suffix: "m",
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
      id: "irrigation_notes",
      label: "Catatan Irigasi & Pengairan",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Irigasi & Pengairan",
    },
  ],
};

export default irigasiPengairan;
