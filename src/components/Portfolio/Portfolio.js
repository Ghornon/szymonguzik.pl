import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
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

const portfolioImagesQuery = graphql`
	query {
		portfolioImages: allFile(
			filter: { name: { regex: "/(portfolio_)/" }, sourceInstanceName: { eq: "images" } }
		) {
			edges {
				node {
					childImageSharp {
						fluid(maxWidth: 700) {
							...GatsbyImageSharpFluid
						}
					}
					relativePath
				}
			}
		}
	}
`;

const Portfolio = () => (
	<StaticQuery
		query={portfolioImagesQuery}
		render={data => {
			const itemsList = [
				{
					icon: <FaShoppingCart />,
					image: 'portfolio_ecommerce.jpg',
					name: 'Ecommerce app',
					description: 'React app'
				},
				{
					icon: <FaDrumstickBite />,
					image: 'portfolio_nowajaga.jpg',
					name: 'Nowajaga.pl',
					description: 'Gatsby app'
				},
				{
					icon: <FaImage />,
					image: 'portfolio_szplotka.jpg',
					name: 'Szplotka.pl',
					description: 'Static website'
				},
				{
					icon: <FaCamera />,
					image: 'portfolio_buttonstudio.jpg',
					name: 'Button Studio',
					description: 'Static website'
				},
				{
					icon: <FaPaintBrush />,
					image: 'portfolio_loremipsum.jpg',
					name: 'Lorem ipsum',
					description: 'Static website'
				},
				{
					icon: <FaThumbtack />,
					image: 'portfolio_zwyrtany.jpg',
					name: 'Zwyrtany',
					description: 'Static website'
				}
			].map((element, index) => {
				const img = data.portfolioImages.edges.find(
					image => image.node.relativePath === element.image
				);

				return (
					<PortfolioItem
						key={`portfolio-item-${index}`}
						icon={element.icon}
						image={
							<Img
								fluid={img.node.childImageSharp.fluid}
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
									Portfolio
								</h6>
								<h4 className="portfolio__heading portfolio__heading--primary portfolio__heading--uppercase">
									My projects
								</h4>
							</header>

							<footer className="portfolio__footer">
								<p className="portfolio__paragraph">
									A few selected projects created by me.
								</p>
								<p className="portfolio__paragraph">
									See also my{' '}
									<a
										href="https://github.com/Ghornon"
										className="portfolio__link portfolio__link--flex"
									>
										github <FaGithub className="portfolio__link-icon" />
									</a>{' '}
									repositories.
								</p>
							</footer>
						</div>

						{itemsList}
					</div>
				</section>
			);
		}}
	/>
);

export default Portfolio;
