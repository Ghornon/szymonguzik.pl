import React from 'react';
import Img from 'gatsby-image';
import { connectWithStore } from '@store/Store';
import { FormattedMessage } from 'react-intl';
import {
	FaShoppingCart,
	FaCamera,
	FaPaintBrush,
	FaImage,
	FaPen,
	FaThumbtack,
	FaDrumstickBite,
	FaGithub
} from 'react-icons/fa';

import './Portfolio.scss';

import { PortfolioItem } from './index';

const PortfolioUI = ({ Portfolio }) => {
	const icons = [
		<FaThumbtack />,
		<FaCamera />,
		<FaPaintBrush />,
		<FaDrumstickBite />,
		<FaImage />,
		<FaShoppingCart />
	];

	const itemsList = Portfolio.map(({ image, name, description, link, iconName }, index) => {
		return (
			<PortfolioItem
				key={`portfolio-item-${index}`}
				icon={icons.find(({ type: { displayName } }) => displayName === iconName)}
				image={<Img fluid={image.fluid} className="" alt={`Image of ${name} project`} />}
				name={name}
				description={description}
				link={link}
			/>
		);
	});

	return (
		<section className="portfolio">
			<div className="container portfolio__grid">
				<div className="portfolio__item portfolio__item--large">
					<header className="portfolio__header">
						<div className="portfolio__icon">
							<FaPen />
						</div>
						<h6 className="portfolio__heading portfolio__heading--secondary">
							<FormattedMessage id="Portfolio.header.heading-secondary" />
						</h6>
						<h4 className="portfolio__heading portfolio__heading--primary portfolio__heading--uppercase">
							<FormattedMessage id="Portfolio.header.heading-primary" />
						</h4>
					</header>

					<footer className="portfolio__footer">
						<p className="portfolio__paragraph">
							<FormattedMessage id="Portfolio.footer.firstline" />
						</p>
						<p className="portfolio__paragraph">
							<FormattedMessage id="Portfolio.footer.secoundline" />
							<a
								href="https://github.com/Ghornon"
								className="portfolio__link portfolio__link--flex"
							>
								github <FaGithub className="portfolio__link-icon" />
							</a>
							<FormattedMessage id="Portfolio.footer.thirdline" />
						</p>
					</footer>
				</div>

				{itemsList}
			</div>
		</section>
	);
};

const Portfolio = connectWithStore(PortfolioUI);
export default Portfolio;
