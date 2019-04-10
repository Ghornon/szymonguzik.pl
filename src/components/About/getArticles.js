import React from 'react';
import { AboutArticle } from './index';
import Img from 'gatsby-image';
import { FaUserSecret, FaBriefcase, FaQuoteRight, FaImage } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const getArticles = (data, locale) => {
	const localePosts = data.About.edges
		.filter(element => element.node.node_locale === locale)
		.map(element => {
			return { ...element.node };
		});

	const articles = [
		{
			articleType: 'quote',
			content: <FormattedMessage id="about.quote" />,
			icon: <FaQuoteRight />,
			footer: (
				<h6 className="about__heading about__heading--secondary">
					<FormattedMessage id="about.footer" />
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
						<FormattedMessage id="about.image-text" />
					</h6>
					<h4 className="about__heading about__heading--primary">Szymon Guzik</h4>
				</>
			)
		}
	].map((element, index) => <AboutArticle {...element} key={`aboutList-article-${index}`} />);

	const icons = [<FaUserSecret />, <FaBriefcase />];

	localePosts.forEach((element, index) => {
		const newArticle = {
			articleType: 'textbox',
			primaryHeader: element.title,
			secondaryHeader: element.subtitle,
			content: (
				<div
					dangerouslySetInnerHTML={{
						__html: element.content.childContentfulRichText.html
					}}
				/>
			),
			icon: icons[index],
			footer: (
				<a to={element.buttonTarget} className="about__button">
					{element.buttonLabel}
				</a>
			)
		};

		articles.push(
			<AboutArticle {...newArticle} key={`aboutList-article-${articles.length + index}`} />
		);
	});

	return articles;
};

export default getArticles;
