import React from 'react';
import { Link } from 'react-router-dom';
import escobar from '../assets/escobar.jpg';
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
			<img src={escobar} alt="Lonely Pablo Escobar Meme" className="empty-page__img" />
		</div>
	);
};
