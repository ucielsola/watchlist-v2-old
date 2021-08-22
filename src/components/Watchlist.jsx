import React from 'react';
// import React, { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalState';
// import { ItemCard } from './ItemCard';
// import { EmptyList } from './EmptyList';
import './watchlist.css';

export const Watchlist = () => {
	// const { watchlist } = useContext(GlobalContext);
	return (
		<div className="watchlist__container">
			<h2 className="watchlist__title">Your Watch List</h2>
			<h3 className="watchlist__subtitle">
				Here, you will find all the Movies and TV Shows you want to watch!
			</h3>

			{/* {watchlist.length > 0 ? (
				<div className="item-grid__container">
					{watchlist.map((item) => (
						<ItemCard item={item} type="watchlist" />
                    ))}
				</div>
			) : (
				<EmptyList />
			)} */}
		</div>
	);
};
