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
    const [isFilter, setIsFilter] = useState(false);

    const handleGetFilter = (filter) => {
        setIsFilter(filter);
    };

    // eslint-disable-next-line
        // console.log(store.applyFilter(isFilter));

    return (
        <main>
            <Filter getFilter = { handleGetFilter } />
            <Head formatedDay = { day } />
            <CurrentWeather formatedDay = { day } />
            <Forecast store = { store } filter = { isFilter } />
        </main>
    );
});

