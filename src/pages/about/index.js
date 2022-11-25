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
} from './styles';
import { useTheme } from '../../context/ThemeContext';
import { MainLayout } from '../../layout';
import { sizingVar } from '../../styles/variables';
import IconProfession from '../../../static/icons/code.compressed.inline.svg';
import IconInterest from '../../../static/icons/lab.compressed.inline.svg';
import IconPastTime from '../../../static/icons/interest1.compressed.inline.svg';

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
            Richard once aspired to be an author/writer - a 7 year old's
            ambition after too much reading. He also considered archaeology
            after watching Jurassic Park and reading donated copies of National
            Geography magazines from his neighbor while growing up. Despite his
            parent's best intentions to guide him down the path of established
            careers, Richard gravitated towards a career in technology. His
            first taste of technology was when his family acquired a white and
            large boxy x486 computer that ingests toast-sized floppy disks.{' '}
          </p>
          <p>
            Unlike nerd cliches you heard over and over again, Richard is not a
            hacker or and never touch programming until he was in university. He
            grew up playing video games and MUDs. His knack in problem solving
            comes at the expense of his parent's and sibling's despair and
            anguish when he tries to open things up to figure how things work
            and never quite successfully putting them back together again. There
            was a lot of force involved. He also fully admits to deleting the
            system files and accidentally performing a partial reformat of the
            family computer.
          </p>
          <p>
            He also has a strength in planning, strategizing, and executing.
            During his schooling years, Richard always find creating report on
            subjects to be absolute blast. The logical categorization of topics
            and requirements that leads to the eventual conclusion of the
            requested ask was soothing and methodical for him. Sometimes he
            overdelivers on the researched topic and often wonders if his
            teacher actually read through the entire binder report on cell
            division when grading it. His research paper writing during his
            graduate study days also helped him develop a more structured
            approach to problem solving and planning and execution. Today, he
            applies the improved version of his skills as the lead developer of
            his team where he continues to hone his management skills.
          </p>
          <p>
            Richard carries a bachelor's degree in Actuarial Science and a
            master's degree in Management Information Systems. His strong
            business and IT background and lends him a unique insight into both
            worlds. He empathizes with both aspects and sees the need for a
            balanced equilibrium between the two in a digitally-driven business
            era.{' '}
          </p>
          <p>
            In his spare time, Richard indulges in continuous learning by
            keeping up on latest trends in the web development world. He also
            satiates his need for fantasy in a good book and video game now and
            then. You might also find him tending to his garden or doing laps at
            a track field or a pool.
          </p>
          <h2>Personal note from Richard</h2>
          <p className="u-font-mono">
            Hi there, I am Richard. Thank you for reading this far. Writing in
            third person is always a challenge for me but I hope you learnt a
            little something about myself. I hope you find value or
            entertainment as you go through my site. If you enjoy what you read
            and would like to connect, please feel free to send me an email. I
            will be building a contact form sometime in the near future, but
            right now, the best way to get hold of me is via email. I look
            forward to personally reading a note from you.{' '}
          </p>
          <p className="u-font-mono">
            Thank you once more for indulging in my writing.😄
          </p>
          <p className="u-font-mono">
            Warmest regards,
            <br /> Richard.
          </p>
          <section className="u-mt-13">
            <PropertyCard>
              <IconProfession />
              <>
                <h2 className="u-font-sans ">Profession</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit deserunt, quos illo nemo aut maiores illum optio
                  facere eligendi enim blanditiis, tenetur doloremque pariatur
                  cumque fuga ratione
                </p>
              </>
            </PropertyCard>
            <PropertyCard>
              <IconInterest />
              <>
                <h2 className="u-font-sans">Interests</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit deserunt, quos illo nemo aut maiores illum optio
                  facere eligendi enim blanditiis, tenetur doloremque pariatur
                  cumque fuga <span className="u-font-serif">lim</span> ratione
                </p>
                <ul className="u-list-disc u-list-outside u-pl-4">
                  <li>Something</li>
                  <li>Apple</li>
                  <li>Orange</li>
                  <li>Development</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus adipisci quae explicabo{' '}
                  </li>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Impedit deserunt, quos illo nemo aut maiores illum optio
                  facere eligendi enim blanditiis, tenetur doloremque pariatur
                  cumque fuga ratione
                </p>
                <ul className="u-list-disc u-list-inside">
                  <li>Something</li>
                  <li>Apple</li>
                  <li>Orange</li>
                  <li>Development</li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Natus adipisci quae explicabo{' '}
                  </li>
                </ul>
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
