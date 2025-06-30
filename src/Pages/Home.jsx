import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import CountryFact from "../API/CountryData.json";
import { About } from "./About";
import { NavLink } from "react-router-dom";
export const Home = () => {
  return (
    <main className="w-full">
      <div className="flex sm:flex-row sm:justify-between flex-col sm:px-20 px-5 mt-5 gap-10">
        <div className="flex flex-col gap-5 sm:w-[600px]">
          <p className="text-xl">
            <h1 className="">Explore the world , one country at a time</h1>
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

        <div className="">
          <img
            src="/Images/map.jpg"
            alt="World"
            className="h-60 w-100 rounded-xl"
          />
        </div>
      </div>

      {/* Same as about section */}

      <About />
    </main>
  );
};
