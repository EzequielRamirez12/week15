// src/components/Weather.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const apiKey = 'b4297826727bd0ceb133d93504d77fe2'; // Replace with your actual API key
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

      try {
        const response = await axios.get(apiUrl);
        setWeatherData(response.data);
      } catch (error) {
        console.error(`Error fetching weather data for ${city}:`, error);
      }
    };

    fetchData();
  }, [city]);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Weather in {city}</h2>
      <p>Temperature: {weatherData.main.temp} &#8451;</p>
      <p>Description: {weatherData.weather[0].description}</p>
      {/* Add more weather details as needed */}
    </div>
  );
};

export default Weather;
