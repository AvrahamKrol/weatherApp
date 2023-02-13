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
    const { forecastList } = useForecast();
    const store = useStore();

    const actualForecastList = store.isFiltered ? props.filteredList : forecastList;

    const setSelectedDayId = (id) => {
        store.setSelectedDayId(id);
    };

    return (
        <div className = 'forecast'>
            { props.isNothing
            && <p className = 'message'>По заданным критериям нет доступных дней</p> }
            { actualForecastList?.slice(0, 7).map((item) => {
                return <ForecastItem
                    key = { item.id }
                    onClick = { setSelectedDayId }
                    defaultDay = { actualForecastList[ 0 ]?.id }
                    selectedDay = { store.isFiltered
                        ? props.isFilteredDay?.id : props.isSelectedDay?.id }
                    { ...item } />;
            }) }
        </div>
    );
});
