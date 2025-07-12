import type { productsType } from "../../types/servicesType";

type ProductItem = productsType;

function ProductItem({ price, image, title, description }: ProductItem) {
  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-500 w-100 h-150 flex flex-col justify-center items-center">
      <div className="relative overflow-hidden rounded-3xl cursor-pointer">
        <img
          className="rounded-3xl object-cover w-full h-100 "
          src={image}
          alt="Product"
          loading="lazy"
        />
      </div>

      <div className="px-6 py-5">
        <h3 className="text-gray-600 font-extrabold text-xl mb-2 tracking-wide drop-shadow-md line-clamp-1">
          {title}
        </h3>
        <span className="text-gray-700 font-semibold text-lg italic shadow-sm">
          {price}$ — Luxury Edition
        </span>
        <p className="mt-4 text-gray-800 text-sm leading-relaxed font-light whitespace-pre-line drop-shadow-sm line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
