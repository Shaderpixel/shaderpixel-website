import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import moment from 'moment';
import _ from 'lodash';
import Img from 'gatsby-image';
import { Pills } from '../../components/Pills';
import { MainLayout } from '../../layout';
import config from '../../../data/SiteConfig';
import { sizingVar, screensVar } from '../../styles/variables';
import { ThemeContext } from '../../context/ThemeContext';
// SVG imported as component via gatsby-plugin-react-svg
import TagIcon from '../../assets/icons/tag.inline.svg';
import LeftChevron from '../../assets/icons/chevron_left.inline.svg';
import RightChevron from '../../assets/icons/chevron_right.inline.svg';
import ArrowIconLeft from '../../assets/icons/arrow_left.inline.svg';
import ArrowIconRight from '../../assets/icons/arrow_right.inline.svg';
import postStyles, {
  BlogArticle,
  BlogHero,
  BlogFrontmatter,
  BlogTitle,
  BlogDate,
  BlogDecorativeRibbon,
  BlogDecorativeRibbonTail,
  BlogCategory,
  BlogNavContainer,
  BlogNavContainerContent,
  BlogContent,
  PrevPostLink,
  NextPostLink,
} from './styles';
// TODO move styles out

export default class PostTemplate extends React.Component {
  static contextType = ThemeContext; // using ThemeContext for one off theme related matters. Could have also added a key in theme file to check which theme version

  tabletMq = () => {};

  state = {
    visibleTOC: this.showTOC(),
    tablet: false,
  };

  componentDidMount() {
    if (typeof window !== 'undefined') {
      // setup MediaqueryList for screen size checking
      this.tabletMq = window.matchMedia(
        `(min-width: ${screensVar.sm}) and (max-width: ${screensVar.lg}`
      );
      this.tabletMq.addListener(this.handleWidthChange);

      // check browser width once on page load
      this.handleWidthChange(this.tabletMq);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      this.tabletMq.removeListener(this.handleWidthChange);
    }
  }

  handleWidthChange = mq => {
    console.log('mq', mq);
    this.setState({ tablet: mq.matches });
  };

  showTOC() {
    const { data, pageContext } = this.props;
    const { siteMetadata } = data.site;
    const postNode = data.markdownRemark;

    // headings is currently limited to maxDepth of 3 in site config
    const headingsCount = postNode.headings.reduce((acc, heading) => {
      if (heading.depth > siteMetadata.headingsMaxDepth) return acc;
      if (!acc[heading.depth]) acc[heading.depth] = 0;
      acc[heading.depth] += 1;
      return acc;
    }, {});

    const headingKeys = Object.keys(headingsCount);
    if (headingKeys.length) {
      // if any of the headings have more than 2 counts show toc
      return headingKeys.some(headingKey => headingsCount[headingKey] > 1);
    }
    return false;
  }

