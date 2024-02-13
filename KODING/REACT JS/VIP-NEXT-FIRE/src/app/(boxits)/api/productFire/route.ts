/*
- ini get data REST API 
???????????????????????

*/

import { NextRequest, NextResponse } from "next/server";
import { retrieveData, retrieveDataById } from "../../lib/firebase/service";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const detailProduct = await retrieveDataById("product", id);
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

  const products = await retrieveData("product");

  return NextResponse.json({ status: 200, message: "Success", data: products });
}
