// configs/hunian/villa/informasi-villa.ts

const informasiVilla = {
  id: "informasi-villa",
  title: "Informasi Villa",
  description: "Informasi mengenai lokasi dan detail bangunan villa.",

  fields: [
    {
      id: "villa_name",
      label: "Nama Villa",
      type: "text",
      required: true,
      placeholder: "Masukkan Nama Villa",
    },
    {
      id: "tourist_area",
      label: "Kawasan Wisata",
      type: "text",
      required: false,
      placeholder: "Contoh: Ubud, Seminyak, Puncak, Lembang",
    },
    {
      id: "developer",
      label: "Developer / Kontraktor",
      type: "text",
      required: false,
      placeholder: "Masukkan Developer / Kontraktor",
    },
    {
      id: "architecture_style",
      label: "Gaya Arsitektur",
      type: "select",
      required: false,
      options: [
        "Bali Tradisional",
        "Modern Tropis",
        "Mediterania",
        "Minimalis",
        "Kontemporer",
      ],
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
      id: "renovation_year",
      label: "Tahun Renovasi Terakhir",
      type: "number",
      required: false,
    },
    {
      id: "view_type",
      label: "Pemandangan",
      type: "multiselect",
      required: false,
      options: [
        "Ocean View",
        "Mountain View",
        "Rice Field View",
        "Valley View",
        "Garden View",
        "Sunset View",
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
  ],
};

export default informasiVilla;
