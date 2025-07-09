import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../components/container/Container";
import Buttons from "../../components/button/Buttons";
import { getproduct } from "../../services/api";
import type { productsType } from "../../types/servicesType";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

export function Product() {
  const params = useParams<{ id: string }>();
  const [state, setState] = useState<productsType>();

  const {
    getProductQty,
    handleDecreaseProductQty,
    handleIncreaseProductQty,
    handleRemoveProduct,
  } = useShoppingcartContext();

  useEffect(() => {
    getproduct(params.id as string).then((res) => {
      setState(res);
    });
  }, [params.id]);

  return (
    <div>
      <Container>
        <div className="px-10 h-180 shadow rounded-xl mt-5 flex">
          <div className="mt-1 cursor-pointer flex flex-col items-center">
            <div className="w-100">
              <img className="w-full h-full object-cover" src={state?.image} />
            </div>
            <div className="flex flex-col">
              {getProductQty(parseInt(params.id as string)) == 0 ? (
                <Buttons
                  onClick={() => {
                    handleIncreaseProductQty(parseInt(params.id as string));
                  }}
                  variant="success"
                  className="mt-8 rounded-2xl w-70 h-12 cursor-pointer whitespace-nowrap text-xl"
                >
                  Add To Cart
                </Buttons>
              ) : (
                <div className="flex justify-between items-center flex-auto gap-x-2 mt-10">
                  <Buttons
                    onClick={() => {
                      handleIncreaseProductQty(parseInt(params.id as string));
                    }}
                    variant="success"
                    className=" rounded-2xl w-20 h-12 cursor-pointer whitespace-nowrap text-3xl"
                  >
                    +
                  </Buttons>
                  <span className="rounded-2xl w-10 h-12 flex justify-center items-center text-3xl">
                    {getProductQty(parseInt(params.id as string))}
                  </span>
                  <Buttons
                    onClick={() => {
                      handleDecreaseProductQty(parseInt(params.id as string));
                    }}
                    variant="primary"
                    className="rounded-2xl w-20 h-12 cursor-pointer whitespace-nowrap text-3xl"
                  >
                    -
                  </Buttons>
                  <Buttons
                    onClick={() => {
                      handleRemoveProduct(parseInt(params.id as string));
                    }}
                    variant="danger"
                    className="rounded-2xl w-20 h-12 cursor-pointer whitespace-nowrap text-xl"
                  >
                    Delete
                  </Buttons>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-10 flex flex-col items-center justify-start mt-20">
            <h1 className="text-5xl my-5 text-orange-600 text-center">
              {state?.title}
              <span className="text-orange-800"> {state?.price}$</span>
            </h1>
            <p className="text-center text-orange-800 px-50 mt-10 text-2xl ">
              {state?.description}
            </p>
            <p></p>
          </div>
        </div>
      </Container>
    </div>
  );
}
