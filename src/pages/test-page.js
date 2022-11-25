import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { MainLayout } from '../layout';
import { sizingVar } from '../styles/variables';

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

const Index = props => (
  <>
    <Helmet title={props.data.site.siteMetadata.title} />
    <MainLayout>
      <div className="md:u-measure-short">
        <h1>Test H1 Header</h1>
        <p className="mb-em-3 leading-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
          molestiae eum similique reprehenderit saepe ducimus nulla nostrum.
          Quae eligendi cum accusantium magni sapiente, deleniti earum, quas,
          sint magnam reprehenderit reiciendis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nulla
          modi officia, officiis excepturi fugit nesciunt nostrum,
          reprehenderit, cumque pariatur quis laborum quaerat. Eveniet officiis
          ipsa corporis, aliquid sit omnis.Voluptate sed maxime ea repudiandae
          reprehenderit maiores assumenda ullam labore asperiores dolorem
          quibusdam ut itaque inventore voluptatem accusantium doloremque
          veritatis repellendus debitis, magni cum architecto aliquam odit?
          Eveniet, dignissimos nesciunt!
        </p>
        <h2>Test H2 Header</h2>
        <p>
          <span className="bold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            dignissimos, corrupti et veritatis aliquam suscipit aliquid
            doloremque dicta reiciendis inventore, culpa minima vero nihil,
            repellat unde! Quos, fuga? Voluptatibus, labore.
          </span>
        </p>
        <p>
          <em>
            Amet excepturi modi odio repudiandae. Expedita magni possimus
            repellat? Numquam aperiam excepturi molestias commodi delectus
            repellat! Aliquid consequuntur voluptatum nisi. Aperiam, rem
            veritatis laborum a delectus dolor dignissimos error eius.
          </em>
        </p>
        .
        <p>
          <span>
            Temporibus dignissimos facere nulla corporis cum beatae, sint minus
            illo, accusamus vel libero molestiae velit voluptas. Soluta,
            repudiandae? Commodi harum tempora blanditiis quos dolore, aliquam
            sed qui laboriosam ipsa earum.
          </span>
        </p>
        <span className="u-display-1 d-block">Test Page</span>
        <pre>TEST CODE => @ &amp; r --></pre>
        <Paragraph
          primary
          className="my-0 text-xl leading-tight u-italic flex justify-center items-center bg-gray-500"
        >
          Hello World
        </Paragraph>
        <Paragraph className="justify-center items-center bg-gray-500 flex">
          Testing a separate paragraph
        </Paragraph>
      </div>
    </MainLayout>
  </>
);

// Page Query
export const homepageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Index;
