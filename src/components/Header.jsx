import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import logo from '../assets/logo512.png';
import './header.css';

export const Header = () => {
	return (
		<header>
			<div className="header__container">
				<div className="header__brand">
					<Link to="/">
						<div className="header__logo">
							<img src={logo} alt="WatchList Logo" />
							<h1>
								<span className="header__logo"></span>
								WhatchList
							</h1>
						</div>
					</Link>
				</div>
				<ThemeSwitcher />
				<Navigation />
			</div>
		</header>
	);
};
