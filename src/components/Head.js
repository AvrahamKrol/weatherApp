import { useEffect } from 'react';
import { format } from 'date-fns';
// Mobx
import { observer } from 'mobx-react-lite';
// Hooks
import { useDay, useForecast, useStore  } from '../hooks';
// Helpers
import { log } from '../helpers';


export const Head = observer(({ formatedDay }) => {
    const dayOfWeek = formatedDay && format(formatedDay?.day, 'eeee');
    const dayOfMonth = formatedDay && format(formatedDay?.day, 'd');
    const month = formatedDay && format(formatedDay?.day, 'LLLL');

    return (
        <div className = 'head'>
            <div className = 'icon cloudy'></div>
            <div className = 'current-date'>
                <p>{ dayOfWeek }</p>
                <span>{ dayOfMonth } { month }</span>
            </div>
        </div>
    );
});
