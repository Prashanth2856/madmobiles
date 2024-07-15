import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { CartContext } from "../Context/CartContext";
import { LoginContext } from "../Context/LoginContext";

export const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { isLoggedIn, logout } = useContext(LoginContext);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const totalCartItems = cart.length;

  const accessCart = () => {
    if (!isLoggedIn) {
      alert("Please Login to access Cart");
    }
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid align-items-center nav-container">
        <Link className="navbar-brand" to="/">
          <img
            src="/images/mad_mobile.png"
            className="img-fluid"
            alt="mad mobile logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavbarOpen(!isNavbarOpen)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">&#9776;</span>
        </button>
        <div
          className={`collapse navbar-collapse justify-content-between ${
            isNavbarOpen && "show"
          }`}
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products" onClick={closeNavbar}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#" onClick={closeNavbar}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            {isLoggedIn ? (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link btn btn-link"
                    onClick={() => {
                      logout();
                      closeNavbar();
                    }}
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login" onClick={closeNavbar}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/signup" onClick={closeNavbar}>
                    Signup
                  </Link>
                </li>
              </>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to={isLoggedIn ? "/cart" : null}
                  onClick={() => {
                    accessCart();
                    closeNavbar();
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  {totalCartItems > 0 && isLoggedIn && (
                    <span className="badge rounded-pill bg-primary text-white">
                      {totalCartItems}
                    </span>
                  )}
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
