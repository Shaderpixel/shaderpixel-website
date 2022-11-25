import { graphql } from 'gatsby';

// No point to import theme color since traceSVG is created at compile time,
// also, String interpolation is not allowed in graphql tag
// https://www.gatsbyjs.org/docs/using-graphql-fragments/
// https://www.gatsbyjs.org/docs/working-with-images/#using-fragments-to-standardize-formatting
// https://www.gatsbyjs.org/docs/gatsby-image/#image-query-fragments
// https://www.gatsbyjs.org/docs/gatsby-image/#gatsby-image-props
export const blogCoverImage = graphql`
  fragment blogCoverImage560 on File {
    childImageSharp {
      fluid(maxWidth: 560, traceSVG: { color: "#C7BEA1" }, quality: 50) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment blogCoverImage640 on File {
    childImageSharp {
      fluid(maxWidth: 640, traceSVG: { color: "#C7BEA1" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment blogCoverImage800 on File {
    childImageSharp {
      fluid(maxWidth: 800, traceSVG: { color: "#C7BEA1" }, quality: 75) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;

export const aboutPortraitImage = graphql`
  fragment aboutPortraitImage560 on File {
    childImageSharp {
      fluid(maxWidth: 560, traceSVG: { color: "#C7BEA1" }, quality: 50) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment aboutPortraitImage640 on File {
    childImageSharp {
      fluid(maxWidth: 640, traceSVG: { color: "#C7BEA1" }) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  fragment aboutPortraitImage800 on File {
    childImageSharp {
      fluid(
        maxWidth: 800
        traceSVG: { color: "#C7BEA1" }
        quality: 95
        srcSetBreakpoints: [400, 560, 768, 920, 1200]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
`;
