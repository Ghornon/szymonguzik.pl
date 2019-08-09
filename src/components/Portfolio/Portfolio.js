import React from 'react';
import Img from 'gatsby-image';
import { connectWithStore } from '@store/Store';
import { FormattedMessage } from 'react-intl';

import { FaPen, FaGithub } from 'react-icons/fa';

import './Portfolio.scss';

import { PortfolioItem } from './index';

const PortfolioUI = ({ Portfolio, locale }) => {
	const itemsList = [...Portfolio]
		.sort((current, next) => (current.order > next.order ? 1 : -1))
		.map(({ image, name, shortDescription, link, iconName, slug, order }, index) => {
			return (
				<PortfolioItem
					key={`portfolio-item-${index}`}
					iconName={iconName}
					image={
						<Img fluid={image.fluid} className="" alt={`Image of ${name} project`} />
					}
					name={name}
					shortDescription={shortDescription}
					link={link}
					slug={slug}
					order={order}
					locale={locale}
				/>
			);
		});

	return (
		<section className="portfolio" id="portfolio">
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
