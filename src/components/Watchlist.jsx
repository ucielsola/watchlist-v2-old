import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { PosterCard } from './PosterCard';
import { EmptyPage } from './EmptyPage';
import './watchlist.css';

export const Watchlist = () => {
	const { watchlist } = useContext(GlobalContext);
	return (
		<div className="watchlist__container">
			<h2 className="watchlist__title">Your Watch List</h2>
			<h3 className="watchlist__subtitle">Here you'll find all the Movies and TV Shows you want to watch!</h3>

			{watchlist.length > 0 ? (
				<div className="poster-card__container">
					{watchlist.map((item) => (
						<PosterCard item={item} type="watchlist" key={item.id}/>
					))}
				</div>
			) : (
				<EmptyPage />
			)}
		</div>
	);
};
