// configs/hunian/kost/peraturan-huni.ts

const peraturanHuni = {
  id: "peraturan-huni",
  title: "Peraturan Huni",
  description: "Aturan yang berlaku untuk penghuni kost.",

  fields: [
    {
      id: "opposite_gender_guest",
      label: "Tamu Lawan Jenis Boleh Masuk",
      type: "radio",
      required: false,
      options: ["Boleh", "Boleh dengan Batasan Jam", "Tidak Boleh"],
    },

    {
      id: "guest_curfew_time",
      label: "Batas Jam Tamu Berkunjung",
      type: "text",
      required: false,
      placeholder: "Contoh: Sampai pukul 21.00",
    },

    {
      id: "overnight_guest",
      label: "Boleh Menginap Tamu",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "smoking_allowed",
      label: "Boleh Merokok",
      type: "select",
      required: false,
      options: ["Boleh di Kamar", "Hanya di Area Merokok", "Tidak Boleh Sama Sekali"],
    },

    {
      id: "pet_friendly",
      label: "Boleh Bawa Hewan Peliharaan",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "cooking_in_room",
      label: "Boleh Masak di Kamar",
      type: "radio",
      required: false,
      options: ["Ya", "Tidak"],
    },

    {
      id: "vehicle_allowed",
      label: "Boleh Bawa Kendaraan",
      type: "multiselect",
      required: false,
      options: ["Motor", "Mobil", "Sepeda"],
    },

    {
      id: "identity_required",
      label: "Wajib Menyerahkan Fotokopi KTP/KK",
      type: "checkbox",
      required: false,
    },

    {
      id: "tenant_type_allowed",
      label: "Diperuntukkan Untuk",
      type: "select",
      required: false,
      options: [
        "Karyawan",
        "Mahasiswa",
        "Umum",
      ],
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
