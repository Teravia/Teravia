// configs/komersial/gedung-perkantoran/lingkungan.ts

const lingkungan = {
  id: "lingkungan",
  title: "Lingkungan & Akses Lokasi",
  description: "Informasi mengenai aksesibilitas, konektivitas, dan fasilitas sekitar gedung perkantoran.",

  fields: [
    {
      id: "business_district_zone",
      label: "Zona / Kawasan Bisnis",
      type: "select",
      required: true,
      options: [
        "CBD (Central Business District)",
        "Non-CBD (Area Komersial Utam)",
        "Kawasan Industri & Pergudangan",
        "Kawasan Koridor Utama / Sub-CBD",
        "Kawasan Sentra Bisnis Lokal",
      ],
    },

    {
      id: "odd_even_policy",
      label: "Jalur Ganjil Genap",
      type: "select",
      required: false,
      options: [
        "Termasuk Area Ganjil Genap",
        "Bebas Ganjil Genap",
      ],
    },

    {
      id: "public_transport_access",
      label: "Akses Transportasi Publik Utama",
      type: "checkbox_group",
      required: false,
      options: [
        "Stasiun MRT",
        "Stasiun LRT",
        "Halte Halte Busway / TransJakarta",
        "Stasiun Kereta Commuter Line (KRL)",
        "Halte Bus Kota / Feeder",
        "Pangkalan Taksir / Area Drop-off Ojek Online",
      ],
    },

    {
      id: "toll_access",
      label: "Akses Jalan Tol Terdekat",
      type: "select",
      required: false,
      options: [
        "< 5 Menit ke Gerbang Tol",
        "5 - 15 Menit ke Gerbang Tol",
        "15 - 30 Menit ke Gerbang Tol",
        "> 30 Menit ke Gerbang Tol",
      ],
    },

    {
      id: "surrounding_facilities",
      label: "Fasilitas Pendukung Sekitar Gedung",
      type: "checkbox_group",
      required: false,
      options: [
        "Pusat Perbelanjaan / Mall",
        "Hotel Bintang 4/5 (Akomodasi Tamu)",
        "Pusat Perbankan & Kantor Cabang Bank",
        "Restoran & Kafe Business Meeting",
        "Rumah Sakit / Fasilitas Kesehatan",
        "Kedutaan Besar / Instansi Pemerintah",
      ],
    },

    {
      id: "flood_risk",
      label: "Potensi / Bebas Banjir",
      type: "select",
      required: false,
      options: [
        "Bebas Banjir (Sistem Polder / Pompa Mandiri)",
        "Area Bebas Banjir",
        "Potensi Genangan Ringan",
      ],
    },
  ],
};

export default lingkungan;
