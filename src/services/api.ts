import axios from "axios";
import type { WeatherAPIResponseType } from "../@types/types";

/**
 * Fetch weather data from the Visual Crossing Weather API.
 * @param lat - Latitude
 * @param lon - Longitude
 * @returns WeatherAPIResponseType
 */

const API_URL =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
const API_KEY = import.meta.env.VITE_VISUAL_CROSSING_API_KEY as string;

export const getWeatherData = async (lat: number, lon: number): Promise<WeatherAPIResponseType> => {
  try {
    const response = await axios.get<WeatherAPIResponseType>(
      `${API_URL}/${lat},${lon}/today?unitGroup=metric&key=${API_KEY}&iconSet=icons2`,
    ); //&contentType=json
    return response.data;
  } catch (error) {
    console.error("API error: ", error);
    throw new Error("Failed to fetch weather data. Please try again.");
  }
};
