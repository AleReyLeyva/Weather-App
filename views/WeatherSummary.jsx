/* eslint-disable no-nested-ternary */
import React from 'react';
import Link from 'next/link';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LoopIcon from '@material-ui/icons/Loop';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import useWeather from '../hooks/useWeather';
import { setCurrentPositionWeather } from '../services/WeatherService';

export default function WeatherSummary() {
  const { weather, setWeather } = useWeather();
  const { city, loading, date, country, weatherInfo, location } = weather;

  return (
    <div className="secondary-container flex-col justify-center items-center p-12">
      {loading ? (
        <LoopIcon
          className="loop-icon"
          style={{ fontSize: '3.5rem', height: '55vh' }}
        />
      ) : location ? (
        <>
          <div className="w-4/5 lg:w-10/12 flex justify-between items-center relative bottom-5">
            <Link href="/search">
              <a className="bg-gray-500 p-4 text-xl shadow-sm my-4 text-center">
                Search
              </a>
            </Link>
            {'geolocation' in navigator ? (
              <MyLocationIcon
                className="text-gray-300 bg-gray-500 rounded-full p-3 cursor-pointer"
                style={{ fontSize: '3.5rem' }}
                onClick={() => setCurrentPositionWeather(setWeather)}
              />
            ) : null}
          </div>
          <img src={weatherInfo[0].image} className="my-8" alt="weather" />
          <h2 className="text-9xl mb-6 text-gray-300">
            {parseInt(weatherInfo[0].temperature, 10)}
            <span className="text-6xl text-gray-400">°C</span>
          </h2>
          <h1 className="text-gray-400 text-5xl mb-6 text-center">
            {weatherInfo[0].weatherState}
          </h1>
          <div className="flex items-center">
            <h2 className="text-gray-400 my-2 text-2xl">Today • {date}</h2>
          </div>
          <div className="flex items-center my-2">
            <LocationOnIcon className="text-gray-400" />
            <h2 className="mx-1 text-gray-400 text-xl">
              {city} , {country}
            </h2>
          </div>
        </>
      ) : (
        <h1 className="w-2/3 text-center">
          No geolocation available, please search for places
        </h1>
      )}
    </div>
  );
}
