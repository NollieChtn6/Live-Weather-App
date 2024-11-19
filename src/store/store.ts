import { create } from "zustand";

type LocationCoordinates = [number, number] | null;

type WeatherStore = {
  coordinates: LocationCoordinates;
  selectCoordinates: (coordinates: LocationCoordinates) => void;
  fetchWeatherData: () => Promise<void>;
};

export const useWeatherStore = create<WeatherStore>((set) => ({
  coordinates: null,
  selectCoordinates: (selectedCoordinates) => set({ coordinates: selectedCoordinates }),
  fetchWeatherData: async () => {},
}));
