import axios from "axios";
import { create } from "zustand";
import type { DisplayedWeatherData } from "../@types/types";
import { getWeatherData } from "../services/api";
import { parseWeatherData } from "../utils/parseWeatherData";

type LocationCoordinates = [number, number] | null;

type WeatherStore = {
  coordinates: LocationCoordinates;
  weatherData: DisplayedWeatherData | null;
  isLoading: boolean;
  error: string | null;
  selectCoordinates: (coordinates: LocationCoordinates) => void;
  fetchWeatherData: (coordinates: [number, number]) => Promise<void>;
};

export const useWeatherStore = create<WeatherStore>((set) => ({
  coordinates: null,
  weatherData: null,
  isLoading: false,
  error: null,
  selectCoordinates: (selectedCoordinates) => set({ coordinates: selectedCoordinates }),
  fetchWeatherData: async (coordinates) => {
    set({ isLoading: true, error: null });
    try {
      const [lat, lon] = coordinates;
      const data = await getWeatherData(lat, lon);
      const extractedData = parseWeatherData(data);
      set({ weatherData: extractedData });
    } catch (error) {
      set({ error: error instanceof Error ? error.message : "Something went wrong." });
      if (axios.isAxiosError(error)) {
        set({ error: error.response?.data?.message || error.message });
      } else {
        set({ error: "Something went wrong." });
      }
    } finally {
      set({ isLoading: false });
    }
  },
}));
