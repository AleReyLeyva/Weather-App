/* eslint-disable camelcase */
import axios from 'axios';

export async function setCurrentPositionWeather(setWeather) {
  navigator.geolocation.getCurrentPosition(
    async ({ coords }) => {
      const { data } = await axios.get(
        `/api/position/${coords.latitude},${coords.longitude}`,
      );
      const { id } = data;
      localStorage.setItem('lastSearch', id);
      const { data: weather } = await axios.get(`/api/weather/${id}`);
      setWeather(weather);
    },
    () => {
      alert('No geolocation available');
      setWeather((oldState) =>
        !oldState.location ? { ...oldState, loading: false } : oldState,
      );
    },
  );
}

export async function initWeather(setWeather) {
  if (localStorage.getItem('lastSearch')) {
    const lastSearch = localStorage.getItem('lastSearch');
    const { data: weather } = await axios.get(`/api/weather/${lastSearch}`);
    setWeather(weather);
  } else if ('geolocation' in navigator) {
    await setCurrentPositionWeather(setWeather);
  } else {
    setWeather((oldState) => ({
      ...oldState,
      loading: false,
      location: false,
    }));
  }
}
