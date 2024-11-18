import { create } from "zustand";

type WeatherStore = {
  location: string | null;
  selectLocation: (location: string) => void;
  fetchWeatherData: () => Promise<void>;
};

export const useWeatherStore = create<WeatherStore>((set) => ({
  location: null,
  selectLocation: (selectedLocation) => set({ location: selectedLocation }),
  fetchWeatherData: async () => {},
}));
