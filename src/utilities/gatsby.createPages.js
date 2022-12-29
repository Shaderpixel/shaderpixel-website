const path = require('path');
const kebabCase = require('lodash.kebabcase');
const moment = require('moment');
const siteConfig = require('../../data/SiteConfig');

/**
 ** Helper functions
 */
// helper function for hasOwnProperty
const hasOwnProperty = Function.prototype.call.bind(
  Object.prototype.hasOwnProperty
);

exports.createCollectionPages = async (
  createPage,
  graphql,
  queryResult,
  templates,
  customPathPrefix = '',
  dateSlug = false
) => {
  // * error catching
  if (queryResult.errors) {
    console.error(queryResult.errors);
    throw queryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();
  const nodes = queryResult.data.allMarkdownRemark.edges; // array of markdown nodes
  const { siteMetadata } = queryResult.data.site;
  let pathPrefix = '';
  let postCollection = '';

  /**
   ** Set path prefix
   */
  // let pathPrefix be either customPathPrefix or if collection exists in the first node, use that, otherwise no pathPrefix needed
  if (customPathPrefix.length > 0) {
    pathPrefix = customPathPrefix;
  } else if (
    hasOwnProperty(nodes[0].node, 'fields') &&
    hasOwnProperty(nodes[0].node.fields, 'collection')
  ) {
    postCollection = nodes[0].node.fields.collection;
    pathPrefix = `/${postCollection}`;
  }

  /**
   ** Sort posts using MomentJS
   */
  // We can also sort posts in the graphQL query but then we won't be able to specify the date format of the posts and sort it accordingly.
  // e.g. allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC })

  nodes.sort(({ node: nodeA }, { node: nodeB }) => {
    const dateA = moment(nodeA.fields.date, siteConfig.dateFromFormat);
    const dateB = moment(nodeB.fields.date, siteConfig.dateFromFormat);

    // return dateA.isBefore(dateB) ? 1 : -1; doesn't preserve the original position of the node if two nodes have the same date
    // instead: If a > b, returning 1 or a positive value is one and the same thing, similarly, if a < b then returning -1 or the difference is the same.
    // If both are equal the difference is 0 and hence return 0. NodeA and nodeB's positions are unchanged relative to each other, but sorted with respect to all the other elements.
    // https://stackoverflow.com/questions/49005027/javascript-sort-function-what-are-return-0-return-1-and-return-1-for

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;
    return 0;
  });

  /**
   ** Create individual pages
   */
  // https://github.com/gatsbyjs/gatsby/issues/19489
  const postPromises = nodes.map(({ node }, index) => {
    // Generate a unique list of tags
    if (node.frontmatter.tags)
      node.frontmatter.tags.forEach(tag => tagSet.add(tag));

    // Generate a unique list of categories
    if (node.frontmatter.category) {
      categorySet.add(node.frontmatter.category);
    } else {
      categorySet.add(siteConfig.postDefaultCategoryID);
    }

    // get next and prev node reference
    const nextID = index + 1 < nodes.length ? index + 1 : 0; // loop back to start
    const prevID = index - 1 >= 0 ? index - 1 : nodes.length - 1; // loop back to end
    const { node: nextNode } = nodes[nextID]; // node alias as nextNode
    const { node: prevNode } = nodes[prevID]; // node alias as prevNode

    const datePrefix =
      dateSlug && node.fields.date
        ? `/${moment(node.fields.date).format(siteConfig.dateFromFormat)}`
        : '';
    const prevDatePrefix =
      dateSlug && prevNode.fields.date
        ? `/${moment(prevNode.fields.date).format(siteConfig.dateFromFormat)}`
        : '';
    const nextDatePrefix =
      dateSlug && nextNode.fields.date
        ? `/${moment(nextNode.fields.date).format(siteConfig.dateFromFormat)}`
        : '';
    createPage({
      path: `${pathPrefix}${datePrefix}${node.fields.slug}`,
      component: templates.page,
      context: {
        slug: node.fields.slug, // no pathPrefix here since its used as page query argument
        collection: node.fields.collection,
        nextTitle: nextNode.frontmatter.title,
        nextSlug: `${pathPrefix}${nextDatePrefix}${nextNode.fields.slug}`,
        prevTitle: prevNode.frontmatter.title,
        prevSlug: `${pathPrefix}${prevDatePrefix}${prevNode.fields.slug}`,
        headingsMaxDepth:
          siteMetadata && siteMetadata.headingsMaxDepth
            ? siteMetadata.headingsMaxDepth
            : null, // headingsMaxDepth is needed for post.jsx page query, not sure about other templates yet
      },
    });
  });

  await Promise.all(postPromises);

  /**
   ** Create Listing Page
   */

  // pagination
  const { postsPerPage } = siteConfig;
  const pageCount = Math.ceil(nodes.length / postsPerPage);

  const pagePromises = [...Array(pageCount)].map((_val, pageNum) => {
    createPage({
      path: pageNum === 0 ? `${pathPrefix}/` : `${pathPrefix}/${pageNum + 1}`,
      component: templates.listingPage,
      context: {
        limit: postsPerPage,
        skip: pageNum * postsPerPage,
        pageCount,
        currentPageNum: pageNum + 1,
        pathPrefix,
        collection: postCollection,
      },
    });
  });

  await Promise.all(pagePromises);

  /**
   ** Create tag pages
   */
  // can't use async with forEach
  // eslint-disable-next-line no-restricted-syntax
  for (const tag of tagSet) {
    // to create pagination for each tag we are going to query for number of pages and then create pages for each tag

    const tagPathPrefix = `${pathPrefix}/tags`;
    const kebabTag = kebabCase(tag);

    // get post nodes by tag
    // TODO remove unneeded frontmatter stuff in query
    // eslint-disable-next-line no-await-in-loop
    const tagQueryResult = await graphql(
      `
        query GetAllPostsWithTag($postCollection: String, $tag: String) {
          allMarkdownRemark(
            sort: { fields: frontmatter___date, order: DESC }
            filter: {
              fields: {
                tags: { eq: $tag }
                collection: { eq: $postCollection }
              }
            }
          ) {
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
      `,
      { tag, postCollection }
    );
    const tagNodes = tagQueryResult.data.allMarkdownRemark.edges; // array of markdown nodes

    const tagPageCount = Math.ceil(tagNodes.length / postsPerPage);

    // TODO sort nodes using momentJS?

    const tagPromises = [...Array(tagPageCount)].map((_val, pageNum) => {
      createPage({
        path:
          pageNum === 0
            ? `${tagPathPrefix}/${kebabTag}`
            : `${tagPathPrefix}/${kebabTag}/${pageNum + 1}`,
        component: templates.tagPage,
        context: {
          limit: postsPerPage,
          skip: pageNum * postsPerPage,
          pageCount: tagPageCount,
          currentPageNum: pageNum + 1,
          tagPathPrefix,
          pathPrefix,
          collection: postCollection,
          kebabTag,
          tag,
        },
      });
    });

    await Promise.all(tagPromises);
  }

  /**
   ** Create category pages
   */
  // can't use async with forEach
  // eslint-disable-next-line no-restricted-syntax
  for (const category of categorySet) {
    // to create pagination for each category we are going to query for number of pages and then create pages for each category
    const categoryPathPrefix = `${pathPrefix}/categories`;
    const kebabCategory = kebabCase(category);
    // if category = postDefaultCategoryID means the frontmatter category is not populated
    const categoryFilterText =
      category === siteConfig.postDefaultCategoryID ? '' : category;

    // get post nodes by category
    // TODO remove unneeded frontmatter stuff in query
    // eslint-disable-next-line no-await-in-loop
    const categoryQueryResult = await graphql(`query GetAllPostsWithCategory {
        allMarkdownRemark(
          sort: { fields: frontmatter___date, order: DESC }
          filter: { fields: { category: { eq: "${categoryFilterText}" }, collection: { eq: "${postCollection}" } } }
        ) {
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
                category
              }
            }
          }
        }
      }`);
    const categoryNodes = categoryQueryResult.data.allMarkdownRemark.edges; // array of markdown nodes

    const categoryPageCount = Math.ceil(categoryNodes.length / postsPerPage);

    // TODO sort nodes using momentJS?

    const categoryPromises = [...Array(categoryPageCount)].map(
      (_val, pageNum) => {
        createPage({
          path:
            pageNum === 0
              ? `${categoryPathPrefix}/${kebabCategory}`
              : `${categoryPathPrefix}/${kebabCategory}/${pageNum + 1}`,
          component: templates.categoryPage,
          context: {
            limit: postsPerPage,
            skip: pageNum * postsPerPage,
            pageCount: categoryPageCount,
            currentPageNum: pageNum + 1,
            pathPrefix,
            categoryPathPrefix,
            collection: postCollection,
            pageQueryCategoryFilter:
              category === siteConfig.postDefaultCategoryID ? '' : category,
            category,
            kebabCategory,
          },
        });
      }
    );

    await Promise.all(categoryPromises);
  }
  // categorySet.forEach(category => {
  //   // todo don't I need pagination for these pages as well?
  //   createPage({
  //     path: `${pathPrefix}/categories/${kebabCase(category)}`,
  //     component: templates.categoryPage,
  //     context: { category },
  //   });
  // });
};

// current page queries are set up to query for content based off on slug stored in node.fields.slug which doesn't have a prefix

// in the page query of the template, we also filter by the field collection matches the one we expect

// TODO confirm that nextSlug and prevSlug can have pathPrefix
