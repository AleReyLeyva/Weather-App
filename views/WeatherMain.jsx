import React from 'react';
import useWeather from '../hooks/useWeather';
import DayWeather from '../components/WeatherCard';
import WindCard from '../components/WindCard';
import HumidityCard from '../components/HumidityCard';
import VisibilityCard from '../components/VisibilityCard';
import AirCard from '../components/AirCard';

export default function WeatherMain() {
  const { weather } = useWeather();
  const { loading, weatherInfo, location } = weather;

  if (loading)
    return (
      <div className="main-container">
        <h1 className="w-1/2 mx-auto h-screen flex justify-center items-center text-center">
          Loading weather...
        </h1>
      </div>
    );

  if (!location)
    return (
      <div className="main-container">
        <h1 className="w-1/2 mx-auto h-screen flex justify-center items-center text-center">
          No information about weather
        </h1>
      </div>
    );

  return (
    <div className="main-container">
      <div className="px-16 pt-10 pb-6 flex flex-col min-h-screen w-full">
        <div className="day-cards-grid">
          {weatherInfo.map(
            (w, key) =>
              key > 0 && (
                <DayWeather weather={w} key={key} tomorrow={key === 1} />
              ),
          )}
        </div>
        <div className="w-full mt-8">
          <h1 className="w-full text-left">Today&apos;s Highlights</h1>
          <div className="highlight-cards-grid">
            <WindCard />
            <HumidityCard />
            <VisibilityCard />
            <AirCard />
          </div>
        </div>
      </div>
    </div>
  );
}
