import type { WeatherAPIResponseType, DisplayedWeatherData } from "../@types/types";

/**
 * Parse raw weather data into DisplayedWeatherData type.
 * @param data - WeatherAPIResponseType from the API
 * @returns DisplayedWeatherData
 */
export const parseWeatherData = (data: WeatherAPIResponseType): DisplayedWeatherData => {
  return {
    date: data.days[0].datetime,
    locationData: {
      latitude: data.latitude,
      longitude: data.longitude,
      address: data.resolvedAddress,
      timezone: data.timezone,
    },
    dayAverageWeather: {
      weatherAlerts: data.alerts ?? [],
      dayConditions: data.days[0].conditions,
      dayConditionsDescription: data.days[0].description,
      dayMinTemp: data.days[0].tempmin,
      dayMinFeelsLike: data.days[0].feelslikemin,
      dayMaxTemp: data.days[0].tempmax,
      dayMaxFeelsLike: data.days[0].feelslikemax,
      sunrise: data.days[0].sunrise,
      sunset: data.days[0].sunset,
    },
    currentConditions: {
      temperature: data.currentConditions.temp,
      feelsLike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      precipitation: data.currentConditions.precip,
      precipitationProbability: data.currentConditions.precipprob,
      snow: data.currentConditions.snow,
      snowDepth: data.currentConditions.snowdepth,
      precipitationType: data.currentConditions.preciptype,
      windSpeed: data.currentConditions.windspeed,
      pressure: data.currentConditions.pressure,
      visibility: data.currentConditions.visibility,
      cloudCover: data.currentConditions.cloudcover,
      uvIndex: data.currentConditions.uvindex,
      conditions: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      moonphase: data.currentConditions.moonphase,
    },
  };
};
