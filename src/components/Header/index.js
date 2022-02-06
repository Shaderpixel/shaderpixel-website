import React from 'react';
import Headroom from 'react-headroom';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import ThemeSwitcher from '../ThemeSwitcher';
import ThemeToggler from '../ThemeToggler';
import { useTheme } from '../../context/ThemeContext';
import headerStyles, { HeaderContent, HeaderNav } from './styles';
import Logo from '../../assets/icons/logo-compressed.inline.svg';
// TODO how to add ancestor link class
// https://www.gatsbyjs.org/docs/creating-dynamic-navigation/
// https://www.gatsbyjs.org/docs/gatsby-link/

const Header = ({ siteNav, ...restProps }) => {
  const themeContext = useTheme();
  console.log('siteNav', siteNav);
  return (
    <header
      css={theme =>
        css`
          ${headerStyles.header(theme)}
        `
      }
    >
      <Headroom
        disableInlineStyles
        css={theme =>
          css`
            ${headerStyles.headroomStyles(theme)}
          `
        }
      >
        <HeaderContent>
          <Logo className="logo" />
          {themeContext && !themeContext.isSeasonal ? (
            <ThemeSwitcher
              data-testid="theme-switch"
              htmlFor="theme-switch"
              isDark={themeContext.dark}
              themeContext={themeContext}
              css={theme =>
                css`
                  ${headerStyles.themeSwitcherStyles(theme)}
                `
              }
            />
          ) : (
            <ThemeToggler
              data-testid="theme-toggle"
              htmlFor="theme-toggle"
              isDark={themeContext.dark}
              isSeasonal={themeContext.isSeasonal}
              themeContext={themeContext}
              css={theme =>
                css`
                  ${headerStyles.themeSwitcherStyles(theme)}
                `
              }
            />
          )}
        </HeaderContent>
        <HeaderNav>
          <ul>
            {siteNav.map(navItem => (
              <li key={navItem.label}>
                <Link
                  to={navItem.link}
                  css={theme =>
                    css`
                      ${headerStyles.navLinkStyles(theme)}
                    `
                  }
                >
                  {navItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </HeaderNav>
      </Headroom>
    </header>
  );
};

export default Header;
