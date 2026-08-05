// configs/komersial/gedung-perkantoran/keamanan.ts

const keamanan = {
  id: "keamanan",
  title: "Sistem Keamanan & Keselamatan",
  description: "Fasilitas dan protokol keamanan serta keselamatan di area gedung perkantoran.",

  fields: [
    {
      id: "security_features",
      label: "Sistem Keamanan",
      type: "checkbox_group",
      required: false,
      options: [
        "Keamanan 24 Jam",
        "CCTV 24 Jam (Area Publik & Koridor)",
        "Turnstile / Akses Portal Masuk",
        "Access Card System (Lift & Pintu Utama)",
        "Biometric / Facial Recognition System",
        "Pemeriksaan Detektor Logam / Metal Detector",
        "Pemeriksaan X-Ray Kendaraan / Barang",
        "Pos Keamanan / Security Outpost",
        "Petugas Patroli Rutin",
      ],
    },

    {
      id: "fire_safety",
      label: "Sistem Proteksi Kebakaran",
      type: "checkbox_group",
      required: false,
      options: [
        "Springkler Otomatis (Automatic Sprinkler)",
        "Detektor Asap & Panas (Smoke & Heat Detector)",
        "Alat Pemadam Api Ringan (APAR)",
        "Hydrant System (Indoor & Outdoor)",
        "Tangga Darurat Khusus Kebakaran",
        "Pintu Tahan Api (Fire Door)",
        "Sistem Alarm Kebakaran Terpusat",
        "Pressurized Fan / Fan Tekanan Tangga Darurat",
      ],
    },

    {
      id: "disaster_safety",
      label: "Keselamatan & Mitigasi Bencana",
      type: "checkbox_group",
      required: false,
      options: [
        "Sertifikasi Tahan Gempa",
        "Jalur Evakuasi Darurat",
        "Titik Kumpul (Assembly Point)",
        "Sistem Evakuasi Suara (Public Address System)",
      ],
    },
  ],
};

export default keamanan;
