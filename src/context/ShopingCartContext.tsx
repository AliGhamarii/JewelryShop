import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
// import { login } from "../services/api";
import { useNavigate } from "react-router-dom";
import { dataProducts } from "../../data/allProducts";

interface ShoppingCartProvider {
  children: React.ReactNode;
}

interface cartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartItems: cartItem[];
  handleIncreaseProductQty: (id: number) => void;
  handleDecreaseProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  cartQty: number;
  isLogin: boolean;
  // handleLogin: (username: string, password: string) => void;
  handleLogout: () => void;
  getTotalPrice: () => number;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContext);

export const useShoppingcartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<cartItem[]>(
    "cartItems",
    []
  );

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);

      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((items) => items.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) => {
      return currentItems.filter((item) => item.id != id);
    });
  };

  const cartQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  // function handleLogin(username: string, password: string) {
  //   login(username, password).finally(() => {
  //     const token =
  //       "tibxxS8fl8h0KHV6iO1sMQpQyqwRwtMciarIDHPiajx3KmyPtitvdXYE0MVlEtQe";
  //     localStorage.setItem("token", token);
  //     setIsLogin(true);
  //     navigate("/store");
  //   });
  // }
  // useEffect(() => {
  // const token = localStorage.getItem("token");
  // setIsLogin(true);
  // if (token) {
  // }
  // }, []);

  function handleLogout() {
    setIsLogin(false);
    localStorage.removeItem("token");
    navigate("/store");
  }

  function getTotalPrice(): number {
    return cartItems.reduce((sum: number, item: cartItem): number => {
      const product = dataProducts.find((p) => Number(p.id) === item.id);
      return sum + (product?.price || 0) * item.qty;
    }, 0);
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        handleDecreaseProductQty,
        getProductQty,
        handleRemoveProduct,
        cartQty,
        isLogin,
        // handleLogin,
        handleLogout,
        getTotalPrice,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
