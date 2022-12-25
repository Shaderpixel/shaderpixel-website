import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import Img from 'gatsby-image';
import aboutStyles, {
  AboutHeader,
  PropertyCardContainer,
  PropertyCardIconContainer,
  PropertyCardDetailContainer,
} from '../styles/pages/about.styles';
import { useTheme } from '../context/ThemeContext';
import { MainLayout } from '../layout';
import { sizingVar } from '../styles/variables';
import IconProfession from '../../static/icons/code.compressed.inline.svg';
import IconInterest from '../../static/icons/lab.compressed.inline.svg';
import IconPastTime from '../../static/icons/interest1.compressed.inline.svg';

const PropertyCard = ({ children }) => {
  console.log(children);
  return (
    <PropertyCardContainer>
      <PropertyCardIconContainer>{children[0]}</PropertyCardIconContainer>
      <PropertyCardDetailContainer>{children[1]}</PropertyCardDetailContainer>
    </PropertyCardContainer>
  );
};

const About = ({ data, ...props }) => {
  const themeContext = useTheme();
  console.log('data', data);
  const { title, titleSeparator } = data.site.siteMetadata;

  return (
    <>
      <Helmet title={`About Richard Lock ${titleSeparator} ${title}`} />
      <MainLayout>
        <article className="u-measure-long u-mx-auto u-mt-13 md:u-mt-16 lg:u-mt-18">
          <AboutHeader>
            <Img className="portrait" fluid={data.file.childImageSharp.fluid} />
            <h1 className="u-display-6 md:u-display-4 u-ml-5 u-mb-0">
              I am
              <br /> Richard Lock
            </h1>
          </AboutHeader>
          <p>
            Hi there. Thank you for checking out my little corner on the
            Internet. I created this site with the intent of documenting lessons
            that I have picked up at work and in life. I hope you find value or
            entertainment as you go through my site. If you enjoy what you have
            read, please feel free to send me an email and let me know. I look
            forward to personally reading a note from you.
          </p>
          <section className="u-mt-13">
            <PropertyCard>
              <IconProfession />
              <>
                <h2 className="u-font-sans ">Profession</h2>
                <p>
                  Richard is the Lead Developer at an award-winning digital
                  agency based in Toronto. He plays a pivotal role in redefining
                  the agency's modern digital offerings that will bring
                  meaningful and value-added results for the agency's clients.
                  Aside from honing his management, leadership, and development
                  skills, he also mentors his team and help them grow and be
                  successful in their career.
                </p>
              </>
            </PropertyCard>
            <PropertyCard>
              <IconInterest />
              <>
                <h2 className="u-font-sans">Interests</h2>
                <p>
                  Richard enjoys keeping up-to-date and experimenting with the
                  latest web technologies. He spends hours deep diving into the
                  fundamentals to build up a strong foundational understanding
                  in the topics that he comes across.
                </p>
                <p>His current interests include:</p>
                <ul className="u-list-disc u-list-outside u-pl-4">
                  <li>Front-end technologies</li>
                  <li>React-based frameworks and dependencies</li>
                  <li>JAMstack architecture</li>
                  <li>Composable Architecture and Microservices</li>
                  <li>Headless CMSes</li>
                  <li>Web performance optimization</li>
                  <li>UX/UI and Web accessibility</li>
                </ul>
              </>
            </PropertyCard>
            <PropertyCard>
              <IconPastTime
                css={theme =>
                  css`
                    ${aboutStyles.pasttimeIcon(theme)}
                  `
                }
              />
              <>
                <h2 className="u-font-sans ">Past Time</h2>
                <p>
                  Aside from his professional interests, Richard spends his
                  spare time with a good book or video game now and then. You
                  will also find him tending to his garden or doing laps at a
                  track field or a pool. He also appreciates a cool glass of
                  cider, listening to music, and cooking.
                </p>
              </>
            </PropertyCard>
          </section>
        </article>
      </MainLayout>
    </>
  );
};

// Page Query
export const query = graphql`
  query AboutPageQuery {
    site {
      siteMetadata {
        title
        titleSeparator
      }
    }
    file(
      relativePath: { eq: "about/portrait1.square.jpg" }
      sourceInstanceName: { eq: "images" }
    ) {
      ...aboutPortraitImage800
    }
  }
`;

export default About;
