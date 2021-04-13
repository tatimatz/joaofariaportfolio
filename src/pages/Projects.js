import React from "react";
import Navigation from "../components/Navigation";
import ButtonsBottom from "../components/ButtonsBottom";
import Project from "../components/Project";

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={0} />
        <ButtonsBottom left={"/"} right={"/project2"} />
      </div>
    </main>
  );
};

export const Project2 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={1} />
        <ButtonsBottom left={"/project1"} right={"/contact"} />
      </div>
    </main>
  );
};
