import React from "react";

import "./Signin.scss";
import PageTitle from "../components/PageTitle";
import Input from "../components/Input";
import ButtonFunction from "../components/ButtonFunction";

const SignIn = () => {
  return (
    <div>
      <div className="sign--in__wrapper">
        <PageTitle title={"Sign In"} />
        <div className="sign--in__form">
          <Input placeholder={"Email"} />
          <Input placeholder={"Password"} />
          <ButtonFunction text="Sign in" type="normalSignIn" />
          <div className="line">
            <ButtonFunction text="Sign in with Google" type="googleSignIn" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
