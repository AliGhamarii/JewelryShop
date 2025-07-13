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
          className="mt-8 rounded-2xl w-70 h-12 text-xl"
        >
          Add To Cart
        </Buttons>
      );
    }

    return (
      <div className="flex items-center gap-2 mt-10">
        <Buttons
          onClick={() => handleDecreaseProductQty(productId)}
          variant="primary"
          className="rounded-2xl w-20 h-12 text-3xl"
        >
          -
        </Buttons>
        <span className="w-10 h-12 flex justify-center items-center text-3xl">
          {quantity}
        </span>
        <Buttons
          onClick={() => handleIncreaseProductQty(productId)}
          variant="success"
          className="rounded-2xl w-20 h-12 text-3xl"
        >
          +
        </Buttons>
        <Buttons
          onClick={() => handleRemoveProduct(productId)}
          variant="danger"
          className="rounded-2xl w-20 h-12 text-xl"
        >
          Delete
        </Buttons>
      </div>
    );
  };

  if (!product) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="mt-20">
      <Container>
        <div className="px-10 py-8 shadow rounded-xl flex justify-between items-center gap-10">
          <div className="flex flex-col items-center w-1/2">
            <div className="w-full">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {renderActionButtons()}
          </div>

          <div className="flex flex-col items-center w-1/2">
            <h1 className="text-5xl text-blue-900 text-center mb-5">
              {product.title}
              <span className="text-gray-800 ml-2">{product.price}$</span>
            </h1>
            <p className="text-center text-blue-800 text-2xl mt-4 px-10">
              {product.description}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
