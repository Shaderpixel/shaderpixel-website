import React from 'react';
import PropTypes from 'prop-types';

/**
 * modify viewport value https://www.gatsbyjs.org/docs/custom-html/
 * Anything you render in the html.js component will not be made “live” in the client like other components. If you want to dynamically update your <head> we recommend using React Helmet
 * Do this for title, meta description, og:title, og:description
 */
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta name="author" content="Richard Lock" />
        <meta itemProp="name" content="Shaderpixel Studios" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta id="theme-color" name="theme-color" content="#FFC107" />
        <meta property="og:url" content="http://www.iamrichardlock.com" />
        <meta property="og:type" content="website" />
        <meta name="application-name" content="I Am Richard Lock" />
        <meta name="msapplication-TileColor" content="#FFC107" />
        {/* <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicons/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="favicons/favicon-128.png"
          sizes="128x128"
        /> */}
        {/* <meta
          name="msapplication-TileImage"
          content="favicons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="favicons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="favicons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="favicons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="favicons/mstile-310x310.png"
        /> */}
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
