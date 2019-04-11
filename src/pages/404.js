import React from 'react';

import { Notfound, Layout, SEO } from '../components';

const NotFoundPage = ({ pageContext: { locale } }) => (
	<Layout locale={locale}>
		<SEO title="404: Not found" />
		<Notfound />
	</Layout>
);

export default NotFoundPage;
