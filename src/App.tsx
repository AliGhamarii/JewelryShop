import { Route, Routes } from "react-router-dom";
import { Store } from "./pages/store/store";
import Layout from "./components/layout/Layout";
import { Product } from "./pages/product/Product";
import Cart from "./pages/cart/Cart";
import { PrivateRoute } from "./components/privateRouter/privateRoute";
import { Login } from "./pages/login/Login";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
