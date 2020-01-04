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
    height: 100%;
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
    padding: 0.25em 5px; /* 5px is the same as the left of the toggle circle */
    width: 100%;
    min-width: 5em;
    height: 100%;
    transition: background-color ${({ theme }) =>
      theme.transitionTime}ms ease-in-out;
    border-radius: 2em;
    text-align: center;
    background-color: ${({ theme }) => theme.borderColor};
    box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

    &::before,
    &::after {
      font-size: ${sizingVar.lengthEm5};
      z-index: 2;
      width: 1em;
    }

    &::before {
      content: "\\263C";
      position: relative;
      left: calc(35px / 2);
      transform: translate3d(-50%,0,0);
      color: orange;
    }

    &::after {
      content: "\\263E";
      position: absolute;
      transform: translate3d(-50%, -50%, 0);
      top: 50%;
      right: 0;
      color: ${({ theme }) => theme.colors.$darkGray};
    }

    /* span {
      position: absolute;
      bottom: calc(100% + 10px);
      left: 0;
      width: 100%;
    }

    span::after {
      position: absolute;
      top: calc(100% + 15px);
      left: 5px;
      width: 40px;
      height: 40px;
      content: "";
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.$blue};
      transition: transform 200ms, background-color 200ms;
      box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
    } */
    .theme-switch-toggle {
      position: absolute;
      left: 5px;
      width: 35px;
      height: 35px;
      content: "";
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.$blue};
      transition: transform 200ms, background-color 200ms;
      box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
    }
  }

  // Checked label styles
  & > input[type="checkbox"]:checked + label {
    background-color: lightSlateGray;

    &::before {
      filter: lighten(140%);
    }

    &::after {
      color: turquoise;
    }

    .theme-switch-toggle {
      transform: translate3d(calc(100% + 50% - 5px), 0, 0); /* move toggle all the way to the end, move by half of toggle's width, and less 5px from padding since toggle is absolutely positioned */
    }
  }




  /* TODO remove this class once Tailwind is properly brought in */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }
`;
// Component
const ThemeSwitch = props => console.log(props) ||(
  <ThemeSwitcher>
    <input
      type="checkbox"
      id="ThemeSwitcher"
      name="theme-Toggle"
      className="theme-switch__input"
      checked={props.themeContext.dark}
      onChange={props.themeContext.toggleDark}
    />
    <label htmlFor="ThemeSwitcher" className="theme-switch__label">
      <span className="sr-only">Toggle {props.themeContext.dark? 'light' : 'dark'} theme</span>
      <div className="theme-switch-toggle" aria-hidden="true" />
    </label>
  </ThemeSwitcher>
);
export default ThemeSwitch;
