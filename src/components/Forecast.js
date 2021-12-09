// Core
import { useState } from 'react';

// Components
import { ForecastItem } from './ForecastItem';

// Helpers
import { fetchify } from '../helpers/fetchify';
// Hooks
import { useForecast } from '../hooks';

export const Forecast = () => {
    const { forecastList, isFetched } = useForecast();
    const [isSelected, setIsSelected] = useState('');

    const isSelectedHandler = () => {
        setIsSelected(isSelected === 'selected' ? '' : 'selected');
        // eslint-disable-next-line
        console.log('isSelected');

        return isSelected;
    };

    const forecastListJSX = forecastList?.map((forecastItem) => {
        return <ForecastItem
            key = { forecastItem.id } { ...forecastItem }
            isSelected = { isSelected }
            onClick = { isSelectedHandler } />;
    }).slice(0, 7);

    return (
        <div className = 'forecast'>
            { fetchify(isFetched, forecastListJSX) }
        </div>
    );
};
