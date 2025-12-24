import { konekDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const u = searchParams.get("u");
  const db = await konekDb();
  const data = await db.collection("inbox").find({ untuk: u }).sort({ tgl: -1 }).toArray();
  return NextResponse.json(data);
}
