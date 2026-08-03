// configs/komersial/ruko-rukan/akses-usaha.ts

const aksesUsaha = {
  id: "akses-usaha",
  title: "Akses & Potensi Usaha",
  description: "Informasi akses jalan dan potensi bisnis ruko/rukan.",

  fields: [
    {
      id: "front_road_width",
      label: "Lebar Jalan Depan",
      type: "number",
      required: true,
      suffix: "m",
    },

    {
      id: "truck_access",
      label: "Bisa Dilalui Truk / Kendaraan Besar",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "street_visibility",
      label: "Visibilitas dari Jalan Raya",
      type: "select",
      required: false,
      options: [
        "Sangat Terlihat (Jalan Utama)",
        "Cukup Terlihat",
        "Kurang Terlihat (Jalan Dalam)",
      ],
    },

    {
      id: "traffic_density",
      label: "Kepadatan Lalu Lintas Sekitar",
      type: "select",
      required: false,
      options: [
        "Sangat Ramai",
        "Ramai",
        "Sedang",
        "Sepi",
      ],
    },

    {
      id: "two_way_street",
      label: "Jalan Dua Arah",
      type: "checkbox",
      required: false,
    },

    {
      id: "suitable_business_type",
      label: "Cocok Untuk Jenis Usaha",
      type: "multiselect",
      required: false,
      options: [
        "Retail / Toko",
        "F&B / Restoran",
        "Kantor",
        "Klinik / Apotek",
        "Bank / Fintech",
        "Bengkel",
        "Gudang Kecil",
        "Showroom",
        "Salon / Spa",
      ],
    },

    {
      id: "existing_business_permit",
      label: "Sudah Ada Izin Usaha Sebelumnya",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "nearby_competitors",
      label: "Ada Usaha Sejenis di Sekitar",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "business_notes",
      label: "Catatan Potensi Usaha",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Potensi Usaha",
    },
  ],
};

export default aksesUsaha;
