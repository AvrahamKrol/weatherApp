// Core
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
// Components
import {
    Filter, Head, CurrentWeather, Forecast,
} from './components';
// Instruments
import { log } from './helpers';
// Hooks
import { useDay, useForecast, useStore } from './hooks';


export const App = observer(() => {
    const store = useStore();
    const { forecastList } = useForecast();
    const day = forecastList && useDay(forecastList, store.isSelectedDayId);
    // eslint-disable-next-line
            console.log(day);


    return (
        <main>
            <Filter />
            <Head formatedDay = { day } />
            <CurrentWeather formatedDay = { day } />
            <Forecast store = { store } />
        </main>
    );
});

