import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import moment from 'moment';
import { MainLayout } from '../layout';
import config from '../../data/SiteConfig';
import { sizingVar, screensVar } from '../styles/variables';
import { ThemeContext } from '../context/ThemeContext';
import { Pagination } from '../components/Pagination';

const YearHeader = styled.h2`
  border-bottom-width: 3px;
  border-style: solid;
  border-image: ${({ theme }) =>
    `linear-gradient(to right, ${theme.colors.themeRed}, transparent) 1`};
`;

const ListingBody = ({ listDataMap }) => {
  const years = [...listDataMap.keys()];

  return (
    <>
      {years.map(year => {
        const monthMap = listDataMap.get(year);
        const months = [...monthMap.keys()];
        return (
          <div className="yearCSSPlaceholder" key={year}>
            <YearHeader>{year}</YearHeader>
            {months.map(month => (
              <div key={`${year}-${month}`} className="u-mb-8">
                <h3>{month}</h3>
                <ul>
                  {monthMap.get(month).map(entry => {
                    const { frontmatter } = entry.node;
                    return (
                      <li key={entry.node.id} className="u-mb-2">
                        <Link
                          to={`/${entry.node.fields.collection}${entry.node.fields.slug}`}
                        >{`${frontmatter.title} - ${moment(
                          frontmatter.date
                        ).format(config.dateFormat)}`}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
};

const ListingTemplate = ({ data, pageContext }) => {
  console.log('data', data);
  console.log('pageContext', pageContext);
  const {
    currentPageNum,
    pageCount,
    pathPrefix,
    categoryPathPrefix,
    category,
    kebabCategory,
  } = pageContext;
  const { edges } = data.allMarkdownRemark;
  const blogsByYearMonths = new Map();
  const { title, titleSeparator } = data.site.siteMetadata;

  // 1. Create map object using 'month year' as key to group posts underneath them as array of objects
  edges.forEach(edge => {
    const blogDate = moment(edge.node.frontmatter.date, config.dateFromFormat);
    const year = blogDate.format('YYYY');
    const month = blogDate.format('MMMM');

    // initializing blogsByYearMonths
    if (!blogsByYearMonths.get(year)) {
      blogsByYearMonths.set(year, new Map());
    }
    const blogsByYear = blogsByYearMonths.get(year);
    if (!blogsByYear.get(month)) {
      blogsByYear.set(month, []);
    }

    blogsByYear.get(month).push(edge);
  });

  // 2. For each map entry output it using a component
  // 3. Paginator section (if no pagination don't show)

  return (
    <>
      <Helmet title={`Richard Lock's Writings ${titleSeparator} ${title}`} />
      <MainLayout>
        <article className="u-mt-13 md:u-mt-16 lg:u-mt-18">
          <h1>
            <span
              css={theme =>
                css`
                  color: ${theme.accentFontColor};
                  text-transform: capitalize;
                `
              }
            >
              {category}
            </span>{' '}
            related writings
          </h1>

          <Pagination
            currentPageNum={currentPageNum}
            pageCount={pageCount}
            pathPrefix={`${categoryPathPrefix}/${kebabCategory}`}
            className="u-mt-12 u-mb-4 md:u-mb-2"
          />
          <ListingBody listDataMap={blogsByYearMonths} />
          <Pagination
            currentPageNum={currentPageNum}
            pageCount={pageCount}
            pathPrefix={`${categoryPathPrefix}/${kebabCategory}`}
            className="u-mt-2"
          />
        </article>
      </MainLayout>
    </>
  );
};

export default ListingTemplate;

/* eslint no-undef: "off" */
//  $slug = slug from page's context from createPage
export const pageQuery = graphql`
  query BlogPostsByCategoryPagination(
    $limit: Int!
    $skip: Int!
    $collection: String!
    $pageQueryCategoryFilter: String!
  ) {
    site {
      siteMetadata {
        title
        titleSeparator
      }
    }
    allMarkdownRemark(
      filter: {
        fields: {
          category: { eq: $pageQueryCategoryFilter }
          collection: { eq: $collection }
        }
      }
      limit: $limit
      skip: $skip
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
            collection
          }
          frontmatter {
            title
            date
          }
          id
        }
      }
    }
  }
`;
