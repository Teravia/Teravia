import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
  try {
    const { title, location, price, specs } = await req.json();

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `
      Buatkan deskripsi iklan properti yang sangat menarik, profesional, dan persuasif untuk marketplace properti Teravia.
      
      Detail Properti:
      - Judul/Tipe: ${title}
      - Lokasi: ${location}
      - Harga: ${price}
      - Spesifikasi/Fasilitas: ${specs}

      Gunakan bahasa Indonesia yang estetik, beri point-point keunggulan, dan akhiri dengan Call-to-Action (CTA) untuk hubungi agen. Jangan gunakan format markdown yang terlalu ramai, buat rapi dan siap pakai.
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ description: responseText });
  } catch (error) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: "Gagal membuat deskripsi AI" },
      { status: 500 }
    );
  }
}
