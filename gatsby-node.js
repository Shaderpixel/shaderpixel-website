/**
 * This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any)* */
const path = require('path');

const {
  createFieldCollection,
  createFieldSlug,
  createFieldDate,
} = require('./src/utilities/gatsby.onCreateNode');

const { createCollectionPages } = require('./src/utilities/gatsby.createPages');

/**
 ** Gatsby APIs
 */

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

    /**
     * creating custom field: sourceInstanceName to pull name used when setting up gatsby-source-filesystem 'blog' vs 'projects'
     * https://github.com/gatsbyjs/gatsby/issues/1634#issuecomment-388899348
     * https://www.gatsbyjs.org/packages/gatsby-source-filesystem/#how-to-query but only in allFiles
     */
    createFieldCollection(node, createNodeField, fileNode);

    // creating custom field: creating custom field: slug and attaching it to the node to be queried later
    createFieldSlug(node, createNodeField, fileNode);

    // creating custom field: date
    createFieldDate(node, createNodeField, fileNode);
  }
};

/**
 * createPages
 */
// TODO figure out data needed for blogs
exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const postTemplates = {
    page: path.resolve('src/templates/post.jsx'),
    tagPage: path.resolve('src/templates/tag.jsx'),
    categoryPage: path.resolve('src/templates/category.jsx'),
    listingPage: path.resolve('src/templates/listing.jsx'),
  };

  const postQueryResult = await graphql(`
    query GetAllPosts {
      allMarkdownRemark(filter: { fields: { collection: { eq: "posts" } } }) {
        edges {
          node {
            fields {
              slug
              date
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

  createCollectionPages(createPage, postQueryResult, postTemplates, '/blog');
};
