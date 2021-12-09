import { format } from 'date-fns';

export const ForecastItem = (props) => {
    const {
        day, type, temperature, isSelected,
    } = props;

    // eslint-disable-next-line
        console.log(props);

    return (
        <div className = { `day ${type} ${isSelected}` }>
            <p>{ format(day, 'eeee') }</p>
            <span>{ temperature }</span>
        </div>
    );
};
