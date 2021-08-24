import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ThemeContext } from '../context/ThemeContext';
import { PosterCard } from './PosterCard';
import { EmptyPage } from './EmptyPage';
import './watched.css';

export const Watched = () => {
	// Theme Switcher
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	let darkClass = darkTheme ? ' dark' : '';
	// watched
	const { watched } = useContext(GlobalContext);

	return (
		<div className={'watched__container' + darkClass}>
			<h2 className={'watched__title' + darkClass}>Your Watched List</h2>
			<h3 className={'watched__subtitle' + darkClass}>
				Here you'll find all the Movies and TV Shows you've watched'!
			</h3>

			{watched.length > 0 ? (
				<div className={'poster-card__container' + darkClass}>
					{watched.map((item) => (
						<PosterCard item={item} type="watched" key={item.id} />
					))}
				</div>
			) : (
				<EmptyPage />
			)}
		</div>
	);
};
