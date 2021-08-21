import React from "react";
import useWeather from "../hooks/useWeather";

export default function HumidityCard() {
  const { weather } = useWeather();
  const { weatherInfo } = weather;
  const today = weatherInfo[0];

  return (
    <div className="bg-secondary flex flex-col items-center py-8">
      <h2 className="text-3xl text-gray-300">Humidity</h2>
      <h1 className="mb-7 mt-3 text-8xl">
        {today.humidity}
        <span className="text-4xl ml-3 text-gray-300">%</span>
      </h1>
      <div className="w-3/5 bg-gray-300 h-4 rounded-lg mt-2">
        <div
          className="bg-yellow h-4 rounded-lg"
          style={{ width: `${today.humidity}%` }}
        />
      </div>
    </div>
  );
}
