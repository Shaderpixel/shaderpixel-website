import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, StaticQuery } from 'gatsby';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SITE_METADATA_QUERY = graphql`
  query SITE_METADATA_QUERY {
    site {
      siteMetadata {
        description
        siteNav {
          label
          link
        }
        userLinks {
          label
          link
          iconComponent
        }
      }
    }
  }
`;

class MainLayout extends React.Component {
  render() {
    const { children, ...remainderProps } = this.props;
    // const { siteDescription } = this.props.data.return(
    return (
      <StaticQuery query={SITE_METADATA_QUERY}>
        {({ site: { siteMetadata } }) => (
          <>
            <Helmet>
              <html lang="en" />
              {/* <meta name="description" content={siteMetadata.description} /> */}
            </Helmet>
            <Header siteNav={siteMetadata.siteNav} />
            <main
              className="u-px-5% lg:u-px-10% lg:u-mb-10%"
              {...remainderProps}
            >
              {children}
            </main>
            <Footer userLinks={siteMetadata.userLinks} />
          </>
        )}
      </StaticQuery>
    );
  }
}

export { MainLayout };
