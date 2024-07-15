import React from "react";

export const Button = ({ buttonText, className, onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {buttonText}
    </button>
  );
};
