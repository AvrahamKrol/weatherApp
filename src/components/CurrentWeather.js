import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks';

export const CurrentWeather = observer(({ formatedDay, isFilteredDay, isNothing }) => {
    const store = useStore();

    let day = null;
    if (!store.isFiltered) {
        day = formatedDay && {
            temperature:      formatedDay?.temperature,
            rain_probability: formatedDay?.rain_probability,
            humidity:         formatedDay?.humidity,
        };
    }
    if (store.isFiltered) {
        day = isFilteredDay && {
            temperature:      isFilteredDay?.temperature,
            rain_probability: isFilteredDay?.rain_probability,
            humidity:         isFilteredDay?.humidity,
        };
    }

    if (!isNothing) {
        return (
            <div className = 'current-weather'>
                <p className = 'temperature'>{ day?.temperature }</p>
                <p className = 'meta'>
                    <span className = 'rainy'>%{ day?.rain_probability }</span>
                    <span className = 'humidity'>%{ day?.humidity }</span>
                </p>
            </div>
        );
    }

    return '';
});
