import React from "react";
import { WiDaySunny, WiRain, WiCloud, WiThunderstorm } from "react-icons/wi";

export default function WeatherCard({ weather }) {
  const getIcon = (code) => {
    if ([0, 1].includes(code))
      return <WiDaySunny className="text-yellow-400 text-7xl" />;
    if ([2, 3].includes(code))
      return <WiCloud className="text-gray-300 text-7xl" />;
    if (code >= 45 && code <= 67)
      return <WiRain className="text-blue-300 text-7xl" />;
    if (code >= 80 && code <= 99)
      return <WiThunderstorm className="text-purple-400 text-7xl" />;
    return <WiCloud className="text-gray-300 text-7xl" />;
  };

  return (
    <div className="w-4/5 md:w-1/3 bg-white/5 mt-8 border border-white/20 rounded-2xl backdrop-blur-xl p-6 text-center transition-all text-white/80 mx-auto">
      <h2 className="text-2xl font-semibold">
        {weather.name}, {weather.country}
      </h2>
      <div className="flex justify-center my-4">
        {getIcon(weather.weathercode)}
      </div>
      <p className="text-5xl font-bold">{Math.round(weather.temperature)}°C</p>
      <p className="mt-2 text-lg opacity-90">{weather.windspeed} km/h wind</p>
      <p className="text-sm mt-2 opacity-70">
        Updated: {new Date(weather.time).toLocaleTimeString()}
      </p>
    </div>
  );
}
