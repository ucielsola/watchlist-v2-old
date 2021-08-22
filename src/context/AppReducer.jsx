function AppReducer(state, action) {
	switch (action.type) {
		case 'ADD_ITEM_TO_WATCHLIST':
			return {
				...state,
				watchlist: [action.payload, ...state.watchlist],
			};
		// case 'REMOVE_ITEM_FROM_WATCHLIST':
		// 	return {
		// 		...state,
		// 		watchlist: state.watchlist.filter((item) => item.id !== action.payload),
		// 	};
		// case 'ADD_ITEM_TO_WATCHED':
		// 	return {
		// 		...state,
		// 		watchlist: state.watchlist.filter((item) => item.id !== action.payload),
		// 		watched: [action.payload, ...state.watched],
		// 	};
		// case 'REMOVE_ITEM_FROM_WATCHED':
		// 	return {
		// 		...state,
		// 		watched: state.watched.filter((item) => item.id !== action.payload),
		// 	};
		default:
			return state;
	}
}

export default AppReducer;
