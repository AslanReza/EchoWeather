import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMyLocation } from "react-icons/md";

const App = () => {
  return (
    <div className="container">
      {/* Search Section */}
      <div className="search-section">
        <form action="#" className="search-form">
          <CiSearch className="icon-search" />
          <input
            className="search-input"
            type="search"
            placeholder="Tell Me Your City Name"
            required
          />
        </form>
        <button className="location-button">
          <MdOutlineMyLocation className="location-icon"/>
        </button>
      </div>
      {/* Weather Section */}
      <div className="weather-section">
        <div className="current-weather">
          <img className="weather-icon" width={50} src="icons/clouds.svg" />
          <h2 className="temperature">
            20 <span>°C</span>
          </h2>
          <p className="description">Partly Cloudy</p>
        </div>
        {/* Hourly Weather Forecast List */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" width={50} className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" width={50} className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" width={50} className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" width={50} className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" width={50} className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
            <li className="weather-item">
              <p className="time">00:00</p>
              <img src="icons/clouds.svg" width={50} className="weather-icon" />
              <p className="temperature">20°</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
