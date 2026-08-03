// configs/hunian/kost/kamar-tersedia.ts

const kamarTersedia = {
  id: "kamar-tersedia",
  title: "Kamar Tersedia",
  description: "Detail tipe kamar, ukuran, dan harga sewa yang tersedia.",

  fields: [
    {
      id: "available_room_count",
      label: "Jumlah Kamar Tersedia",
      type: "number",
      required: true,
    },

    {
      id: "room_size",
      label: "Ukuran Kamar",
      type: "number",
      required: true,
      suffix: "m2",
    },

    {
      id: "room_type",
      label: "Tipe Kamar",
      type: "select",
      required: true,
      options: [
        "Single Bed",
        "Double Bed",
        "Twin Bed",
      ],
    },

    {
      id: "bathroom_type",
      label: "Kamar Mandi",
      type: "select",
      required: true,
      options: [
        "Dalam Kamar",
        "Luar Kamar (Sharing)",
      ],
    },

    {
      id: "price_monthly",
      label: "Harga Sewa per Bulan",
      type: "currency",
      required: true,
    },

    {
      id: "price_quarterly",
      label: "Harga Sewa per 3 Bulan",
      type: "currency",
      required: false,
    },

    {
      id: "price_semiannual",
      label: "Harga Sewa per 6 Bulan",
      type: "currency",
      required: false,
    },

    {
      id: "price_annual",
      label: "Harga Sewa per Tahun",
      type: "currency",
      required: false,
    },

    {
      id: "window",
      label: "Ada Jendela",
      type: "checkbox",
      required: false,
    },

    {
      id: "room_floor_level",
      label: "Lantai Kamar",
      type: "select",
      required: false,
      options: ["Lantai 1", "Lantai 2", "Lantai 3", "Lantai 4+"],
    },

    {
      id: "room_notes",
      label: "Catatan Kamar",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Kamar",
    },
  ],
};

export default kamarTersedia;
