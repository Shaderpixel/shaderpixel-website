/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

// Styles
const ThemeToggle = styled.div`
  position: relative;

  .theme-switch__input,
  .theme-switch__label {
    position: absolute;
    z-index: 1;
  }

  .theme-switch__input {
    opacity: 0;

    &:hover,
    &:focus {
      + .theme-switch__label {
        background-color: ${({ theme }) => theme.colors.$lightGray};
      }

      + .theme-switch__label span::after {
        background-color: ${({ theme }) => theme.colors.$primary};
      }
    }
  }

  .theme-switch__label {
    padding: 20px;
    margin: 60px;
    transition: background-color 200ms ease-in-out;
    width: 120px;
    height: 50px;
    border-radius: 50px;
    text-align: center;
    background-color: ${({ theme }) => theme.borderColor};
    box-shadow: -4px 4px 15px inset rgba(0, 0, 0, 0.4);

    &::before,
    &::after {
      font-size: 2rem;
      position: absolute;
      transform: translate3d(0, -50%, 0);
      top: 50%;
    }

    &::before {
      content: "\\263C";
      right: 100%;
      margin-right: 10px;
      color: orange;
    }

    &::after {
      content: "\\263E";
      left: 100%;
      margin-left: 10px;
      color: ${({ theme }) => theme.colors.$darkGray};
    }

    span {
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
    }
  }

  // Checked label styles
  .theme-switch__input:checked ~ .theme-switch__label {
    background-color: lightSlateGray;

    &::before {
      color: lightSlateGray;
    }

    &::after {
      color: turquoise;
    }

    span::after {
      transform: translate3d(70px, 0, 0);
    }
  }
`;
// Component
const ThemeToggler = props => (
  // This is how the theme switcher option will be...
  // TODO switch this to a three way toggle using radio buttons
  <ThemeToggle>
    <input
      type="checkbox"
      id="themeToggle"
      name="theme-Toggle"
      className="theme-switch__input"
      onChange={props.themeContext.toggleDark}
    />
    <label htmlFor="themeToggle" className="theme-switch__label">
      <span>Toggle theme</span>
    </label>
  </ThemeToggle>
);
export default ThemeToggler;
