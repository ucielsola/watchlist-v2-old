import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const PosterCardControls = ({ item, type }) => {
	const { moveToWatched, removeFromWatchlist, moveToWatchlist, removeFromWatched } =
		useContext(GlobalContext);

	return (
		<div className="poster-card-controls__container">
			{type === 'watchlist' && (
				<React.Fragment>
					<button className="poster-card__ctrl-btn eye" onClick={() => moveToWatched(item)}>
						<i className="fa-fw far fa-eye"></i>
					</button>
					<button className="poster-card__ctrl-btn times" onClick={() => removeFromWatchlist(item.id)}>
						<i className="fa-fw fa fa-times"></i>
					</button>
				</React.Fragment>
			)}
			{type === 'watched' && (
				<React.Fragment>
					<button className="poster-card__ctrl-btn times" onClick={() => moveToWatchlist(item)}>
						<i className="fa-fw far fa-eye-slash"></i>
					</button>
					<button className="poster-card__ctrl-btn times" onClick={() => removeFromWatched(item.id)}>
						<i className="fa-fw fa fa-times"></i>
					</button>
				</React.Fragment>
			)}
		</div>
	);
};
