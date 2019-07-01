// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
});

const clientConfig = require('./client-config');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: !isProd,
        overlayDrafts: !isProd
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Jamie Bradley`,
        short_name: `Jamie Bradley`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/assets/icon.png`
      }
    }
  ]
};
