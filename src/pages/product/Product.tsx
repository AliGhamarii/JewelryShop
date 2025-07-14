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
    const fetchData = async () => {
      const res = await getProduct(id as string);
      setProduct(res);
    };
    fetchData();
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
      <div className="flex items-center gap-2 mt-6 flex-wrap sm:flex-nowrap justify-start">
        <Buttons
          onClick={() => handleDecreaseProductQty(productId)}
          variant="primary"
          className="rounded-2xl w-12 sm:w-16 h-10 sm:h-12 text-2xl"
        >
          -
        </Buttons>
        <span className="w-10 h-12 flex justify-center items-center text-2xl font-semibold">
          {quantity}
        </span>
        <Buttons
          onClick={() => handleIncreaseProductQty(productId)}
          variant="success"
          className="rounded-2xl w-12 sm:w-16 h-10 sm:h-12 text-2xl"
        >
          +
        </Buttons>
        <Buttons
          onClick={() => handleRemoveProduct(productId)}
          variant="danger"
          className="rounded-2xl w-16 sm:w-20 h-10 sm:h-12 text-sm sm:text-base"
        >
          Delete
        </Buttons>
      </div>
    );
  };

  if (!product) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="mt-20 px-4 sm:px-0 w-full h-full">
      <Container>
        <div className="shadow rounded-xl flex flex-col lg:flex-row gap-8 sm:gap-10 p-6 sm:p-10">
          {/* Image Section */}
          <div className="w-full lg:w-1/2">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-64 sm:h-96 object-cover rounded-lg"
            />
          </div>

          {/* Info Section */}
          <div className="w-full lg:w-1/2 flex flex-col justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-semibold mb-4">
                {product.title}
              </h1>
              <span className="text-blue-700 text-xl sm:text-2xl font-bold mb-6 block">
                {product.price}$
              </span>
              <p className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="mt-6">{renderActionButtons()}</div>
          </div>
        </div>
      </Container>
    </div>
  );
}
