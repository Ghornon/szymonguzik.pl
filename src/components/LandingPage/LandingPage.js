import React from 'react';

import './LandingPage.scss';

import { Banner } from './index';
import { Navbar } from '../Navbar';

const LandingPage = () => (
	<section className="landing-page" id="landing-page">
		<div className="container-fluid">
			<Navbar />
			<Banner />
		</div>
	</section>
);

export default LandingPage;
