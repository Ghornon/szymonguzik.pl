import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import './Navbar.scss';

const logoQuery = graphql`
	query {
		logoImage: file(relativePath: { eq: "logo.png" }) {
			childImageSharp {
				fluid(maxWidth: 64) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const Navbar = ({ title, locale }) => (
	<StaticQuery
		query={logoQuery}
		render={data => {
			console.log(locale);
			return (
				<header className="navbar">
					<h1 className="navbar__heading">{`<${title} />`}</h1>
					<Link className="navbar__logo" to="/">
						<Img fluid={data.logoImage.childImageSharp.fluid} alt="Logo" />
					</Link>
					{/* <div className="navbar__switch">
						<input type="checkbox" name="lang" id="lang" className="navbar__checkbox" />
						EN
						<label className="navbar__slider" htmlFor="lang" />
						PL
					</div> */}
					<div className="navbar__locales">
						<Link
							to="/"
							className="navbar__link"
							activeClassName="navbar__link--active"
						>
							EN
						</Link>
						<Link
							to="/pl"
							className="navbar__link"
							activeClassName="navbar__link--active"
						>
							PL
						</Link>
					</div>
				</header>
			);
		}}
	/>
);

export default Navbar;
