import React from "react";

export const InputField = ({
  type,
  className,
  id,
  name,
  value,
  onChange,
  required,
  checked,
  ...rest
}) => {
  if (type === "radio") {
    return (
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        checked={checked}
        required={required}
        {...rest}
      />
    );
  } else {
    return (
      <input
        type={type}
        className={className}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        {...rest}
      />
    );
  }
};
