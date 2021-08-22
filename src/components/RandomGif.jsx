import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './random-gif.css';

export default function RandomGif() {
	const [gifURL, setURL] = useState('');

	useEffect(() => {
		axios
			.get(
				`https://api.giphy.com/v1/gifs/random?api_key=flI56HeQ0gN93m9mXowbHTl87qiT06bK&tag=search&rating=pg`
			)
			.then((res) => {
				setURL(res.data.data.fixed_width_downsampled_url);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div className="gif__container">
			<img src={gifURL} alt="Gif from Giphy.com" className="gif__img" />
		</div>
	);
}
