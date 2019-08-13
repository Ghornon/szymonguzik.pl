import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { LinkTo } from '@components';
import { connectWithStore } from '@store/Store';
import localesList from '@locales/locales';

import { NavList } from './index';

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

class NavbarUI extends Component {
	render() {
		const { locale } = this.props;

		const localesLinkList = Object.keys(localesList).map(currentLocale => (
			<LinkTo
				pathname="/"
				locale={currentLocale}
				className="navbar__link"
				key={currentLocale}
			>
				{currentLocale.toUpperCase()}
			</LinkTo>
		));

		return (
			<StaticQuery
				query={logoQuery}
				render={data => {
					return (
						<nav className="navbar">
							<NavList image={data.logoImage.childImageSharp.fluid} locale={locale}>
								{localesLinkList}
							</NavList>
						</nav>
					);
				}}
			/>
		);
	}
}

const Navbar = connectWithStore(NavbarUI);
export default Navbar;
