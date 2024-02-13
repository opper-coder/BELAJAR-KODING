/*
REVALIDATE TAG API
- bikin fungsi fetching /api/revalidate sekaligus kirim tag dan secret 
- jalankan pada tombol onClick fungsi
- cek keberhasilan revalidate
- buat status dan gunakan di UI
*/

"use client";
import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("Ayo perbarui data");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=markProduct&secret=1234",
      { method: "POST" }
    );

    if (!res.ok) {
      setStatus("Revalidate Failed");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidate Success");
      }
    }
  };
  return (
    <div className="w-3/6 h-60 bg-gray-300 rounded-[10px] flex justify-center items-center">
      <div>
        {status}
        <br />
        <button
          className="button bg-blue-600 px-5 py-1 text-white rounded-md"
          onClick={() => revalidate()}
        >
          Revalidate
        </button>
      </div>
    </div>
  );
}
