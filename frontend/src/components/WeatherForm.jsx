import React, { useState } from "react";

const WeatherForm = ({ onSubmit }) => {
  const [cityName, setCityName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(cityName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          placeholder="Enter City name"
        />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherForm;
