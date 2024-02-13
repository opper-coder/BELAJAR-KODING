import Modal from "@/app/(boxits)/component/core/modal/page";
import { getData } from "@/app/(boxits)/services/product/page";

export default async function DetailProduct(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <>
      <Modal>
        <img
          src={product.data.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          <h3 className="">{product.data.title}</h3>
          <p>Price: $ {product.data.price}</p>
        </div>
      </Modal>
    </>
  );
}
