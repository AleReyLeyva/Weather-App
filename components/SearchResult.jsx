/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useWeather from '../hooks/useWeather';

export default function SearchResult({ result }) {
  const router = useRouter();
  const { setWeather } = useWeather();
  const { city, id } = result;

  const handleClick = () => {
    axios.get(`/api/weather/${id}`).then(({ data: weather }) => {
      setWeather(weather);
      router.replace('/');
    });
  };

  return (
    <div
      onClick={handleClick}
      className="flex justify-between items-center border p-4 my-4 h-16 w-11/12 mx-auto cursor-pointer"
    >
      <h3 className="">{city}</h3>
      <ArrowForwardIosIcon />
    </div>
  );
}
