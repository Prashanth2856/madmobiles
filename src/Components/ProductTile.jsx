import React, { useContext } from "react";
import "../Styles/ProductTile.css";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";
import { Button } from "./Button";

const ProductTile = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card h-100">
        <img
          src={product.imageUrl}
          className="card-img-top product-image"
          alt={product.model}
        />
        <div className="card-body">
          <Link to={`/product/${product.id}`}>
            <h5 className="card-title">
              {product.brand} {product.model}
            </h5>
          </Link>
          <p className="card-text">Price: Rs.{product.price}</p>
        </div>
        <div className="card-footer bg-transparent border-0">
          <Button
            buttonText="Add to Cart"
            className="btn-primary btn-block"
            onClick={() => addToCart(product)}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTile;
