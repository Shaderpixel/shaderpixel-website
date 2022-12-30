/**
 * This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any)* */
const path = require('path');
const siteConfig = require('./data/SiteConfig');

const {
  createFieldCollection,
  createFieldSlug,
  createFieldDate,
  createFieldTags,
  createFieldCategory,
} = require('./src/utilities/gatsby.onCreateNode');

const { createCollectionPages } = require('./src/utilities/gatsby.createPages');

/**
 ** Gatsby APIs
 */
/**
 * Temporary workaround for missing sitePage.context. Replace usage in 404.js
 * https://www.gatsbyjs.com/docs/reference/release-notes/migrating-from-v3-to-v4/#field-sitepagecontext-is-no-longer-available-in-graphql-queries
 */
// exports.createSchemaCustomization = ({ actions }) => {
//   const { createTypes } = actions;
//   createTypes(`
//      type SitePage implements Node {
//        context: SitePageContext
//      }
//      type SitePageContext {
//        slug: String,
//      }
//    `);
// };

/**
 * set Babel Config or Preset if needed e.g. for babel macro.
 */
// exports.onCreateBabelConfig = ({ actions: { setBabelPlugin } }) => {
// redux actions can be setBabelPlugin or setBabelPreset
// setBabelPlugin({    //for future
//   name: `babel-plugin-tailwind-components`,
//   options: {
//     config: `./tailwind.config.js`,
//     format: `auto`,
//   },
// });
// };

/**
 * onCreateNode Called when a new node is created.
 */
exports.onCreateNode = ({ node, actions: { createNodeField }, getNode }) => {
  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    const createFieldArgs = { node, createNodeField, fileNode };
    /**
     * creating custom field: sourceInstanceName to pull name used when setting up gatsby-source-filesystem 'blog' vs 'projects'
     * https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348
     * https://www.gatsbyjs.org/packages/gatsby-source-filesystem/#how-to-query but only in allFiles
     */
    createFieldCollection(createFieldArgs);

    // creating custom field: slug and attaching it to the node to be queried later
    createFieldSlug(createFieldArgs);

    // creating custom field: date
    createFieldDate(createFieldArgs);

    // creating custom filterable field: tags
    createFieldTags(createFieldArgs);

    // creating custom filterable field: category
    createFieldCategory(createFieldArgs);
  }
};

/**
 * createPages
 */
// TODO figure out data needed for blogs
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const postTemplates = {
    page: path.resolve('src/templates/Post/index.js'),
    tagPage: path.resolve('src/templates/tag.js'),
    categoryPage: path.resolve('src/templates/category.js'),
    listingPage: path.resolve('src/templates/listing.js'),
  };

  const projectTemplates = {};

  const postQueryResult = await graphql(`
    query GetAllPosts {
      site {
        siteMetadata {
          headingsMaxDepth
        }
      }
      allMarkdownRemark(filter: { fields: { collection: { eq: "blog" } } }) {
        edges {
          node {
            fields {
              slug
              date
              collection
            }
            frontmatter {
              title
              date
              tags
              category
            }
          }
        }
      }
    }
  `);

  const projectQueryResult = {};

  await createCollectionPages(
    createPage,
    graphql,
    postQueryResult,
    postTemplates,
    undefined,
    false
  );
};

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions;

  return new Promise(resolve => {
    // replace about/index.js with about/
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
      deletePage(page);

      // create a new page but with '/' as path
      createPage({
        ...page,
        context: {
          ...page.context,
          recentHomepagePosts: siteConfig.recentHomepagePosts,
        },
        path: '/',
      });
    }

    resolve();
  });
};
