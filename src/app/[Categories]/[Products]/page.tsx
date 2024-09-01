import React from "react";
import { categories } from "@/components/Images/best_VapeMart project/Categories/page";
import Image from "next/image";

function ProductDetails({ params }: { params: { Products: string } }) {
  const product__Details = categories
    .flatMap((category) => category.products)
    .find((product) => product.id === params.Products);

  console.log(product__Details);

  if (!product__Details)
    return (
      <div className="text-2xl font-bold text-red-700">Page Not Found :(</div>
    );

  return (
    <div className="flex mt-10 h-[400px]">
      <div className=" flex-1 flex justify-center items-center">
        <Image
          src={require(`../../../components/Images/best_VapeMart project/Product Categories${product__Details.image}`)}
          alt={product__Details.name}
          className="w-auto h-full"
        ></Image>
      </div>
      <div className="flex flex-col justify-around  flex-1  ">
        <h2 className="text-3xl font-semibold">{product__Details.name}</h2>
        <p className="text-rose-700 text-xl font-semibold">
          {product__Details.price}
        </p>
        <button className="bg-red-600 w-1/2 h-auto   py-2  rounded-sm relative inset-x-32 font-medium hover:text-black hover:bg-white">
          IN stock
        </button>
        <p className="w-[30ch]">{product__Details.desc}</p>
      </div>
    </div>
  );
}

export default ProductDetails;
