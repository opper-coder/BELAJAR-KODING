/*
- file middleware ini karena di letakan pada root sejajar app dalam src, maka akan di jalankan otomatis paling awal
- karena di jalankan paling awal, maka di dalamnya di manfaatkan untuk pengecekan login user
- jika login == false maka silahkan masuk ke halaman manapun, kecuali:
- di dalam matcher ada daftar "url halaman" maka response redirect ke /login.tsx

*/

// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const isLogin = true;
//   if (!isLogin) {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }
// }

// export const config = {
//   matcher: ["/dashboard/:path*", "/about/:path*"],
// };

// ----------------------------------------------------
// perubahan

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./app/(boxits)/middlewares/withAuth";

// middle ware utama
export function mainMiddleware(request: NextRequest) {
  const res = NextResponse.next();
  return res;
}

// withAuth yg kita buat di jalankan. parameter adalah kembalikan halaman yang barusan di akses lalu di tendang ke loginpage
export default withAuth(mainMiddleware, ["/dashboard_auth", "/properties"]);
