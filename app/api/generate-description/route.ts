import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GEMINI_API_KEY belum terpasang di Vercel Environment Variables." },
        { status: 400 }
      );
    }

    const { title, location, price, specs } = await req.json();

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `
      Buatkan deskripsi iklan properti yang sangat menarik, profesional, dan persuasif untuk marketplace properti Teravia.
      
      Detail Properti:
      - Judul/Tipe: ${title || "-"}
      - Lokasi: ${location || "-"}
      - Harga: ${price || "-"}
      - Spesifikasi/Fasilitas: ${specs || "-"}

      Gunakan bahasa Indonesia yang estetik, beri point-point keunggulan, dan akhiri dengan Call-to-Action (CTA) untuk hubungi agen. Buat rapi dan siap pakai.
    `;

    const result = await model.generateContent(prompt);
    const responseText = result.response.text();

    return NextResponse.json({ description: responseText });
  } catch (error: any) {
    console.error("AI Error:", error);
    return NextResponse.json(
      { error: error?.message || "Gagal membuat deskripsi AI" },
      { status: 500 }
    );
  }
}
