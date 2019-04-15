import React, { Component } from 'react';
import { StaticQuery, graphql, Link, navigate } from 'gatsby';
import Img from 'gatsby-image';
import { connectWithStore } from '@store/Store';
import { FormattedMessage } from 'react-intl';

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
			checkboxChecked: props.locale !== 'en',
			hideSlider: true
		};

		this.timeOut = setTimeout(() => {
			this.setState({ hideSlider: false });
		}, 0);
	}

	componentWillReceiveProps(newProps) {
		if (newProps !== this.props) {
			this.setState({ checkboxChecked: newProps.locale !== 'en' });
		}
	}

	componentWillUnmount() {
		window.clearTimeout(this.timeOut);
	}

	changeLocale(locale) {
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
									<Link
										className="navbar__link"
										to={locale === 'en' ? '/' : '/pl'}
									>
										<Img
											fluid={data.logoImage.childImageSharp.fluid}
											alt="Logo"
											className="navbar__logo"
										/>
										<FormattedMessage id="Navbar.goback">
											{msg => <span className="sr-only">{msg}</span>}
										</FormattedMessage>
									</Link>
								</li>
								<li className="navbar__list-item">
									<div className="navbar__switch">
										<input
											type="checkbox"
											name="lang"
											id="lang"
											className="navbar__checkbox"
											onChange={this.changeLocale.bind(this, locale)}
											checked={this.state.checkboxChecked}
											key="language-checkbox"
										/>

										<label
											className="navbar__slider"
											htmlFor="lang"
											style={{
												display: this.state.hideSlider ? 'none' : 'block'
											}}
											tabIndex="0"
											onKeyPress={event => {
												if (event.key === 'Enter') {
													this.changeLocale(locale);
												}
											}}
											key="language-label"
										>
											<FormattedMessage id="Navbar.language">
												{msg => <span className="sr-only">{msg}</span>}
											</FormattedMessage>
										</label>

										<Link
											to="/"
											className="navbar__link"
											style={{
												display: this.state.hideSlider ? 'block' : 'none'
											}}
										>
											EN
										</Link>
										<Link
											to="/pl"
											className="navbar__link"
											style={{
												display: this.state.hideSlider ? 'block' : 'none'
											}}
										>
											PL
										</Link>
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
