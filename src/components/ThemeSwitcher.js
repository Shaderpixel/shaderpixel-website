/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/styled';
import { sizingVar, screensVar } from '../styles/variables';
import IconSun from '../../static/icons/icon-sun.inline.svg';
import IconMoon from '../../static/icons/icon-moon.compressed.inline.svg';

// Styles
const ThemeSwitcher = styled.div`
  grid-area: themeToggler;
  position: relative;
  display: inline-flex;

  & > input[type="checkbox"] {
    position: absolute;
    z-index: 2;
    width: 100%;
    height: ${sizingVar.ms7}em;
    background: none;
    opacity: 0;
    cursor: pointer;
  }

  /* .theme-switch__input {
    &:hover,
    &:focus {
      + .theme-switch__label {
        background-color: ${({ theme }) => theme.colors.$lightGray};
      }

      + .theme-switch__label span::after {
        background-color: ${({ theme }) => theme.colors.$primary};
      }
    }
  } */

  & > label {
    position: relative;
    display: flex;
    align-items: center;
    /* padding: 0.25em 5px; 5px is the same as the left of the toggle circle */
    width: 100%;
    min-width: ${sizingVar.ms13}em;
    height: ${sizingVar.ms5}em;
    transition: background-color ${({ theme }) =>
      theme.transitionTime}ms ease-in-out;
    border: ${({ theme }) => `2px solid ${theme.colors.themePrimary1}`};
    border-radius: 2em;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.themeDark1};
    box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

    @media (min-width: ${screensVar.md}) {
      min-width: ${sizingVar.ms15}em;
      height: ${sizingVar.ms7}em;
    }

    &::before,
    &::after {
      font-size: ${sizingVar['ms-2']}em;
      z-index: 2;
      cursor: pointer;

      @media (min-width: ${screensVar.md}) {
        font-size: ${sizingVar.ms2}em;
      }
    }

    .light-theme-icon {
      position: relative;
      z-index: 1;
      stroke: ${({ theme }) => theme.footerBackgroundColor};
      fill: ${({ theme }) => theme.footerBackgroundColor};
      stroke-width: 15px;
      width: ${sizingVar.ms7}em;
      height: ${sizingVar.ms7}em;
      left: calc(${sizingVar['ms-22']}rem + ${sizingVar.ms2}rem /2);
      transform: translate3d(-51%,0,0);

      @media (min-width: ${screensVar.md}) {
        left: calc(${sizingVar['ms-22']}rem + ${sizingVar.ms5}rem /2);
      }
    }

    .dark-theme-icon {
      position: absolute;
      z-index: 1;
      width: ${sizingVar.ms6}em;
      height: ${sizingVar.ms6}em;
      fill: ${({ theme }) => theme.colors.themePrimary1};
      transform: translate3d(50%, 0, 0) rotate3d(0, 0, 1, -2deg);
      right: calc(${sizingVar['ms-22']}rem + ${
  sizingVar.ms2
}rem /2); /* move back by dot starting point and half of dot width, rem to reset fontsize */

      @media (min-width: ${screensVar.md}) {
        right: calc(${sizingVar['ms-22']}rem + ${
  sizingVar.ms5
}rem /2); /* move back by dot starting point and half of dot width, rem to reset fontsize */
      }
    }


    .theme-switch-toggle {
      position: absolute;
      left: ${sizingVar['ms-22']}em;
      width: ${sizingVar.ms2}em;
      height: ${sizingVar.ms2}em;
      content: "";
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.themePrimary1};
      transition: transform 200ms, background-color 200ms;
      box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);

      @media (min-width: ${screensVar.md}) {
        width: ${sizingVar.ms5}em;
        height: ${sizingVar.ms5}em;
      }
    }
  }

  // Checked label styles
  & > input[type="checkbox"]:checked + label {
    background-color: ${({ theme }) => theme.colors.themeDark2};

    .light-theme-icon {
      stroke:  ${({ theme }) => theme.colors.themePrimary2};
      fill:  ${({ theme }) => theme.colors.themePrimary2};
    }

    .dark-theme-icon {
      fill:  ${({ theme }) => theme.footerBackgroundColor};
    }

    .theme-switch-toggle {
      // prettier-ignore
      transform: translate3d(calc(${sizingVar.ms13}em - ${
  sizingVar['ms-22']
}em - 2px - 100%  - 2px - ${
  sizingVar['ms-22']
}em),0,0); /* move dot the entire length of the toggle - the starting left position - left border width - move it back by the entire width of the dot - right border width - same amount starting from right */

    @media (min-width: ${screensVar.md}) {
        transform: translate3d(calc(${sizingVar.ms15}em - ${
  sizingVar['ms-22']
}em - 2px - 100%  - 2px - ${
  sizingVar['ms-22']
}em),0,0); /* move dot the entire length of the toggle - the starting left position - left border width - move it back by the entire width of the dot - right border width - same amount starting from right */
      }
    }
  }
`;
// Component
const ThemeSwitch = ({ className, ...restProps }) => (
  <ThemeSwitcher css={className}>
    <input
      type="checkbox"
      id="ThemeSwitcher"
      name="theme-Toggle"
      className="theme-switch__input"
      checked={restProps.themeContext.dark}
      onChange={restProps.themeContext.toggleDark}
    />
    <label htmlFor="ThemeSwitcher" className="theme-switch__label">
      <span className="u-sr-only">
        {`Toggle ${restProps.themeContext.dark ? 'light' : 'dark'} theme`}
      </span>
      <IconSun className="light-theme-icon" />
      <div className="theme-switch-toggle" aria-hidden="true" />
      <IconMoon className="dark-theme-icon" />
    </label>
  </ThemeSwitcher>
);
export default ThemeSwitch;
