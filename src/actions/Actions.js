function getLocaleDate(data) {
	const { locale } = this.props;

	const localePosts = data.About.edges
		.filter(element => element.node.node_locale === locale)
		.map(element => {
			return { ...element.node };
		});

	return localePosts;
}

function storeData(data) {
	this.setState({ ...this.state, ...data });
}

export { getLocaleDate, storeData };
