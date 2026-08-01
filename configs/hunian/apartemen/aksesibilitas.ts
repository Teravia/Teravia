// configs/hunian/apartemen/aksesibilitas.ts

const aksesibilitas = {
  id: "aksesibilitas",
  title: "Aksesibilitas",
  description: "Kemudahan akses di dalam gedung apartemen.",

  fields: [
    {
      id: "lift_count",
      label: "Jumlah Lift Penumpang",
      type: "number",
      required: false,
    },

    {
      id: "service_lift",
      label: "Lift Barang / Servis",
      type: "checkbox",
      required: false,
    },

    {
      id: "disability_access",
      label: "Akses Ramah Disabilitas",
      type: "checkbox",
      required: false,
    },

    {
      id: "ramp_access",
      label: "Akses Ramp",
      type: "checkbox",
      required: false,
    },

    {
      id: "stroller_friendly",
      label: "Ramah Stroller",
      type: "checkbox",
      required: false,
    },

    {
      id: "main_entrance_access",
      label: "Akses Pintu Masuk Utama",
      type: "select",
      required: false,
      options: [
        "Lobby Utama",
        "Drop Off Area",
        "Podium Parkir",
      ],
    },

    {
      id: "distance_to_lift",
      label: "Jarak Unit ke Lift",
      type: "number",
      required: false,
      suffix: "meter",
    },

    {
      id: "distance_to_entrance",
      label: "Jarak ke Pintu Masuk Utama",
      type: "number",
      required: false,
      suffix: "meter",
    },

    {
      id: "accessibility_notes",
      label: "Catatan Aksesibilitas",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Aksesibilitas",
    },
  ],
};

export default aksesibilitas;

