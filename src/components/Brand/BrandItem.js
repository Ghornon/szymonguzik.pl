import React from 'react';

const BrandItem = ({ name, icon, paragraph }) => (
	<div className="brand__item">
		<header className="brand__header">
			<h4 className="brand__heading">{name}</h4>
		</header>
		<div className="brand__icon">{icon}</div>
		<p className="brand__paragraph">{paragraph}</p>
	</div>
);

export default BrandItem;
