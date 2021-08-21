import React from 'react';
import Image from 'next/image';

export default function DayWeather({ weather, tomorrow }) {
  const { minTemp, maxTemp, image: src, date } = weather;

  return (
    <div className="bg-secondary px-4 py-4 flex flex-col items-center justify-between">
      <h2 className="text-2xl">{tomorrow ? 'Tomorrow' : date}</h2>
      <div className=" relative w-20 h-20 mt-2 mb-4">
        <Image src={src} alt="weather_logo" layout="fill" />
      </div>
      <div className="flex justify-between w-3/4">
        <h2 className="text-2xl text-gray-300">
          {parseInt(minTemp, 10)}
          °C
        </h2>
        <h2 className="text-2xl text-gray-400">
          {parseInt(maxTemp, 10)}
          °C
        </h2>
      </div>
    </div>
  );
}
