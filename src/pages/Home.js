import React from "react";
import Navigation from "../components/Navigation";
import SocialNetwork from "../components/SocialNetwork";
import Mainphoto from "../assets/img/mainphoto.jpg";

const Home = () => {
  return (
    <div>
      <div className="home">
      <img src={Mainphoto} alt={"joão"} className="joao-background" />
        <Navigation />
        <SocialNetwork />
        <div className="home-main">
          <div className="main-content">
            <h1>JOÃO FARIA</h1>
            <h2>artiste brésilien</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
