import axios from "axios";
const API_KEY = "b8783772833c558a173444826f72836d";
const ROOT_URL =
  "http://api.openweathermap.org/data/2.5/forecast?&appid=" + API_KEY;
export const FETCH_WEATHER = "FETCH_WEATHER";

export function fetchWeather(city) {
  const final_url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(final_url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
