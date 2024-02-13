/*
LAZYLOAD IMAGE
- sebelumnya modal berisi <Image> hanya di import begitu saja di halaman 
- karena menggunakan lazyload maka modal di import menggunakan dynamic 

*/

// import Modal from "@/app/(boxits)/component/core/modal/page";
import { getData } from "@/app/(boxits)/services/product/page";
import dynamic from "next/dynamic";
import Image from "next/image";

export default async function DetailProduct(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/productFire?id=" + params.id
  );

  // lazyload dinamic pada pemanggilan Modal
  const Modal = dynamic(
    () => import("@/app/(boxits)/component/core/modal/page")
  );

  return (
    <>
      {/* modal siap di gunakan */}
      <Modal>
        <Image
          src={product.data.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
          width={500}
          height={500}
        />
        <div className="bg-white p-4 px-6">
          <h3 className="">{product.data.name}</h3>
          <p>Price: $ {product.data.price}</p>
        </div>
      </Modal>
    </>
  );
}
