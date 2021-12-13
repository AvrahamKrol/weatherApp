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


export const Filter = observer(() => {
    const [isCloudy, setIsCloudy] = useState('');
    const [isSunny, setIsSunny] = useState('');
    const [isType, setIsType] = useState('');

    const store = useStore();

    const {
        applyFilter, resetFilter, setSelectedDayId,
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
    };

    const handleReset = () => {
        setSelectedDayId('');
        resetFilter();
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
                disabled = { store.isFiltered }
                onClick = { handleIsCloudy }
                className = { `checkbox ${isCloudy}` }>Облачно</span>
            <span
                disabled = { store.isFiltered }
                onClick = { handleIsSunny }
                className = { `checkbox ${isSunny}` }>Солнечно</span>
            <p className = 'custom-input'>
                <label htmlFor = 'min-temperature'>Минимальная температура</label>
                <Input
                    disabled = { store.isFiltered }
                    id = 'min-temperature'
                    register = { register('minTemperature') } />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'>Максимальная температура</label>
                <Input
                    disabled = { store.isFiltered }
                    id = 'max-temperature'
                    register = { register('maxTemperature') } />
            </p>
            { !store.isFiltered && <button>Отфильтровать</button> }
            { store.isFiltered && <button onClick = { handleReset }>Сбросить</button> }
        </form>
    );
});
// disabled = { store.isFormBlocked }
