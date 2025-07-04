import { Container } from "../../components/container/Container";
import ProductItem from "../../components/productItems/ProductItem";
import { Link } from "react-router-dom";

export const Store = () => {
  return (
    <div>
      <Container>
        <div>
          <h1 className="text-center mt-5 font-black text-6xl">New Product!</h1>
        </div>
        <div
          className="grid grid-cols-4 gap-8 items-center justify-center"
          style={{ minHeight: "90vh" }}
        >
          <Link to={`/Product/${1}`}>
            <ProductItem />
          </Link>
          <Link to={`/Product/${2}`}>
            <ProductItem />
          </Link>
          <Link to={`/Product/${3}`}>
            <ProductItem />
          </Link>
          <Link to={`/Product/${4}`}>
            <ProductItem />
          </Link>
        </div>
      </Container>
    </div>
  );
};
