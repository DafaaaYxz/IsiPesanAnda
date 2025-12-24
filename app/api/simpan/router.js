
import { konekDb } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { untuk, pesan } = await req.json();
  const db = await konekDb();
  await db.collection("inbox").insertOne({ untuk, pesan, tgl: new Date() });
  return NextResponse.json({ ok: true });
}
