import React from 'react';

const BrandItem = ({ name, icon, content }) => (
	<div className="brand__item">
		<header className="brand__header">
			<h4 className="brand__heading">{name}</h4>
		</header>
		<div className="brand__icon">{icon}</div>
		<div
			className="brand__paragraph"
			dangerouslySetInnerHTML={{
				__html: content
			}}
		/>
	</div>
);

export default BrandItem;
