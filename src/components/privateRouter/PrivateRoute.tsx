import { Navigate, Outlet } from "react-router-dom";
import { useShoppingcartContext } from "../../context/ShopingCartContext";

export const PrivateRoute = () => {
  const { isLogin } = useShoppingcartContext();
  return <>{isLogin ? <Outlet /> : <Navigate to="/store" />}</>;
};
