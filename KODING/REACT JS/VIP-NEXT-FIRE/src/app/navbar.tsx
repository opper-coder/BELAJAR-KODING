/*
- navbar sebagai komponen yang akan di import pada layout utama maka akan tampil terus
- tetapi di layout dilakukan pengkondisian dimana, navbar hanya di izinkan tampil di halaman yg dipilih 
- dengan status usePathname, CSS tombol aktif di tentukan
- ada link sebagai pengganti tag a
- ada useRouter sebagai pengganti routing onClick Button (kayak redirect)
- Link dan router sama melakukan routing, bedanya pada "href(saat diklik) dan onClick(bisa melakukan dg fungsi)"
*/
/*
- disini ada tombol yang mengarahkan ke halaman signIn() dari NextAuth  
- ada check session : jika login tombol ganti jadi logout
- di login UI ada pengiriman data ke dalam session lihat halaman login selanjutnya  
*/

"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  // const router = useRouter();
  const { data: session, status }: { data: any; status: string } = useSession();

  return (
    <nav className="flex bg-gray-800 py-2 px-5">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-5">
        <Link href="/">
          <li
            className={`mr-3 ${
              pathname === "/" ? "text-yellow-300" : "text-blue-300"
            } 
                  cursor-pointer`}
          >
            Home
          </li>
        </Link>
        <Link href="/about">
          <li
            className={`mr-3 ${
              pathname === "/about" ? "text-yellow-300" : "text-blue-300"
            } cursor-pointer`}
          >
            About
          </li>
        </Link>
        <Link href="/about/profile">
          <li
            className={`mr-3 ${
              pathname === "/about/profile"
                ? "text-yellow-300"
                : "text-blue-300"
            } cursor-pointer`}
          >
            Profile
          </li>
        </Link>
      </ul>
      {status === "authenticated" ? (
        <>
          <h4 className="flex text-white ml-auto mr-3">
            Halo Account: {session?.user?.fullname}
          </h4>
          <button
            className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer "
            // tutorial sebelumnya tangkap nilai input login
            // onClick={() => router.push("/login")}
            onClick={() => signOut()}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer ml-auto"
          // tutorial sebelumnya tangkap nilai input login
          // onClick={() => router.push("/login")}
          onClick={() => signIn()}
        >
          Login
        </button>
      )}
    </nav>
  );
}
