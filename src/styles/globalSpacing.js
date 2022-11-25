import { css } from '@emotion/core';
import { sizingVar, measuresVar } from './variables';

export default css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: ${sizingVar['ms-18']}em;
    letter-spacing: 0.02em;
  }

  p,
  img {
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
      margin-bottom: ${sizingVar.ms0}em;
    }

    & > *:last-child {
      margin-bottom: 0;
    }
  }

  article,
  section {
    p,
    figure,
    & > img {
      margin-bottom: ${sizingVar['ms-1']}em;
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
