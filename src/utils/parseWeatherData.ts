import type { WeatherAPIResponseType, DisplayedWeatherData } from "../@types/types";

/**
 * Parse raw weather data into DisplayedWeatherData type.
 * @param data - WeatherAPIResponseType from the API
 * @returns DisplayedWeatherData
 */
export const parseWeatherData = (data: WeatherAPIResponseType): DisplayedWeatherData => {
  return {
    date: data.days[0].datetime,
    latitude: data.latitude,
    longitude: data.longitude,
    address: data.resolvedAddress,
    timezone: data.timezone,
    weatherAlerts: data.alerts ?? [],
    dayConditions: data.days[0].conditions,
    dayConditionsDescription: data.days[0].description,
    dayMinTemp: data.days[0].tempmin,
    dayMinFeelsLike: data.days[0].feelslikemin,
    dayMaxTemp: data.days[0].tempmax,
    dayMaxFeelsLike: data.days[0].feelslikemax,
    currentConditions: {
      datetime: data.currentConditions.datetime,
      datetimeEpoch: data.currentConditions.datetimeEpoch,
      temp: data.currentConditions.temp,
      feelslike: data.currentConditions.feelslike,
      humidity: data.currentConditions.humidity,
      dew: data.currentConditions.dew,
      precip: data.currentConditions.precip,
      precipprob: data.currentConditions.precipprob,
      snow: data.currentConditions.snow,
      snowdepth: data.currentConditions.snowdepth,
      preciptype: data.currentConditions.preciptype,
      windgust: data.currentConditions.windgust,
      windspeed: data.currentConditions.windspeed,
      winddir: data.currentConditions.winddir,
      pressure: data.currentConditions.pressure,
      visibility: data.currentConditions.visibility,
      cloudcover: data.currentConditions.cloudcover,
      solarradiation: data.currentConditions.solarradiation,
      solarenergy: data.currentConditions.solarenergy,
      uvindex: data.currentConditions.uvindex,
      conditions: data.currentConditions.conditions,
      icon: data.currentConditions.icon,
      stations: data.currentConditions.stations,
      source: data.currentConditions.source,
      sunrise: data.currentConditions.sunrise,
      sunriseEpoch: data.currentConditions.sunriseEpoch,
      sunset: data.currentConditions.sunset,
      sunsetEpoch: data.currentConditions.sunsetEpoch,
      moonphase: data.currentConditions.moonphase,
    },
  };
};
