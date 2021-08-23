import React from 'react';
import { Link } from 'react-router-dom';
import TravoltaGif from '../assets/travolta.webp';
import './empty-page.css';

export const EmptyPage = () => {
	return (
		<div className="empty-page__container">
			<h3 className="empty-page__title">
				Wow!
				<span role="img" aria-label="crying emoji">
					😢
				</span>
				Such emptiness... Lets find something to watch!{' '}
				<span>
					<Link to="/add" className="empty-page__add-btn">
						+ Add
					</Link>
				</span>{' '}
			</h3>
			<img src={TravoltaGif} alt="Confused Travolta Gif Meme" className="empty-page__img" />
		</div>
	);
};
