import React from 'react';
import { graphql } from 'gatsby';
import { LandingPage, About, Portfolio, Brand, Contact, Layout, SEO } from '@components';

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
					iconName
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
					iconName

					shortDescription
					description {
						description
					}

					demoLink
					sourceLink

					slug
					order

					technologyStack

					image {
						fluid {
							...GatsbyContentfulFluid_noBase64
						}
					}

					node_locale
				}
			}
		}
		Brand: allContentfulBrand {
			edges {
				node {
					id
					title
					iconName
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
