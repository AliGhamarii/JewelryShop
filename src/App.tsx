import Cart from "./pages/cart/Cart";
import { Login } from "./pages/login/Login";
import { Store } from "./pages/store/store";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import { Product } from "./pages/product/Product";
import { PrivateRoute } from "./components/privateRouter/PrivateRoute";
import { About } from "./pages/about/About";
import Privacy from "./components/privacy/Privacy";
import Terms from "./components/terms/Terms";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Store />} />
        <Route path="/store" element={<Store />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />

        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </Layout>
  );
}

export default App;
