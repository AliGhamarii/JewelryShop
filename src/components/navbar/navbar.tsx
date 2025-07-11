import { Link } from "react-router-dom";
import { Container } from "../container/Container";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

export const Navbar = () => {
  const { cartQty } = useShoppingcartContext();
  return (
    <div className="h-14 shadow border-b flex items-center justify-center ">
      <Container>
        <div>
          <ul className="flex justify-between items-center flex-row-reverse ">
            <li className=" flex flex-row-reverse">
              <Link to="/store">
                <img
                  src="/public/Icons/store-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10"
                />
              </Link>
            </li>
            <li>
              <Link to="/store">
                <h1 className="text-3xl font-black">Ali Shop</h1>
              </Link>
            </li>

            <li className="relative flex flex-row-reverse justify-center items-center">
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
              <Link to="/login">
                <img
                  src="/public/Icons/login-svgrepo-com.svg"
                  alt=""
                  className="w-10 h-10 mr-2"
                />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
