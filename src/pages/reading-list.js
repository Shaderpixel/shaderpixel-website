import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/react';
import { animated, useSpring } from 'react-spring';
import readingListStyles, {
  CategoryCardContainer,
  CategoryCardTitleContainer,
  CategoryCardDetailContainer,
} from '../styles/pages/readingList.styles';
import { MainLayout } from '../layout';
import { sizingVar } from '../styles/variables';
import TagIcon from '../../static/icons/tag.inline.svg';
import AnchorIcon from '../../static/icons/anchor.inline.svg';
import ExpandIcon from '../../static/icons/icon-expand.compressed.inline.svg';
import CollapseIcon from '../../static/icons/icon-collapse.compressed.inline.svg';
import { getViewportHeight } from '../utilities/helpers';

const PillLinkList = ({ linkDataMap }) => {
  const mapKeys = [...linkDataMap.keys()];
  return (
    <ul css={readingListStyles.listContainer}>
      {mapKeys.map(mapKey => {
        const { title, hash } = linkDataMap.get(mapKey);
        return (
          <li key={mapKey}>
            <PillLink linkText={title} linkHash={hash} />
          </li>
        );
      })}
    </ul>
  );
};

const PillLink = ({ linkHash, linkText }) => (
  <a
    href={`#${linkHash}`}
    css={theme => css`
      ${readingListStyles.pillLink(theme)}
    `}
  >
    <TagIcon className="pillLinkTagIcon" />
    {linkText}
  </a>
);

const ReadingListSectionContent = ({ linkDataMap, ...restProps }) => {
  const mapKeys = [...linkDataMap.keys()];
  const navParentContainerRef = React.useRef();

  const detailContainerRef = React.useRef(
    [...Array(linkDataMap.size)].map(item => React.useRef(null))
  );
  const [navRef, setNavRef] = React.useState(null); // useCallback ref because we need to detect initial height after render, using a regular ref would not retrigger initial height calculation
  // https://stackoverflow.com/questions/64279820/event-when-useref-element-have-height-more-than-zero
  // const [navListSticky, setNavListSticky] = React.useState(false);
  const [navCurrentVh, setNavCurrentVh] = React.useState('10');
  const [navScrollVh, setNavScrollVh] = React.useState();
  const [maxNavListHeightVh, setMaxNavListHeightVh] = React.useState(null);
  const [navListHeightLimit, setNavListHeightLimit] = React.useState(false);
  const [navListExpanded, setNavListExpanded] = React.useState(false);

  function handleNavListExpand() {
    setNavListExpanded(!navListExpanded);
  }

  // all observers run once on page load
  // observe nav element height on window resize
  React.useEffect(() => {
    // set initial values
    // we are working with height so we need to use scrollHeight to know the height of hidden elements
    if (navRef?.offsetHeight) {
      setNavCurrentVh(getViewportHeight(navRef.offsetHeight));
    }

    if (navRef?.scrollHeight) {
      setNavScrollVh(getViewportHeight(navRef.scrollHeight));
    }

    if (navRef?.scrollHeight > sizingVar.maxNavListHeight) {
      setNavListHeightLimit(true);
    } else {
      setNavListHeightLimit(false);
    }
    setMaxNavListHeightVh(getViewportHeight(sizingVar.maxNavListHeight));

    const resizeObserver = new ResizeObserver(entries => {
      // from https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
      entries.forEach(entry => {
        if (entry.borderBoxSize) {
          // Firefox implements `borderBoxSize` as a single content rect, rather than an array
          const borderBoxSize = Array.isArray(entry.borderBoxSize)
            ? entry.borderBoxSize[0]
            : entry.borderBoxSize;

          setNavCurrentVh(getViewportHeight(borderBoxSize.blockSize));
          setNavScrollVh(getViewportHeight(navRef.scrollHeight));
          setMaxNavListHeightVh(getViewportHeight(sizingVar.maxNavListHeight));

          if (navRef.scrollHeight > sizingVar.maxNavListHeight) {
            setNavListHeightLimit(true);
          } else {
            setNavListHeightLimit(false);
          }
        }
      });
    });

    if (navRef) resizeObserver.observe(navRef);

    return () => {
      if (navRef) resizeObserver.unobserve(navRef);
    };
  }, [navRef]);

  // all observers run once on page load
  // observe nav element becomes sticky
  // can't get this to work due to adjustment of sticky nav position when headroom is pinned changes navListSticky boolean
  // React.useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       console.log('entry', entry);
  //       console.log('isHeadroomPinned', isHeadroomPinned);
  //       console.log('headerElHeight', headerElHeight);
  //       const isNavSticky =
  //         (entry.intersectionRatio > 0 &&
  //           isHeadroomPinned &&
  //           entry.boundingClientRect.top <= headerElHeight) ||
  //         entry.intersectionRatio < 1
  //           ? true
  //           : false;
  //       console.log('isNavSticky', isNavSticky);
  //       setNavListSticky(isNavSticky);
  //       // return entry.intersectionRatio < 1
  //       //   ? setNavListSticky(true)
  //       //   : setNavListSticky(false);
  //     },
  //     { threshold: [1], rootMargin: '-10px 0px 0px 0px' }
  //   );
  //   // resource: https://stackoverflow.com/questions/16302483/event-to-detect-when-positionsticky-is-triggered
  //   // trick: CSS top or rootMargin top set to -1px for IO to check sticky
  //   const navObseravable = navParentContainerRef.current;
  //   if (navObseravable) observer.observe(navObseravable);

  //   return () => {
  //     if (navObseravable) observer.unobserve(navObseravable);
  //   };
  // });

  const springProps = useSpring({
    height: (() => {
      if (!navListHeightLimit) {
        return `${navCurrentVh}vh`;
      }
      if (!navListExpanded) {
        return `${maxNavListHeightVh}vh`;
      }
      if (navListExpanded && navScrollVh > sizingVar.maxNavListExpandedHeight) {
        return `${sizingVar.maxNavListExpandedHeight}vh`;
      }
      return `${navScrollVh}vh`;
    })(),
    overflow: navListExpanded ? 'auto' : 'hidden',
    config: {
      friction: 20,
    },
  });

  const { scale } = useSpring({
    from: { scale: 1 },
    to: [
      { immediate: true, scale: 1.15 },
      { immediate: false, scale: 1 },
    ],
    duration: 200,
  });

  return (
    <section {...restProps}>
      <div
        ref={navParentContainerRef}
        css={theme => css`
          ${readingListStyles.navParentContainerStyles(
            theme,
            navListExpanded,
            navScrollVh
          )}
        `}
        className={`${navListHeightLimit ? 'navHeightLimit' : ''}`}
      >
        <animated.nav
          css={theme => css`
            ${readingListStyles.navStyles(theme)}
          `}
          className="u-mb-13"
          style={springProps}
          ref={setNavRef}
        >
          <PillLinkList linkDataMap={linkDataMap} />
        </animated.nav>
        {navListHeightLimit && (
          <animated.button
            type="button"
            className="visibility-toggle"
            onClick={handleNavListExpand}
            aria-label={navListExpanded ? 'Hide Categories' : 'Show Categories'}
            style={{ transform: scale.interpolate(s => `scale(${s})`) }}
          >
            {navListExpanded ? <CollapseIcon /> : <ExpandIcon />}
          </animated.button>
        )}
      </div>
      {mapKeys.map((mapKey, index) => {
        const { title, hash, html } = linkDataMap.get(mapKey);
        return (
          <CategoryCardContainer key={mapKey}>
            <CategoryCardTitleContainer>
              <h2
                id={hash}
                css={theme => css`
                  ${readingListStyles.categoryAnchor(theme, navCurrentVh)}
                `}
              >
                <a
                  href={`#${hash}`}
                  aria-label={`${title} permalink`}
                  className="header-anchor"
                >
                  <AnchorIcon />
                </a>
                {title}
              </h2>
              <TagIcon className="categoryTagIcon" />
            </CategoryCardTitleContainer>
            <CategoryCardDetailContainer
              dangerouslySetInnerHTML={{ __html: html }}
              ref={detailContainerRef.current[index]}
            />
          </CategoryCardContainer>
        );
      })}
    </section>
  );
};

