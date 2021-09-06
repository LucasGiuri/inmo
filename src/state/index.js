import React, { createContext, useContext, useReducer } from 'react';
import { reducers, initialState } from './reducers/reducers';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
	return (
		<StateContext.Provider value={useReducer(reducers, initialState)}>
			{children}
		</StateContext.Provider>
	)
};

export const useStateContext = () => useContext(StateContext);
