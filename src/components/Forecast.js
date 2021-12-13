// Core
import { observer } from 'mobx-react-lite';
// Helpers
import { log } from '../helpers';


// Components
import { ForecastItem } from './ForecastItem';

// Helpers
import { fetchify } from '../helpers/fetchify';
// Hooks
import { useForecast, useStore } from '../hooks';


export const Forecast = observer((props) => {
    const { forecastList, isFetched } = useForecast();
    const store = useStore();

    const setSelectedDayId = (id) => {
        store.setSelectedDayId(id);
    };

    // eslint-disable-next-line
        // console.log(isFiltered);

    const forecastListJSX = forecastList?.map((forecastItem) => {
        return <ForecastItem
            key = { forecastItem.id }
            onClick = { setSelectedDayId }
            defaultDay = { forecastList[ 0 ]?.id }
            selectedDay = { props.isSelectedDay?.id }
            { ...forecastItem } />;
    }).slice(0, 7);

    const filteredListJSX = props.filteredList?.map((filteredItem) => {
        return <ForecastItem
            key = { filteredItem.id }
            onClick = { setSelectedDayId }
            defaultFilteredDay = { props.filteredList[ 0 ]?.id }
            selectedDay = { props.isFilteredDay?.id }
            { ...filteredItem } />;
    }).slice(0, 7);

    return (
        <div className = 'forecast'>
            { !store.isFiltered && fetchify(isFetched, forecastListJSX) }
            { store.isFiltered && filteredListJSX }
        </div>
    );
});
