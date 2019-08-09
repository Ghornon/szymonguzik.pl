import React from 'react';
import { LinkTo } from '@components';

import {
	FaShoppingCart,
	FaCamera,
	FaPaintBrush,
	FaImage,
	FaThumbtack,
	FaDrumstickBite
} from 'react-icons/fa';

const PortfolioItem = ({ iconName, image, name, shortDescription, locale, slug }) => {
	const icons = [
		<FaThumbtack />,
		<FaCamera />,
		<FaPaintBrush />,
		<FaDrumstickBite />,
		<FaImage />,
		<FaShoppingCart />
	];
	return (
		<div className="portfolio__item">
			<header className="portfolio__header">
				<div className="portfolio__image">{image}</div>
				<div className="portfolio__icon">
					{icons.find(({ type: { displayName } }) => displayName === iconName)}
				</div>
			</header>

			<footer className="portfolio__footer">
				<h6 className="portfolio__heading portfolio__heading--secondary">
					{shortDescription}
				</h6>
				<h4 className="portfolio__heading portfolio__heading--primary">
					<LinkTo className="portfolio__link" pathname={slug} locale={locale}>
						{name}
					</LinkTo>
				</h4>
			</footer>
		</div>
	);
};

export default PortfolioItem;
