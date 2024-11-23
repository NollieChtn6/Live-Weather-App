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
  console.log(weatherData);
  return (
    <div className="data-content">
      <h2 className="city">Weather Data</h2>
      <div className="container location-container">
        <p className="lat-lng">
          Lat: {weatherData.locationData.latitude} • Long: {weatherData.locationData.longitude}
        </p>
        <p className="city">{weatherData.locationData.timezone}</p>
      </div>
      <div className="container date-container">
        <p className="date">{weatherData.date}</p>
        <div className="container sun-data-container">
          <p className="sun-hours">
            Sunrise: {weatherData.dayAverageWeather.sunrise} | Sunset:{" "}
            {weatherData.dayAverageWeather.sunset}
          </p>
        </div>
      </div>
      <div className="weather-container">
        <h3>Today&rsquo;s Forecast</h3>
        {/* TODO: insert weather alerts */}
        <div className="container temp-range-container">
          <div className="temp-data min-temp-data">
            <p className="min-temp">Min: {weatherData.dayAverageWeather.dayMinTemp}°C</p>
            <p className="feelslike-temp">
              (feels like: {weatherData.dayAverageWeather.dayMinFeelsLike}°C)
            </p>
          </div>
          <div className="temp-data max-temp-data">
            <p className="max-temp">Max temp: {weatherData.dayAverageWeather.dayMaxTemp}°C</p>
            <p className="feelslike-temp">
              (feels like: {weatherData.dayAverageWeather.dayMaxFeelsLike}°C)
            </p>
          </div>
          <p className="conditions">{weatherData.dayAverageWeather.dayConditions}</p>
          <p className="description">{weatherData.dayAverageWeather.dayConditionsDescription}</p>
        </div>
      </div>
      <div className="weather-container">
        <h3>Current Conditions</h3>
        <div className="container summary-container">
          {/* TODO: insert icon here */}
          <p>{weatherData.currentConditions.conditions}</p>
        </div>
        <div className="container precip-container">
          <p className="current-temperature">{weatherData.currentConditions.temperature}°C</p>
          <p className="feelslike-temp">
            (feels like: {weatherData.currentConditions.feelsLike})°C
          </p>
        </div>
        <div className="container precip-container">
          <p className="precip-type">
            Precipitation type: {weatherData.currentConditions.precipitationType}
          </p>
          <p className="precip-prob">
            Precipitation probability: {weatherData.currentConditions.precipitationProbability}%
          </p>
          <p className="precip">Precipitation: {weatherData.currentConditions.precipitation}mm</p>
          <p className="humidity">Humidity: {weatherData.currentConditions.humidity}%</p>
        </div>
        <div className="container cloud-cover-container">
          <p className="cloudcover">Cloudcover: {weatherData.currentConditions.cloudCover}%</p>
          <p className="uv-index">UV Index: {weatherData.currentConditions.uvIndex}</p>
        </div>
        <div className="container wind-container">
          <p className="windspeed">Windspeed: {weatherData.currentConditions.windSpeed}km/h</p>
        </div>
      </div>
    </div>
  );
}
