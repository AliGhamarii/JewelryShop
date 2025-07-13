import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShopingCartContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter>
      <ShoppingCartProvider>
        <App />
      </ShoppingCartProvider>
    </HashRouter>
  </StrictMode>
);
