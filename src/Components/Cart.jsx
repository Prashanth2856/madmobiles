import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { Button } from "./Button";
import { CartItem } from "./CartItem";
import { Link } from "react-router-dom";
import "../Styles/Cart.css";

export const Cart = () => {
  const {
    cart,
    shippingCost,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    calculateTotal,
  } = useContext(CartContext);

  return (
    <div className="container mt-2">
      <div className="row">
        <div className={`col-md-8 ${cart && "mx-auto"}`}>
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <h2 className="card-title">Shopping Cart</h2>
                <Link className="text-danger" to="/products">
                  Shop more &gt;
                </Link>
              </div>
              {cart.length > 0 ? (
                <div>
                  <ul className="list-group">
                    {cart.map((item) => (
                      <CartItem
                        key={item.id}
                        item={item}
                        removeFromCart={removeFromCart}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                      />
                    ))}
                  </ul>
                  <button
                    className="btn btn-outline-danger btn-block mt-2 w-25 float-right"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </button>
                </div>
              ) : (
                <p className="text-center h4 mt-4">Your cart is empty.</p>
              )}
            </div>
          </div>
        </div>
        {cart.length > 0 && (
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Cart Summary</h2>
                <div className="mb-3" style={{ lineHeight: "2" }}>
                  <div className="d-flex justify-content-between lh-lg">
                    <span>Subtotal:</span>
                    <span>Rs.{calculateTotal().toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between lh-lg">
                    <span>Shipping:</span>
                    <span>Rs.{shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between lh-lg">
                    <span>Total:</span>
                    <span>
                      Rs.{(calculateTotal() + shippingCost).toFixed(2)}
                    </span>
                  </div>
                </div>
                <Link to="/checkout" className="to-checkout">
                  <Button
                    buttonText="Checkout"
                    className="btn btn-secondary btn-block"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
