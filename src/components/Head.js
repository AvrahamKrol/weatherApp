import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
// Mobx
import { observer } from 'mobx-react-lite';
// Hooks
import { useFormateMonth } from '../hooks';


export const Head = observer(({ formatedDay }) => {
    const dayOfWeek = formatedDay && format(formatedDay?.day, 'eeee', { locale: ru });
    const dayOfMonth = formatedDay && format(formatedDay?.day, 'd', { locale: ru });
    const month = formatedDay && format(formatedDay?.day, 'LLLL', { locale: ru });

    return (
        <div className = 'head'>
            <div className = { `icon ${formatedDay?.type}` }></div>
            <div className = 'current-date'>
                <p>{ dayOfWeek }</p>
                <span>{ dayOfMonth } { useFormateMonth(month) }</span>
            </div>
        </div>
    );
});
