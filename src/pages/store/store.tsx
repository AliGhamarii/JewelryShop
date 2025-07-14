import { useEffect, useState } from "react";
import { Container } from "../../components/container/Container";
import ProductItem from "../../components/productItems/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import type { productsType } from "../../types/servicesType";

export const Store = () => {
  const [products, setProduct] = useState<productsType[]>([]);

useEffect(() => {
  setProduct(getProducts());
}, []);

  return (
    <div className="mt-20">
      <Container>
        <h1 className="text-center mt-10 mb-25 font-black text-4xl sm:text-5xl md:text-6xl text-blue-900">
          Luxury Editions Now Available!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 place-items-center min-h-[90vh]">
          {products.map((item) => (
            <Link key={item.id} to={`/Product/${item.id}`}>
              <ProductItem {...item} />
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};
