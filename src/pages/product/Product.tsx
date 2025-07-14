import { useEffect, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container/Container";
import Buttons from "../../components/button/Buttons";
import { getProduct } from "../../services/api";
import type { productsType } from "../../types/servicesType";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

export function Product() {
  const { id } = useParams<{ id: string }>();
  const productId = useMemo(() => parseInt(id as string), [id]);

  const [product, setProduct] = useState<productsType>();

  const {
    getProductQty,
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    handleRemoveProduct,
  } = useShoppingcartContext();

  useEffect(() => {
    setProduct(getProduct(id as string));
  }, [id]);

  const quantity = getProductQty(productId);

  const renderActionButtons = () => {
    if (quantity === 0) {
      return (
        <Buttons
          onClick={() => handleIncreaseProductQty(productId)}
          variant="success"
          className="mt-6 rounded-2xl w-full max-w-xs h-10 sm:h-12 text-base sm:text-xl"
        >
          Add To Cart
        </Buttons>
      );
    }

    return (
      <div className="flex items-center gap-2 mt-6 sm:mt-10 flex-wrap sm:flex-nowrap justify-center">
        <Buttons
          onClick={() => handleDecreaseProductQty(productId)}
          variant="primary"
          className="rounded-2xl w-12 sm:w-16 h-10 sm:h-12 text-2xl sm:text-3xl"
        >
          -
        </Buttons>
        <span className="w-10 h-12 flex justify-center items-center text-3xl">
          {quantity}
        </span>
        <Buttons
          onClick={() => handleIncreaseProductQty(productId)}
          variant="success"
          className="rounded-2xl w-12 sm:w-16 h-10 sm:h-12 text-2xl sm:text-3xl"
        >
          +
        </Buttons>
        <Buttons
          onClick={() => handleRemoveProduct(productId)}
          variant="danger"
          className="rounded-2xl w-16 sm:w-20 h-10 sm:h-12 text-base sm:text-xl"
        >
          Delete
        </Buttons>
      </div>
    );
  };

  if (!product) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="mt-20 px-4 sm:px-0">
      <Container>
        <div className="shadow rounded-xl flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-10 p-6 sm:p-10">
          <div className="flex flex-col items-center w-full sm:w-1/2">
            <div className="w-full h-64 sm:h-96">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {renderActionButtons()}
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/2">
            <h1 className="text-3xl sm:text-5xl text-blue-900 text-center mb-4 sm:mb-5">
              {product.title}
              <span className="text-gray-800 ml-2 text-xl sm:text-3xl">
                {product.price}$
              </span>
            </h1>
            <p className="text-center text-blue-800 text-base sm:text-2xl mt-4 px-4 sm:px-10">
              {product.description}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
