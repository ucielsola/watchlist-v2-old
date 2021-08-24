import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

// initial state
const initialState = {
	watchlist: localStorage.getItem('watchlist') ? JSON.parse(localStorage.getItem('watchlist')) : [],
	watched: localStorage.getItem('watched') ? JSON.parse(localStorage.getItem('watched')) : [],
	darkClass: ' dark',
};

// create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = (props) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	useEffect(() => {
		localStorage.setItem('watchlist', JSON.stringify(state.watchlist));
		localStorage.setItem('watched', JSON.stringify(state.watched));
	}, [state]);

	// actions
	const addItemToWatchlist = (item) => {
		dispatch({ type: 'ADD_ITEM_TO_WATCHLIST', payload: item });
	};
	const addItemToWatched = (item) => {
		dispatch({ type: 'ADD_ITEM_TO_WATCHED', payload: item });
	};

	const removeItemFromWatchlist = (id) => {
		dispatch({ type: 'REMOVE_ITEM_FROM_WATCHLIST', payload: id });
		console.log('probando' + id);
	};
	const removeItemFromWatched = (id) => {
		dispatch({ type: 'REMOVE_ITEM_FROM_WATCHed', payload: id });
	};

	return (
		<GlobalContext.Provider
			value={{
				watchlist: state.watchlist,
				watched: state.watched,
				addItemToWatchlist,
				addItemToWatched,
				removeItemFromWatchlist,
				removeItemFromWatched,
			}}
		>
			{props.children}
		</GlobalContext.Provider>
	);
};
