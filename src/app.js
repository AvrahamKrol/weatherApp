import { observer } from 'mobx-react-lite';
// Components
import {
    Filter, Head, CurrentWeather, Forecast,
} from './components';
// Instruments
// Mobx
import { WeatherStore } from './lib/mobx/weatherStore';
// Hooks
import { useForecast } from './hooks';

const store = new WeatherStore();


export const App = observer(async () => {
    const { forecastList } = useForecast();
    const day  = await forecastList?.find((item) => {
        return item.day === store.selectedDayId || forecastList[ 0 ]?.id;
    });
    const formatedDay = day;
    // eslint-disable-next-line
    console.log(formatedDay);

    return (
        <main>
            <Filter />
            <Head store = { store } foramatedDay = { formatedDay } />
            <CurrentWeather store = { store } foramatedDay = { formatedDay } />
            <Forecast store = { store } />
        </main>
    );
});

