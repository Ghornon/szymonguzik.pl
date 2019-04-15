import React from 'react';

const ContactItem = ({ title, icon, description, linkName, linkAddress = '#' }) => {
	const validateEmail = email => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	};

	const onClick = event => {
		event.target.href = event.target.href.replace(/AT/, '@').replace(/DOT/, '.');
	};

	const Link = () => {
		const isEmail = validateEmail(linkName);
		const emailAddress = linkName.split('@');

		if (isEmail) {
			return (
				<a
					href={linkAddress.replace(/@/, 'AT').replace(/\./, 'DOT')}
					className="contact__link"
					onClick={onClick}
				>
					{emailAddress[0]}
					<span className="sr-only">no-robots</span>@{emailAddress[1]}
				</a>
			);
		}

		return (
			<a href={linkAddress} className="contact__link" onClick={onClick}>
				{linkName}
			</a>
		);
	};

	return (
		<div className="contact__item">
			<header className="contact__header">
				<h4 className="contact__heading contact__heading--primary">{title}</h4>
				<div className="contact__icon">{icon}</div>
			</header>
			<footer className="contact__footer">
				<h6 className="contact__heading contact__heading--secondary">{description}</h6>
				<Link />
			</footer>
		</div>
	);
};

export default ContactItem;
