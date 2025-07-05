import { useEffect, useState } from "react";
import Buttons from "../../components/button/Buttons";
import { Container } from "../../components/container/Container";
import { getproduct } from "../../services/api";
import { useParams } from "react-router-dom";
import type { productsType } from "../../types/servicesType";

export const Product = () => {
  const params = useParams<{ id: string }>();
  const [state, setState] = useState<productsType>();

  useEffect(() => {
    getproduct(params.id as string).then((res) => {
      setState(res);
    });
  });
  return (
    <div>
      <Container>
        <div className="px-10 h-auto shadow rounded-xl mt-5 gap-x-10 flex">
          <div className="col-span-2 my-10 cursor-pointer flex flex-col items-center">
            <img className="w-100 h-100 object-cover" src={state?.image} />
            <Buttons
              variant="success"
              className="mt-8 rounded-2xl py-3 px-20 cursor-pointer whitespace-nowrap"
            >
              Add To Cart
            </Buttons>
          </div>
          <div className="col-span-10 flex flex-col items-center justify-center">
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
};
