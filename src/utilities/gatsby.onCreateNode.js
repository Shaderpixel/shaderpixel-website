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

/**
 ** Gatsby: onCreateNode API
 */
exports.createFieldCollection = ({ node, createNodeField, fileNode }) => {
  createNodeField({
    node,
    name: 'collection',
    value: fileNode.sourceInstanceName,
  });
};

exports.createFieldSlug = ({ node, createNodeField, fileNode }) => {
  let slug = '';
  const parsedFilePath = path.parse(fileNode.relativePath);

  if (hasOwnProperty(node, 'frontmatter')) {
    if (hasOwnProperty(node.frontmatter, 'slug')) {
      slug = `/${kebabCase(node.frontmatter.slug)}`;
    } else if (hasOwnProperty(node.frontmatter, 'title')) {
      slug = `/${kebabCase(node.frontmatter.title)}`;
    }
  } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
    slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
  } else if (parsedFilePath.dir === '') {
    slug = `/${parsedFilePath.name}`;
  } else {
    slug = `/${parsedFilePath.dir}/`;
  }

  createNodeField({
    node,
    name: 'slug',
    value: slug,
  });
};

exports.createFieldDate = ({ node, createNodeField, fileNode }) => {
  if (hasOwnProperty(node, 'frontmatter')) {
    if (hasOwnProperty(node.frontmatter, 'date')) {
      const date = moment(node.frontmatter.date, siteConfig.dateFromFormat);
      if (!date.isValid)
        console.warn(`WARNING: Invalid date.`, node.frontmatter.date);
      createNodeField({
        node,
        name: 'date',
        value: date.toISOString(),
      });
    }
  }
};

exports.createFieldTags = ({ node, createNodeField, fileNode }) => {
  if (
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node?.frontmatter, 'tags')
  ) {
    createNodeField({
      node,
      name: 'tags',
      value: node.frontmatter.tags,
    });
  }
};

exports.createFieldCategory = ({ node, createNodeField, fileNode }) => {
  if (
    hasOwnProperty(node, 'frontmatter') &&
    hasOwnProperty(node?.frontmatter, 'category')
  ) {
    createNodeField({
      node,
      name: 'category',
      value: node.frontmatter.category,
    });
  }
};
