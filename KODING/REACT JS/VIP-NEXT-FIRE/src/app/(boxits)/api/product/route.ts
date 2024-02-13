/*
- ini get data REST API 
- sebagai contoh json saja
- image di ambil dari website nike > klik kanan gambar > copy image address(url)
- buatkan METHOD REST API GET untuk data server 
*/

import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "nike dunk low retro",
    price: 1549000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51867688-277b-4615-ab39-876653f6b810/dunk-low-retro-shoe-66RGqF.png",
  },
  {
    id: 2,
    title: "nike air force 1",
    price: 2379000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c20afd60-b230-4815-bfd2-6768c875f6cd/air-force-1-07-shoes-0XGfD7.png",
  },
  {
    id: 3,
    title: "nike sb dunk low pro",
    price: 1729000,
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d35e066a-43ac-4b08-9784-ca2699ea9c7c/sb-dunk-low-pro-skate-shoes.png",
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = data.find((item) => item.id === Number(id));
    if (detailProduct) {
      return NextResponse.json({
        status: 200,
        message: "Success",
        data: detailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "Not found",
      data: detailProduct,
    });
  }

  return NextResponse.json({ status: 200, message: "Success", data });
}
