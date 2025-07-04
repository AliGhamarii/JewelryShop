import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Store } from "./pages/store/store";
import Layout from "./components/layout/Layout";
import { Product } from "./pages/product/Product";
import Card from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
