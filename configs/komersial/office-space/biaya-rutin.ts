// configs/komersial/office-space/biaya-rutin.ts

const biayaRutin = {
  id: "biaya-rutin",
  title: "Biaya Rutin",
  description: "Perkiraan biaya rutin bulanan/tahunan unit office space.",

  fields: [
    {
      id: "service_charge_per_sqm",
      label: "Service Charge per m2 per Bulan",
      type: "currency",
      required: true,
    },
    {
      id: "service_charge_included",
      label: "Termasuk Dalam Service Charge",
      type: "multiselect",
      required: false,
      options: [
        "Listrik Area Bersama",
        "Keamanan",
        "Kebersihan",
        "AC Sentral",
        "Parkir",
      ],
    },
    { id: "sinking_fund", label: "Sinking Fund", type: "currency", required: false },
    { id: "electricity_avg_cost", label: "Rata-Rata Biaya Listrik Unit / Bulan", type: "currency", required: false },
    { id: "pbb_annual", label: "PBB per Tahun", type: "currency", required: false },
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
