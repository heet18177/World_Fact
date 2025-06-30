import React, { useState } from "react";
import CountryFact from "../API/CountryData.json";


export const About = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const FilteredCountry = CountryFact.filter((con) =>
    con.CountryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="flex flex-col justify-center items-center">
      <h2 className="px-2 sm:px-20 sm:text-3xl text-xl mt-5 font-semibold mb-5 flex flex-col items-center">
        <p> Here are the Interesting Facts</p> {/* <br /> */}
        we're proud of...
      </h2>

      <div>
        <input
          className="search p-2 pr-20 sm:pr-50"
          type="text"
          value={searchTerm}
          autoComplete="off"
          placeholder="Search for a country..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-3 grid-col-2 mt-7 mb-7 sm:px-20 px-5 gap-5">
        {FilteredCountry.length > 0 ? (
          FilteredCountry.map((con, index) => (
            <div className="Cards" key={index}>
              <div className="card-1">
                <p className="title">{con.CountryName}</p>
                <p>
                  <span>Capital: </span>
                  {con.Capital}
                </p>
                <p>
                  <span>Population: </span>
                  {con.Population.toLocaleString()}
                </p>
                <p>
                  <span>Interesting Fact: </span>
                  {con.IntarestingFact}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p style={{ padding: "20px" }}>No countries match your search.</p>
        )}
      </div>
    </section>
  );
};