import { format } from 'date-fns';
import { observer } from 'mobx-react-lite';
import { log } from '../helpers';

export const ForecastItem = observer((props) => {
    const {
        day, id, type, temperature, onClick, selectedDay, defaultDay,
    } = props;

    const handleGetSelectedDayId = () => {
        onClick(id);
    };
    const isSelected = selectedDay ||  defaultDay;
    // eslint-disable-next-line
    // console.log('default: ', defaultDay, '---', isSelected);

    return (
        <div
            onClick = { handleGetSelectedDayId }
            className = { `day ${type} ${isSelected === id ? 'selected' : ''}` }>
            <p>{ format(day, 'eeee') }</p>
            <span>{ temperature }</span>
        </div>
    );
});
