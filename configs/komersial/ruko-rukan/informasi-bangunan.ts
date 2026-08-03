// configs/komersial/ruko-rukan/informasi-bangunan.ts

const informasiBangunan = {
  id: "informasi-bangunan",
  title: "Informasi Bangunan",
  description: "Informasi mengenai lokasi dan detail bangunan ruko/rukan.",

  fields: [
    {
      id: "complex_or_street_name",
      label: "Nama Komplek / Nama Jalan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Komplek atau Nama Jalan",
    },
    {
      id: "developer",
      label: "Developer",
      type: "text",
      required: false,
      placeholder: "Masukkan Developer",
    },
    {
      id: "block",
      label: "Blok",
      type: "text",
      required: false,
      placeholder: "Masukkan Blok",
    },
    {
      id: "unit_number",
      label: "Nomor Unit",
      type: "text",
      required: false,
      placeholder: "Masukkan Nomor Unit",
    },
    {
      id: "floor_count",
      label: "Jumlah Lantai",
      type: "select",
      required: true,
      options: ["1", "2", "3", "4", "5+"],
    },
    {
      id: "unit_position",
      label: "Posisi Unit",
      type: "select",
      required: false,
      options: [
        "Hook / Sudut",
        "Tengah",
        "Ujung",
      ],
    },
    {
      id: "facing_direction",
      label: "Hadap Bangunan",
      type: "select",
      required: false,
      options: [
        "Utara",
        "Selatan",
        "Timur",
        "Barat",
      ],
    },
    {
      id: "year_built",
      label: "Tahun Dibangun",
      type: "number",
      required: false,
    },
    {
      id: "renovation_year",
      label: "Tahun Renovasi Terakhir",
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

export default informasiBangunan;
