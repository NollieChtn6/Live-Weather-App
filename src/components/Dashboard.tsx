import { useWeatherStore } from "../store/store";

export function Dashboard() {
  const { weatherData, isLoading, error } = useWeatherStore();

  if (isLoading) {
    return <p>Loading weather data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!weatherData) {
    return <p>Select a location to see the weather data.</p>;
  }
  return (
    <div className="data-content">
      <h2 className="city">Weather Data</h2>
      <div className="container location-container">
        <p className="city">{weatherData.address}</p>
        <p className="lat-lng">
          Lat: {weatherData.latitude} • Long: {weatherData.longitude}
        </p>
      </div>
      <div className="container date-container">
        <p className="date">{weatherData.date}</p>
      </div>
      <div className="weather-container">
        {/* TODO: separate data for the day vs current conditions */}
        <h3>Forecast</h3>

        <div className="container summary-container">
          <p className="current-temperature">{weatherData.currentConditions.temp}°C</p>
          <p className="feelslike-temp">
            (feels like: {weatherData.currentConditions.feelslike})°C
          </p>
          {/* TODO: insert icon here */}
          <p className="conditions">{weatherData.dayConditions}</p>
          <p className="description">{weatherData.dayConditionsDescription}</p>
        </div>
      </div>
      <div className="weather-container">
        <h3>Other info</h3>
        <div className="container sun-data-container">
          <p className="sun-hours">
            Sunrise: {weatherData.currentConditions.sunrise} | Sunset:{" "}
            {weatherData.currentConditions.sunset}
          </p>
        </div>
        <div className="container temp-range-container">
          <div className="temp-data min-temp-data">
            <p className="min-temp">Min temp: {weatherData.dayMinTemp}°C</p>
            <p className="feelslike-temp">(feels like: {weatherData.dayMinFeelsLike}°C)</p>
          </div>
          <div className="temp-data max-temp-data">
            <p className="max-temp">Max temp: {weatherData.dayMaxTemp}°C</p>
            <p className="feelslike-temp">(feels like: {weatherData.dayMaxFeelsLike}°C)</p>
          </div>
        </div>
        <div className="container precip-container">
          <p className="precip-type">
            Precipitation type: {weatherData.currentConditions.preciptype}
          </p>
          <p className="precip-prob">
            Precipitation probability: {weatherData.currentConditions.precipprob}%
          </p>
          <p className="precip">Precipitation: {weatherData.currentConditions.precip}mm</p>
          <p className="humidity">Humidity: {weatherData.currentConditions.humidity}%</p>
        </div>
        <div className="container cloud-cover-container">
          <p className="cloudcover">Cloudcover: {weatherData.currentConditions.cloudcover}%</p>
          <p className="uv-index">UV Index: {weatherData.currentConditions.uvindex}</p>
        </div>
        <div className="container wind-container">
          <p className="windspeed">Windspeed: {weatherData.currentConditions.windspeed}km/h</p>
        </div>
      </div>
    </div>
  );
}
