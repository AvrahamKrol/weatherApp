// Core
import { useState } from 'react';
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

    const filteredList = store.filteredDays(forecastList);
    const isFilteredDay = useDay(filteredList, store.isSelectedDayId);

    // eslint-disable-next-line
        // console.log(store.applyFilter(isFilter));

    return (
        <main>
            <Filter />
            <Head formatedDay = { day } isFilteredDay = { isFilteredDay } />
            <CurrentWeather formatedDay = { day } isFilteredDay = { isFilteredDay } />
            <Forecast
                isSelectedDay = { day }
                filteredList = { filteredList }
                isFilteredDay = { isFilteredDay } />
        </main>
    );
});

