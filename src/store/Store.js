import React, { Component } from 'react';
import * as actions from '@actions/Actions';
import { IntlProvider, addLocaleData } from 'react-intl';

// Locale data
import enData from 'react-intl/locale-data/en';
import plData from 'react-intl/locale-data/pl';

// Messages
import en from '../locales/en.json';
import pl from '../locales/pl.json';

const Context = React.createContext();

const messages = { en, pl };
addLocaleData([...enData, ...plData]);

class StoreProvider extends Component {
	getLocaleData() {
		const { locale, queryData = [] } = this.props;

		const localeData = {};

		Object.keys(queryData).forEach(key => {
			if (queryData[key].edges) {
				localeData[key] = queryData[key].edges
					.filter(element => element.node.node_locale === locale)
					.map(element => {
						return { ...element.node };
					});
			}
		});

		console.log(localeData);

		return localeData;
	}

	attacheMethods() {
		const newActions = {};

		for (let i in actions) {
			newActions[i] = actions[i].bind(this);
		}

		return newActions;
	}

	render() {
		const { locale, children } = this.props;

		return (
			<Context.Provider value={{ ...this.getLocaleData(), ...this.attacheMethods(), locale }}>
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
