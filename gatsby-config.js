require('dotenv').config();
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
				name: `szymon-guzik-pl`,
				short_name: `szymonguzik.pl`,
				start_url: `/`,
				background_color: `#212429`,
				theme_color: `#212429`,
				display: `standalone`,
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
					'@locales': path.relative(__dirname, 'src/locales'),
					'@components': path.relative(__dirname, 'src/components')
				},
				extensions: []
			}
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},
		`@contentful/gatsby-transformer-contentful-richtext`,
		`gatsby-plugin-sass`,
		`gatsby-plugin-postcss`,
		'gatsby-plugin-offline'
	]
};
