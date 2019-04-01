import React from 'react';

import { LandingPage, About, Portfolio, Brand, Contact, Layout, SEO } from '../components';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
		<LandingPage />
		<About />
		<Portfolio />
		<Brand />
		<Contact />
	</Layout>
);

export default IndexPage;
