// App.js
import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherForm from "./components/WeatherForm";
import WeatherInfo from "./components/WeatherInfo";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [weatherCondition, setWeatherCondition] = useState("default");

  const fetchData = async (cityName) => {
    try {
      const response = await axios.post("http://localhost:5000/", {
        cityName: cityName,
      });
      setWeatherData(response.data);
      setError(null);

      updateWeatherCondition(response.data.weatherMain);
    } catch (error) {
      console.error("Error fetching weather data:", error.message);

      if (error.response) {
        setError("Error fetching weather data. Please try again.");
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }
  };

  const updateWeatherCondition = (weatherMain) => {
    const lowerCaseWeatherMain = weatherMain.toLowerCase();

    switch (lowerCaseWeatherMain) {
      case "clear":
        setWeatherCondition("sunny");
        break;
      case "rain":
      case "drizzle":
        setWeatherCondition("rainy");
        break;
      case "clouds":
        setWeatherCondition("cloudy");
        break;
      case "thunderstorm":
        setWeatherCondition("thunder");
        break;
      case "snow":
        setWeatherCondition("snow");
        break;
      default:
        setWeatherCondition("default");
    }
  };

  return (
    <div className={`weather-app ${weatherCondition}`}>
      <div className="weather-card">
        <h1>Weather App</h1>
        <WeatherForm onSubmit={fetchData} />
        {error && <p className="error-message">{error}</p>}
        <WeatherInfo weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;
