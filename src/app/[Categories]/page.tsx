import React from "react";
import { categories } from "@/components/Images/best_VapeMart project/Categories/page";
import Image from "next/image";
import Link from "next/link";

function Products({ params }: { params: { Categories: string } }) {
  const CategoryProducts = categories.find(
    (category) => category.id === params.Categories
  );

  console.log("Categorized Products:", CategoryProducts);

  // Ensure CategoryProducts exists before attempting to render products
  if (!CategoryProducts) {
    return <p>Category not found</p>;
  }

  return (
    <>
      <div className="bg-slate-50">
        <div className="  relative flex justify-center items-center ">
          <Image
            src={require("../../components/Images/best_VapeMart project/Product Categories/categories__main.webp")}
            alt="Vape__Products"
            className="w-[95%] mt-8"
          ></Image>
          <div className="flex flex-col gap-4 absolute justify-center items-center">
            <p className="uppercase  text-red-700 font-semibold text-4xl font-[cursive]">
              Over TOP Leading Products
            </p>
            <p className="uppercase text-black font-semibold tracking-wider ">
              We deliver best Quality vapes
            </p>

            <Link href={"/"}>
              <button className="bg-[#00b8ff] hover:bg-[#bd0028] text-white px-6 py-2 text-sm font-semibold uppercase tracking-widest">
                {" "}
                Shop now
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-8 mb-4 text-2xl font-bold text-rose-600 uppercase px-20 ">
          {CategoryProducts.name}
        </div>
        <div className="flex flex-wrap max-w-full gap-8 bg-slate-50 text-black justify-center items-stretch my-8 ">
          {CategoryProducts?.products?.map((product) => (
            <div
              key={product.id}
              className="flex flex-col w-1/5 border overflow-hidden"
            >
              <Image
                src={require(`../../components/Images/best_VapeMart project/Product Categories${product.image}`)}
                alt={product.name}
                className="object-cover w-auto h-auto hover:scale-105 transition-transform duration-500 "
              />
              <Link
                className="font-bold text-lg hover:text-red-600"
                href={`/${CategoryProducts.id}/${product.id}`}
              >
                <p>{product.name}</p>
              </Link>
              <p className="text-xl font-semibold text-red-600">
                {product.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
