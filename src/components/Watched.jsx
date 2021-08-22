import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { PosterCard } from './PosterCard';
import { EmptyPage } from './EmptyPage';
import './watched.css';

export const Watched = () => {
	const { watched } = useContext(GlobalContext);
	return (
		<div className="watched__container">
			<h2 className="watched__title">Your Watched List</h2>
			<h3 className="watched__subtitle">
				Here you'll find all the Movies and TV Shows you've watched!
			</h3>

			{watched.length > 0 ? (
				<div className="item-grid__container">
					{watched.map((item) => (
						<PosterCard item={item} type="watched" />
					))}
				</div>
			) : (
				<EmptyPage />
			)}
		</div>
	);
};
