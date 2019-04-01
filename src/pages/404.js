import React from 'react';

import { Notfound, Layout, SEO } from '../components';

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Notfound />
	</Layout>
);

export default NotFoundPage;
