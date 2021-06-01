import React from "react";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={0} />
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
      </div>
    </main>
  );
};
