import React from 'react';
import { Link } from 'gatsby';
import { FormattedMessage } from 'react-intl';
import { FaHome } from 'react-icons/fa';

import './Notfound.scss';

const Notfound = () => (
	<section className="notfound" id="notfound">
		<header className="notfound__header">
			<h1 className="notfound__404">
				404
				<FormattedMessage id="Notfound.header">
					{msg => <span className="notfound__404-message">{msg}</span>}
				</FormattedMessage>
			</h1>
		</header>
		<footer className="notfound__footer">
			<h1 className="notfound__heading notfound__heading--primary">
				<FormattedMessage id="Notfound.footer.heading-primary" />
			</h1>
			<h6 className="notfound__heading notfound__heading--secondary">
				<FormattedMessage id="Notfound.footer.heading-secondary" />
			</h6>
			<Link to="/" className="notfound__link">
				<FaHome className="notfound__icon" />
				<FormattedMessage id="Notfound.footer.link" />
			</Link>
		</footer>
	</section>
);

export default Notfound;
