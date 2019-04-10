import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import { IntlProvider, addLocaleData } from 'react-intl';

import '@styles/main.scss';
import { Footer } from './index';

// Locale data
import enData from 'react-intl/locale-data/en';
import plData from 'react-intl/locale-data/pl';

// Messages
import en from '../locales/en.json';
import pl from '../locales/pl.json';

const messages = { en, pl };
addLocaleData([...enData, ...plData]);

const siteMetadataQuery = graphql`
	query SiteTitleQuery {
		site {
			siteMetadata {
				title
			}
		}
	}
`;

const Layout = ({ locale, children }) => (
	<StaticQuery
		query={siteMetadataQuery}
		render={data => {
			const title = data.site.siteMetadata.title;
			const childrenWithProps = React.Children.map(children, child => {
				return React.cloneElement(child, {
					locale
				});
			});

			return (
				<IntlProvider locale={locale} messages={messages[locale]}>
					<>
						{childrenWithProps}
						<Footer title={title} />
					</>
				</IntlProvider>
			);
		}}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
