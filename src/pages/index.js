import React from 'react';
import { graphql } from 'gatsby';
import { LandingPage, About, Portfolio, Brand, Contact, Layout, SEO } from '../components';

const IndexPage = ({ pageContext: { locale }, data }) => (
	<Layout locale={locale} queryData={data}>
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

export const indexQuery = graphql`
	query {
		About: allContentfulAbout {
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
		Portfolio: allContentfulPortfolio {
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
		Contact: allContentfulContact {
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
