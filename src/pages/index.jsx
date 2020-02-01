import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css} from '@emotion/core';
import Layout from '../layout';
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

const Index = () => (
  <Layout>
    <Paragraph
      primary
      className="my-0 text-xl leading-tight italic flex justify-center items-center bg-gray-500"
    >
      Hello World
    </Paragraph>
    <Paragraph className="justify-center items-center bg-gray-500 flex">
      Testing a separate paragraph
    </Paragraph>
  </Layout>
);

export default Index;
