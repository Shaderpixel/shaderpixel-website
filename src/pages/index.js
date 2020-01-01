import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import tw from 'tailwind.macro';
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
  ${tw`flex justify-center items-center bg-gray-500`}
  color: ${props =>
    props.primary ? props.theme.fontColor : props.theme.backgroundColor};
`;

console.log(Paragraph);

const test = tw`my-0 text-xl leading-tight italic`;

const Index = () => (
    <Layout>
      <Paragraph primary css={test}>
        Hello World
      </Paragraph>
      <Paragraph css={tw`italic`}>Testing a separate paragraph</Paragraph>
    </Layout>
  );

export default Index;
