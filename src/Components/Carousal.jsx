import React from "react";
import "../Styles/Carousal.css";

export const Carousal = () => {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/slides/apple-slide.jpg"
            className="d-block w-100"
            alt="iphone image slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slides/google-slide.jpg"
            className="d-block w-100"
            alt="pixel mobile image slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slides/samsung-slide.jpg"
            className="d-block w-100"
            alt="samsung mobile image slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slides/vivo-slide.jpg"
            className="d-block w-100"
            alt="vivo mobile image slide"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/slides/xiaomi-slide.jpg"
            className="d-block w-100"
            alt="xiaomi mobile image slide"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
      </button>
    </div>
  );
};
