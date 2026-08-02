// configs/hunian/cluster/biaya-cluster.ts

const biayaCluster = {
  id: "biaya-cluster",
  title: "Biaya Cluster",
  description: "Perkiraan biaya rutin bulanan/tahunan rumah dalam cluster.",

  fields: [
    {
      id: "ipl_fee",
      label: "Biaya IPL / Keamanan Cluster Bulanan",
      type: "currency",
      required: false,
    },
    {
      id: "ipl_fee_included",
      label: "Termasuk Dalam Biaya IPL",
      type: "multiselect",
      required: false,
      options: ["Keamanan", "Kebersihan", "Penerangan Jalan", "Perawatan Taman"],
    },
    {
      id: "sinking_fund",
      label: "Dana Cadangan / Sinking Fund",
      type: "currency",
      required: false,
    },
    {
      id: "electricity_avg_cost",
      label: "Rata-Rata Biaya Listrik / Bulan",
      type: "currency",
      required: false,
    },
    {
      id: "water_avg_cost",
      label: "Rata-Rata Biaya Air / Bulan",
      type: "currency",
      required: false,
    },
    {
      id: "pbb_annual",
      label: "PBB per Tahun",
      type: "currency",
      required: false,
    },
    {
      id: "other_fees",
      label: "Biaya Lainnya",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Biaya Lainnya",
    },
    {
      id: "payment_notes",
      label: "Catatan Pembayaran",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Pembayaran",
    },
  ],
};

export default biayaCluster;
