import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';

import './Footer.scss';

const Footer = ({ title }) => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<Link to="/" className="footer__link">
				{title}
			</Link>{' '}
			2017-{year} © <FormattedMessage id="Footer" />
		</footer>
	);
};

export default Footer;
