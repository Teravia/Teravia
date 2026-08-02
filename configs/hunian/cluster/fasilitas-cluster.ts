// configs/hunian/cluster/fasilitas-cluster.ts

const fasilitasCluster = {
  id: "fasilitas-cluster",
  title: "Fasilitas Cluster",
  description: "Fasilitas bersama yang tersedia di dalam kompleks cluster.",

  fields: [
    { id: "cluster_gate", label: "Gapura / Gerbang Cluster", type: "checkbox", required: false },
    { id: "one_gate_system", label: "One Gate System", type: "checkbox", required: false },
    { id: "clubhouse", label: "Clubhouse", type: "checkbox", required: false },
    { id: "communal_pool", label: "Kolam Renang Komunal", type: "checkbox", required: false },
    { id: "jogging_track", label: "Jogging Track", type: "checkbox", required: false },
    { id: "communal_playground", label: "Taman Bermain Komunal", type: "checkbox", required: false },
    { id: "sports_field", label: "Lapangan Olahraga", type: "checkbox", required: false },
    { id: "cluster_garden", label: "Taman Cluster", type: "checkbox", required: false },
    { id: "cluster_guest_parking", label: "Area Parkir Tamu Cluster", type: "checkbox", required: false },
    { id: "waste_management", label: "Pengelolaan Sampah Terpadu", type: "checkbox", required: false },
    { id: "street_lighting", label: "Penerangan Jalan Cluster", type: "checkbox", required: false },
    { id: "underground_utilities", label: "Kabel Bawah Tanah", type: "checkbox", required: false },
    { id: "cluster_prayer_room", label: "Musholla Cluster", type: "checkbox", required: false },
    { id: "cluster_minimarket", label: "Minimarket Dalam Cluster", type: "checkbox", required: false },
    {
      id: "cluster_notes",
      label: "Catatan Fasilitas Cluster",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Fasilitas Cluster",
    },
  ],
};

export default fasilitasCluster;
