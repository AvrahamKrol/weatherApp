// Core
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
// Helpers
import { log } from '../helpers';


// Components
import { ForecastItem } from './ForecastItem';

// Helpers
import { fetchify } from '../helpers/fetchify';
// Hooks
import { useDay, useForecast, useStore } from '../hooks';


export const Forecast = observer(({ filter }) => {
    const { forecastList, isFetched } = useForecast();
    const store = useStore();
    const { isFiltered } = store;

    const setSelectedDayId = (id) => {
        store.setSelectedDayId(id);
    };

    // eslint-disable-next-line
        // console.log(isFiltered);

    const isSelectedDay = useDay(forecastList, store.isSelectedDayId);

    const forecastListJSX = forecastList?.map((forecastItem) => {
        return <ForecastItem
            key = { forecastItem.id }
            onClick = { setSelectedDayId }
            defaultDay = { forecastList[ 0 ]?.id }
            selectedDay = { isSelectedDay?.id }
            { ...forecastItem } />;
    }).slice(0, 7);

    const filteredList = store.filteredDays(forecastList);

    const filteredListJSX = filteredList?.map((filteredItem) => {
        return <ForecastItem
            key = { filteredItem.id }
            onClick = { setSelectedDayId }
            defaultDay = { forecastList[ 0 ]?.id }
            selectedDay = { isSelectedDay?.id }
            { ...filteredItem } />;
    }).slice(0, 7);
    // eslint-disable-next-line
    console.log(filteredListJSX, 'isFiltered:', isFiltered);

    return (
        <div className = 'forecast'>
            { !isFiltered && fetchify(isFetched, forecastListJSX) }
            { isFiltered && filteredListJSX }
        </div>
    );
});
