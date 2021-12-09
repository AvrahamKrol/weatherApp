// Components
import {
    Filter, Head, CurrentWeather, Forecast,
} from './components';

// Instruments


export const App = () => {
    return (
        <main>
            <Filter />
            <Head />
            <CurrentWeather />
            <Forecast />
        </main>
    );
};

