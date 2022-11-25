import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, Link } from 'gatsby';
import { css } from '@emotion/core';
import moment from 'moment';
import config from '../../../data/SiteConfig';
import { sizingVar, screensVar } from '../../styles/variables';
import { ThemeContext, useTheme } from '../../context/ThemeContext';
import paginationStyles, { PaginationWrapper } from './styles';
// SVG imported as component via gatsby-plugin-react-svg

import LeftChevron from '../../../static/icons/chevron_left.min.inline.svg';
import RightChevron from '../../../static/icons/chevron_right.min.inline.svg';
import DblLeftChevron from '../../../static/icons/navFirst.min.inline.svg';
import DblRightChevron from '../../../static/icons/navLast.min.inline.svg';

export const Pagination = ({
  currentPageNum,
  pageCount,
  pathPrefix,
  className,
  style,
}) => {
  const { screenWidth } = useTheme();

  const { desktopMaxPaginationPages, mobileMaxPaginationPages } = config;

  const maxPaginationPages =
    screenWidth === 'mobile'
      ? mobileMaxPaginationPages
      : desktopMaxPaginationPages;

  // if pageCount <= maxPaginationPages then seed with pageCount else
  let paginationSeed = [];

  if (pageCount > maxPaginationPages) {
    // take maxPaginationPages and divide by half
    // take current page and minus half result. if < 0  means current page is close to start if negative, take negative result and add it to the later half
    // same thing with nearing the end
    let initialHalf;
    let laterHalf;
    let firstHalf = Math.floor(maxPaginationPages / 2);
    let secondHalf = Math.ceil(maxPaginationPages / 2);
    console.log('firstHalf', firstHalf);
    console.log('secondHalf', secondHalf);

    if (currentPageNum + secondHalf >= pageCount) {
      firstHalf += Math.abs(pageCount - currentPageNum - secondHalf);
    }

    if (currentPageNum - firstHalf <= 0) {
      secondHalf += Math.abs(currentPageNum - firstHalf) + 1;
    }

    if (firstHalf > 0) {
      initialHalf = [...Array(firstHalf)]
        .map((v, i) => currentPageNum - i - 1)
        .reverse();
    }
    if (secondHalf > 0) {
      laterHalf = [...Array(secondHalf)].map((v, i) => currentPageNum + i + 1);
    }
    console.log('initialHalf', initialHalf);
    console.log('laterHalf', laterHalf);

    paginationSeed = [...initialHalf, currentPageNum, ...laterHalf].filter(
      value => !Number.isNaN(value) && value > 0 && value <= pageCount
    );
  } else {
    paginationSeed = [...Array(pageCount)].map((v, i) => i + 1);
  }
  console.log('paginationSeed', paginationSeed);

  // check if the pageNumber is going to be the first page
  function firstLinkChecker(pageNumber) {
    return pageNumber === 1 ? `${pathPrefix}/` : `${pathPrefix}/${pageNumber}`;
  }

  // Fixed pagination controls
  const first =
    pageCount > maxPaginationPages && currentPageNum > 5 ? (
      <li>
        <Link to={`${pathPrefix}/`} title="First pagination item">
          <DblLeftChevron
            css={theme =>
              css`
                ${paginationStyles.chevronIcon(theme)}
              `
            }
          />
          <span className="u-sr-only">Jump to first pagination item</span>
        </Link>
      </li>
    ) : null;
  const last =
    pageCount > maxPaginationPages &&
    (currentPageNum !== pageCount || currentPageNum + 1 !== pageCount) ? (
      <li>
        <Link to={`${pathPrefix}/${pageCount}`} title="Last pagination item">
          <DblRightChevron
            css={theme =>
              css`
                ${paginationStyles.chevronIcon(theme)}
              `
            }
          />
          <span className="u-sr-only">Jump to last pagination item</span>
        </Link>
      </li>
    ) : null;
  const prev =
    pageCount > 2 && currentPageNum !== 1 ? (
      <li>
        <Link
          to={firstLinkChecker(currentPageNum - 1)}
          title="Jump to previous pagination item"
        >
          <LeftChevron
            css={theme =>
              css`
                ${paginationStyles.chevronIcon(theme)}
              `
            }
          />
          <span className="u-sr-only">Jump to previous pagination item</span>
        </Link>
      </li>
    ) : null;
  console.log('currentPageNum', currentPageNum);
  const next =
    pageCount > 2 && currentPageNum !== pageCount ? (
      <li>
        <Link
          to={`${pathPrefix}/${currentPageNum + 1}`}
          title="Jump to next pagination item"
        >
          <RightChevron
            css={theme =>
              css`
                ${paginationStyles.chevronIcon(theme)}
              `
            }
          />
          <span className="u-sr-only">Jump to next pagination item</span>
        </Link>
      </li>
    ) : null;

  return (
    <PaginationWrapper className={className} style={style}>
      <ul>
        {first}
        {prev}
        {paginationSeed.map((page, index) => (
          <li key={`${pathPrefix}-${index}`}>
            {currentPageNum === page ? (
              currentPageNum
            ) : (
              <Link to={firstLinkChecker(page)}>{page}</Link>
            )}
          </li>
        ))}
        {next}
        {last}
      </ul>
    </PaginationWrapper>
  );
};
