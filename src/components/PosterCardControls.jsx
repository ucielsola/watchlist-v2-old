import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const PosterCardControls = ({ item, type }) => {
	const { removeItemFromWatchlist } = useContext(GlobalContext);
	const { addItemToWatched } = useContext(GlobalContext);
	return (
		<div className="poster-card-controls__container">
			{type === 'watchlist' && (
				<React.Fragment>
					<button className="poster-card__ctrl-btn" onClick={addItemToWatched(item.id)}>
						<i className="fa-fw far fa-eye"></i>
					</button>
					<button className="poster-card__ctrl-btn times" onClick={() => removeItemFromWatchlist(item.id)}>
						<i className="fa-fw fa fa-times"></i>
					</button>
				</React.Fragment>
			)}
			{type === 'watched' && (
				<React.Fragment>
					<button className="poster-card__ctrl-btn times" onClick={() => removeItemFromWatchlist(item.id)}>
						<i className="fa-fw fa fa-times"></i>
					</button>
				</React.Fragment>
			)}
		</div>
	);
};
