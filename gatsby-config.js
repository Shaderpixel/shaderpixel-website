// Site configuration options for a Gatsby site
const config = require(`./data/SiteConfig`);

module.exports = {
  siteMetadata: {
    // When you want to reuse common pieces of data across the site (for example, your site title), you can store that data in siteMetadata
    title: config.siteTitle,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    copyright: config.copyright,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/content/assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/portfolio`,
      },
    },
  ],
};
