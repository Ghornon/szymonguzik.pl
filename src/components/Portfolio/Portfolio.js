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
	const itemsList = Portfolio.map((element, index) => {
		return (
			<PortfolioItem
				key={`portfolio-item-${index}`}
				icon={icons[index]}
				image={
					<Img
						fluid={element.image.fluid}
						className=""
						alt={`Image of ${element.name} project`}
					/>
				}
				name={element.name}
				description={element.description}
			/>
		);
	});

	return (
		<section className="Portfolio">
			<div className="container-fluid portfolio__grid">
				<div className="portfolio__item portfolio__item--large">
					<header className="portfolio__header">
						<div className="portfolio__icon">
							<FaPen />
						</div>
						<h6 className="portfolio__heading portfolio__heading--secondary">
							<FormattedMessage id="portfolio:heading-secondary" />
						</h6>
						<h4 className="portfolio__heading portfolio__heading--primary portfolio__heading--uppercase">
							<FormattedMessage id="portfolio:heading-primary" />
						</h4>
					</header>

					<footer className="portfolio__footer">
						<p className="portfolio__paragraph">
							<FormattedMessage id="portfolio:description-firstline" />
						</p>
						<p className="portfolio__paragraph">
							<FormattedMessage id="portfolio:description-secoundline" />
							<a
								href="https://github.com/Ghornon"
								className="portfolio__link portfolio__link--flex"
							>
								github <FaGithub className="portfolio__link-icon" />
							</a>
							<FormattedMessage id="portfolio:description-thirdline" />
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
