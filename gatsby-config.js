const path = require('path');
require('dotenv').config();

/* if (process.env.NODE_ENV !== 'production') {
	dotenv.config();
} */

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
				icon: `src/assets/images/icon.png`,
				icons: [
					{
						src: `favicons/icon-48x48.png`,
						sizes: `48x48`,
						type: `image/png`
					},
					{
						src: `favicons/icon-72x72.png`,
						sizes: `72x72`,
						type: `image/png`
					},
					{
						src: `favicons/icon-96x96.png`,
						sizes: `96x96`,
						type: `image/png`
					},
					{
						src: `favicons/icon-144x144.png`,
						sizes: `144x144`,
						type: `image/png`
					},
					{
						src: `favicons/icon-192x192.png`,
						sizes: `192x192`,
						type: `image/png`
					},
					{
						src: `favicons/icon-256x256.png`,
						sizes: `256x256`,
						type: `image/png`
					},
					{
						src: `favicons/icon-384x384.png`,
						sizes: `384x384`,
						type: `image/png`
					},
					{
						src: `favicons/icon-512x512.png`,
						sizes: `512x512`,
						type: `image/png`
					}
				]
			}
		},

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
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `42pm29yjtfwf`,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		`@contentful/gatsby-transformer-contentful-richtext`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		'gatsby-plugin-offline'
	]
};
