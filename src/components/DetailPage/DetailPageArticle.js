import React from 'react';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';

import { FaCode, FaDesktop } from 'react-icons/fa';

const DetailPageArticle = ({
	name,
	shortDescription,
	description,
	demoLink,
	sourceLink,
	technologyStack,
	image,
	icon
}) => {
	const stuck = [...technologyStack].map(element => (
		<li className="detail__stuck-item" key={`stuck-${element}`}>
			{element}
		</li>
	));

	const content = description ? description.childContentfulRichText.html : '';

	const SourceLink = () =>
		sourceLink ? (
			<a href={sourceLink} className="detail__button">
				<FaCode className="detail__button-icon" />{' '}
				<FormattedMessage id="Detail.article.code" />
			</a>
		) : null;

	const DemoLink = () =>
		demoLink ? (
			<a href={demoLink} className="detail__button">
				<FaDesktop className="detail__button-icon" />{' '}
				<FormattedMessage id="Detail.article.demo" />
			</a>
		) : null;

	return (
		<div className="detail__article">
			<Img fluid={image.fluid} alt={name} className="detail__image" o />

			<header className="detail__header">
				<div className="detail__icon">{icon}</div>

				<h6 className="detail__heading detail__heading--secondary">{shortDescription}</h6>

				<h4 className="detail__heading detail__heading--primary detail__heading--uppercase">
					{name}
				</h4>
				<ul className="detail__stuck">{stuck}</ul>
				<h4 className="detail__heading detail__heading--link">
					<SourceLink />
					<DemoLink />
				</h4>
			</header>

			<div className="detail__content">
				<div
					dangerouslySetInnerHTML={{
						__html: content
					}}
				/>
			</div>
		</div>
	);
};

export default DetailPageArticle;
