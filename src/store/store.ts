import { create } from "zustand";

type CharactersStore = {
  location: string | null;
  selectLocation: (location: string) => void;
  fetchWeatherData: () => Promise<void>;
};

export const useCharactersStore = create<CharactersStore>((set) => ({
  location: null,
  selectLocation: (selectedLocation) => set({ location: selectedLocation }),
  fetchWeatherData: async () => {},
}));
