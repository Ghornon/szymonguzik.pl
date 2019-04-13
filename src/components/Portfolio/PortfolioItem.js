import React from 'react';

const PortfolioItem = ({ icon, image, name, description, link = '#' }) => {
	return (
		<div className="portfolio__item">
			<header className="portfolio__header">
				<div className="portfolio__image">{image}</div>
				<div className="portfolio__icon">{icon}</div>
			</header>

			<footer className="portfolio__footer">
				<h6 className="portfolio__heading portfolio__heading--secondary">{description}</h6>
				<h4 className="portfolio__heading portfolio__heading--primary">
					<a href={link} className="portfolio__link">
						{name}
					</a>
				</h4>
			</footer>
		</div>
	);
};

export default PortfolioItem;
