import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import './Banner.scss';

const bannerImageQuery = graphql`
	query {
		bannerImage: file(relativePath: { eq: "banner.png" }) {
			childImageSharp {
				fluid(maxWidth: 1920) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Banner = () => {
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
							<FormattedMessage id="banner.header" />
						</h1>
						<h2 className="banner__heading banner__heading--secondary">
							<FormattedMessage id="banner.subHeader" />
							{/* <span className="typing">internship</span> */}
						</h2>
					</header>
				</div>
			)}
		/>
	);
};

export default Banner;
