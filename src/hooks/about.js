import { useStaticQuery, graphql } from 'gatsby';

export const useAboutData = () => {
	const { About } = useStaticQuery(
		graphql`
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
			}
		`
	);
	return About.edges;
};
