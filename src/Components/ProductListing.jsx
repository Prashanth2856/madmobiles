import React, { useContext } from "react";
import ProductTile from "./ProductTile";
import { ProductsContext } from "../Context/ProductsContext";

export const ProductListing = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="container-xl mt-2">
      <div className="row">
        {products.map((product) => (
            <ProductTile key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
