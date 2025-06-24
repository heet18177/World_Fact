import React, { useState } from "react";
import CountryFact from "../API/CountryData.json";


export const About = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const FilteredCountry = CountryFact.filter((con) =>
    con.CountryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="Container section-class">
      <h2 className="tital">
        Here are the Interesting Facts
        <br />
        we're proud of...
      </h2>

      <div>
        <input
          className="search"
          type="text"
          value={searchTerm}
          autoComplete="off"
          placeholder="Search for a country..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="first">
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