/*
- pada yang dilindungi oleh authentikasi (halaman dashboard (bukan di layout)) lakukan berikut
- import useSession: sebagai tempat status login 
- clg dulu session dan router
- check di dalam komponen utama: jika status "unautenticated" maka redirect: /login
- masukkan dalam use effect supaya selalu di update saat ada perubahan
---
- session di ambil dari nextAuth: pada awalnya saat di clg fullname, status, role, pass masih kosong
- session nantinya di generate dari halaman api/auth, setelah data di submit dari /login maka session sudah berisi data
- data ini lah yang di gunakan checking untuk boleh tidaknya mengakses sebuah halaman bersangkutan(Dalam Hal Ini Dashboard)
--- 
- saat di reload, dashboard masih tampil meski sebentar, nanti akan di gunakan middleware untuk mengatasinya
---
*/

/*
"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
*/

export default function Dashboard() {
  // contoh1:
  // const { data: session, status }: { data: any; status: string } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (status === "unauthenticated" || session?.user.role !== "admin") {
  //     router.push("/login");
  //   }
  // }, [router, session?.user.role, status]);

  // contoh2: setelah ada data dari firebase
  // ambil data session

  /*
  SAAT ADA MIDDLEWARE CODE PENGECEKAN HALAMAN TIDAK PERLU DILAKUKAN DISINI CEKIDOC
  sebelumnya buka comment bintang 
  const { data: session, status }: { data: any; status: string } = useSession();
  const router = useRouter();
  
  // cek data session dan lakukan redirect ke halaman /login karena belum login
  // cek lagi ???????????????????????
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else {
      if (session !== undefined && session?.user.role !== "admin") {
        router.push("/");
      }
    }
  }, [router, session, session?.user.role, status]);
  
  */
  return (
    <div className="w-full h-60 bg-gray-300 rounded-[10px] flex justify-center items-center">
      Dashboard auth. Lorem ipsum, dolor sit amet consectetur adipisicing.
    </div>
  );
}
