import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/ThemeContext';
import { PosterCard } from './PosterCard';
import { EmptyPage } from './EmptyPage';
import './watchlist.css';

export const Watchlist = () => {
	// Theme Switcher
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	let darkClass = darkTheme ? ' dark' : '';
	// Watchlists
	const { watchlist } = useContext(GlobalContext);
	return (
		<div className={'watchlist__container' + darkClass}>
			<h2 className={'watchlist__title' + darkClass}>Your Watch List</h2>
			<h3 className={'watchlist__subtitle' + darkClass}>
				Here you'll find all the Movies and TV Shows you want to watch!
			</h3>

			{watchlist.length > 0 ? (
				<div className={'poster-card__container' + darkClass}>
					{watchlist.map((item) => (
						<PosterCard item={item} type="watchlist" key={item.id} />
					))}
				</div>
			) : (
				<EmptyPage />
			)}
		</div>
	);
};
