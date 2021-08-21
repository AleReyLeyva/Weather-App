/* eslint-disable camelcase */
import API from '../../../API';

export default async (req, res) => {
  const { query_id } = req.query;

  const { data } = await API.get(`/${query_id}`);
  const { title: city, woeid: id, consolidated_weather, time } = data;
  const { title: country } = data.parent;
  let weatherInfo = consolidated_weather;
  weatherInfo = weatherInfo.map(
    ({
      weather_state_name,
      applicable_date,
      wind_direction_compass,
      wind_speed,
      min_temp,
      max_temp,
      the_temp,
      air_pressure,
      humidity,
      visibility,
    }) => ({
      weatherState: weather_state_name,
      image: `/weather/${weather_state_name.replace(' ', '')}.png`,
      date: applicable_date,
      windDirection: wind_direction_compass,
      windSpeed: wind_speed,
      minTemp: min_temp,
      maxTemp: max_temp,
      temperature: the_temp,
      airPressure: air_pressure,
      humidity,
      visibility,
    }),
  );
  res.status(200).json({
    city,
    id,
    weatherInfo,
    date: new Date(time).toLocaleDateString(),
    country,
    loading: false,
    location: true,
  });
};
