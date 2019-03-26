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

import { Item } from './index';

/* 
img:
icon:
name:
description:
linkTo:

*/
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
					name: 'Ecommerce app'
				},
				{
					icon: <FaDrumstickBite />,
					image: 'portfolio_nowajaga.jpg',
					name: 'Nowajaga.pl'
				},
				{
					icon: <FaImage />,
					image: 'portfolio_szplotka.jpg',
					name: 'Szplotka.pl'
				},
				{
					icon: <FaCamera />,
					image: 'portfolio_buttonstudio.jpg',
					name: 'Button Studio'
				},
				{
					icon: <FaPaintBrush />,
					image: 'portfolio_loremipsum.jpg',
					name: 'Lorem ipsum'
				},
				{
					icon: <FaThumbtack />,
					image: 'portfolio_zwyrtany.jpg',
					name: 'Zwyrtany'
				}
			].map((element, index) => {
				const img = data.portfolioImages.edges.find(
					image => image.node.relativePath === element.image
				);

				return (
					<Item
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
								<h4 className="portfolio__heading portfolio__heading--primary">
									My projects
								</h4>
							</header>

							<footer className="portfolio__footer">
								<h6 className="portfolio__heading portfolio__heading--secondary">
									A few selected projects created by me.
								</h6>
								<h6 className="portfolio__heading portfolio__heading--secondary">
									See also my{' '}
									<Link
										to="https://github.com/Ghornon"
										className="portfolio__link"
									>
										github <FaGithub className="portfolio__link-icon" />
									</Link>{' '}
									repositories.
								</h6>
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
