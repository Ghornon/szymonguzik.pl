import React, { Component } from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import flatten from 'flat';

// Locale data
import enData from 'react-intl/locale-data/en';
import plData from 'react-intl/locale-data/pl';

// Messages
import en from '../locales/en.json';
import pl from '../locales/pl.json';

const Context = React.createContext();

const messages = {
	en: flatten(en),
	pl: flatten(pl)
};

addLocaleData([...enData, ...plData]);

class StoreProvider extends Component {
	extractLocaleData() {
		const { locale, queryData = [] } = this.props;

		const localeData = {};

		Object.keys(queryData).forEach(contentType => {
			if (queryData[contentType].edges) {
				localeData[contentType] = queryData[contentType].edges
					.filter(element => element.node.node_locale === locale)
					.map(element => ({ ...element.node }));
			}
		});

		return localeData;
	}

	render() {
		const { locale, children } = this.props;

		const store = { ...this.extractLocaleData(), locale };

		return (
			<Context.Provider value={store}>
				<IntlProvider locale={locale} messages={messages[locale]}>
					{children}
				</IntlProvider>
			</Context.Provider>
		);
	}
}

const connectWithStore = Container => {
	return class extends Component {
		render() {
			return (
				<Context.Consumer>
					{context => <Container {...context} {...this.props} />}
				</Context.Consumer>
			);
		}
	};
};

export { StoreProvider, connectWithStore };
