const locales = require('./src/locales/locales.js');
const path = require('path');
const slugify = require('slugify');

exports.onCreatePage = ({ page, actions }) => {
	const { createPage, deletePage } = actions;

	return new Promise(resolve => {
		deletePage(page);

		Object.keys(locales).map(lang => {
			const localizedPath = locales[lang].default
				? page.path
				: locales[lang].path + page.path;

			return createPage({
				...page,
				path: localizedPath,
				context: {
					locale: lang
				}
			});
		});

		resolve();
	});
};

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const portfolioTemplate = path.resolve(`./src/templates/portfolioTemplate.js`);

	const portfolioQuery = await graphql(`
		query {
			Portfolio: allContentfulPortfolio {
				edges {
					node {
						id
						name
						iconName

						shortDescription
						description {
							childContentfulRichText {
								html
							}
						}

						demoLink
						sourceLink

						slug
						order

						technologyStack

						image {
							fluid {
								base64
								aspectRatio
								src
								srcSet
								srcWebp
								srcSetWebp
								sizes
							}
						}

						node_locale
					}
				}
			}
		}
	`);

	portfolioQuery.data.Portfolio.edges.forEach(item => {
		const lang = item.node.node_locale;
		const slug = slugify(item.node.slug);
		const localizedPath = locales[lang].default ? slug : locales[lang].path + '/' + slug;

		createPage({
			path: localizedPath,
			component: portfolioTemplate,
			context: {
				pageData: item.node,
				locale: lang
			}
		});
	});
};
