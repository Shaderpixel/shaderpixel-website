/**
 * Site configuration options for a Gatsby site
 * Can contain site (metadata), which Gatsby plugins you’d like to include, etc.
 * (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
 *  */
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: true,
        tailwind: true,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
