import React from 'react';
import { Link } from 'gatsby';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const Item = ({ icon, image, name, githubLink = '#', demoLink = '#' }) => {
	return (
		<div className="portfolio__item">
			<header className="portfolio__header">
				<div className="portfolio__image">{image}</div>
				<div className="portfolio__icon">{icon}</div>
			</header>

			<footer className="portfolio__footer">
				<h6 className="portfolio__heading portfolio__heading--secondary">
					<Link to={githubLink} className="portfolio__link portfolio__link--flex">
						<FaGithub className="portfolio__link-icon" /> Github
					</Link>

					<Link to={demoLink} className="portfolio__link portfolio__link--flex">
						<FaGlobe className="portfolio__link-icon" /> Demo
					</Link>
				</h6>
				<h4 className="portfolio__heading portfolio__heading--primary">{name}</h4>
			</footer>
		</div>
	);
};

export default Item;
