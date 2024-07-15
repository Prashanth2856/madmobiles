import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Styles/Signup.css";
import { InputField } from "./InputField";
import { Asterisk } from "./Asterisk";

export const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
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

    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{8,}$/;

    const users = await axios.get("http://localhost:3001/users");
    const existingUser = users.data.find(
      (user) => user.email === formData.email
    );

    if (existingUser) {
      setEmailError("User with this email already exists");
      return;
    }

    if (!passwordRegex.test(formData.password)) {
      setPasswordError(
        "Password should be 8 characters long, include 1 uppercase letter, 1 symbol, and 1 numeric value"
      );
      return;
    }

    const response = await axios.post("http://localhost:3001/users", formData);
    if (response.status === 201) {
      alert("Signup Successfully");
      navigate("/login");
    } else {
      alert("Signup Failed");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6">
          <div className="card bg-light bg-opacity-75 shadow-lg">
            <div className="card-body">
              <h2 className="text-center mb-2">Signup</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label
                    htmlFor="firstName"
                    className="form-label position-relative"
                  >
                    <Asterisk />
                    First Name
                  </label>
                  <InputField
                    type="text"
                    className="form-control"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name
                  </label>
                  <InputField
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
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
                    <p className="alert alert-danger mt-2 py-1 px-2">{emailError}</p>
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
                    <p className="alert alert-danger mt-2 py-1 px-2">{passwordError}</p>
                  )}
                </div>
                <button type="submit" className="btn w-100 btn-signup">
                  Signup
                </button>
              </form>
              <p className="mt-2">
                Already have an account?
                <span className="btn-link">
                  <Link to="/login"> Login</Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
