import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Button } from "./Button";
import { CartContext } from "../Context/CartContext";

export const ProductDetails = ({ products }) => {
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <div>Product not found</div>;

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6">
          <img
            src={product.imageUrl}
            alt={product.brand + " " + product.model}
            className="img-fluid"
            style={{ objectFit: "cover", width: "100%" }}
          />
        </div>
        <div className="col-md-6">
          <h2>
            {product.brand} {product.model}
          </h2>
          <p className="lead">
            <strong> Rs.</strong> {product.price}
          </p>
          <p>
            <strong>Release Year:</strong> {product.releaseYear}
          </p>
          <p>
            <strong>Operating System:</strong> {product.OS}
          </p>
          <p>
            <strong>Description:</strong>
          </p>
          <p>{product.description}</p>
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
