import React from 'react';
import './LandingPage.scss';

import { Banner, Navbar } from './index';

const LandingPage = ({ title }) => {
	return (
		<section className="landing-page">
			<div className="container-fluid">
				<Navbar title={title} />
				<Banner />
			</div>
		</section>
	);
};

export default LandingPage;
