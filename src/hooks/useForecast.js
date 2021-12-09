// Core
import { useQuery } from 'react-query';

// Api
import { api } from '../api';

export const useForecast = () => {
    const { data, isFetched } = useQuery('weather', api.getWeather);

    const forecastList = {
        forecastList: data,
        isFetched,
    };

    return forecastList;
};
