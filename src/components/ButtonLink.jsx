import React from "react";
import { Link } from "react-router-dom";

import "./Button.scss";

const ButtonLink = ({ text }) => {
  return (
    <div className="button--wrapper">
      <Link className="button--normal" to="/sign-up">
        {text}
      </Link>
    </div>
  );
};

export default ButtonLink;
