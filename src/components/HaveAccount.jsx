import React from "react";
import { Link } from "react-router-dom";

import "./HaveAccount.scss";

const HaveAccount = () => {
  return (
    <div className="have--account">
      Already have an account?<Link to="/sign-in"> Sign in</Link>
    </div>
  );
};

export default HaveAccount;
