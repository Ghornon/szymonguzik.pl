import React from 'react';

import { Notfound, Layout, SEO } from '@components';

const NotFoundPage = ({ pageContext: { locale } }) => (
	<Layout locale={locale}>
		<SEO title={locale === 'en' ? '404: Not found' : '404: Nie znaleziono'} lang={locale} />
		<Notfound />
	</Layout>
);

export default NotFoundPage;
