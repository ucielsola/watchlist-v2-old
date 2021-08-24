import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { v4 as uuid_v4 } from 'uuid';
import './navigation.css';

function Navigation() {
	// Theme Switcher
	const { darkTheme, setDarkTheme } = useContext(ThemeContext);
	let darkClass = darkTheme ? ' dark' : '';
	// Navigation
	const [showNav, toggleShowNav] = useState(false);
	let openClass = showNav ? ' open' : '';

	return (
		<React.Fragment>
			<div className={'nav__toggle' + darkClass} onClick={() => toggleShowNav(!showNav)}>
				<i className="fas fa-bars"></i>
			</div>
			<nav className={'nav__container' + darkClass + openClass}>
				<ul className={'nav__list' + darkClass}>
					<li className={'nav__link' + darkClass} key={uuid_v4()}>
						<Link to="/">Watch List</Link>
					</li>
					<li className={'nav__link' + darkClass} key={uuid_v4()}>
						<Link to="/watched">Watched</Link>
					</li>
					<li className={'nav__link' + darkClass} key={uuid_v4()}>
						<Link to="/add" className={'nav__btn' + darkClass}>
							+ Add
						</Link>
					</li>
				</ul>
			</nav>
		</React.Fragment>
	);
}

export default Navigation;
