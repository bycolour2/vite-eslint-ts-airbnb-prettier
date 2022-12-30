export interface IServerResponse {
  location: ILocation;
  current: ICurrent;
}

export interface ICurrent {
  lastUpdatedEpoch: number;
  lastUpdated: string;
  tempC: number;
  tempF: number;
  isDay: number;
  condition: ICondition;
  windMph: number;
  windKph: number;
  windDegree: number;
  windDir: string;
  pressureMB: number;
  pressureIn: number;
  precipMm: number;
  precipIn: number;
  humidity: number;
  cloud: number;
  feelslikeC: number;
  feelslikeF: number;
  visKM: number;
  visMiles: number;
  uv: number;
  gustMph: number;
  gustKph: number;
}

export interface ICondition {
  text: string;
  icon: string;
  code: number;
}

export interface ILocation {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tzID: string;
  localtimeEpoch: number;
  localtime: string;
}
