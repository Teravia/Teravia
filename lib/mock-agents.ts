export interface AgentListing {
  id: string;
  title: string;
  price: number;
  pricePeriod?: string; // hanya untuk listing sewa
  type: string;
  location: string;
  beds?: number;
  baths?: number;
  area: number;
  image: string;
  status: "Dijual" | "Disewakan";
}

export interface AgentProfile {
  id: string;
  name: string;
  tier: "kavling" | "cluster" | "penthouse";
  location: string;
  coBrokeAvailable: boolean;
  commissionSplit?: string;
  whatsapp: string;
  coBrokeWhatsapp?: string;
  specialties: string[];
  joinedYear: number;
  bio: string;
  listings: AgentListing[];
}

export const TIER_LABEL: Record<AgentProfile["tier"], string> = {
  kavling: "Member",
  cluster: "Verified",
  penthouse: "Premium",
};

export const MOCK_AGENTS: AgentProfile[] = [
  {
    id: "a1",
    name: "Budi Santoso",
    tier: "penthouse",
    location: "Bandung Selatan",
    coBrokeAvailable: true,
    commissionSplit: "50 : 50",
    whatsapp: "6281234567890",
    coBrokeWhatsapp: "6281234500001",
    specialties: ["Rumah", "Cluster", "Villa"],
    joinedYear: 2022,
    bio: "Fokus di kawasan Bandung Selatan, spesialis rumah cluster dan villa investasi selama lebih dari 5 tahun.",
    listings: [
      {
        id: "1",
        title: "Rumah Minimalis Modern 2 Lantai Cluster Exclusive",
        price: 850000000,
        type: "Rumah",
        location: "Kopo, Bandung",
        beds: 3,
        baths: 2,
        area: 90,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
        status: "Dijual",
      },
      {
        id: "6",
        title: "Rumah Cluster Nyaman Bebas Banjir One Gate System",
        price: 980000000,
        type: "Cluster",
        location: "Margahayu, Bandung",
        beds: 3,
        baths: 2,
        area: 84,
        image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80",
        status: "Dijual",
      },
    ],
  },
  {
    id: "a2",
    name: "Siti Rahayu",
    tier: "cluster",
    location: "Jakarta Selatan",
    coBrokeAvailable: true,
    commissionSplit: "60 : 40",
    whatsapp: "6281234567891",
    coBrokeWhatsapp: "6281234500002",
    specialties: ["Apartemen", "Office Space"],
    joinedYear: 2023,
    bio: "Spesialis unit apartemen dan office space di kawasan CBD Jakarta Selatan.",
    listings: [
      {
        id: "9",
        title: "Office Space Grade A Siap Pakai CBD",
        price: 8500000,
        pricePeriod: "Bulan",
        type: "Office Space",
        location: "Sudirman, Jakarta",
        area: 45,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
        status: "Disewakan",
      },
    ],
  },
  {
    id: "a3",
    name: "Ahmad Fauzi",
    tier: "kavling",
    location: "Bandung Utara",
    coBrokeAvailable: false,
    whatsapp: "6281234567892",
    specialties: ["Tanah Kavling"],
    joinedYear: 2024,
    bio: "Fokus jual tanah kavling siap bangun di kawasan Bandung Utara.",
    listings: [
      {
        id: "4",
        title: "Tanah Kavling Siap Bangun Dalam Kawasan",
        price: 320000000,
        type: "Kavling",
        location: "Cileunyi, Bandung",
        area: 150,
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80",
        status: "Dijual",
      },
    ],
  },
  {
    id: "a4",
    name: "Dewi Anggraini",
    tier: "penthouse",
    location: "Bali",
    coBrokeAvailable: true,
    commissionSplit: "50 : 50",
    whatsapp: "6281234567893",
    coBrokeWhatsapp: "6281234500004",
    specialties: ["Villa", "Tanah"],
    joinedYear: 2021,
    bio: "10+ tahun pengalaman di pasar villa investasi Bali, spesialis kawasan Ubud dan sekitarnya.",
    listings: [
      {
        id: "5",
        title: "Villa Private Pool Dekat Kawasan Wisata",
        price: 2800000000,
        type: "Villa",
        location: "Lembang, Bandung",
        beds: 4,
        baths: 3,
        area: 210,
        image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
        status: "Dijual",
      },
      {
        id: "12",
        title: "Villa Harian Private Pool Cocok Liburan Keluarga",
        price: 1200000,
        pricePeriod: "Hari",
        type: "Villa",
        location: "Ciwidey, Bandung",
        beds: 3,
        baths: 2,
        area: 150,
        image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=800&q=80",
        status: "Disewakan",
      },
    ],
  },
  {
    id: "a5",
    name: "Rizky Ramadhan",
    tier: "cluster",
    location: "Bandung Kota",
    coBrokeAvailable: false,
    whatsapp: "6281234567894",
    specialties: ["Ruko/Rukan", "Toko/Kios"],
    joinedYear: 2023,
    bio: "Spesialis properti komersial (ruko dan kios) di kawasan pusat Kota Bandung.",
    listings: [
      {
        id: "2",
        title: "Ruko Strategis Pinggir Jalan Utama Siap Pakai",
        price: 1500000000,
        type: "Ruko/Rukan",
        location: "Buah Batu, Bandung",
        area: 120,
        image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80",
        status: "Dijual",
      },
    ],
  },
];
