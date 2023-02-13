import { observer } from 'mobx-react-lite';
import { useStore } from '../hooks';

export const CurrentWeather = observer(({ formatedDay, isFilteredDay }) => {
    const store = useStore();

    const day = store.isFiltered ? isFilteredDay : formatedDay;

    if (day) {
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
