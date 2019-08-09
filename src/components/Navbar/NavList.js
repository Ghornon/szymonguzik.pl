import React, { useState, useEffect } from 'react';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import { LinkTo } from '@components';

import { NavSlider } from './index';

const NavListHelper = ({ locale, sliderVisibility, children }) => {
	if (sliderVisibility) {
		return <NavSlider locale={locale} />;
	}

	return <>{children}</>;
};

const NavList = ({ locale, image, children }) => {
	const [sliderVisibility, setSliderVisibility] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setSliderVisibility(true);
		}, 1);
	});

	return (
		<ul className="navbar__list">
			<li className="navbar__list-item">
				<LinkTo pathname="/" locale={locale}>
					<Img fluid={image} alt="Logo" className="navbar__logo" />
					<FormattedMessage id="Navbar.goback">
						{msg => <span className="sr-only">{msg}</span>}
					</FormattedMessage>
				</LinkTo>
			</li>
			<li className="navbar__list-item">
				<NavListHelper locale={locale} sliderVisibility={sliderVisibility}>
					{children}
				</NavListHelper>
			</li>
		</ul>
	);
};

export default NavList;
