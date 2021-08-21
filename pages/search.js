import React from 'react';
import WeatherMain from '../views/WeatherMain';
import WeatherSearch from '../views/WeatherSearch';

export default function search() {
  return (
    <>
      <WeatherSearch />
      <WeatherMain />
    </>
  );
}
