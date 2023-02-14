// Core
import { createContext } from 'react';

// Store
import { store } from './mobx';

export const Context = createContext(store);

export const Provider = ({ children }) => (
    <Context.Provider value = { store }>{ children }</Context.Provider>
);
