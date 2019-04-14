import React from 'react';
import Img from 'gatsby-image';
import { FaUserSecret, FaBriefcase, FaQuoteRight, FaImage } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import scrollToElement from 'scroll-to-element';

import { AboutArticle } from './index';

const getArticles = ({ data, image }) => {
	if (!Array.isArray(data)) {
		return;
	}

	const articles = [
		{
			articleType: 'quote',
			content: <FormattedMessage id="About.quote.content" />,
			icon: <FaQuoteRight />,
			footer: (
				<h6 className="about__heading about__heading--secondary">
					<FormattedMessage id="About.quote.footer" />
				</h6>
			)
		},
		{
			articleType: 'image',
			content: (
				<Img
					fluid={image.childImageSharp.fluid}
					className="about__image"
					alt="Photo of me"
				/>
			),
			icon: <FaImage />,
			footer: (
				<>
					<h6 className="about__heading about__heading--secondary">
						<FormattedMessage id="About.image.footer" />
					</h6>
					<h4 className="about__heading about__heading--primary">Szymon Guzik</h4>
				</>
			)
		}
	].map((element, index) => <AboutArticle {...element} key={`aboutList-article-${index}`} />);

	const icons = [<FaUserSecret />, <FaBriefcase />];

	data.forEach((element, index) => {
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
				<a
					href={element.buttonTarget}
					className="about__button"
					onClick={event => {
						event.preventDefault();
						const vw = window.innerWidth > 1200;
						scrollToElement(element.buttonTarget, {
							align: vw ? 'middle' : 'top',
							offset: vw ? 0 : -80,
							ease: 'inOutQuad',
							duration: 600
						});
					}}
				>
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
