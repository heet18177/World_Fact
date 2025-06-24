import React, { useState } from "react";
import CountryImg from "../API/CountryImage.json";
import Information from "../API/Information.json";
// import "./Country.css";

export const Country = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getDetails = (countryName) => {
    const countryInfo = Information.find(
      (info) => info.country.toLowerCase() === countryName.toLowerCase()
    );

    if (countryInfo) {
      window.open(countryInfo.wikipedia, "_blank");
    } else {
      alert("Wikipedia link not found.");
    }
  };

  const FilteredCountries = CountryImg.filter((country) =>
    country.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="Container">
      <div>
        <h1 className="top-contries">
          Top 15 countries with Flags <br />
          <span>& Other details</span>
        </h1>
      </div>

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

      <div className="api-div">
        {FilteredCountries.length > 0 ? (
          FilteredCountries.map((flag, index) => (
            <div className="gradiant" key={index}>
              <div className="countryCard">
                <img className="flagImage" src={flag.image} alt="Flag" />
                <div>
                  <h1>{flag.country}</h1>
                  <p>
                    <span>Capital: </span>
                    {flag.capital}
                  </p>
                  <p>
                    <span>Population: </span>
                    {flag.population}
                  </p>
                  <p>
                    <span>Information: </span>
                    {flag.Information}
                  </p>
                  <button
                    className="details"
                    onClick={() => getDetails(flag.country)}
                  >
                    Show details
                  </button>
                </div>
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
