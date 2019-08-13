import React from 'react';
import { Link, navigate } from 'gatsby';
import slugify from 'slugify';

const LinkTo = props => {
	const { pathname, locale, children, className } = props;

	const normalizedPath = slugify(pathname);

	const localePath = locale === 'en' ? `/${normalizedPath}` : `/${locale}/${normalizedPath}`;

	return (
		<Link to={localePath} className={className}>
			{children}
		</Link>
	);
};

export const changeLocale = (newLocale, currentLocale, pathname) => {
	let newPathname = '/';

	if (newLocale !== 'en') {
		newPathname += newLocale;
	}

	if (pathname) {
		newPathname += pathname.replace(`/${currentLocale}/`, '');
	}

	navigate(newPathname);
};

export default LinkTo;
