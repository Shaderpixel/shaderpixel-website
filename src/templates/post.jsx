import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import moment from 'moment';
import _ from 'lodash';
import { Pills } from '../components/Pills';
import { MainLayout } from '../layout';
import config from '../../data/SiteConfig';
import { sizingVar, screensVar } from '../styles/variables';
import TagIcon from '../assets/icons/tag.svg';

/**
 ** STYLED COMPONENTS
 */
const BlogArticle = styled.article`
  @media (min-width: ${screensVar.lg}) {
    display: grid;
    grid-template-areas:
      'blog-hero-area blog-hero-area'
      'blog-content-area blog-sidebar';
  }
`;
const BlogHero = styled.section`
  position: relative;
  grid-area: blog-hero-area;
`;
const BlogBanner = styled.img`
  position: absolute;
`;
const BlogFrontmatter = styled.div`
  display: grid;

  @media (min-width: ${screensVar.md}) {
    grid-template-areas:
      'blog-date blog-category'
      'blog-date blog-title'
      'blog-date blog-tags';
    grid-template-columns: ${sizingVar.ms10}em 1fr;
  }
`;
const BlogTitle = styled.h1`
  grid-area: blog-title;
`;
const BlogDate = styled.time`
  grid-area: blog-date;
  padding-left: 0.32ch;
  letter-spacing: 0.22ch;
  font-size: ${sizingVar.ms2}em;
  transform: rotate3d(0, 0, 1, 90deg) translateY(-100%);
  transform-origin: top left;
  height: fit-content;
`;
const BlogCategory = styled.a`
  grid-area: blog-category;
  font-size: ${sizingVar.ms6}em;
`;
const BlogNavContainer = styled.section`
  grid-area: blog-sidebar;
  position: sticky;
  top: 0;
`;
const BlogContent = styled.section`
  position: relative;
  grid-area: blog-content-area;
`;
/**
 ** EMOTION CLASSES
 */
const blogTagIcon = theme => css`
  grid-area: blog-tags;
  fill: ${theme.fontColor};
  height: ${sizingVar.ms2}em;
  width: ${sizingVar.ms2}em;
  align-self: center;
`;
const blogTags = css`
  grid-area: blog-tags;
  margin-left: ${sizingVar.ms7}em;
`;

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    console.log('data', data);
    console.log('pageContext', pageContext);
    console.log('props', this.props);
    const { slug } = pageContext;
    const { siteMetadata } = data.site;
    console.log('siteMetadata', siteMetadata);
    const postNode = data.markdownRemark;
    const postFrontmatter = postNode.frontmatter;
    const showTOC = () => {
      // headings is currently limited to maxDepth of 3 in site config
      const headingsCount = postNode.headings.reduce((acc, heading) => {
        if (heading.depth > siteMetadata.headingsMaxDepth) return acc;
        if (!acc[heading.depth]) acc[heading.depth] = 0;
        acc[heading.depth] += 1;
        return acc;
      }, {});
      console.log('headingsCount', headingsCount);
      const headingKeys = Object.keys(headingsCount);
      if (headingKeys.length) {
        // if any of the headings have more than 2 counts show TOC
        return headingKeys.some(headingKey => headingsCount[headingKey] > 1);
      }
      return false;
    };
    console.log('showtoc', showTOC());
    if (!postFrontmatter.id) {
      postFrontmatter.id = slug;
    }
    if (!postFrontmatter.category_id) {
      postFrontmatter.category_id = config.postDefaultCategoryID;
    }

    return (
      <>
        <Helmet
          title={`${postFrontmatter.title} ${siteMetadata.titleSeparator} ${siteMetadata.title}`}
        />
        <MainLayout className="u-px-5%">
          <BlogArticle>
            <BlogHero>
              <BlogFrontmatter className="u-measure-long">
                <BlogTitle>{postFrontmatter.title}</BlogTitle>
                <BlogDate dateTime={postNode.fields.date}>
                  {moment(postNode.fields.date).format(config.dateFormat)}
                </BlogDate>
                <BlogCategory
                  href={`/${pageContext.collection}/categories/${_.kebabCase(
                    postFrontmatter.category
                      ? postFrontmatter.category
                      : postFrontmatter.category_id
                  )}`}
                >
                  <span className="u-sr-only">Category:</span>
                  <span className="u-font-sans">
                    {postFrontmatter.category
                      ? postFrontmatter.category
                      : postFrontmatter.category_id}
                  </span>
                </BlogCategory>
                {postFrontmatter.tags ? (
                  <>
                    <TagIcon
                      css={theme =>
                        css`
                          ${blogTagIcon(theme)}
                        `
                      }
                    />
                    <Pills
                      css={blogTags}
                      data={postFrontmatter.tags}
                      link={postFrontmatter.tags.map(
                        tag =>
                          `/${pageContext.collection}/tags/${_.kebabCase(tag)}`
                      )}
                    />
                  </>
                ) : null}
              </BlogFrontmatter>
              <BlogBanner src={`./${postFrontmatter.cover}`} />
            </BlogHero>
            {showTOC() ? (
              <BlogNavContainer>
                <h2 className="lg:u-h6">On this Page</h2>
                <nav
                  className="u-measure-compact"
                  dangerouslySetInnerHTML={{ __html: postNode.tableOfContents }}
                />
              </BlogNavContainer>
            ) : null}
            <BlogContent
              className="u-measure-long"
              dangerouslySetInnerHTML={{ __html: postNode.html }}
            />
          </BlogArticle>
        </MainLayout>
      </>
    );
  }
}

/* eslint no-undef: "off" */
//  $slug = slug from page's context from createPage
export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $collection: String!
    $headingsMaxDepth: Int!
  ) {
    site {
      siteMetadata {
        title
        titleSeparator
        postDefaultCategory
        headingsMaxDepth
      }
    }
    markdownRemark(
      fields: { slug: { eq: $slug }, collection: { eq: $collection } } # filter by collection and slug
    ) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
        collection
      }
      tableOfContents(maxDepth: $headingsMaxDepth)
      headings {
        depth
      }
    }
  }
`;
