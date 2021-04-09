import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" exact className="hover" activeClassName="nav-active">
          <li>accueil</li>
        </NavLink>
        <li className="nav-portfolio">
          porfolio
          <ul className="nav-projects">
            <NavLink
              to="/project1"
              activeClassName="nav-active"
              className="hover"
            >
              <li>espiritoarte</li>
            </NavLink>
            <NavLink
              to="/project2"
              activeClassName="nav-active"
              className="hover"
            >
              <li>a forma imediata do espírito</li>
            </NavLink>
          </ul>
        </li>
        <NavLink
              to="/contact"
              activeClassName="nav-active"
              className="hover"
            >
              <li>contact</li>
            </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
