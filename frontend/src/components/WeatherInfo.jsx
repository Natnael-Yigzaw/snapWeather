import React from "react";

const WeatherInfo = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  return (
    <div>
      <h2>{weatherData.temperature}°C</h2>
      <p>{weatherData.description}</p>
      <img src={weatherData.imageUrl} alt="Weather Icon" />
    </div>
  );
};

export default WeatherInfo;
