const path = require('path');
module.exports = {
	siteMetadata: {
		title: `szymonguzik.pl`,
		description: `My personal gatsbyJS site`,
		author: `@ghornon`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-starter-default`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/assets/images/icon.png`
			}
		},
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// 'gatsby-plugin-offline',
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@assets': path.resolve(__dirname, 'src/assets'),
					'@images': path.resolve(__dirname, 'src/assets/images'),
					'@pages': path.resolve(__dirname, 'src/pages'),
					'@styles': path.resolve(__dirname, 'src/assets/styles'),
					'@store': path.relative(__dirname, 'src/store'),
					'@actions': path.relative(__dirname, 'src/actions')
				},
				extensions: []
			}
		}
	]
};
