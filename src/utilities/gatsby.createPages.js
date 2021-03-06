const path = require('path');
const _ = require('lodash');
const moment = require('moment');
const siteConfig = require('../../data/SiteConfig');

exports.createCollectionPages = (
  createPage,
  queryResult,
  templates,
  pathPrefix
) => {
  // * error catching
  if (queryResult.errors) {
    console.error(queryResult.errors);
    throw queryResult.errors;
  }

  const tagSet = new Set();
  const categorySet = new Set();
  const nodes = queryResult.data.allMarkdownRemark.edges; // array of markdown nodes

  /**
   ** Sort posts using MomentJS
   */
  // We can also sort posts in the graphQL query but then we won't be able to specify the date format of the posts and sort it accordingly.
  // e.g. allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC })

  nodes.sort(({ node: nodeA }, { node: nodeB }) => {
    const dateA = moment(nodeA.frontmatter.date, siteConfig.dateFromFormat);
    const dateB = moment(nodeB.frontmatter.date, siteConfig.dateFromFormat);

    // return dateA.isBefore(dateB) ? 1 : -1; doesn't preserve the original position of the node if two nodes have the same date
    // instead: If a > b, returning 1 or a positive value is one and the same thing, similarly, if a < b then returning -1 or the difference is the same.
    // If both are equal the difference is 0 and hence return 0. NodeA and nodeB's positions are unchanged relative to each other, but sorted with respect to all the other elements.
    // https://stackoverflow.com/questions/49005027/javascript-sort-function-what-are-return-0-return-1-and-return-1-for

    if (dateA.isBefore(dateB)) return 1;
    if (dateB.isBefore(dateA)) return -1;
    return 0;
  });

  /**
   ** Create Listing Page
   */

  // pagination
  const { postsPerPage } = siteConfig;
  const pageCount = Math.ceil(nodes.length / postsPerPage);

  [...Array(pageCount)].forEach((_val, pageNum) => {
    createPage({
      path:
        pageNum === 0
          ? `${pathPrefix}/list`
          : `${pathPrefix}/list/${pageNum + 1}`,
      component: templates.listingPage,
      context: {
        limit: postsPerPage,
        skip: pageNum * postsPerPage,
        pageCount,
        currentPageNum: pageNum + 1,
      },
    });
  });

  /**
   ** Create individual pages
   */
  nodes.forEach(({ node }, index) => {
    // Generate a unique list of tags
    if (node.frontmatter.tags)
      node.frontmatter.tags.forEach(tag => tagSet.add(tag));

    // Generate a unique list of categories
    if (node.frontmatter.category) categorySet.add(node.frontmatter.category);

    // get next and prev node reference
    const nextID = index + 1 < nodes.length ? index + 1 : 0; // loop back to start
    const prevID = index - 1 >= 0 ? index - 1 : nodes.length - 1; // loop back to end
    const { node: nextNode } = nodes[nextID];
    const { node: prevNode } = nodes[prevID];

    createPage({
      path: `${pathPrefix}${node.fields.slug}`,
      component: templates.page,
      context: {
        slug: `${node.fields.slug}`, // no pathPrefix here since its used in page query
        nextTitle: nextNode.frontmatter.title,
        nextSlug: `${pathPrefix}${nextNode.fields.slug}`,
        prevtitle: prevNode.frontmatter.title,
        prevSlug: `${pathPrefix}${prevNode.fields.slug}`,
      },
    });
  });

  /**
   ** Create tag pages
   */
  tagSet.forEach(tag => {
    createPage({
      path: `${pathPrefix}/tags/${_.kebabCase(tag)}`,
      component: templates.tagPage,
      context: { tag },
    });
  });

  /**
   ** Create category pages
   */
  categorySet.forEach(category => {
    createPage({
      path: `${pathPrefix}/categories/${_.kebabCase(category)}`,
      component: templates.categoryPage,
      context: { category },
    });
  });
};

// current page queries are set up to query for content based off on slug stored in node.fields.slug which doesn't have a prefix

// in the page query of the template, we also filter by the field collection matches the one we expect

// TODO confirm that nextSlug and prevSlug can have pathPrefix
