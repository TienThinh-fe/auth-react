import React from "react";

import PageTitle from "../components/PageTitle";
import ButtonLink from "../components/ButtonLink";
import HaveAccount from "../components/HaveAccount";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home--wrapper">
      <PageTitle title={"Home"} />
      <div className="home--button">
        <ButtonLink text={"Sign Up"} />
        <HaveAccount />
      </div>
    </div>
  );
};

export default Home;
