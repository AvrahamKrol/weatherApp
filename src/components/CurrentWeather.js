import { observer } from 'mobx-react-lite';

export const CurrentWeather = observer(({ rain_probability, humidity, temperature  }) => {
    // eslint-disable-next-line
    console.log(rain_probability, humidity, temperature);

    return (
        <div className = 'current-weather'>
            <p className = 'temperature'>{ temperature }</p>
            <p className = 'meta'>
                <span className = 'rainy'>%{ rain_probability }</span>
                <span className = 'humidity'>%{ humidity }</span>
            </p>
        </div>
    );
});
