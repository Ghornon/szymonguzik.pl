import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import '@styles/main.scss';

import { LandingPage } from './LandingPage';
import { About } from './About';

const siteMetadataQuery = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const Layout = ({ children }) => (
	<StaticQuery
		query={siteMetadataQuery}
		render={data => {
			const title = data.site.siteMetadata.title;
			return (
				<>
					<LandingPage title={title} />
					<About />
					{children}
				</>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
