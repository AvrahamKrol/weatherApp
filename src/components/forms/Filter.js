// Core
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Components
import { useState } from 'react';
import { Input } from './Input';
import { schema } from './config';
// Hooks
import { useStore } from '../../hooks';


export const Filter = observer(() => {
    const [isCloudy, setIsCloudy] = useState('');
    const [isSunny, setIsSunny] = useState('');
    const store = useStore();
    const form = useForm({
        mode:     'onTouched',
        resolver: yupResolver(schema),
    });

    const handleSubmit = (ev) => {
        ev.preventDefault();
        // eslint-disable-next-line
        console.log('wow');
    };
    const handleIsCloudy = () => {
        if (!isCloudy) {
            setIsCloudy('selected');
            setIsSunny('');
        }
    };
    const handleIsSunny = () => {
        if (!isSunny) {
            setIsSunny('selected');
            setIsCloudy('');
        }
    };


    return (
        <form onSubmit = { handleSubmit } className = 'filter'>
            <span
                onClick = { handleIsCloudy }
                className = { `checkbox ${isCloudy}` }>Облачно</span>
            <span
                onClick = { handleIsSunny }
                className = { `checkbox ${isSunny}` }>Солнечно</span>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Минимальная температура</label>
                <Input
                    id = 'min-temperature'
                    error = { form.formState.errors.minTemperature }
                    register = { form.register('minTemperature') } />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'>Максимальная температура</label>
                <Input
                    id = 'max-temperature'
                    error = { form.formState.errors.maxTemperature }
                    register = { form.register('maxTemperature') } />
            </p>
            <button>Отфильтровать</button>
        </form>
    );
});
