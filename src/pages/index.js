import React from 'react';
import { graphql } from 'gatsby';
import { LandingPage, About, Portfolio, Brand, Contact, Layout, SEO } from '../components';

const IndexPage = ({ pageContext: { locale }, data }) => (
	<Layout locale={locale} queryData={data}>
		<SEO title={locale === 'en' ? 'Home' : 'Strona główna'} lang={locale} />
		<LandingPage />
		<About />
		<Portfolio />
		<Brand />
		<Contact />
	</Layout>
);

export default IndexPage;

export const indexQuery = graphql`
	query {
		About: allContentfulAbout(sort: { fields: createdAt }) {
			edges {
				node {
					id
					title
					subtitle
					content {
						childContentfulRichText {
							html
						}
					}
					buttonLabel
					buttonTarget
					node_locale
				}
			}
		}
		Portfolio: allContentfulPortfolio(sort: { fields: createdAt }) {
			edges {
				node {
					id
					name
					description
					image {
						fluid {
							...GatsbyContentfulFluid
						}
					}
					iconName
					link
					node_locale
				}
			}
		}
		Brand: allContentfulBrand {
			edges {
				node {
					id
					title
					content {
						childContentfulRichText {
							html
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
					description
					linkName
					linkAddress
					node_locale
				}
			}
		}
	}
`;
