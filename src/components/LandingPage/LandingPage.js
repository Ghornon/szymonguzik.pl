import React from 'react';
import './LandingPage.scss';

import { Banner, Navbar } from './index';

const LandingPage = ({ title, locale }) => {
	return (
		<section className="landing-page">
			<div className="container-fluid">
				<Navbar title={title} locale={locale} />
				<Banner />
			</div>
		</section>
	);
};

export default LandingPage;
