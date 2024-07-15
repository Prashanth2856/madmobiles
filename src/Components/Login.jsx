import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../Context/LoginContext";
import "../Styles/Login.css";
import { InputField } from "./InputField";
import { Asterisk } from "./Asterisk";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { login } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setEmailError("");
    setPasswordError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const users = await axios.get("http://localhost:3001/users");
    const user = users.data.find((user) => user.email === formData.email);
    if (user) {
      if (user.password === formData.password) {
        login(user);
        navigate("/");
      } else {
        setPasswordError("Password is incorrect!");
      }
    } else {
      setEmailError("User does not exist!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card bg-light bg-opacity-75 shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-4">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="email"
                    className="form-label position-relative"
                  >
                    <Asterisk />
                    Email address
                  </label>
                  <InputField
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  {emailError && (
                    <p className="alert alert-danger mt-2 py-1 px-2">
                      {emailError}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="password"
                    className="form-label position-relative"
                  >
                    <Asterisk />
                    Password
                  </label>

                  <InputField
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  {passwordError && (
                    <p className="alert alert-danger mt-2 py-1 px-2">
                      {passwordError}
                    </p>
                  )}
                </div>
                <button type="submit" className="btn w-100 btn-login">
                  Login
                </button>
              </form>
              <p className="mt-2">
                Don't have an account?
                <span className="btn-link">
                  <Link to="/signup"> Register</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
