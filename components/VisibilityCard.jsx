import React from "react";
import useWeather from "../hooks/useWeather";

export default function VisibilityCard() {
  const { weather } = useWeather();
  const { weatherInfo } = weather;
  const today = weatherInfo[0];

  return (
    <div className="bg-secondary flex flex-col items-center pt-8">
      <h2 className="text-3xl text-gray-300">Visibility</h2>
      <h1 className="mb-7 mt-3 text-7xl sm:text-8xl flex flex-col items-center sm:block">
        {today.visibility.toFixed(2)}
        <span className="text-4xl ml-3 mt-3 sm:mt-0 text-gray-300">miles</span>
      </h1>
    </div>
  );
}
