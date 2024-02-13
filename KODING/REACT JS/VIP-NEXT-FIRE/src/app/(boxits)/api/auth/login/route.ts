/*
- disini contoh routing akses api fetch(): POST: /api/auth/login
- penggunan req res 
- request di ambil dengan async await
- response sebagai return 
- return response mengembalikan data dan juga spek API
kesimpulan:
- API server ini di gunakan untuk menangkap request login 
  (sebagai terminal tujuan data dikirim dan di olah nantinya)
- data yang di kirim nantinya akan di gunakan utk logic dan menulis login user ke DB      

*/

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  return NextResponse.json({
    status: 200,
    message: "Success",
    data: req,
  });
}
