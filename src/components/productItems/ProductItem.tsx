import type { productsType } from "../../types/servicesType";

type ProductItem = productsType;

function ProductItem({ price, image, title, description }: ProductItem) {
  return (
    <div className=" w-full max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 mx-auto flex flex-col">
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <img
          className="object-cover w-full h-full"
          src={image}
          alt="Product"
          loading="lazy"
        />
      </div>

      <div className="px-4 py-3 sm:px-6 sm:py-5">
        <h3 className="text-blue-900 font-extrabold text-sm sm:text-base md:text-lg lg:text-xl mb-2 tracking-wide line-clamp-1">
          {title}
        </h3>
        <span className="text-gray-700 font-semibold text-xs sm:text-sm md:text-base italic block">
          {price}$ — Luxury Edition
        </span>
        <p className="mt-2 text-blue-800 text-xs sm:text-sm md:text-base leading-relaxed font-light whitespace-pre-line line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
