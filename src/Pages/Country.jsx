import React, { useState } from "react";
import CountryImg from "../API/CountryImage.json";
import Information from "../API/Information.json";

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
    <section className="sm:px-20 px-5 flex flex-col items-center mb-5">
      <div>
        <h1 className="top-contries">
          Top 15 countries with Flags <br />
          <span>& Other details</span>
        </h1>
      </div>

      <div>
        <input
          className="search p-2 pr-20 sm:pr-50 mt-5"
          type="text"
          value={searchTerm}
          autoComplete="off"
          placeholder="Search for a country..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 justify-center mt-5">
        {FilteredCountries.length > 0 ? (
          FilteredCountries.map((flag, index) => (
            <div className="gradiant " key={index}>
              <div className="border-1 p-5 rounded-xl flex flex-col gap-3 items-center justify-center h-full">
                <img className="flagImage" src={flag.image} alt="Flag" />
                <div className="flex flex-col font-semibold">
                  <h1 className="text-2xl font-bold text-center mb-3">{flag.country}</h1>
                  <p>
                    <span className="font-bold text-lg">Capital : </span>
                    <span className="opacity-80">{flag.capital}</span>
                  </p>
                  <p>
                    <span className="font-bold text-lg">Population : </span>
                    <span className="opacity-80"> {flag.population}</span>
                  </p>
                  <p>
                    <span className="font-bold text-lg">Information : </span>
                    <span className="opacity-80"> {flag.Information}</span>
                  </p>
                </div>
                <button
                  className="details"
                  onClick={() => getDetails(flag.country)}
                >
                  Show details
                </button>
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
