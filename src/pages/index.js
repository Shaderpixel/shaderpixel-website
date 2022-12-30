import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { MainLayout } from '../layout';
import { sizingVar, screensVar } from '../styles/variables';

const homepageContainer = css`
  @media (min-width: 56em) {
    display: grid;
    grid-template-areas:
      'title title'
      'body-content latest-writings'
      'page-cards latest-writings';
    ${'' /* grid-template-columns: minmax(min-content, max-content) minmax(
        12em,
        max-content
      ); */}
    grid-template-columns: 1.85fr 1fr;
    grid-column-gap: ${sizingVar.ms0}em;
  }

  @media (min-width: ${screensVar.lg}) {
    grid-template-columns: 2fr 1fr;
    grid-column-gap: ${sizingVar.ms4}em;
  }

  @media (min-width: ${screensVar.xl}) {
    grid-template-columns: 2.5fr 1fr;
    grid-column-gap: ${sizingVar.ms8}em;
  }
`;

const pageTitle = css`
  grid-area: title;
`;

const latestWritings = theme => css`
  grid-area: latest-writings;
  position: relative;
  padding: ${sizingVar.ms3}em;
  border: 1px solid ${theme.borderColor};
  height: fit-content;
  margin-top: ${sizingVar.ms8}em;

  @media (min-width: 56em) {
    margin-top: 0;
  }

  &::before {
    content: '';
    position: absolute;
    height: 9.25%;
    width: 11%;
    background-color: ${theme.backgroundColor};
    top: -1px;
    right: -1px;
  }

  h2 {
    overflow: hidden;

    .header-highlight {
      position: relative;

      &::before {
        content: '';
        position: absolute;
        height: 4px;
        bottom: 0.19em;
        background-color: ${theme.borderColor};
        right: calc(-200% - 0.08em);
        width: 200%;
      }
    }
  }
`;

const introBlurb = css`
  grid-area: body-content;
`;

const linkCards = theme => css`
  grid-area: page-cards;

  @media (min-width: ${screensVar.sm}) {
    display: flex;
    gap: ${sizingVar.ms1}em;
  }

  @media (min-width: ${screensVar.lg}) {
    display: flex;
    gap: ${sizingVar.ms4}em;
  }

  @media (min-width: ${screensVar.xl}) {
    display: flex;
    gap: ${sizingVar.ms10}em;
  }

  section {
    border-top: 7px solid ${theme.borderColor};
    padding-top: ${sizingVar.ms1}em;
    margin-top: ${sizingVar.ms8}em;

    @media (min-width: ${screensVar.md}) {
      margin-top: ${sizingVar.ms4}em;
    }
  }
`;

const Index = props => {
  const graphqlResult = props.data;
  const { siteMetadata } = graphqlResult?.site ?? {};
  const { title, titleSeparator, titleAlt } = siteMetadata;
  const recentPosts = graphqlResult?.allMarkdownRemark.nodes;

  return (
    <>
      <Helmet title={`${titleAlt} ${titleSeparator} ${title}`} />
      <MainLayout>
        <article className="u-mt-13 md:u-mt-16 lg:u-mt-18">
          <section css={homepageContainer}>
            <h1 css={pageTitle} className="u-text-stroke">
              Welcome
            </h1>
            <div
              css={introBlurb}
              className="u-measure-long lg:u-measure-short xl:u-measure-long"
            >
              <p className="u-mb-5--em intro">
                You have landed on Richard Lock's personal website where he
                writes about things that are of interest to him (duh). His
                purpose for building this website is to collect <i>ah ha</i>{' '}
                moments in web development, share anecdotal life experiences,
                societal observations, and epiphanies from the throne.
              </p>
              <p>
                Richard often writes about topics related to his professional
                life - web development and management (his primary passion and
                full time job) where he showcases his prowess in both areas. He
                hopes to give back to the community and join the ranks of many
                knowledgeaeble individuals who have generously shared their
                thoughts on the internet.
              </p>
              <p>
                He also writes about his personal interests - home maintenance,
                gardening, good reads, good food, and video games (cue Rick
                Astley's song here, you know the one). You might also stumble
                upon topics that are more whimsical such as his views on life.
              </p>
            </div>
            <aside css={latestWritings}>
              <h2>
                Latest <br /> <span className="header-highlight">Writings</span>
              </h2>
              <ul className="u-list-disc u-pl-4">
                {recentPosts.map(recentPost => {
                  const { id, fields, frontmatter } = recentPost;
                  const { collection, slug } = fields;
                  const { title } = frontmatter;
                  return (
                    <li key={id}>
                      <Link to={`${collection}${slug}`}>{title}</Link>
                    </li>
                  );
                })}
              </ul>
            </aside>
            <div css={linkCards}>
              <section>
                <h2>Who Am I</h2>
                <p>
                  The place where Richard can freely humble brag about himself.
                  Just kidding. If you are a stranger, come learn more about the
                  owner of this website and feel free to connect after.
                </p>
                <Link to="/about">Learn more about Richard</Link>
              </section>
              <section>
                <h2>Reading List</h2>
                <p className="mb-em-3 leading-3">
                  The internet is a treasure trove of knowledge. This is where
                  Richard sifts through the pile and gathers a list of curated,
                  high quality readings. Feel free to plunder.
                </p>
                <Link to="/about">View Richard's curated readings</Link>
              </section>
            </div>
          </section>
        </article>
      </MainLayout>
    </>
  );
};

// Page Query
export const query = graphql`
  query HomepageQuery($recentHomepagePosts: Int = 5) {
    site {
      siteMetadata {
        title
        titleSeparator
        titleAlt
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog" } } }
      limit: $recentHomepagePosts
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        frontmatter {
          title
        }
        timeToRead
        fields {
          collection
          slug
          date
        }
        id
      }
    }
  }
`;

export default Index;
