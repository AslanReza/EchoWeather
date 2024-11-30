import React, { useState } from "react";
import SearchSection from "./Components/SearchSection";
import HourlyWeatherItem from "./Components/HourlyWeatherItem";
import CurrentWeather from "./Components/CurrentWeather";
import weatherCodes from "./constants/constants";
const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      const temperature = Math.floor(data.current.temp_c);
      const description = data.current.condition.text;
      const weatherIcon = Object.keys(weatherCodes).find((icon) =>
        weatherCodes[icon].includes(data.current.condition.code)
      );
      setCurrentWeather({ temperature, description, weatherIcon });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <SearchSection getWeatherDetails={getWeatherDetails} />
      {/* Weather Section */}
      <div className="weather-section">
        <CurrentWeather currentWeather={currentWeather} />
        {/* Hourly Weather Forecast List */}
        <div className="hourly-forecast">
          <ul className="weather-list">
            <HourlyWeatherItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
