import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";
const SearchSection = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handleCitySearch = (e) => {
    e.preventDefault();
    const searchInput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput.value}`;
    getWeatherDetails(API_URL);
  };
  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <CiSearch className="icon-search" />
        <input
          className="search-input"
          type="search"
          placeholder="Tell Me Your City Name"
          required
        />
      </form>
      <button className="location-button">
        <MdOutlineMyLocation className="location-icon" />
      </button>
    </div>
  );
};

export default SearchSection;
