import { useContext } from 'react';
import { WeatherContext } from '../services/WeatherProvider';

export default () => useContext(WeatherContext);
