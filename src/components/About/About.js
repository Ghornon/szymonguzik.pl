import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { connectWithStore } from '@store/Store';

import { getArticles } from './index';
import './About.scss';

const aboutQuery = graphql`
	query {
		image: file(relativePath: { eq: "myphoto.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 700, quality: 100) {
					...GatsbyImageSharpFluid_noBase64
				}
			}
		}
	}
`;

const AboutUI = ({ About }) => (
	<StaticQuery
		query={aboutQuery}
		render={dataImage => {
			const articlesList = getArticles({ data: About, ...dataImage });
			return (
				<section className="about" id="about">
					<div className="container about__grid">{articlesList}</div>
				</section>
			);
		}}
	/>
);

const About = connectWithStore(AboutUI);
export default About;
