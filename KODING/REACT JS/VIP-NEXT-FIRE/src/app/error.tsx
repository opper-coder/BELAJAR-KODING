/*
halaman error akan di jalankan jika ada error 
coba errorkan dengan copas: 
// throw new Error("halo ada error");
paste di halaman page home, untuk mengerrorkan 
*/

"use client";
import Link from "next/link";

export default function Error() {
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <h1 className="text-3xl">500</h1>
      <h2 className="text-xl">Somethings went wrong</h2>
      <Link href="/" className="bg-blue-700 text-white p-3 m-5 rounded-lg">
        Home
      </Link>
    </div>
  );
}
