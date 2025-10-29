import React from "react";

import WeatherCard from "./WeatherCard";

export default function Weather({ weather, error }) {
  return (
    <div className="flex flex-col items-center justify-center mt-6 w-full px-4">
      {error && (
        <p className="text-red-200 mt-4 text-center text-sm sm:text-base">
          {error}
        </p>
      )}
      {weather && <WeatherCard weather={weather} />}
    </div>
  );
}
