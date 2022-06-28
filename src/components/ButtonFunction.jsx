import React from "react";

import "./Button.scss";

const ButtonFunction = ({ text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("ButtonFunction");
  };

  return (
    <div className="button--wrapper" onClick={handleClick}>
      <button className="button--normal">{text}</button>
    </div>
  );
};

export default ButtonFunction;
