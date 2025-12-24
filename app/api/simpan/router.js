import { konekKeDatabase } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { penerima, isi } = await req.json();
  const db = await konekKeDatabase();
  await db.collection("pesan").insertOne({
    penerima,
    isi,
    tgl: new Date()
  });
  return NextResponse.json({ sukses: true });
}
