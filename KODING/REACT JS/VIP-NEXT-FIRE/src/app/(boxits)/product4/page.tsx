/*

*/

type ProductPageProps = { params: { slug: string[] } };
import { getData } from "@/app/(boxits)/services/product/page";
import Link from "next/link";

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props;
  //   const products = await getData("https://fakestoreapi.com/products");
  const products = await getData("http://localhost:3000/api/productFire");

  return (
    <div className="grid grid-cols-4 mt-5">
      {/* <h1>{params.slug ? "Detail Product Page" : `Product Page`}</h1> */}
      {products.data.length > 0 &&
        products.data.map((product: any) => (
          <div
            key={products.id}
            className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-5"
          >
            <Link href={`/product4/detail/${product.id}`}>
              <img
                className="p-8 rounded-t-lg object-cover h-96 w-full"
                src={product.image}
                alt="product image"
              />
            </Link>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  {product.name}
                </h5>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  $ {product.price}
                </span>
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        ))}
      {params.slug && <>lihat detail url {params.slug[0]}</>}
    </div>
  );
}
