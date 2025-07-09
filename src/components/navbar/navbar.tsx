import { Link } from "react-router-dom";
import { Container } from "../container/Container";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

export const Navbar = () => {
  const { cartQty } = useShoppingcartContext();
  return (
    <div className="h-14 shadow border-b flex items-center">
      <Container>
        <div>
          <ul className="flex justify-between items-center flex-row-reverse container mx-auto ">
            <li className="flex gap-5">
              <Link to="/" className="ml-8">
                Home
              </Link>
              <Link to="/store">Store</Link>
            </li>

            <li className="text-2xl font-black text-center">
              <Link to="/store" className="ml-8">
                Ali Store
              </Link>
            </li>

            <li className="relative flex justify-center items-center">
              <Link to="/cart" className="block">
                <img
                  className="w-10 h-10"
                  src="/Icons/reshot-icon-shopping-cart-TSH5WN4J9B.svg"
                  alt="Cart"
                />
                {cartQty !== 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">
                    {cartQty}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
