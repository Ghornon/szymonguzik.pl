import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import { connectWithStore } from '@store/Store';

import { getArticles } from './index';
import './About.scss';

const aboutQuery = graphql`
	query {
		image: file(relativePath: { eq: "myphoto.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

const AboutUI = props => (
	<StaticQuery
		query={aboutQuery}
		render={dataImage => {
			console.log('About', props);
			const articlesList = getArticles({ data: props.About, ...dataImage });
			return (
				<section className="about">
					<div className="container about__grid">{articlesList}</div>
				</section>
			);
		}}
	/>
);

const About = connectWithStore(AboutUI);
export default About;
