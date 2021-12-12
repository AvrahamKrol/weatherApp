import { useEffect } from 'react';
import { format } from 'date-fns';
// Mobx
import { observer } from 'mobx-react-lite';
// Hooks
import { useDay, useForecast, useStore  } from '../hooks';
// Helpers
import { log } from '../helpers';


export const Head = observer(({ formatedDay }) => {
    const day = formatedDay && format(formatedDay?.day, 'eeee');

    return (
        <div className = 'head'>
            <div className = 'icon cloudy'></div>
            <div className = 'current-date'>
                <p>{ day }</p>
                <span>29 ноября</span>
            </div>
        </div>
    );
});
