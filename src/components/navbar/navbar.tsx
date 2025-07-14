import { Link } from "react-router-dom";
import { useShoppingcartContext } from "../../context/ShopingCartContext";
import logo from "../../../public/Icons/jewelry-store-svgrepo-com.svg";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/cart", label: "Shopping Cart", showCartQty: true },
  { path: "/login", label: "Login" },
];

export const Navbar = () => {
  const { cartQty } = useShoppingcartContext();

  return (
    <nav className="bg-white/50 dark:bg-gray-700/50 fixed top-0 w-full z-50 backdrop-blur-md border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img src={logo} className="h-8" alt="Jewelry Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Jewlery Shop
          </span>
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5 text-black"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
            aria-hidden="true"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col justify-center p-4 md:px-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  md:space-y-1 md:space-x-17 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            {navItems.map(({ path, label, showCartQty }) => (
              <li key={path} className="relative">
                <Link
                  to={path}
                  className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  {label}
                  {showCartQty && cartQty !== 0 && (
                    <span className="absolute top-0.5 -right-7 w-5 h-5 bg-red-600 text-white rounded-full text-xs flex items-center justify-center">
                      {cartQty}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
