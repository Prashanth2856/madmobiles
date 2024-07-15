import React from "react";
import { Carousal } from "./Carousal";
import { Link } from "react-router-dom";
import ProductTile from "./ProductTile";

export const HomePage = ({ products }) => {
  const homePageProducts = products && products.slice(0, 8);

  return (
    <div>
      <Carousal />
      <Link
        to="/products"
        className="container d-flex justify-content-end pr-3 mt-1 mb-0 text-danger py-1"
      >
        View all &gt;
      </Link>
      <div className="container-xl mt-3">
        <div className="row">
          {homePageProducts.map((product) => (
            <ProductTile key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
