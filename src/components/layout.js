import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import { StoreProvider } from '@store/Store';

import '@styles/main.scss';
import { Footer } from '@components';

const siteMetadataQuery = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const Layout = ({ locale, children, queryData }) => (
	<StaticQuery
		query={siteMetadataQuery}
		render={layoutData => {
			const title = layoutData.site.siteMetadata.title;

			return (
				<StoreProvider locale={locale} queryData={queryData}>
					<>
						{children}
						<Footer title={title} />
					</>
				</StoreProvider>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
