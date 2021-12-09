// Core
import axios from 'axios';

import { WEATHER_API_URL } from './config';
// eslint-disable-next-line
console.log(WEATHER_API_URL);

export const api = Object.freeze({
    async getWeather() {
        const { data } =  await axios.get(`${WEATHER_API_URL}`);

        return data?.data;
    },
});
