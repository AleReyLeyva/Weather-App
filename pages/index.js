import WeatherMain from "../views/WeatherMain";
import WeatherSummary from "../views/WeatherSummary";

export default function Home() {
  return (
    <>
      <WeatherSummary />
      <WeatherMain />
    </>
  );
}
