// configs/komersial/gedung-perkantoran/legalitas.ts

const legalitas = {
  id: "legalitas",
  title: "Legalitas & Perizinan",
  description: "Dokumen legalitas kepemilikan dan perizinan resmi gedung perkantoran.",

  fields: [
    {
      id: "certificate_type",
      label: "Jenis Sertifikat Utama",
      type: "select",
      required: true,
      options: [
        "SHGB (Sertifikat Hak Guna Bangunan)",
        "SHM (Sertifikat Hak Milik)",
        "HPL (Hak Pengelolaan)",
        "Sertifikat Hak Pakai",
        "Lainnya",
      ],
    },

    {
      id: "certificate_expiry_year",
      label: "Masa Berlaku Sertifikat (Tahun)",
      type: "number",
      required: false,
      placeholder: "Contoh: 2045",
    },

    {
      id: "imb_pbam_status",
      label: "Dokumen IMB / PBG",
      type: "select",
      required: true,
      options: [
        "Ada (IMB / PBG)",
        "Dalam Proses",
        "Tidak Ada",
      ],
    },

    {
      id: "slf_status",
      label: "Sertifikat Laik Fungsi (SLF)",
      type: "select",
      required: false,
      options: [
        "Ada & Aktif",
        "Dalam Proses Perpanjangan",
        "Tidak Ada",
      ],
    },

    {
      id: "environmental_permit",
      label: "Izin Lingkungan (AMDAL / UKL-UPL)",
      type: "select",
      required: false,
      options: [
        "Ada (AMDAL)",
        "Ada (UKL-UPL)",
        "Dalam Proses",
        "Tidak Ada",
      ],
    },

    {
      id: "legal_documents",
      label: "Dokumen Pelengkap Lainnya",
      type: "checkbox_group",
      required: false,
      options: [
        "Izin Operasional Gedung",
        "Sertifikat Keselamatan Kebakaran",
        "Izin Penggunaan Lift / Escalator",
        "Sertifikat Green Building (GBCI / EDGE)",
        "PBB (Pajak Bumi dan Bangunan) Taat Bayar",
      ],
    },
  ],
};

export default legalitas;
