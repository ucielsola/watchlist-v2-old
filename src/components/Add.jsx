import React, { useState, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import axios from 'axios';
import { FullCard } from './FullCard';
import SearchGif from '../assets/search.webp';
import './add.css';

export const Add = () => {
	// Theme Switcher
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	let darkClass = darkTheme ? ' dark' : '';
	// Add
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	const Search = (e) => {
		e.preventDefault();
		setQuery(e.target.value);

		axios
			.get(
				`https://api.themoviedb.org/3/search/multi?api_key=b8723cef7967276c30d0623e7338bcc4&language=en-US&page=1&include_adult=false&query=${e.target.value}&page=1`
			)
			.then((res) => {
				const results = res.data.results.filter((item) => {
					// Unifies name and title for Movies and TV Shows
					if (item.media_type === 'tv') item.title = item.name;
					// Filters Movie and TV Shows, excludes i.e. Persons
					return item.media_type === 'movie' || item.media_type === 'tv';
				});
				setResults(results);
			})
			.catch((err) => {
				console.log(err);
				setResults([]);
			});
	};

	return (
		<div className={'add__container' + darkClass}>
			<h2 className={'add__title' + darkClass}>Add Movies and TV Shows</h2>
			<div className={'input__wrapper' + darkClass}>
				<input
					type="text"
					placeholder="Search for a Movie or TV Show"
					value={query}
					onChange={Search}
					// if (e.target.value.length >= 3)
				/>
			</div>

			{results.length > 0 ? (
				<React.Fragment>
					<ul className={'add__results' + darkClass}>
						{results.map((item) => (
							<FullCard item={item} key={item.id} />
						))}
					</ul>
				</React.Fragment>
			) : (
				<div className={'add__gif-container' + darkClass}>
					<img src={SearchGif} alt="Sarch GIF from Giphy.com" className={'add__gif' + darkClass} />
				</div>
			)}
		</div>
	);
};
