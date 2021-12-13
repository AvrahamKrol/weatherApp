import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
// Mobx
import { observer } from 'mobx-react-lite';
// Hooks
import { useFormateMonth, useStore } from '../hooks';

export const Head = observer(({ formatedDay, isFilteredDay }) => {
    const store = useStore();
    let dayOfWeek = null;
    let dayOfMonth = null;
    let month = null;
    let className = null;

    if (!store.isFiltered) {
        dayOfWeek = formatedDay && format(formatedDay?.day, 'eeee', { locale: ru });
        dayOfMonth = formatedDay && format(formatedDay?.day, 'd', { locale: ru });
        month = formatedDay && format(formatedDay?.day, 'LLLL', { locale: ru });
        className = `icon ${formatedDay?.type}`;
    }
    if (store.isFiltered) {
        dayOfWeek = isFilteredDay && format(isFilteredDay?.day, 'eeee', { locale: ru });
        dayOfMonth = isFilteredDay && format(isFilteredDay?.day, 'd', { locale: ru });
        month = isFilteredDay && format(isFilteredDay?.day, 'LLLL', { locale: ru });
        className = `icon ${isFilteredDay?.type}`;
    }

    return (
        <div className = 'head'>
            <div className = { className }></div>
            <div className = 'current-date'>
                <p>{ dayOfWeek }</p>
                <span>{ dayOfMonth } { useFormateMonth(month) }</span>
            </div>
        </div>
    );
});
