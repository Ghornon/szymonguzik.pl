import { graphql } from 'gatsby';

export const aboutQuery = graphql`
	query {
		bannerImage: file(relativePath: { eq: "myphoto.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
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
`;
