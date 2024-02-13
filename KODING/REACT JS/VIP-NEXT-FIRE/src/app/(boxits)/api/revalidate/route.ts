/*
REVALIDATE HANDLER
- jika ada pemanggilan /route api revalidate ini maka ambil request pd argumnent
- tangkap argument tag
- tangkap argument secret
- lalu buat return response atas request
- jangan lupa pengecekan tag dan secret
- cara panggil di postman:
  - POST: http://localhost:3000/api/revalidate?tag=markProduct&secret=123
- atau pakai tombol dengan fungsi fetch(url diatas)
- untuk secret nanti bisa di simpan pada env.global supaya secure
*/

import { NextRequest, NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  // if (secret !== process.env.REVALIDATE_TOKEN) { // ini jika menggunakan .env.local
  if (secret !== "1234") {
    return NextResponse.json(
      { status: 401, message: "Invalid secret" },
      { status: 401 }
    );
  }

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "Missing tag param" },
      { status: 400 }
    );
  }

  revalidateTag(tag);
  return NextResponse.json({ revalidate: true, now: Date.now() });
}
