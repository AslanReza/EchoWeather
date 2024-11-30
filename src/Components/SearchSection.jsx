import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";

const SearchSection = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleCitySearch = (e) => {
    e.preventDefault();
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${searchInput}`;
    getWeatherDetails(API_URL);
  };

  const fetchSuggestions = async (query) => {
    if (!query) {
      setSuggestions([]);
      return;
    }

    const SUGGESTIONS_API_URL = `http://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`;
    try {
      const response = await fetch(SUGGESTIONS_API_URL);
      const data = await response.json();
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    fetchSuggestions(value);
  };

  const handleSuggestionClick = (city) => {
    setSearchInput(city);
    setSuggestions([]);
    const form = document.querySelector(".search-form");
    form.submit();
  };

  return (
    <div className="search-section">
      <form action="#" className="search-form" onSubmit={handleCitySearch}>
        <CiSearch className="icon-search" />
        <input
          className="search-input"
          type="search"
          placeholder="Tell Me Your City Name"
          value={searchInput}
          onChange={handleInputChange}
          required
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.id}
                className="suggestion-item"
                onClick={() => handleSuggestionClick(suggestion.name)}
              >
                {suggestion.name}
              </li>
            ))}
          </ul>
        )}
      </form>
      <button className="location-button">
        <MdOutlineMyLocation className="location-icon" />
      </button>
    </div>
  );
};

export default SearchSection;
