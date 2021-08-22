import React, { useState } from 'react';
import { FullCard } from './FullCard';
import './add.css';

export const Add = () => {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);

	const onChange = (e) => {
		e.preventDefault();
		setQuery(e.target.value);
		fetch(
			`https://api.themoviedb.org/3/search/multi?api_key=b8723cef7967276c30d0623e7338bcc4&language=en-US&page=1&include_adult=false&query=${e.target.value})`
		)
			.then((res) => res.json())
			.then((data) => {
				if (!data.errors) {
					console.log(data);
					let arr = data.results.filter((item) => {
						// Unifies name and title for Movies and TV Shows
						if (item.media_type === 'tv') item.title = item.name;
						// Filters Movie and TV Shows, excludes i.e. Persons
						return item.media_type === 'movie' || item.media_type === 'tv';
					});

					setResults(arr);
				} else {
					setResults([]);
				}
			});
	};

	return (
		<div className="add__container">
			<h2 className="add__title">Add Movies and TV Shows</h2>
			<div className="input__wrapper">
				<input type="text" placeholder="Search for a Movie or TV Show" value={query} onChange={onChange} />
			</div>
			{results.length > 0 && (
				<ul className="add__results">
					{results.map((item) => (
						<FullCard item={item} />
					))}
				</ul>
			)}
		</div>
	);
};
