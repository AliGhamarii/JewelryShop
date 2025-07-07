import { useEffect, useState } from "react";
import { Container } from "../../components/container/Container";
import ProductItem from "../../components/productItems/ProductItem";
import { Link } from "react-router-dom";
import { getProducts } from "../../services/api";
import type { productsType } from "../../types/servicesType";

export const Store = () => {
  const [products, setProduct] = useState<productsType[]>([]);

  useEffect(() => {
    getProducts().then((res) => {
      setProduct(res);
    });
  }, []);

  return (
    <div>
      <Container>
        <div>
          <h1 className="text-center mt-5 mb-15 font-black text-6xl text-orange-600">Luxury Editions Now Available!</h1>
        </div>
        <div
          className="grid grid-cols-4 gap-x-15 gap-y-5 items-center justify-center"
          style={{ minHeight: "90vh" }}
        >
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
