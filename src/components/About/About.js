import React from 'react';
import { StaticQuery } from 'gatsby';

import { aboutQuery, getArticles } from './index';
import './About.scss';

const About = ({ locale }) => (
	<StaticQuery
		query={aboutQuery}
		render={data => {
			const articlesList = getArticles(data, locale);
			return (
				<section className="about">
					<div className="container about__grid">{articlesList}</div>
				</section>
			);
		}}
	/>
);

export default About;
