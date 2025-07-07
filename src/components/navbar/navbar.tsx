import { Link } from "react-router-dom";
import { Container } from "../container/Container";
export const Navbar = () => {
  return (
    <div className="h-14 shadow border-b flex items-center ">
      <Container>
        <div>
          <ul className="flex justify-between flex-row-reverse container mx-auto ">
            <div className="flex flex-row-reverse">
              <li>
                <Link to="/" className="ml-8">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
            </div>
            <div>
              <li className="text-2xl font-black">
                <Link to="/store" className="ml-8">
                  Ali Store
                </Link>
              </li>
            </div>
            <div>
              <li>
                <Link to="/cart">
                  <button className="cursor-pointer">Shopping Cart</button>
                </Link>
              </li>
            </div>
          </ul>
        </div>
      </Container>
    </div>
  );
};
