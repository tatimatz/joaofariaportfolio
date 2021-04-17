import React from "react";
import ButtonsBottom from "../components/ButtonsBottom";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";

const Home = () => {
  return (
    <div>
      <div className="home">
      <Navigation />
      <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>JOÃO FARIA</h1>
            <h2>artiste brésilien</h2>
          </div>
        </div>
        <ButtonsBottom right={"/project1"} />
      </div>
    </div>
  );
};

export default Home;
