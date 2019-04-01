import React from 'react';
import { Link } from 'gatsby';
import { FaHome } from 'react-icons/fa';

import './Notfound.scss';

const Notfound = () => {
	return (
		<section className="notfound">
			<header className="notfound__header">
				<h1 className="notfound__404">
					404
					<span className="notfound__404-message">Page not found</span>
				</h1>
				<h1 className="notfound__heading notfound__heading--primary">Sorry!</h1>
				<h6 className="notfound__heading notfound__heading--secondary">
					The page you are looking for does not exist or another error occurred
				</h6>
				<Link to="/" className="notfound__link">
					<FaHome className="notfound__icon" />
					Go back home
				</Link>
			</header>
		</section>
	);
};

export default Notfound;
