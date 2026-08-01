// configs/hunian/apartemen/biaya-rutin.ts

const biayaRutin = {
  id: "biaya-rutin",
  title: "Biaya Rutin",
  description: "Perkiraan biaya rutin bulanan/tahunan unit apartemen.",

  fields: [
    {
      id: "maintenance_fee",
      label: "Biaya IPL / Maintenance Bulanan",
      type: "currency",
      required: false,
    },

    {
      id: "maintenance_fee_unit",
      label: "Satuan Biaya IPL",
      type: "select",
      required: false,
      options: [
        "per m2",
        "Flat per Unit",
      ],
    },

    {
      id: "sinking_fund",
      label: "Sinking Fund",
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
      id: "parking_fee",
      label: "Biaya Parkir Bulanan",
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
      id: "fees_included",
      label: "Termasuk Dalam Biaya IPL",
      type: "multiselect",
      required: false,
      options: [
        "Keamanan",
        "Kebersihan",
        "Air",
        "Parkir Motor",
      ],
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

export default biayaRutin;

