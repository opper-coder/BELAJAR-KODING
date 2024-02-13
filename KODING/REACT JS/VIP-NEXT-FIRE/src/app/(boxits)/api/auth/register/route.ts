/*
API ini di buat untuk POST data dari form 
requestnya kita kirim ke firebase
- register(req) / jalankan register dari firebase
- returnya nextResponse berrisii status dan messages 

*/

import { registerAdmin } from "@/app/(boxits)/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const res = await registerAdmin(req);
  return NextResponse.json(
    { status: res.status, message: res.message },
    { status: res.statusCode }
  );
}
