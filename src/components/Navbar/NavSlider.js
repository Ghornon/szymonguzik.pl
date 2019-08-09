import React, { useState } from 'react';
import { Location } from '@reach/router';
import { FormattedMessage } from 'react-intl';

import { changeLocale } from '@components';

const NavSlider = ({ locale }) => {
	const [checked, setCheck] = useState(locale !== 'en');

	const switchLocale = locale === 'en' ? 'pl' : 'en';

	return (
		<div className="navbar__switch">
			<Location>
				{locationProps => (
					<>
						<input
							type="checkbox"
							name="lang"
							id="lang"
							className="navbar__checkbox"
							onChange={() => {
								setCheck(!checked);
								setTimeout(() => {
									changeLocale(
										switchLocale,
										locale,
										locationProps.location.pathname
									);
								}, 250);
							}}
							checked={checked}
							key="language-checkbox"
						/>

						<label
							className="navbar__slider"
							htmlFor="lang"
							tabIndex="0"
							onKeyPress={event => {
								if (event.key === 'Enter') {
									setCheck(!checked);
									setTimeout(() => {
										changeLocale(
											switchLocale,
											locale,
											locationProps.location.pathname
										);
									}, 250);
								}
							}}
							key="language-label"
						>
							<FormattedMessage id="Navbar.language">
								{msg => <span className="sr-only">{msg}</span>}
							</FormattedMessage>
						</label>
					</>
				)}
			</Location>
		</div>
	);
};

export default NavSlider;
