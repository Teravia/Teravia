// configs/komersial/gedung-perkantoran/validator.ts

import { z } from "zod";

export const gedungPerkantoranSchema = z.object({
  // Informasi Dasar
  title: z.string().min(5, "Judul listing minimal 5 karakter"),
  transaction_type: z.enum(["jual", "sewa", "jual_sewa"], {
    required_error: "Tipe transaksi harus dipilih",
  }),
  price: z.number().positive("Harga harus berupa angka positif"),

  // Informasi Gedung
  building_name: z.string().min(2, "Nama gedung wajib diisi"),
  developer_name: z.string().optional(),
  building_management: z.string().optional(),
  year_built: z.number().int().min(1800).max(new Date().getFullYear()).optional(),
  occupancy_rate: z.number().min(0).max(100).optional(),

  // Spesifikasi Gedung
  land_area: z.number().positive("Luas tanah harus positif"),
  building_area: z.number().positive("Luas bangunan harus positif"),
  total_floors: z.number().int().positive("Jumlah lantai harus positif"),

  // Parkir & Fasilitas
  car_parking_capacity: z.number().int().nonnegative().optional(),
  motorcycle_parking_capacity: z.number().int().nonnegative().optional(),
  building_facilities: z.array(z.string()).optional(),

  // Keamanan & Utilitas
  security_features: z.array(z.string()).optional(),
  fire_safety: z.array(z.string()).optional(),
  water_source: z.array(z.string()).optional(),

  // Legalitas
  certificate_type: z.string().min(1, "Jenis sertifikat/legalitas wajib dipilih"),
  building_approval_permit: z.boolean().optional(),
});

export type GedungPerkantoranInput = z.infer<typeof gedungPerkantoranSchema>;

export const validateGedungPerkantoran = (data: unknown) => {
  return gedungPerkantoranSchema.safeParse(data);
};

export default validateGedungPerkantoran;
