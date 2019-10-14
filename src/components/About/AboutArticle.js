import React from 'react';

const AboutArticle = ({ articleType, icon, primaryHeader, secondaryHeader, content, footer }) => (
	<div
		className={articleType ? `about__article about__article--${articleType}` : `about__article`}
	>
		<header className="about__header">
			<div className="about__icon">{icon}</div>
			<h6 className="about__heading about__heading--secondary">{secondaryHeader}</h6>
			<h4 className="about__heading about__heading--primary">{primaryHeader}</h4>
		</header>

		<div className="about__content">{content}</div>

		<footer className="about__footer">{footer}</footer>
	</div>
);

export default AboutArticle;
