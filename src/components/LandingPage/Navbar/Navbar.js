import React, { Component } from 'react';
import { StaticQuery, graphql, Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { connectWithStore } from '@store/Store';

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
	constructor(props) {
		super(props);

		this.state = {
			checkboxChecked: props.locale !== 'en'
		};
	}

	componentWillReceiveProps(newProps) {
		if (newProps !== this.props) {
			this.setState({ checkboxChecked: newProps.locale !== 'en' });
		}
	}

	render() {
		const { locale } = this.props;
		return (
			<StaticQuery
				query={logoQuery}
				render={data => {
					return (
						<nav className="navbar">
							<ul className="navbar__list">
								<li className="navbar__list-item">
									<Link className="navbar__link" to="/">
										<Img
											fluid={data.logoImage.childImageSharp.fluid}
											alt="Logo"
											className="navbar__logo"
										/>
									</Link>
								</li>
								<li className="navbar__list-item">
									<div className="navbar__switch">
										<input
											type="checkbox"
											name="lang"
											id="lang"
											className="navbar__checkbox"
											onChange={() => {
												this.setState({
													checkboxChecked: !this.state.checkboxChecked
												});
												setTimeout(() => {
													if (locale === 'en') {
														navigate('/pl');
													} else {
														navigate('/');
													}
												}, 250);
											}}
											checked={this.state.checkboxChecked}
										/>
										EN
										<label className="navbar__slider" htmlFor="lang" />
										PL
									</div>
								</li>
							</ul>
						</nav>
					);
				}}
			/>
		);
	}
}

const Navbar = connectWithStore(NavbarUI);
export default Navbar;
