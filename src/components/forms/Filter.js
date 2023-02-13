// Core
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// Components
import { Input } from './Input';
import { schema } from './config';
// Hooks
import { useStore } from '../../hooks';


export const Filter = observer(() => {
    const [isCloudy, setIsCloudy] = useState('');
    const [isSunny, setIsSunny] = useState('');
    const [isType, setIsType] = useState('');

    const store = useStore();

    const {
        applyFilter, resetFilter, isFiltered,
        isFormBlocked,
    } = store;

    const form = useForm({
        mode: 'onTouched',
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
        resetFilter();
        setIsCloudy('');
        setIsSunny('');
        setIsType('');
        form.reset();
    };

    const handleIsCloudy = () => {
        if (isFiltered) {
            return;
        }
        if (!isCloudy) {
            setIsCloudy('selected');
            setIsSunny('');
            setIsType('cloudy');
        }
    };
    const handleIsSunny = () => {
        if (isFiltered) {
            return;
        }
        if (!isSunny) {
            setIsSunny('selected');
            setIsCloudy('');
            setIsType('sunny');
        }
    };

    useEffect(() => {
        form.watch((data) => {
            console.log(data);
        });
    }, [form.watch()]);

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
                    type = 'number'
                    disabled = { store.isFiltered }
                    id = 'min-temperature'
                    register = { register('minTemperature') } />
            </p>
            <p className = 'custom-input'>
                <label htmlFor = 'max-temperature'>Максимальная температура</label>
                <Input
                    type = 'number'
                    disabled = { store.isFiltered }
                    id = 'max-temperature'
                    register = { register('maxTemperature') } />
            </p>
            { !store.isFiltered && <button>Отфильтровать</button> }
            { store.isFiltered && <button onClick = { handleReset }>Сбросить</button> }
        </form>
    );
});
