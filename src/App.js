import { Route, Routes } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Components/HomePage";
import { Login } from "./Components/Login";
import { Signup } from "./Components/Signup";
import { ProductListing } from "./Components/ProductListing";
import { ProductDetails } from "./Components/ProductDetails";
import { Navbar } from "./Components/Navbar";
import { useContext } from "react";
import { ProductsContext } from "./Context/ProductsContext";
import { Cart } from "./Components//Cart";
import { Checkout } from "./Components/Checkout";
import { ThankYou } from "./Components/Thankyou";

function App() {
  const { products } = useContext(ProductsContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductListing />} />
        <Route
          path="/product/:id"
          element={<ProductDetails products={products} />}
        />
        <Route path="/cart" element={<Cart />} ></Route>
        <Route path="/checkout" element={<Checkout />} ></Route>
        <Route path="/thankyou" element={<ThankYou />} ></Route>
      </Routes>
    </div>
  );
}

export default App;
