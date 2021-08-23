import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo512.png';
import { v4 as uuid_v4 } from 'uuid';
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
				<div className="switch__wrapper">
					<label htmlFor="switch" className="switch__label">
						Dark Mode
					</label>
					<input name="switch" className="switch__input" type="checkbox"></input>
				</div>
				<div className="header__menu-btn">
					<i className="fas fa-bars"></i>
				</div>
				<nav classNameclassName="header__nav">
					<ul className="header__list">
						<li className="header__link" key={uuid_v4()}>
							<Link to="/">Watch List</Link>
						</li>
						<li className="header__link" key={uuid_v4()}>
							<Link to="/watched">Watched</Link>
						</li>
						<li className="header__link" key={uuid_v4()}>
							<Link to="/add" className="header__btn">
								+ Add
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
