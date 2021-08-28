import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeContext } from '../context/ThemeContext';
import logo from '../assets/logo512.png';
import './header.css';

export const Header = () => {
	// Theme Switcher
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	let darkClass = darkTheme ? ' dark' : '';
	// Header
	return (
		<header>
			<div className={'header__container' + darkClass}>
				<div className={'header__brand' + darkClass}>
					<Link to="/">
						<div className={'header__logo' + darkClass}>
							<img src={logo} alt="WatchList Logo" />
							<h1>
								<span className={'header__logo' + darkClass}></span>
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
