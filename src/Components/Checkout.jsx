import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../Context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "./InputField";
import "../Styles/Checkout.css";
import { Asterisk } from "./Asterisk";

export const Checkout = () => {
  const { cart, calculateTotal, shippingCost, clearCart } =
    useContext(CartContext);

  const [shippingDetails, setShippingDetails] = useState({
    fullName: "",
    address: "",
    mobile: "",
    zip: "",
    city: "",
    country: "",
    cardDetails: {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });
  const [paymentMethod, setPaymentMethod] = useState("card");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const isCardDetail =
      name === "cardNumber" || name === "expiryDate" || name === "cvv";

    if (isCardDetail && paymentMethod === "card") {
      setShippingDetails({
        ...shippingDetails,
        cardDetails: { ...shippingDetails.cardDetails, [name]: value },
      });
    } else {
      setShippingDetails({ ...shippingDetails, [name]: value });
    }
  };

  useEffect(() => {
    if (paymentMethod === "cash") {
      setShippingDetails({
        ...shippingDetails,
        cardDetails: {
          cardNumber: "",
          expiryDate: "",
          cvv: "",
        },
      });
    }
  }, [paymentMethod]);

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Shipping Details", shippingDetails);
    clearCart();
    navigate("/thankyou");
  };

  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Shipping & Payment Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="fullName"
                    className="form-label position-relative"
                  >
                    <Asterisk />
                    Full Name
                  </label>
                  <InputField
                    type="text"
                    className="form-control"
                    id="fullName"
                    name="fullName"
                    value={shippingDetails.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="address"
                    className="form-label position-relative"
                  >
                    <Asterisk />
                    Address
                  </label>
                  <InputField
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={shippingDetails.address}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="mobile"
                      className="form-label position-relative"
                    >
                      <Asterisk />
                      Mobile
                    </label>
                    <InputField
                      type="number"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      value={shippingDetails.m}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="zip"
                      className="form-label position-relative"
                    >
                      <Asterisk />
                      ZIP Code
                    </label>
                    <InputField
                      type="number"
                      className="form-control"
                      id="zip"
                      name="zip"
                      value={shippingDetails.zip}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label
                      htmlFor="city"
                      className="form-label position-relative"
                    >
                      <Asterisk />
                      City
                    </label>
                    <InputField
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                      value={shippingDetails.city}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      htmlFor="country"
                      className="form-label position-relative"
                    >
                      <Asterisk />
                      Country
                    </label>
                    <InputField
                      type="text"
                      className="form-control"
                      id="country"
                      name="country"
                      value={shippingDetails.country}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <h5>Payment Method:</h5>
                  <div className="form-check">
                    <InputField
                      type="radio"
                      className="form-check-input"
                      id="cardPayment"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={handlePaymentMethodChange}
                      required={false}
                    />

                    <label className="form-check-label" htmlFor="cardPayment">
                      Card Payment
                    </label>
                  </div>
                  <div className="form-check">
                    <InputField
                      type="radio"
                      className="form-check-input"
                      id="cashOnDelivery"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={handlePaymentMethodChange}
                      required={false}
                    />

                    <label
                      className="form-check-label"
                      htmlFor="cashOnDelivery"
                    >
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div>
                    <h5>Card Details:</h5>
                    <div className="mb-3">
                      <label htmlFor="cardNumber" className="form-label">
                        Card Number
                      </label>
                      <InputField
                        type="number"
                        className="form-control"
                        id="cardNumber"
                        name="cardNumber"
                        value={shippingDetails.cardDetails.cardNumber}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <label htmlFor="expiryDate" className="form-label">
                          Expiry Date
                        </label>
                        <InputField
                          type="text"
                          className="form-control"
                          id="expiryDate"
                          name="expiryDate"
                          value={shippingDetails.cardDetails.expiryDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="cvv" className="form-label">
                          CVV
                        </label>
                        <InputField
                          type="number"
                          className="form-control"
                          id="cvv"
                          name="cvv"
                          value={shippingDetails.cardDetails.cvv}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}

                <button type="submit" className="btn btn-primary">
                  Place Order
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card position-sticky" style={{ top: "65px" }}>
            <div className="card-body">
              <h3 className="card-title">Order Summary</h3>
              <div className="mb-3">
                <ul className="list-group">
                  {cart.map((item) => (
                    <li key={item.id} className="list-group-item d-flex">
                      <div>
                        <img
                          src={item.imageUrl}
                          alt="Product Image"
                          className="img-fluid"
                          height={60}
                          width={60}
                        />
                      </div>
                      <div className="w-100">
                        <h6 className="ml-3">
                          {item.brand} {item.model}
                        </h6>
                        <div className="d-flex justify-content-around">
                          <p>Qty: {item.quantity}</p>

                          <p>
                            Price: {(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="d-flex justify-content-between lh-lg mt-3">
                  <span>Subtotal:</span>
                  <span>Rs.{calculateTotal().toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between lh-lg">
                  <span>Shipping:</span>
                  <span>Rs.{shippingCost.toFixed(2)}</span>
                </div>
                <div className="d-flex justify-content-between lh-lg">
                  <span>Total:</span>
                  <span>Rs.{(calculateTotal() + shippingCost).toFixed(2)}</span>
                </div>
              </div>
              <Link to="/cart" className="back-to-cart">
                <button className="btn btn-secondary btn-block">
                  Back to Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
