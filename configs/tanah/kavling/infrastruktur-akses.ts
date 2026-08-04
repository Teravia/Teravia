// configs/tanah/kavling/infrastruktur-akses.ts

const infrastrukturAkses = {
  id: "infrastruktur-akses",
  title: "Infrastruktur & Akses",
  description: "Ketersediaan infrastruktur dan akses jalan menuju kavling.",

  fields: [
    {
      id: "front_road_width",
      label: "Lebar Jalan Depan",
      type: "number",
      required: true,
      suffix: "m",
    },

    {
      id: "road_surface_type",
      label: "Jenis Permukaan Jalan",
      type: "select",
      required: true,
      options: [
        "Aspal",
        "Paving Block",
        "Cor Beton",
        "Tanah / Belum Diperkeras",
      ],
    },

    {
      id: "truck_access",
      label: "Bisa Dilalui Truk / Kendaraan Besar",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "electricity_available",
      label: "Listrik Sudah Masuk Lokasi",
      type: "radio",
      required: true,
      options: ["Ya", "Tidak", "Terdekat (Perlu Tarik Jaringan)"],
    },

    {
      id: "water_available",
      label: "Sumber Air Tersedia",
      type: "select",
      required: false,
      options: ["PDAM Sudah Masuk", "Sumur Bor Memungkinkan", "Belum Ada Sumber Air"],
    },

    {
      id: "drainage_available",
      label: "Saluran Drainase Tersedia",
      type: "checkbox",
      required: false,
    },

    {
      id: "internet_cable_available",
      label: "Jaringan Kabel Internet/Telepon Tersedia",
      type: "checkbox",
      required: false,
    },

    {
      id: "distance_to_main_road",
      label: "Jarak ke Jalan Utama",
      type: "number",
      required: false,
      suffix: "m",
    },

    {
      id: "infrastructure_notes",
      label: "Catatan Infrastruktur & Akses",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Infrastruktur & Akses",
    },
  ],
};

export default infrastrukturAkses;
