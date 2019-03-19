// eslint-disable-next-line import/no-extraneous-dependencies
const autoprefixer = require('autoprefixer')({
	grid: true,
	browsers: ['>1%', 'ie 6-8', 'Firefox > 20']
});

module.exports = {
	plugins: [autoprefixer]
};
