// configs/komersial/toko-kios/akses-usaha.ts

const aksesUsaha = {
  id: "akses-usaha",
  title: "Akses & Potensi Usaha",
  description: "Informasi akses dan potensi bisnis toko/kios.",

  fields: [
    {
      id: "front_road_width",
      label: "Lebar Jalan Depan (Jika Berdiri Sendiri)",
      type: "number",
      required: false,
      suffix: "m",
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
        "Tidak Berlaku (Di Dalam Mall)",
      ],
    },

    {
      id: "foot_traffic_level",
      label: "Tingkat Foot Traffic / Kunjungan",
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
      id: "anchor_tenant_nearby",
      label: "Dekat Anchor Tenant (Supermarket/Bioskop/dll)",
      type: "checkbox",
      required: false,
    },

    {
      id: "suitable_business_type",
      label: "Cocok Untuk Jenis Usaha",
      type: "multiselect",
      required: false,
      options: [
        "Retail Fashion",
        "F&B / Kuliner",
        "Elektronik",
        "Kecantikan / Salon",
        "Konter HP / Aksesoris",
        "Jasa (Laundry, Fotokopi, dll)",
        "Apotek / Kesehatan",
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
