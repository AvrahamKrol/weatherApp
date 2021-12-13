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
    const isNothing = store.isFiltered && filteredList.length === 0;

    return (
        <main>
            <Filter />
            <Head
                isNothing = { isNothing }
                formatedDay = { day }
                isFilteredDay = { isFilteredDay } />
            <CurrentWeather
                isNothing = { isNothing }
                formatedDay = { day }
                isFilteredDay = { isFilteredDay } />
            <Forecast
                isNothing = { isNothing }
                isSelectedDay = { day }
                filteredList = { filteredList }
                isFilteredDay = { isFilteredDay } />
        </main>
    );
});
