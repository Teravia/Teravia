// configs/hunian/rusun/biaya-rutin.ts

const biayaRutin = {
  id: "biaya-rutin",
  title: "Biaya Rutin",
  description: "Perkiraan biaya rutin bulanan/tahunan unit rusun.",

  fields: [
    { id: "maintenance_fee", label: "Biaya IPL / Service Charge Bulanan", type: "currency", required: false },
    { id: "electricity_avg_cost", label: "Rata-Rata Biaya Listrik / Bulan", type: "currency", required: false },
    { id: "water_avg_cost", label: "Rata-Rata Biaya Air / Bulan", type: "currency", required: false },
    { id: "pbb_annual", label: "PBB per Tahun", type: "currency", required: false },
    {
      id: "fees_included",
      label: "Termasuk Dalam Biaya IPL",
      type: "multiselect",
      required: false,
      options: ["Keamanan", "Kebersihan", "Air"],
    },
    {
      id: "other_fees",
      label: "Biaya Lainnya",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Biaya Lainnya",
    },
  ],
};

export default biayaRutin;
