import { observer } from 'mobx-react-lite';

export const CurrentWeather = observer(({ formatedDay }) => {
    const day = formatedDay && {
        temperature:      formatedDay?.temperature,
        rain_probability: formatedDay?.rain_probability,
        humidity:         formatedDay?.humidity,
    };

    return (
        <div className = 'current-weather'>
            <p className = 'temperature'>{ day?.temperature }</p>
            <p className = 'meta'>
                <span className = 'rainy'>%{ day?.rain_probability }</span>
                <span className = 'humidity'>%{ day?.humidity }</span>
            </p>
        </div>
    );
});
