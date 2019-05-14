/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
exports.onServiceWorkerUpdateReady = () => {
	if (
		window.confirm(
			'Ta strona została zaktualizowana. Czy chcesz przeładować stronę, aby zobaczyć nową wersje?'
		)
	) {
		window.location.reload(true);
	}
};
