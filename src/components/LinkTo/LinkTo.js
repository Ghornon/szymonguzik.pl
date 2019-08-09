import React from 'react';
import { Link, navigate } from 'gatsby';

const LinkTo = props => {
	const { pathname, locale, children, className } = props;

	if (locale === 'en') {
		return (
			<Link to={pathname} className={className}>
				{children}
			</Link>
		);
	}

	return (
		<Link to={`/${locale}/${pathname}`} className={className}>
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
