// configs/hunian/cluster/informasi-cluster.ts

const informasiCluster = {
  id: "informasi-cluster",
  title: "Informasi Cluster",
  description: "Informasi mengenai perumahan, cluster, dan unit rumah.",

  fields: [
    {
      id: "housing_estate_name",
      label: "Nama Perumahan",
      type: "text",
      required: false,
      placeholder: "Masukkan Nama Perumahan",
    },

    {
      id: "cluster_name",
      label: "Nama Cluster",
      type: "text",
      required: true,
      placeholder: "Masukkan Nama Cluster",
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
      id: "house_number",
      label: "Nomor Rumah",
      type: "text",
      required: false,
      placeholder: "Masukkan Nomor Rumah",
    },

    {
      id: "house_type",
      label: "Tipe Rumah",
      type: "text",
      required: true,
      placeholder: "Contoh: 36/72",
    },

    {
      id: "architecture_style",
      label: "Gaya Arsitektur",
      type: "select",
      required: false,
      options: [
        "Minimalis",
        "Modern",
        "Klasik",
        "Mediterania",
        "Skandinavia",
        "Industrial",
        "Tropis",
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
      id: "floor_count",
      label: "Jumlah Lantai",
      type: "select",
      required: true,
      options: ["1", "2", "3", "4+"],
    },

    {
      id: "house_position",
      label: "Posisi Rumah",
      type: "select",
      required: false,
      options: [
        "Hook",
        "Tengah",
        "Ujung",
        "Menghadap Taman",
      ],
    },

    {
      id: "house_facing",
      label: "Hadap Rumah",
      type: "select",
      required: false,
      options: [
        "Utara",
        "Selatan",
        "Timur",
        "Barat",
        "Timur Laut",
        "Timur Tenggara",
        "Barat Laut",
        "Barat Daya",
      ],
    },

    {
      id: "building_width",
      label: "Lebar Bangunan",
      type: "number",
      required: false,
      suffix: "m",
    },

    {
      id: "building_length",
      label: "Panjang Bangunan",
      type: "number",
      required: false,
      suffix: "m",
    },

    {
      id: "facade_width",
      label: "Lebar Muka",
      type: "number",
      required: false,
      suffix: "m",
    },

    {
      id: "ceiling_height",
      label: "Tinggi Plafon",
      type: "number",
      required: false,
      suffix: "m",
    },

    {
      id: "occupancy_status",
      label: "Status Hunian",
      type: "select",
      required: false,
      options: [
        "Baru Serah Terima",
        "Sudah Dihuni",
        "Belum Dihuni",
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

    {
      id: "interior_condition",
      label: "Kondisi Interior",
      type: "select",
      required: false,
      options: [
        "Sangat Baik",
        "Baik",
        "Cukup",
        "Perlu Perbaikan",
      ],
    },

    {
      id: "exterior_condition",
      label: "Kondisi Eksterior",
      type: "select",
      required: false,
      options: [
        "Sangat Baik",
        "Baik",
        "Cukup",
        "Perlu Perbaikan",
      ],
    },

    {
      id: "ever_occupied",
      label: "Pernah Dihuni",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },
  ],
};

export default informasiCluster;
