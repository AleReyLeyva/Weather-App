import React from "react";
import useWeather from "../hooks/useWeather";

export default function AirCard() {
  const { weather } = useWeather();
  const { weatherInfo } = weather;
  const today = weatherInfo[0];

  return (
    <div className="bg-secondary flex flex-col items-center py-7">
      <h2 className="text-3xl text-gray-300 mt-2">Air Pressure</h2>
      <h1 className="mb-7 mt-3 text-7xl sm:text-8xl flex flex-col items-center sm:block">
        {parseInt(today.airPressure, 10)}
        <span className="text-4xl ml-3 text-gray-300 mt-3 sm:mt-0">mb</span>
      </h1>
    </div>
  );
}
