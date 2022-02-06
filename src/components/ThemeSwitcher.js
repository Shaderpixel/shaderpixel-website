/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { sizingVar } from '../styles/variables';

// Styles
const ThemeSwitcher = styled.div`
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
    min-width: ${sizingVar.ms15}em;
    height: ${sizingVar.ms7}em;
    transition: background-color ${({ theme }) =>
      theme.transitionTime}ms ease-in-out;
    border: ${({ theme }) => `2px solid ${theme.colors.themePrimary1}`};
    border-radius: 2em;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.themeDark1};
    box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

    &::before,
    &::after {
      font-size: ${sizingVar.ms2}em;
      z-index: 2;
      cursor: pointer;
    }

    &::before {
      content: "\\263C";
      position: relative;
      left: calc(${sizingVar['ms-22']}rem + ${sizingVar.ms5}rem /2);;
      transform: translate3d(-50%,0,0);
      color: ${({ theme }) => theme.headerFooterColor};
    }

    &::after {
      content: "\\263E";
      position: absolute;
      transform: translate3d(50%, 0, 0) rotate3d(0, 0, 1, 35deg);
      right: calc(${sizingVar['ms-22']}rem + ${
  sizingVar.ms5
}rem /2); /* move back by dot starting point and half of dot width, rem to reset fontsize */
      color: ${({ theme }) => theme.colors.themePrimary1};
    }

    .theme-switch-toggle {
      position: absolute;
      left: ${sizingVar['ms-22']}em;
      width: ${sizingVar.ms5}em;
      height: ${sizingVar.ms5}em;
      content: "";
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.themePrimary1};
      transition: transform 200ms, background-color 200ms;
      box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
    }
  }

  // Checked label styles
  & > input[type="checkbox"]:checked + label {
    background-color: ${({ theme }) => theme.colors.themeDark2};

    &::before {
      color:  ${({ theme }) => theme.colors.themePrimary2};
    }

    &::after {
      color:  ${({ theme }) => theme.headerFooterColor};
    }

    .theme-switch-toggle {
      // prettier-ignore
      transform: translate3d(calc(4.209em - ${
        sizingVar['ms-22']
      }em - 2px - 100%  - 2px - ${
  sizingVar['ms-22']
}em),0,0); /* move dot the entire length of the toggle - the starting left position - left border width - move it back by the entire width of the dot - right border width - same amount starting from right */
    }
  }
`;
// Component
const ThemeSwitch = ({ className, ...restProps }) =>
  console.log('themeswitcherprops', className) || (
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
          Toggle {restProps.themeContext.dark ? 'light' : 'dark'} theme
        </span>
        <div className="theme-switch-toggle" aria-hidden="true" />
      </label>
    </ThemeSwitcher>
  );
export default ThemeSwitch;
