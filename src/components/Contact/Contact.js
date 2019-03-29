import React from 'react';
import { FaRegEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

import { ContactItem } from './index';
import './Contact.scss';

const Contact = () => {
	const contactList = [
		{
			name: 'Contact',
			icon: <FaRegEnvelope />,
			description: "Say hello! I'd love to hear your opinion about me and my website.",
			linkName: 'kontakt@szymonguzik.pl',
			linkTo: 'mailto:kontakt@szymonguzik.pl'
		},
		{
			name: 'Resume',
			icon: <FaLinkedin />,
			description: 'Visit my linking profile to get more information about me.',
			linkName: 'Learn more!',
			linkTo: 'https://www.linkedin.com/in/szymon-button-guzik/'
		},
		{
			name: 'Projects',
			icon: <FaGithub />,
			description: 'Also, don’t forget to see my GitHub repositories',
			linkName: 'See repositories!',
			linkTo: 'https://github.com/Ghornon?tab=repositories'
		}
	].map((element, index) => <ContactItem {...element} key={`contactList-item-${index}`} />);

	return (
		<section className="contact">
			<div className="container contact__grid">{contactList}</div>
		</section>
	);
};

export default Contact;
