import React from "react";

const Input = ({
  name,
  onChange,
  type,
  value,
  labelStyle,
  error,
  ...otherprops
}) => {
  return (
    <>
      <input
        value={value}
        type={type}
        name={name}
        onChange={onChange}
        {...otherprops}
      />
      {error && <small className="error">{error}</small>}
    </>
  );
};

export default Input;
