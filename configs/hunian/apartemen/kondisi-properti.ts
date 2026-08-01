// configs/hunian/apartemen/kondisi-properti.ts

const kondisiProperti = {
  id: "kondisi-properti",
  title: "Kondisi Properti",
  description: "Kondisi fisik unit dan bangunan apartemen.",

  fields: [
    {
      id: "unit_condition",
      label: "Kondisi Unit",
      type: "select",
      required: true,
      options: [
        "Baru",
        "Bekas",
        "Dalam Renovasi",
        "Fully Renovated",
      ],
    },

    {
      id: "building_condition",
      label: "Kondisi Bangunan",
      type: "select",
      required: false,
      options: [
        "Baru",
        "Terawat",
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
      id: "renovation_year",
      label: "Tahun Renovasi Terakhir",
      type: "number",
      required: false,
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

export default kondisiProperti;

