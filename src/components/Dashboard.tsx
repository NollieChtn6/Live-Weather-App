export function Dashboard() {
  return (
    <div className="data-content">
      <h2 className="city">Weather Data</h2>
      <div className="container location-container">
        <p className="city">Paris, Île-de-France, France</p>
        <p className="lat-lng">Lat: 48.8572 • Long: 2.34141</p>
      </div>
      <div className="container date-container">
        <p className="date">Monday 18 November</p>
      </div>
      <div className="weather-container">
        <h3>Forecast</h3>

        <div className="container summary-container">
          <p className="current-temperature">10.4°C</p>
          <p className="feelslike-temp">(feels like: 9.7°C)</p>
          {/* TODO: insert icon here */}
          <p className="conditions">Rain, Overcast</p>
          <p className="description">
            Cloudy skies throughout the day with a chance of rain throughout the day.
          </p>
        </div>
      </div>
      <div className="weather-container">
        <h3>Other info</h3>
        <div className="container sun-data-container">
          <p className="sun-hours">Sunrise: 08:06:27 | Sunset: 17:05:23</p>
        </div>
        <div className="container temp-range-container">
          <div className="temp-data min-temp-data">
            <p className="min-temp">Min temp: 7°C</p>
            <p className="feelslike-temp">(feels like: 4.7°C)</p>
          </div>
          <div className="temp-data max-temp-data">
            <p className="max-temp">Max temp: 12.2°C</p>
            <p className="feelslike-temp">(feels like: 12.2°C)</p>
          </div>
        </div>
        <div className="container precip-container">
          <p className="precip-type">Expected: Rain</p>
          <p className="precip-prob">Precipitation probability: 100%</p>
          <p className="precip">Precipitation: 19.7mm</p>
          <p className="humidity">Humidity: 88.2%</p>
        </div>
        <div className="container cloud-cover-container">
          <p className="cloudcover">Cloudcover: 98.3%</p>
          <p className="uv-index">UV Index: 0.0</p>
        </div>
        <div className="container wind-container">
          <p className="windspeed">Windspeed: 32.1km/h</p>
        </div>
      </div>
    </div>
  );
}
