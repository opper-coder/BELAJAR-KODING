/*
- contoh dasar pembuatan API GET 
- saat url di akses maka ada response API ini
- 
*/

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ status: 200, message: "Success" });
}
