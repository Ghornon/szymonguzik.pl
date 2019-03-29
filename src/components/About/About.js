import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaUserSecret, FaBriefcase, FaQuoteRight, FaImage } from 'react-icons/fa';

import { AboutArticle } from './index';
import './About.scss';

const articlePhotoQuery = graphql`
	query {
		bannerImage: file(relativePath: { eq: "myphoto.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

// ].map((element, index) => <Article {...element} key={`about-article-${index}`} />);

const About = () => {
	return (
		<StaticQuery
			query={articlePhotoQuery}
			render={data => {
				const articleList = [
					{
						articleType: 'textbox',
						primaryHeader: 'Who am I?',
						secondaryHeader: 'Personal',
						content: (
							<>
								I'm an amateur front-end developer.
								<br />
								<br />
								I graduate from a high school for an IT technician. I'm looking for
								my first job as the front-end and/or JavaScript developer.
								<br />
								<br />
								Programming is my passion since I graduated from primary school.
								Then I started developing my skills, which made me love new
								technologies, library’s, frameworks and especially JavaScript.
							</>
						),
						icon: <FaUserSecret />,
						footer: (
							<Link to="#contact" className="about__button">
								Contact
							</Link>
						)
					},
					{
						articleType: 'textbox',
						primaryHeader: 'What do I do?',
						secondaryHeader: 'Work',
						content: (
							<>
								I deal with designing and creating front-end part of website. As I
								said I’m an amateur and I have no commercial experience in such work
								but, I made a few projects.
								<br />
								<br />I make a project step by step, from sketch to a fully
								functional website or web application. I use the latest technologies
								so as to my websites look good on any devices and always meet high
								standards.
							</>
						),
						icon: <FaBriefcase />,
						footer: (
							<Link to="#portfolio" className="about__button">
								Portfolio
							</Link>
						)
					},
					{
						articleType: 'quote',
						content: 'Creativity is intelligence having fun.',
						icon: <FaQuoteRight />,
						footer: (
							<h6 className="about__heading about__heading--secondary">
								Albert Einstein
							</h6>
						)
					},
					{
						articleType: 'image',
						content: (
							<Img
								fluid={data.bannerImage.childImageSharp.fluid}
								className="about__image"
								alt="Photo of me"
							/>
						),
						icon: <FaImage />,
						footer: (
							<>
								<h6 className="about__heading about__heading--secondary">
									It's me :)
								</h6>
								<h4 className="about__heading about__heading--primary">
									Szymon Guzik
								</h4>
							</>
						)
					}
				].map((element, index) => (
					<AboutArticle {...element} key={`aboutList-article-${index}`} />
				));

				return (
					<section className="about">
						<div className="container about__grid">{articleList}</div>
					</section>
				);
			}}
		/>
	);
};

export default About;
