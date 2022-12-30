import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
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
  const { currentPageNum, pageCount, pathPrefix } = pageContext;
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
          <h1>Writings</h1>
          <p className="u-measure-long">
            Here you will find thoughts that Richard has put "pen to paper".
            Some pieces might be really short such as to document <i>ah-ha</i>{' '}
            moments while others can be lengthier pieces to expound or reflect
            on articles and topics that he has come across with the goal to
            reinforce his understanding. He hopes that you will find them
            helpful or at least slightly amusing and/or entertaining.
          </p>
          <small className="u-measure-long u-font-mono u-small u-block">
            Disclaimer: This website is a personal project where Richard tries
            to collect thoughts and experiences in his professional and personal
            life and is in no way reflect opinions and thoughts of his employer
            or society as a whole.
          </small>
          <Pagination
            currentPageNum={currentPageNum}
            pageCount={pageCount}
            pathPrefix={pathPrefix}
            className="u-mt-12 u-mb-4 md:u-mb-2"
          />
          <ListingBody listDataMap={blogsByYearMonths} />
          <Pagination
            currentPageNum={currentPageNum}
            pageCount={pageCount}
            pathPrefix={pathPrefix}
            className="u-mt-2"
          />
        </article>
      </MainLayout>
    </>
  );
};

export default ListingTemplate;

// GQL variables come from page's context from createPage: Create listing page section
export const pageQuery = graphql`
  query BlogPostsByPagination($limit: Int!, $skip: Int!, $collection: String!) {
    site {
      siteMetadata {
        title
        titleSeparator
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: $collection } } }
      limit: $limit
      skip: $skip
      sort: { frontmatter: { date: DESC } }
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
