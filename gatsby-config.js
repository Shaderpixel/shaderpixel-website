/**
 * Site configuration options for a Gatsby site
 * Can contain site (metadata), which Gatsby plugins you’d like to include, etc.
 * (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
 *  */
const urlJoin = require('url-join');
const config = require('./data/SiteConfig');

// custom Tailwind extractor for PurgeCSS. Copied from plugin package and modified to look for %
const customTWExtractor = content =>
  content.match(/[\w-/:%[\]]+(?<!:%)/g) || [];

module.exports = {
  pathPrefix: config.pathPrefix === '' ? '/' : config.pathPrefix,
  siteMetadata: {
    // When you want to reuse common pieces of data across the site (for example, your site title), you can store that data in siteMetadata
    siteUrl: urlJoin(config.siteUrl, config.pathPrefix),
    siteNav: config.siteNavLinks,
    userLinks: config.userLinks,
    title: config.siteTitle,
    titleSeparator: config.siteTitleSeparator,
    titleAlt: config.siteTitleAlt,
    description: config.siteDescription,
    copyright: config.copyright,
    headingsMaxDepth: config.tocMaxDepth,
    rssMetadata: {
      site_url: urlJoin(config.siteUrl, config.pathPrefix),
      feed_url: urlJoin(config.siteUrl, config.pathPrefix, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urlJoin(
        config.siteUrl,
        config.pathPrefix
      )}/logos/logo-512.png`,
      copyright: config.copyright,
    },
    postDefaultCategory: config.postDefaultCategoryID,
  },
  plugins: [
    /**
     * not needed because static folder is always copied over
     * https://www.gatsbyjs.org/docs/static-folder/
     * */
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `assets`,
    //     path: `${__dirname}/static/`,
    //     ignore: [],
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'reading-list',
        path: `${__dirname}/content/reading-list`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'project',
        path: `${__dirname}/content/portfolio`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              // https://github.com/gatsbyjs/gatsby/commit/fa9fb9782c58811fcfb199ca32985a2ba39ffaac
              maxWidth: 800,
              quality: 70,
              withWebp: {
                quality: 80,
              },
              withAvif: {
                quality: 80,
              },
              showCaptions: ['title', 'alt'],
              wrapperStyle: 'max-width: 800px;',
            },
          },
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-copy-linked-files',
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-anchor`,
              offsetY: `106`, // not functional v2, needs upgrade to latest
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              showLineNumbers: true,
              aliases: { sh: 'bash', js: 'javascript' },
              // Customize the prompt used in shell output
              // Values below are default
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
              // By default the HTML entities <>&'" are escaped.
              // Add additional HTML escapes by providing a mapping
              // of HTML entities and their escape value IE: { '}': '&#123;' }
              escapeEntities: {},
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-lodash',
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-twitter',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-emotion',
      options: {
        // Accepts all options defined by 'babel-plugin-emotion' plugin.
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID,
      },
    },
    {
      resolve: 'gatsby-plugin-purgecss',
      options: {
        printRejected: true,
        // printAll: true,
        develop: false,
        // tailwind: true,
        defaultExtractor: customTWExtractor,
      },
    },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: config.themeColor,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color_in_head: false, // This will avoid adding theme-color meta tag since it can be switched
        cache_busting_mode: 'name',
        crossOrigin: 'use-credentials', // enable CORS
        display: 'minimal-ui',
        icon: 'static/logos/logo.compressed.inline.svg',
      },
    },
    'gatsby-plugin-offline', // must come after the manifest, so that it can cache the created manifest.webmanifest. TODO Also has other options need explore
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        setup(ref) {
          /**
           * setup additional custom fields and overwrites for the feed XML
           * This is only generated on production build
           * @param ref contains object of shape generator, query, feeds, output,title from below
           * */

          // TODO Frontmatter and node setup is not complete
          const ret = ref.query.site.siteMetadata.rssMetadata;
          ret.allMarkdownRemark = ref.query.allMarkdownRemark;
          ret.generator = 'GatsbyJS Advanced Starter'; // overwrite default generator
          ret.custom_namespaces = {};
          ret.custom_elements = [];
          return ret;
        },
        query: `
        {
          site {
            siteMetadata {
              rssMetadata {
                site_url
                feed_url
                title
                description
                image_url
                copyright
              }
            }
          }
        }
      `,
        feeds: [
          {
            serialize(ctx) {
              const { rssMetadata } = ctx.query.site.siteMetadata;
              return ctx.query.allMarkdownRemark.edges.map(edge => ({
                categories: edge.node.frontmatter.tags,
                date: edge.node.fields.date,
                title: edge.node.frontmatter.title,
                description: edge.node.excerpt,
                url: rssMetadata.site_url + edge.node.fields.slug,
                guid: rssMetadata.site_url + edge.node.fields.slug,
                custom_elements: [
                  { 'content:encoded': edge.node.html },
                  { author: config.userEmail },
                ],
              }));
            },
            query: `
            {
              allMarkdownRemark(
                limit: 100,
                sort: { order: DESC, fields: [fields___date] },
              ) {
                edges {
                  node {
                    excerpt
                    html
                    timeToRead
                    fields {
                      slug
                      date
                    }
                    frontmatter {
                        title
                        cover {
                          childImageSharp {
                            gatsbyImageData(width: 560, quality: 60, layout: CONSTRAINED)
                          }
                        }
                      date
                      category
                      tags
                    }
                  }
                }
              }
            }
          `,
            output: config.siteRss,
            title: `${config.siteTitle} RSS Feed`,
          },
        ],
      },
    },
    'gatsby-plugin-preload-fonts',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /\.inline\.svg$/,
          options: {
            name: 'MyIcon',
            className: 'icon',
            'aria-hidden': true,
          },
        },
      },
    },
  ],
};
