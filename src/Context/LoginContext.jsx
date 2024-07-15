import React, { createContext, useState } from "react";

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true" ? true : false
  );
  const [user, setUser] = useState(
    localStorage.getItem("loggedInUser") || null
  );

  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user);
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUser(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInUser");
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, login, logout, user }}>
      {children}
    </LoginContext.Provider>
  );
};
