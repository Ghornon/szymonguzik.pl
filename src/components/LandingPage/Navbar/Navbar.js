import React from 'react';
import './Navbar.scss';

const Navbar = ({ title }) => {
	return (
		<header className="navbar">
			<h1 className="navbar__heading">{`<${title} />`}</h1>
			<div className="navbar__switch">
				<input type="checkbox" name="lang" id="lang" className="navbar__checkbox" />
				EN
				<label className="navbar__slider" htmlFor="lang" />
				PL
			</div>
		</header>
	);
};

export default Navbar;
