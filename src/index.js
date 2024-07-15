import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductsProvider } from "./Context/ProductsContext";
import { CartProvider } from "./Context/CartContext";
import { LoginProvider } from "./Context/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductsProvider>
        <LoginProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </LoginProvider>
      </ProductsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
