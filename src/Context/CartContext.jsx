import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginContext } from "./LoginContext";

export const CartContext = createContext();

const getCartItems = () => {
  const storedItems = localStorage.getItem("cartItems");
  if (storedItems) {
    return JSON.parse(storedItems);
  }
  return [];
};
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartItems());
  const { isLoggedIn } = useContext(LoginContext);

  const shippingCost = 50;

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cartItems");
  };

  const addToCart = (product) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (isLoggedIn) {
      if (productInCart) {
        alert("This product is already in your cart.");
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
        alert("Added to Cart");
      }
    } else {
      alert("Please Login to add items to cart.");
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };

  const increaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCart(updatedCart);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        shippingCost,
        clearCart,
        calculateTotal,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
