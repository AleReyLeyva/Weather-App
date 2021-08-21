import axios from 'axios';

const API = axios.create({
  baseURL: 'https://www.metaweather.com/api/location',
});

export default API;
