export type WeatherAPIResponseType = {
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  name: string;
  days: Day[];
  alerts: Alert[];
  stations: Stations;
  queryCost: number;
  currentConditions: CurrentConditions;
};

export type Day = {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string[];
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  stations: string[];
  source: string;
  hours: Hour[];
};

export type Hour = {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype?: string[];
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  conditions: string;
  icon: string;
  stations?: string[];
  source: string;
};

export type Alert = {
  event: string;
  headline: string;
  ends: string;
  endsEpoch: number;
  onset: string;
  onsetEpoch: number;
  id: string;
  language: string;
  link: string;
  description: string;
};

export type Stations = {
  C1292: C1292;
  LFPB: Lfpb;
  LFPO: Lfpo;
  LFPV: Lfpv;
};

export type C1292 = {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
};

export type Lfpb = {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
};

export type Lfpo = {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
};

export type Lfpv = {
  distance: number;
  latitude: number;
  longitude: number;
  useCount: number;
  id: string;
  name: string;
  quality: number;
  contribution: number;
};

export type CurrentConditions = {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: string[];
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: string;
  icon: string;
  stations: string[];
  source: string;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
};

export type DisplayedWeatherData = {
  date: string;
  locationData: {
    latitude: number;
    longitude: number;
    address: string;
    timezone: string;
  };
  dayAverageWeather: {
    weatherAlerts: Alert[] | [];
    dayConditions: string;
    dayConditionsDescription: string;
    dayMinTemp: number;
    dayMinFeelsLike: number;
    dayMaxTemp: number;
    dayMaxFeelsLike: number;
    sunrise: string;
    sunset: string;
  };
  currentConditions: {
    temperature: number;
    feelsLike: number;
    humidity: number;
    precipitation: number;
    precipitationProbability: number;
    snow: number;
    snowDepth: number;
    precipitationType: string[];
    windSpeed: number;
    pressure: number;
    visibility: number;
    cloudCover: number;
    uvIndex: number;
    conditions: string;
    icon: string;
    moonphase: number;
  };
};
