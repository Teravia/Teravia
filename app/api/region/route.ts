import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const parentId = searchParams.get("parentId");
    const level = searchParams.get("level") || "1"; // Default 1: Provinsi

    let query = supabase.from("regions").select("id, name");

    if (parentId) {
      query = query.eq("parent_id", parentId);
    } else {
      query = query.eq("level", parseInt(level));
    }

    const { data, error } = await query.order("name", { ascending: true });

    if (error) throw error;

    return NextResponse.json({ success: true, data });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
