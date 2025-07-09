import { useEffect, useState } from "react";
import { useShoppingcartContext } from "../../context/ShopingCartContext";
import Buttons from "../button/Buttons";
import { Container } from "../container/Container";
import { getproduct } from "../../services/api";
import type { productsType } from "../../types/servicesType";
import { Link } from "react-router-dom";

interface CartItemProps {
  id: number;
  qty: number;
}

export default function CartItem({ id, qty }: CartItemProps) {
  const {
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveProduct,
  } = useShoppingcartContext();

  const [product, setProduct] = useState<productsType | null>(null);

  useEffect(() => {
    let isMounted = true;
    getproduct(id).then((data) => {
      if (isMounted) setProduct(data);
    });
    return () => {
      isMounted = false;
    };
  }, [id]);

  if (!product) return <Container>Loading...</Container>;

  return (
    <Container>
      <div className="mt-2 flex justify-between items-center">
        <article className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
          <Link to={`/product/${id}`}>
            <figure className="w-50 flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="object-cover"
                loading="lazy"
              />
            </figure>
          </Link>

          <div className="flex flex-col justify-between  p-6 w-full md:w-3/4">
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-2 text-gray-800">
                {product.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-2">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Buttons
                  onClick={() => handleDecreaseProductQty(id)}
                  className="w-8 h-8 rounded-full"
                  variant="primary"
                  aria-label="Decrease quantity"
                >
                  –
                </Buttons>
                <span className="w-10 text-center font-medium text-gray-700">
                  {qty}
                </span>
                <Buttons
                  onClick={() => handleIncreaseProductQty(id)}
                  className="w-8 h-8 rounded-full"
                  variant="success"
                  aria-label="Increase quantity"
                >
                  +
                </Buttons>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-lg font-semibold text-gray-900">
                  ${(product.price * qty).toFixed(2)}
                </span>
                <Buttons
                  onClick={() => handleRemoveProduct(id)}
                  className="px-4 py-2 rounded-lg"
                  variant="danger"
                  aria-label="Remove item"
                >
                  Remove
                </Buttons>
              </div>
            </div>
          </div>
        </article>
      </div>
    </Container>
  );
}
