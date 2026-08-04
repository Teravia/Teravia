// configs/komersial/toko-kios/informasi-unit.ts

const informasiUnit = {
  id: "informasi-unit",
  title: "Informasi Unit",
  description: "Informasi mengenai lokasi dan detail unit toko/kios.",

  fields: [
    {
      id: "mall_or_street_name",
      label: "Nama Mall / Pertokoan / Nama Jalan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Mall/Pertokoan atau Nama Jalan",
    },
    {
      id: "floor_level",
      label: "Lantai / Level",
      type: "text",
      required: false,
      placeholder: "Contoh: Ground Floor, Lantai 2",
    },
    {
      id: "unit_number",
      label: "Nomor Unit / Kios",
      type: "text",
      required: false,
      placeholder: "Masukkan Nomor Unit/Kios",
    },
    {
      id: "unit_position",
      label: "Posisi Unit",
      type: "select",
      required: false,
      options: [
        "Hook / Sudut",
        "Dekat Pintu Masuk / Entrance",
        "Dekat Eskalator / Lift",
        "Dekat Atrium / Area Ramai",
        "Tengah Koridor",
        "Ujung Koridor",
      ],
    },
    {
      id: "year_built",
      label: "Tahun Dibangun",
      type: "number",
      required: false,
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
      id: "ever_occupied",
      label: "Pernah Dipakai Usaha Sebelumnya",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },
  ],
};

export default informasiUnit;
