import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MainLayout } from '../layout';
import { screensVar, sizingVar } from '../styles/variables';

const BigTitle = styled.h1`
  font-size: ${sizingVar.ms27}em;
  text-align: center;
  margin-top: ${sizingVar.ms13}rem;

  @media (min-width: ${screensVar.sm}) {
    font-size: ${sizingVar.ms30}em;
  }

  @media (min-width: ${screensVar.md}) {
    font-size: ${sizingVar.ms35}em;
    margin-top: ${sizingVar.ms16}rem;
  }

  @media (min-width: ${screensVar.lg}) {
    margin-top: ${sizingVar.ms18}rem;
  }
`;

// TODO when site grows bigger, possibly add a search functionality
// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/
const Index = props => {
  const { data, pageContext } = props;
  const { siteMetadata } = data.site;
  // Math.random is (inclusive of 0, but not 1) which works well with array index
  const randIndex = Math.floor(Math.random() * data.allSitePage?.totalCount);
  const randomEdge = data.allSitePage?.edges[randIndex];
  const randomLink = randomEdge?.node?.path;

  return (
    <>
      <Helmet
        title={`404 ${siteMetadata.titleSeparator} ${siteMetadata.title}`}
      >
        <meta name="description" content="oops" />
      </Helmet>
      <MainLayout>
        <BigTitle className="u-mb-0">404</BigTitle>
        <div
          className="md:u-measure-short md:u-mx-auto u-text-center"
          css={theme =>
            css`
              margin-top: -${sizingVar.ms0}em;
              margin-bottom: ${sizingVar.ms16}em;

              @media (min-width: ${screensVar.md}) {
                margin-top: -${sizingVar.ms12}em;
                margin-bottom: ${sizingVar.ms22}em;
              }
            `
          }
        >
          <span className="u-code">
            There's nothing here. Since you are already on this site, why not
            look around? Try a different link,{' '}
            <Link to={randomLink}>like this one</Link>.
          </span>
        </div>
      </MainLayout>
    </>
  );
};

// Page Query
export const pageQuery = graphql`
  query AllPageLinks {
    site {
      siteMetadata {
        title
        titleSeparator
        postDefaultCategory
        headingsMaxDepth
      }
    }
    allSitePage(
      filter: {
        path: {
          regex: "/^(?!/blog/list/).*$/"
          nin: ["/404/", "/404.html", "/dev-404-page/"]
        }
      }
    ) {
      totalCount
      edges {
        node {
          path
          context {
            tag
            slug
          }
        }
      }
    }
  }
`;

export default Index;
