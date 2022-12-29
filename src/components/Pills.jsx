import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { sizingVar, screensVar } from '../styles/variables';

export const Pills = ({
  data: items,
  link: links,
  ariaLabel,
  ...restProps
}) => {
  const PillsContainer = styled.ul`
    display: inline-flex;
  `;
  const Pill = styled.li`
    margin-right: ${sizingVar.ms0}em;
    &:last-child {
      margin-right: 0;
    }
    /* if pills have no links then <li> gets pill style otherwise <a> gets it */
    ${!links
      ? css`
          padding: ${sizingVar['ms-15']}em ${sizingVar.ms0}em;
          border: 2px solid;
          border-radius: ${sizingVar.ms0}em;
        `
      : css`
          a {
            display: block;
            padding: ${sizingVar['ms-15']}em ${sizingVar.ms0}em;
            border: 2px solid;
            border-radius: ${sizingVar.ms0}em;
          }
        `}
  `;

  return (
    <PillsContainer aria-label={ariaLabel} {...restProps}>
      {items && !links
        ? items.map(item => <Pill key={item}>{item}</Pill>)
        : items && links
        ? items.map((item, i) => (
            <Pill key={item}>
              <a href={links[i]} className="u-no-link-style">
                {item}
              </a>
            </Pill>
          ))
        : null}
    </PillsContainer>
  );
};
