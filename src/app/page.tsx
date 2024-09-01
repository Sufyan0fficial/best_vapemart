import Image from "next/image";
import Link from "next/link";
import { categories } from "@/components/Images/best_VapeMart project/Categories/page";
import { imageConfigDefault } from "next/dist/shared/lib/image-config";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <Image
        src={require("../components/Images/best_VapeMart project/hero.webp")}
        alt="hero__section"
        className="mb-4"
      ></Image>

      <h2 className="uppercase text-center text-4xl font-black mb-16 ">
        Top <span className="text-rose-600">Categories</span>
      </h2>

      <div className="flex gap-8 bg-white text-black overflow-hidden ">
        {categories.map((category) => {
          return (
            <div className="flex flex-col justify-center gap-4 items-center">
              <Image
                src={require(`../components/Images/best_VapeMart project/Product Categories${category.image}`)}
                alt={category.name}
                className="inline-block transition-transform hover:scale-110 duration-700 border rounded-l-3xl "
              ></Image>
              <Link
                href={`/${category.id}`}
                className="font-bold hover:text-rose-600 transition-colors duration-500 "
              >
                {category.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
