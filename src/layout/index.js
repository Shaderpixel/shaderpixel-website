import React from 'react';
import Helmet from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';

const SITE_METADATA_QUERY = graphql`
  query SITE_METADATA_QUERY {
    site {
      siteMetadata {
        description
      }
    }
  }
`;

class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    // const { siteDescription } = this.props.data.return(
    return (
      <StaticQuery query={SITE_METADATA_QUERY} {...this.props}>
        {({ site: { siteMetadata } }) => (
          <>
            <Helmet>
              <meta name="description" content={siteMetadata.description} />
            </Helmet>
            {children}
          </>
        )}
      </StaticQuery>
    );
  }
}

export default MainLayout;
