import React, { useState, createContext, useEffect } from 'react';
import { initWeather } from './WeatherService';

export const WeatherContext = createContext();

export default function WeatherProvider({ children }) {
  const [weather, setWeather] = useState({
    city: '',
    id: '',
    weather_info: '',
    time: '',
    country: '',
    loading: true,
  });

  useEffect(() => {
    initWeather(setWeather);
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, setWeather }}>
      {children}
    </WeatherContext.Provider>
  );
}
