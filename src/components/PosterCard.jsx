import React from 'react';
// import { CardControls } from './CardControls';
import posterPlaceholder from "../assets/poster-placeholder.png"
import './poster-card.css';

export const PosterCard = ({ item, type }) => {
	return (
		<div className="item__card" key={item.id}>
			<div className="overlay"></div>

			{item.poster_path ? (
				<img
					src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
					alt={`${item.title} Poster`}
					className="card__poster"
				/>
			) : (
				<img
					className="fullcard__placeholder"
					src={posterPlaceholder}
					alt={`Placeholder for ${item.title} Poster`}
				></img>
			)}
			{/* <CardControls type={type} item={item} /> */}
		</div>
	);
};
