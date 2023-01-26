import { css } from '@emotion/react';
import { sizingVar, measuresVar } from './variables';

export default css`
  p,
  img,
  figure,
  ol,
  ul {
    & + h2,
    & + h3,
    & + h4,
    & + h5,
    & + h6 {
      padding-top: ${sizingVar['ms-18']}em;
    }
  }

  article {
    & > * + * {
      &:not(h1, h2, h3, h4, h5, h6) {
        margin-bottom: ${sizingVar.ms0}em;
      }
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }

  article,
  section {
    p,
    figure,
    & > ol,
    & > ul,
    & > img {
      margin-bottom: ${sizingVar['ms-1']}em;
    }

    li {
      margin-bottom: ${sizingVar['ms-7']}em;
    }

    & > p:last-child,
    & > img:last-child {
      margin-bottom: 0;
    }
  }

  figcaption {
    margin-top: ${sizingVar['ms-15']}em;
  }
`;
