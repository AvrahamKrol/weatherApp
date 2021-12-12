import { format } from 'date-fns';
// Mobx
import { observer } from 'mobx-react-lite';
// Hooks
import { useDay, useForecast  } from '../hooks';
// Helpers
import { log } from '../helpers';


export const Head = observer(({ store }) => {
    return (
        <div className = 'head'>
            <div className = 'icon cloudy'></div>
            <div className = 'current-date'>
                { /* <p>{ format(formateDay, 'eee') }</p> */ }
                <span>29 ноября</span>
            </div>
        </div>
    );
});
