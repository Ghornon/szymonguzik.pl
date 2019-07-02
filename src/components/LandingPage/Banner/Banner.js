import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import './Banner.scss';

const bannerImageQuery = graphql`
	query {
		bannerImage: file(relativePath: { eq: "banner.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`;

const viewport = () => {
	const vh = window.innerHeight * 0.01;
	document.documentElement.style.setProperty('--vh', `${vh}px`);
};

const Banner = () => {
	useEffect(() => {
		viewport();
		window.addEventListener('resize', viewport);

		return () => {
			window.removeEventListener('resize', viewport);
		};
	});

	return (
		<StaticQuery
			query={bannerImageQuery}
			render={data => (
				<div className="banner">
					<Img
						fluid={data.bannerImage.childImageSharp.fluid}
						className="banner__image"
						alt="Banner image"
					/>
					<header className="banner__header">
						<h1 className="banner__heading banner__heading--primary">
							<FormattedMessage id="Banner.header" />
						</h1>
						<h2 className="banner__heading banner__heading--secondary">
							<FormattedMessage id="Banner.subHeader" />
						</h2>
					</header>
				</div>
			)}
		/>
	);
};

export default Banner;
