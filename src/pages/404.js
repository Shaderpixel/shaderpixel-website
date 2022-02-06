import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { MainLayout } from '../layout';
import { screensVar, sizingVar } from '../styles/variables';

// const Paragraph = styled.p`
//   color: ${props => (props.primary ? `hotpink` : `turquoise`)};
//   /* tw`flex justify-center items-center bg-gray-500 text-md-fluid`; */
// `;

// const Paragraph = tw.p`
//   flex justify-center items-center bg-gray-500
//   color: ${props => (props.primary ? "hotpink" : "turquoise")}
// `;

// const Paragraph = tw.p`
//   flex justify-center items-center bg-gray-500
//   props => ({
//     color: props.primary ? 'hotpink' : 'turquoise'
//   })
// `;

const Paragraph = styled.p`
  color: ${props =>
    props.primary ? props.theme.fontColor : props.theme.backgroundColor};
`;

const BigTitle = styled.h1`
  font-size: ${sizingVar.ms27}em;
  text-align: center;

  @media (min-width: ${screensVar.sm}) {
    font-size: ${sizingVar.ms30}em;
  }

  @media (min-width: ${screensVar.md}) {
    font-size: ${sizingVar.ms35}em;
  }
`;

// TODO when site grows bigger, possibly add a search functionality
// https://www.gatsbyjs.com/docs/how-to/adding-common-features/adding-search/
const Index = props => {
  const { data, pageContext } = props;
  console.log('props', props);
  console.log('data', data);
  console.log('pageContext', pageContext);
  const { siteMetadata } = data.site;
  console.log('siteMetadata', siteMetadata);
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
