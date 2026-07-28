import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, propertyType, price, landArea, buildingArea, bedrooms, bathrooms, locationName } = body;

    if (!title || !propertyType) {
      return NextResponse.json({ error: "Judul dan Tipe Properti wajib diisi" }, { status: 400 });
    }

    // Menggunakan model Gemini 1.5 Flash (Sangat Cepat & Gratis)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Anda adalah seorang ahli Copywriter Properti / Broker Profesional.
      Buatkan deskripsi penjualan properti yang menarik, persuasif, elegan, dan bernilai jual tinggi berdasarkan data berikut:
      
      - Judul: ${title}
      - Tipe Properti: ${propertyType}
      - Harga: Rp ${Number(price).toLocaleString('id-ID')}
      - Lokasi: ${locationName || 'Lokasi Strategis'}
      - Luas Tanah: ${landArea || 0} m²
      - Luas Bangunan: ${buildingArea || 0} m²
      - Fasilitas: ${bedrooms || 0} Kamar Tidur, ${bathrooms || 0} Kamar Mandi

      Instruksi Penulisan:
      1. Paragraf 1: Call to Action / Hook yang membuat pembeli tertarik.
      2. Paragraf 2: Keunggulan lokasi dan kenyamanan hunian.
      3. Point-by-point fasilitas & spesifikasi utama.
      4. Penutup: Dorongan untuk segera menjadwalkan survey sebelum terjual.
    `;

    const result = await model.generateContent(prompt);
    const aiText = result.response.text();

    return NextResponse.json({ success: true, description: aiText });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