const ReadingList = ({ data, ...props }) => {
  const { title, titleSeparator } = data.site.siteMetadata;
  const dataNodes = data.allMarkdownRemark.edges.map(edge => edge.node);
  const linkDataMap = new Map();

  data.allMarkdownRemark.edges.forEach(edge => {
    const { title, hash } = edge.node.frontmatter;
    const { html } = edge.node;
    if (linkDataMap.has(hash))
      console.warn(
        `Repeated category entry detected for ${title}. Latest list of ${title} will be shown.`
      );
    linkDataMap.set(hash, { title, hash, html });
  });

  return (
    <>
      <Helmet title={`Curated Reading List ${titleSeparator} ${title}`} />
      <MainLayout>
        <article className="u-mt-13 md:u-mt-16 lg:u-mt-18">
          <section className="u-measure-long">
            <h1 className="">Reading List</h1>
            <p className="u-measure-short">
              Richard's curated archive of web pages and sites. This collection
              of links have been either beneficial or entertaining to Richard
              that he would like to collect them. Feel free to peruse or steal
              some of these links for your own collection.
            </p>
          </section>
          <ReadingListSectionContent
            linkDataMap={linkDataMap}
            className="u-mt-12"
          />
        </article>
      </MainLayout>
    </>
  );
};

// Page Query
export const query = graphql`
  query ReadingListPageQuery {
    site {
      siteMetadata {
        title
        titleSeparator
      }
    }
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "reading-list" } } }
      sort: { frontmatter: { title: ASC } }
    ) {
      edges {
        node {
          frontmatter {
            title
            hash
          }
          html
        }
      }
    }
  }
`;

export default ReadingList;
