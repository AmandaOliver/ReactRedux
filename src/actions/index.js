import axios from 'axios';

const API_KEY = '3517f66da58ce90c6698f6ba16751411';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}` ;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName){
    const url = `${ROOT_URL}&q=${cityName},pl`;
    const request = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}