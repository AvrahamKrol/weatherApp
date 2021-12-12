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
import { useDay, useForecast } from '../hooks';


export const Forecast = observer(({ store }) => {
    const { forecastList, isFetched } = useForecast();

    const getSelectedDayId = (id) => {
        store.setSelectedDayId(id);
    };

    const isSelectedDay = useDay(forecastList, store.selectedDayId);

    const forecastListJSX = forecastList?.map((forecastItem) => {
        return <ForecastItem
            key = { forecastItem.id }
            onClick = { getSelectedDayId }
            defaultDay = { forecastList[ 0 ]?.id }
            selectedDay = { isSelectedDay?.id }
            { ...forecastItem } />;
    }).slice(0, 7);

    return (
        <div className = 'forecast'>
            { fetchify(isFetched, forecastListJSX) }
        </div>
    );
});
