// configs/hunian/kontrakan/peraturan-huni.ts

const peraturanHuni = {
  id: "peraturan-huni",
  title: "Peraturan Huni",
  description: "Aturan yang berlaku untuk penyewa rumah kontrakan.",

  fields: [
    {
      id: "max_occupants",
      label: "Maksimal Jumlah Penghuni",
      type: "number",
      required: false,
    },

    {
      id: "tenant_type_allowed",
      label: "Diperuntukkan Untuk",
      type: "select",
      required: false,
      options: [
        "Keluarga",
        "Pasangan",
        "Lajang",
        "Semua Kalangan",
      ],
    },

    {
      id: "pet_friendly",
      label: "Boleh Bawa Hewan Peliharaan",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "smoking_allowed",
      label: "Boleh Merokok",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "sublease_allowed",
      label: "Boleh Disewakan Ulang (Sub-sewa)",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "business_use_allowed",
      label: "Boleh Untuk Usaha/Kantor",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "guest_curfew",
      label: "Ada Jam Malam / Batasan Tamu",
      type: "checkbox",
      required: false,
    },

    {
      id: "identity_required",
      label: "Wajib Menyerahkan Fotokopi KTP/KK",
      type: "checkbox",
      required: false,
    },

    {
      id: "house_rules_notes",
      label: "Catatan Peraturan Tambahan",
      type: "textarea",
      required: false,
      rows: 3,
      placeholder: "Masukkan Catatan Peraturan Tambahan",
    },
  ],
};

export default peraturanHuni;
