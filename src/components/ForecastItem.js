import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import { observer } from 'mobx-react-lite';
import { log } from '../helpers';

export const ForecastItem = observer((props) => {
    const {
        day, id, type, temperature, onClick, selectedDay, defaultDay,
        defaultFilteredDay,
    } = props;

    const handleGetSelectedDayId = () => {
        onClick(id);
    };
    const isSelected = selectedDay || defaultFilteredDay ||  defaultDay;
    // eslint-disable-next-line
    console.log(isSelected, 'defaultFilteredDay:', defaultFilteredDay);

    return (
        <div
            onClick = { handleGetSelectedDayId }
            className = { `day ${type} ${isSelected === id ? 'selected' : ''}` }>
            <p>{ format(day, 'EEEE', { locale: ru }) }</p>
            <span>{ temperature }</span>
        </div>
    );
});
