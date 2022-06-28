import React from "react";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import "./Button.scss";

const ButtonFunction = ({ text, type }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    switch (type) {
      case "googleSignIn":
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            navigate("/");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
          });

        break;
      default:
        console.log("default");
        break;
    }
  };

  return (
    <div className="button--wrapper" onClick={handleClick}>
      <button className="button--normal">{text}</button>
    </div>
  );
};

export default ButtonFunction;
