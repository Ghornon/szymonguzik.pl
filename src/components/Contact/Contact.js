import React from 'react';
import { FaRegEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import { connectWithStore } from '@store/Store';

import { ContactItem } from './index';
import './Contact.scss';

const ContactUI = ({ Contact }) => {
	const icons = [<FaRegEnvelope />, <FaLinkedin />, <FaGithub />];
	const contactList = Contact.map((element, index) => (
		<ContactItem
			{...element}
			icon={icons.find(({ type: { displayName } }) => displayName === element.iconName)}
			key={`contactList-item-${index}`}
		/>
	));
	return (
		<section className="contact" id="contact">
			<div className="container container--no-margin contact__grid ">{contactList}</div>
		</section>
	);
};

const Contact = connectWithStore(ContactUI);
export default Contact;
