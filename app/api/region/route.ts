import { NextResponse } from "next/server";

// 1. Handler GET (Untuk mengambil daftar provinsi / kota / kecamatan)
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const type = searchParams.get("type"); // contoh: province, regency, district
    const id = searchParams.get("id");

    // Jika kamu menghubungkan ke database / API External wilayah Indonesia:
    // Kamu bisa ganti data di bawah ini sesuai kebutuhan DB-mu.
    const dummyProvinces = [
      { id: "1", name: "DKI Jakarta" },
      { id: "2", name: "Jawa Barat" },
      { id: "3", name: "Jawa Tengah" },
      { id: "4", name: "Jawa Timur" },
      { id: "5", name: "Banten" },
    ];

    return NextResponse.json({
      success: true,
      data: dummyProvinces,
    });
  } catch (error) {
    console.error("Region GET Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data wilayah" },
      { status: 500 }
    );
  }
}

// 2. Handler POST (Jika frontend kamu juga mengirimkan data lokasi via POST)
export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Logika pencarian / pemrosesan region via POST jika ada
    return NextResponse.json({
      success: true,
      message: "Region query processed",
      data: body,
    });
  } catch (error) {
    console.error("Region POST Error:", error);
    return NextResponse.json(
      { success: false, error: "Gagal memproses data wilayah" },
      { status: 500 }
    );
  }
}
