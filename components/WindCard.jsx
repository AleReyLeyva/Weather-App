import React from 'react';
import NavigationIcon from '@material-ui/icons/Navigation';
import useWeather from '../hooks/useWeather';

export default function WindCard() {
  const { weather } = useWeather();
  const { weatherInfo } = weather;
  const today = weatherInfo[0];

  return (
    <div className="bg-secondary flex flex-col items-center py-8">
      <h2 className="text-3xl text-gray-300">Wind Status</h2>
      <h1 className="mb-7 mt-3 text-8xl">
        {parseInt(today.windSpeed, 10)}
        <span className="text-4xl ml-3 text-gray-300">mph</span>
      </h1>
      <div className="flex justify-center items-center">
        <NavigationIcon
          className="text-gray-300 mr-4 rounded-full bg-gray-500 p-2 rotate-45"
          style={{ fontSize: '2.5rem' }}
        />
        <h3 className="text-2xl">{today.windDirection}</h3>
      </div>
    </div>
  );
}
