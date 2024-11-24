import weatherIcons from "../assets/weatherIcons/iconsIndex";
import { useWeatherStore } from "../store/store";
import { formatDate } from "../utils/formatDate";
import { truncateString } from "../utils/truncateString";
import {
  dashboardDataContent,
  dataContainer,
  date,
  dateContainer,
  forecastContainer,
  locationContainer,
  message,
  secondaryData,
  sectionTitle,
  sunDataContainer,
  temp,
  tempContainer,
  tempRangeContainer,
  weatherDataContainer,
} from "./Dashboard.css";
import { Loader } from "./Loader";

export function Dashboard() {
  const { weatherData, isLoading, error } = useWeatherStore();
  const icon = weatherData?.currentConditions.icon as keyof typeof weatherIcons;
  const weatherIcon = icon ? weatherIcons[icon] : null;

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!weatherData) {
    return <p className={message}>Select a location to display weather data.</p>;
  }

  const minifiedLatitude = truncateString(weatherData.locationData.latitude.toString());
  const minifiedLongitude = truncateString(weatherData.locationData.longitude.toString());
  const formattedDate = formatDate(weatherData.date);

  console.log(weatherData);
  return (
    <div className={dashboardDataContent}>
      <div className={locationContainer}>
        <p className="lat-lng">
          Lat: {minifiedLatitude} • Long: {minifiedLongitude}
        </p>
        <p className={secondaryData}>{weatherData.locationData.timezone}</p>
      </div>
      <div className={dateContainer}>
        <p className={date}>{formattedDate}</p>
        <div className={sunDataContainer}>
          <p className={secondaryData}>
            Sunrise: {weatherData.dayAverageWeather.sunrise} | Sunset:{" "}
            {weatherData.dayAverageWeather.sunset}
          </p>
        </div>
      </div>
      <div className={weatherDataContainer}>
        <h3 className={sectionTitle}>Today&rsquo;s Forecast</h3>
        {/* TODO: insert weather alerts */}
        <div className={tempRangeContainer}>
          <div className={tempContainer}>
            <p className={temp}>Min: {weatherData.dayAverageWeather.dayMinTemp}°C</p>
            <p className={secondaryData}>
              (feels like: {weatherData.dayAverageWeather.dayMinFeelsLike}°C)
            </p>
          </div>
          <div className={tempContainer}>
            <p className={temp}>Max: {weatherData.dayAverageWeather.dayMaxTemp}°C</p>
            <p className={secondaryData}>
              (feels like: {weatherData.dayAverageWeather.dayMaxFeelsLike}°C)
            </p>
          </div>
        </div>
        <div className={forecastContainer}>
          <p className="conditions">{weatherData.dayAverageWeather.dayConditions}</p>
          <p className="description">{weatherData.dayAverageWeather.dayConditionsDescription}</p>
        </div>
      </div>
      <div className={weatherDataContainer}>
        <h3 className={sectionTitle}>Current Conditions</h3>
        <div className={forecastContainer}>
          <img src={weatherIcon || ""} alt="Weather Icon" className={weatherIcon || undefined} />
          <p>{weatherData.currentConditions.conditions}</p>
        </div>
        <div className={tempContainer}>
          <p className={temp}>{weatherData.currentConditions.temperature}°C</p>
          <p className={secondaryData}>(feels like: {weatherData.currentConditions.feelsLike}°C)</p>
        </div>
        <div className={dataContainer}>
          <p className="precip-type">
            Precipitation type: {weatherData.currentConditions.precipitationType ?? "none"}
          </p>
          <p className="precip-prob">
            Precipitation probability: {weatherData.currentConditions.precipitationProbability}%
          </p>
          <p className="precip">Precipitation: {weatherData.currentConditions.precipitation}mm</p>
          <p className="humidity">Humidity: {weatherData.currentConditions.humidity}%</p>
        </div>
        <div className={dataContainer}>
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
