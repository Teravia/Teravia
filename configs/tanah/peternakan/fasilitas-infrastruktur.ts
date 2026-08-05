// configs/tanah/peternakan/fasilitas-infrastruktur.ts

const fasilitasInfrastruktur = {
  id: "fasilitas-infrastruktur",
  title: "Fasilitas & Infrastruktur",
  description: "Ketersediaan fasilitas pendukung dan infrastruktur peternakan.",

  fields: [
    { id: "feed_storage", label: "Gudang Pakan", type: "checkbox", required: false },
    { id: "water_source", label: "Sumber Air", type: "select", required: true, options: ["Sumur Bor", "PDAM", "Sungai", "Tidak Ada"] },
    { id: "electrical_power", label: "Daya Listrik", type: "number", required: false, suffix: "Watt" },
    { id: "backup_generator", label: "Genset Cadangan", type: "checkbox", required: false },
    {
      id: "waste_management",
      label: "Sistem Pengelolaan Limbah/Kotoran",
      type: "select",
      required: true,
      options: [
        "Ada Instalasi Pengolahan (Biogas/IPAL)",
        "Ditampung Manual",
        "Belum Ada Pengelolaan",
      ],
    },
    { id: "staff_housing", label: "Rumah Karyawan / Penjaga", type: "checkbox", required: false },
    { id: "isolation_area", label: "Area Karantina/Isolasi Ternak Sakit", type: "checkbox", required: false },
    {
      id: "road_access_type",
      label: "Jenis Akses Jalan",
      type: "select",
      required: true,
      options: [
        "Jalan Aspal/Beton",
        "Jalan Tanah Bisa Kendaraan",
        "Jalan Setapak",
      ],
    },
    { id: "truck_access", label: "Bisa Dilalui Truk Pakan/Angkut Ternak", type: "radio", required: false, options: ["Ya", "Tidak"] },
    {
      id: "infrastructure_notes",
      label: "Catatan Fasilitas & Infrastruktur",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Fasilitas & Infrastruktur",
    },
  ],
};

export default fasilitasInfrastruktur;
