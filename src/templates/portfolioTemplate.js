import React from 'react';
import { graphql } from 'gatsby';
import { LandingPage, Contact, Layout, SEO, DetailPage } from '../components';

const PortfolioTemplate = ({ pageContext: { locale, pageData }, data }) => (
	<Layout locale={locale} queryData={data}>
		<SEO title={pageData.name} lang={locale} />
		<LandingPage />
		<DetailPage pageData={pageData} />
		<Contact />
	</Layout>
);

export const indexQuery = graphql`
	query {
		Portfolio: allContentfulPortfolio(sort: { fields: createdAt }) {
			edges {
				node {
					id
					name
					iconName
					slug
					order
					image {
						fluid {
							...GatsbyContentfulFluid_noBase64
						}
					}
					node_locale
				}
			}
		}
		Contact: allContentfulContact(sort: { fields: createdAt }) {
			edges {
				node {
					id
					title
					iconName
					description
					linkName
					linkAddress
					node_locale
				}
			}
		}
	}
`;

export default PortfolioTemplate;
