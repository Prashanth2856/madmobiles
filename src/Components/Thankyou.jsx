import React from "react";
import { Link } from "react-router-dom";
import { TruckAnimation } from "./TruckAnimation";

export const ThankYou = () => {
  return (
    <div className="container mt-4 bg-opacity-75 shadow-lg">
      <div className="card border-0">
        <div className="card-body text-center">
          <h2>Your Order has been Placed Successfully!</h2>
          <div className="animation-container d-flex justify-content-center mb-3">
            <div className="truck">
                <TruckAnimation />
            </div>
          </div>
          <p>Thank you for shopping with us.</p>
          <Link to="/" className="btn btn-primary mt-3">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};
