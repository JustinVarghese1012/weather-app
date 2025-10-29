import React, { useState } from "react";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Weather from "./components/Weather";

export default function App() {
  const [weather, setWeather] = useState({
    name: "N/A",
    country: "N/A",
    temperature: 0,
    windspeed: 0,
    weathercode: -1,
    time: new Date().toISOString(),
  });
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    try {
      setError(null);

      // Get coordinates
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}`
      );
      const geoData = await geoRes.json();
      if (!geoData.results || geoData.results.length === 0)
        throw new Error("City not found");

      const { latitude, longitude, name, country } = geoData.results[0];

      // Get weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const weatherData = await weatherRes.json();

      const info = {
        name,
        country,
        ...weatherData.current_weather,
      };
      setWeather(info);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white/80">
      <NavBar />
      <SearchBar onSearch={fetchWeather} />
      <Weather weather={weather} error={error} />
    </div>
  );
}
