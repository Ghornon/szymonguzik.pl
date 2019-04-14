import React from 'react';

import './LandingPage.scss';
import { Banner, Navbar } from './index';

const LandingPage = () => (
	<section className="landing-page">
		<div className="container-fluid">
			<Navbar />
			<Banner />
		</div>
	</section>
);

export default LandingPage;
