import React from "react";

import "./Input.scss";

const Input = ({ placeholder }) => {
  return (
    <div className="input--box">
      <div className="input--box__label">{placeholder}</div>
      <input type={placeholder === "Password" ? "password" : "text"} />
    </div>
  );
};

export default Input;
