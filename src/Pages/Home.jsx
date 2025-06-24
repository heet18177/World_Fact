import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";
import CountryFact from "../API/CountryData.json";
import { About } from './About';
import { NavLink } from 'react-router-dom';
export const Home = () => {
  return (
    <main className="main-class">
      <div className="Parent">
        <div className="child-1">
          <h1>Explore the world , one country at a time</h1>
          <p>
            Discover the history , culture and beauty of every nation. Sort ,
            search and filter through country to find the details you needs.
          </p>

          <NavLink to="/Country">
            <button className="btn-1">
              Start exploring 
              <FaLongArrowAltRight className="arrow" />
            </button>
          </NavLink>
        </div>
        <div className="child-2">
          <img src="/Images/map.jpg" alt="World" className="img" />
        </div>
      </div>

      {/* Same as about section */}

      <About />
    </main>
  );
}
