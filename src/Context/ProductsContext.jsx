import React, { createContext} from "react";
import products from "../products.json";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  return (
    <ProductsContext.Provider value={products}>{children}</ProductsContext.Provider>
  );
};
