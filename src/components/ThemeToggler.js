/* eslint-disable prettier/prettier */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import {mix} from 'polished';
import {sizingVar} from '../styles/variables';

const themes = [
  { name: 'light', icon: '☼' },
  { name: 'dark', icon: '☾' },
  { name: 'seasonal', icon: '🎄' },
];

// Styles
const ThemeToggler = styled.div`
  position: relative;
  border: 2px solid
    ${({ theme }) =>
      mix(0.2, theme.colors.$lightGray, theme.colors.$cementGray)};
  border-radius: 2em;
  display: flex;
  flex-flow: row nowrap;
  overflow: hidden;

  .c-themeToggle {
    position: relative;
    flex: 1;

    & > input[type="radio"] {
      position: absolute;
      z-index: 2;
      appearance: none;
      background: none;
      height: 100%;
      width: 100%;
      cursor: pointer;
    }

    & > label {
      position: relative;
      display: flex;
      justify-content: center;
      padding: 0.25em 1em;
      background-color: ${({ theme }) => theme.colors.$lightGray};
    }

    &:not(:last-child) {
      & > label {
        border-right: 2px solid
          ${({ theme }) =>
            mix(0.2, theme.colors.$lightGray, theme.colors.$cementGray)};
      }
    }

    &__icon {
      font-size: ${sizingVar.lengthEm5};
    }

    &__icon-light {
      color: orange;
    }

    &__icon-dark {
      color: slategray;
    }

    /* TODO Hover and focus styles: drop some shadows */

    /* Checked label styles */
    & > input[type="radio"]:checked + label {
      background-color: ${({ theme }) =>
        mix(0.2, theme.colors.$lightGray, theme.colors.$cementGray)};

      .c-themeToggle__icon {
        filter: brightness(160%);
      }
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

const ThemeTogglerComponent = props => {
  const inputItems = themes.map(theme => (
    <div key={theme.name} className="c-themeToggle">
      <input
        name="theme"
        type="radio"
        disabled={
          (props.themeContext.dark && theme.name === 'dark') ||
          (props.themeContext.seasonal && theme.name === 'seasonal') ||
          (!props.themeContext.dark &&
            !props.themeContext.seasonal &&
            theme.name === 'light')
        }
        checked={
          (props.themeContext.dark && theme.name === 'dark') ||
          (props.themeContext.seasonal && theme.name === 'seasonal') ||
          (!props.themeContext.dark &&
            !props.themeContext.seasonal &&
            theme.name === 'light')
        }
        value={theme.name}
        id={`themeToggle-${theme.name}`}
        onChange={props.themeContext.toggleDark}
      />
      <label htmlFor={`themeToggle-${theme.name}`}>
        <span className="sr-only">Toggle {theme.name} theme</span>
        <span
          className={`c-themeToggle__icon-${theme.name} c-themeToggle__icon`}
        >
          {theme.icon}
        </span>
      </label>
    </div>
  ));
  return (
  <ThemeToggler>
    {inputItems}
  </ThemeToggler>)
};
export default ThemeTogglerComponent;
