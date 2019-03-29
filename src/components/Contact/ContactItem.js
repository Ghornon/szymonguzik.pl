import React from 'react';

const ContactItem = ({ name, icon, description, linkName, linkTo = '#' }) => {
	return (
		<div className="contact__item">
			<header className="contact__header">
				<h4 className="contact__heading contact__heading--primary">{name}</h4>
				<div className="contact__icon">{icon}</div>
			</header>
			<footer className="contact__footer">
				<h6 className="contact__heading contact__heading--secondary">{description}</h6>
				<a href={linkTo} className="contact__link">
					{linkName}
				</a>
			</footer>
		</div>
	);
};

export default ContactItem;
