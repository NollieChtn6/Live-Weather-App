import { create } from "zustand";

type Location = string | [string, string] | null;

type WeatherStore = {
  location: Location;
  selectLocation: (location: Location) => void;
  fetchWeatherData: () => Promise<void>;
};

export const useWeatherStore = create<WeatherStore>((set) => ({
  location: null,
  selectLocation: (selectedLocation) => set({ location: selectedLocation }),
  fetchWeatherData: async () => {},
}));
