// Core
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Components
import { useState } from 'react';
import { Input } from './Input';
import { schema } from './config';
// Hooks
import { useForecast, useStore } from '../../hooks';


export const Filter = observer((props) => {
    const [isCloudy, setIsCloudy] = useState('');
    const [isSunny, setIsSunny] = useState('');
    const [isType, setIsType] = useState('');

    const store = useStore();

    const { forecastList } = useForecast();

    const {
        applyFilter,
    } = store;

    const form = useForm({
        mode: 'onTouched',
        // resolver: yupResolver(schema),
    });

    const { register, handleSubmit } = form;

    const onSubmit = (data) => {
        const filter = {
            type:           isType,
            minTemperature: data.minTemperature,
            maxTemperature: data.maxTemperature,
        };
        applyFilter(filter);
        // eslint-disable-next-line
        setIsCloudy('');
        setIsSunny('');
        setIsType('');
        form.reset();
    };
    const handleIsCloudy = () => {
        if (!isCloudy) {
            setIsCloudy('selected');
            setIsSunny('');
            setIsType('cloudy');
        }
    };
    const handleIsSunny = () => {
        if (!isSunny) {
            setIsSunny('selected');
            setIsCloudy('');
            setIsType('sunny');
        }
    };
    // eslint-disable-next-line
    // console.log(isType);


    return (
        <form onSubmit = { handleSubmit(onSubmit) } className = 'filter'>
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
                    register = { register('minTemperature') } />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'>Максимальная температура</label>
                <Input
                    id = 'max-temperature'
                    register = { register('maxTemperature') } />
            </p>
            <button>Отфильтровать</button>
        </form>
    );
});
