import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { FaUserSecret, FaBriefcase, FaQuoteRight, FaImage } from 'react-icons/fa';

import { Article } from './index';

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

const articles = [
	{
		primaryHeader: 'Who am I?',
		secondaryHeader: 'Personal',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum deleniti a recusandae cupiditate, laboriosam iure ipsa tenetur consequuntur deserunt sint ullam, itaque reiciendis veniam voluptatibus harum facere doloremque? Eius unde similique maiores voluptatibus molestiae nihil architecto quisquam voluptatum accusamus dignissimos quos voluptates, quibusdam, error qui quam ipsum tempora fuga?',
		icon: <FaUserSecret />,
		footer: (
			<Link to="#contact" className="about__button">
				Contact
			</Link>
		)
	},
	{
		primaryHeader: 'What do I do?',
		secondaryHeader: 'Work',
		content:
			'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim cum deleniti a recusandae cupiditate, laboriosam iure ipsa tenetur consequuntur deserunt sint ullam, itaque reiciendis veniam voluptatibus harum facere doloremque? Eius unde similique maiores voluptatibus molestiae nihil architecto quisquam voluptatum accusamus dignissimos quos voluptates, quibusdam, error qui quam ipsum tempora fuga?',
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
		footer: <h6 className="about__heading about__heading--secondary">Albert Einstein</h6>
	},
	{
		articleType: 'image',
		content: <img src="" className="about__image" />,
		icon: <FaImage />,
		footer: (
			<>
				<h6 className="about__heading about__heading--secondary">Image</h6>
				<h4 className="about__heading about__heading--primary">It's me :)</h4>
			</>
		)
	}
];

// ].map((element, index) => <Article {...element} key={`about-article-${index}`} />);

const About = () => {
	return (
		<StaticQuery
			query={articlePhotoQuery}
			render={data => (
				<section className="about">
					<div className="container-fluid about__grid">
						<Article {...articles[0]} />
						<Article {...articles[1]} />
						<Article {...articles[2]} />
						<Article
							{...articles[3]}
							content={
								<Img
									fluid={data.bannerImage.childImageSharp.fluid}
									className="banner__image"
								/>
							}
						/>
					</div>
				</section>
			)}
		/>
	);
};

export default About;
