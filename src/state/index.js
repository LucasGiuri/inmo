import React, { createContext, useContext, useReducer } from 'react';
import reducers from './reducers/reducers';

const StateContext = createContext();

const initialState = {
	searchById: null,
	properties: [],
	news: [],
	filters: {
		country: null,
		province: null,
		neighborhood: null,
		m2: null,
		minPrice: null,
		maxPrice: null,
		bedrooms: null,
		bathrooms: null,
	}
}

export const StateProvider = ({ children }) => {
	return (
		<StateContext.Provider value={useReducer(reducers, initialState)}>
			{children}
		</StateContext.Provider>
	)
};

export const useStateContext = () => useContext(StateContext);
