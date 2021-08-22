import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import posterPlaceholder from '../assets/poster-placeholder.png';
import './fullcard.css';

export const FullCard = ({ item, type }) => {
	const { addItemToWatchlist, watchlist } = useContext(GlobalContext);
	// const { addItemToWatched, watched } = useContext(GlobalContext);

	let storedItems = watchlist.find((obj) => obj.id === item.id);

	const itemDisabled = storedItems ? true : false; // disables AddButton if item exist
	let overview = item.overview;
	if (overview.length > 495) {
		let truncated = overview.substring(0, 490);
		overview = truncated + '...';
	}

	return (
		<li className="fullcard__item" key={item.id}>
			<div className="fullcard__poster-wrapper">
				{item.poster_path ? (
					<img
						src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
						alt={`${item.title} Poster`}
						className="fullcard__poster"
					/>
				) : (
					<img
						className="fullcard__placeholder"
						src={posterPlaceholder}
						alt={`Placeholder for ${item.title} Poster`}
					></img>
				)}
			</div>

			<div className="fullcard__info">
				<h3 className="fullcard__title">{item.title}</h3>
				{item.release_date ? (
					<h4 className="fullcard__date">Released on {item.release_date.substring(0, 4)}</h4>
				) : (
					<h4 className="fullcard__date">-</h4>
				)}
				{overview ? (
					<p className="fullcard__overview">{overview}</p>
				) : (
					<p className="fullcard__overview">No overview found.</p>
				)}

				<div className="fullcard__controls">
					<button
						className="fullcard__button"
						onClick={() => addItemToWatchlist(item)}
						disabled={itemDisabled}
					>
						Add to Watch List
					</button>
					{/* <button className="fullcard__button" onClick={() => addItemToWatched(item)} disabled={itemDisabled}>
					Add to Watched
				</button> */}
				</div>
			</div>
		</li>
	);
};
