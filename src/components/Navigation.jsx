import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { v4 as uuid_v4 } from 'uuid';

function Navigation() {
	const [showNav, toggleShowNav] = useState(false);
	let navClass = 'header__nav';
	showNav ? (navClass = 'header__nav open') : (navClass = 'header__nav');

	return (
		<React.Fragment>
			<div className="header__menu-btn" onClick={() => toggleShowNav(!showNav)}>
				<i className="fas fa-bars"></i>
			</div>
			<nav className={navClass}>
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
		</React.Fragment>
	);
}

export default Navigation;
