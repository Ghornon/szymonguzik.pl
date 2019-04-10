import React from 'react';

import { LandingPage, About, Portfolio, Brand, Contact, Layout, SEO } from '../components';

const IndexPage = ({ pageContext: { locale } }) => (
	<Layout locale={locale}>
		<SEO
			title={locale === 'en' ? 'Home' : 'Strona główna'}
			keywords={[`gatsby`, `application`, `react`]}
		/>
		<LandingPage />
		<About />
		<Portfolio />
		<Brand />
		<Contact />
	</Layout>
);

export default IndexPage;