  render() {
    const { data, pageContext } = this.props;
    const { visibleTOC, tablet } = this.state;
    console.log('data', data);
    console.log('pageContext', pageContext);
    console.log('props', this.props);
    console.log('ThemeContext', this.context);
    console.log('showtoc', visibleTOC);
    console.log('tablet', tablet);
    const { slug } = pageContext;
    const { siteMetadata } = data.site;
    console.log('siteMetadata', siteMetadata);
    const postNode = data.markdownRemark;
    const postFrontmatter = postNode.frontmatter;
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
        <MainLayout className="u-px-5% lg:u-pl-2.5% lg:u-pr-1.25% xl:u-px-5%">
          <BlogArticle>
            <BlogHero>
              <BlogFrontmatter className="u-measure-short">
                <BlogTitle>{postFrontmatter.title}</BlogTitle>
                <BlogDate
                  dateTime={postNode.fields.date}
                  isDark={this.context.dark}
                >
                  {moment(postNode.fields.date).format(config.dateFormat)}
                </BlogDate>
                <BlogDecorativeRibbon isDark={this.context.dark} />
                <BlogDecorativeRibbonTail>
                  <div>
                    <div>
                      <div>
                        <div>
                          <div>
                            <div />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </BlogDecorativeRibbonTail>
                <BlogCategory
                  href={`/${pageContext.collection}/categories/${_.kebabCase(
                    postFrontmatter.category
                      ? postFrontmatter.category
                      : postFrontmatter.category_id
                  )}`}
                >
                  <span className="u-sr-only">Category:</span>
                  <span className="u-font-mono">
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
                          ${postStyles.blogTagIcon(theme)}
                        `
                      }
                    />
                    <Pills
                      css={postStyles.blogTags}
                      data={postFrontmatter.tags}
                      link={postFrontmatter.tags.map(
                        tag =>
                          `/${pageContext.collection}/tags/${_.kebabCase(tag)}`
                      )}
                    />
                  </>
                ) : null}
              </BlogFrontmatter>
              <figure className="u-measure-long">
                <Img
                  fluid={postFrontmatter.cover.childImageSharp.fluid}
                  alt={postFrontmatter.coverAlt}
                />
                {postFrontmatter.coverCredit ? (
                  <figcaption>{postFrontmatter.coverCredit}</figcaption>
                ) : null}
              </figure>
            </BlogHero>
            {visibleTOC ? (
              <BlogNavContainer>
                <BlogNavContainerContent>
                  <h2 className="lg:u-h6 lg:u-pt-4">On this Page</h2>
                  <nav
                    css={theme =>
                      css`
                        ${postStyles.blogTOC(theme)}
                      `
                    }
                    className="u-measure-compact u-no-link-style"
                    dangerouslySetInnerHTML={{
                      __html: postNode.tableOfContents,
                    }}
                  />
                </BlogNavContainerContent>
              </BlogNavContainer>
            ) : null}
            <BlogContent
              className="u-measure-long lg:u-mb-0"
              dangerouslySetInnerHTML={{ __html: postNode.html }}
            />
            <PrevPostLink
              href={pageContext.prevSlug}
              toc={visibleTOC}
              css={postStyles.blogPrevNext}
            >
              <LeftChevron
                css={theme =>
                  css`
                    ${postStyles.blogChevronIcon(theme)}
                  `
                }
              />
              Previous Read
              <br /> {pageContext.prevTitle}
              <div
                css={theme =>
                  css`
                    ${postStyles.hoverText(theme)}
                    ${postStyles.hoverTextPrev}
                  `
                }
                className="blog-hoverText"
              >
                <ArrowIconLeft
                  css={theme =>
                    css`
                      ${postStyles.blogArrowIcon(theme)}
                      ${postStyles.blogArrowIconLeft}
                    `
                  }
                />
                Let's go
              </div>
            </PrevPostLink>
            <NextPostLink
              href={pageContext.nextSlug}
              toc={visibleTOC}
              css={postStyles.blogPrevNext}
            >
              {!tablet ? (
                <RightChevron
                  css={theme =>
                    css`
                      ${postStyles.blogChevronIcon(theme)}
                    `
                  }
                />
              ) : null}
              Next Read
              {tablet ? (
                <RightChevron
                  css={theme =>
                    css`
                      ${postStyles.blogChevronIcon(theme)}
                    `
                  }
                />
              ) : null}
              <br /> {pageContext.nextTitle}
              <div
                css={theme =>
                  css`
                    ${postStyles.hoverText(theme)}
                    ${postStyles.hoverTextNext}
                  `
                }
                className="blog-hoverText"
              >
                Read On!
                <ArrowIconRight
                  css={theme =>
                    css`
                      ${postStyles.blogArrowIcon(theme)}
                      ${postStyles.blogArrowIconRight}
                    `
                  }
                />
              </div>
            </NextPostLink>
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
        cover {
          ...blogCoverImage800
        }
        coverAlt
        coverCredit
        date
        category
        tags
      }
      fields {
        slug
        date
        collection
      }
      tableOfContents(absolute: false, maxDepth: $headingsMaxDepth)
      headings {
        depth
      }
    }
  }
`;
