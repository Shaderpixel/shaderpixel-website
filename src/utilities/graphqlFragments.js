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
      gatsbyImageData(
        width: 560
        quality: 50
        layout: CONSTRAINED
        formats: [AUTO, WEBP, AVIF]
        placeholder: BLURRED
      )
    }
  }

  fragment blogCoverImage640 on File {
    childImageSharp {
      gatsbyImageData(
        width: 640
        layout: CONSTRAINED
        formats: [AUTO, WEBP, AVIF]
        placeholder: BLURRED
      )
    }
  }

  fragment blogCoverImage800 on File {
    childImageSharp {
      gatsbyImageData(
        width: 800
        quality: 75
        layout: CONSTRAINED
        formats: [AUTO, WEBP, AVIF]
        placeholder: BLURRED
      )
    }
  }
`;

export const aboutPortraitImage = graphql`
  fragment aboutPortraitImage560 on File {
    childImageSharp {
      gatsbyImageData(
        width: 560
        quality: 50
        layout: CONSTRAINED
        formats: [AUTO, WEBP, AVIF]
        placeholder: BLURRED
      )
    }
  }

  fragment aboutPortraitImage640 on File {
    childImageSharp {
      gatsbyImageData(
        width: 640
        layout: CONSTRAINED
        formats: [AUTO, WEBP, AVIF]
        placeholder: BLURRED
      )
    }
  }

  fragment aboutPortraitImage800 on File {
    childImageSharp {
      gatsbyImageData(
        quality: 95
        breakpoints: [400, 560, 600]
        layout: CONSTRAINED
        formats: [AUTO, WEBP, AVIF]
        placeholder: BLURRED
      )
    }
  }
`;
