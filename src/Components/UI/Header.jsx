import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="Container">
        <div className="grid">
          <div className="Logo">
            <NavLink to="/">
              <h1 className="logo">WorldAtlas</h1>
            </NavLink>
          </div>
          <div>
            <ul className="list">
              <li>
                <NavLink to="/">
                  <p>Home</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="/Country">
                  <p>Country</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="About">
                  <p>About</p>
                </NavLink>
              </li>
              <li>
                <NavLink to="Contact">
                  <p>Contact</p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
