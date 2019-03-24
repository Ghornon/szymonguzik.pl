import React from 'react';

const Article = props => {
	const { articleType, icon, primaryHeader, secondaryHeader, content, footer } = props;
	console.log(primaryHeader);
	return (
		<div
			className={
				articleType ? `about__article about__article--${articleType}` : `about__article`
			}
		>
			<header className="about__article-header">
				<div className="about__icon">{icon}</div>

				<h6 className="about__heading about__heading--secondary">{secondaryHeader}</h6>

				<h4 className="about__heading about__heading--primary">{primaryHeader}</h4>
			</header>

			<div className="about__article-content">{content}</div>

			<footer className="about__article-footer">{footer}</footer>
		</div>
	);
};

export default Article;
