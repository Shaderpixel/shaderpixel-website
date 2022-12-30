import React from 'react';
import Headroom from 'react-headroom';
import { css } from '@emotion/react';
import { Link } from 'gatsby';
import ThemeSwitcher from '../ThemeSwitcher';
import ThemeToggler from '../ThemeToggler';
import { useTheme } from '../../context/ThemeContext';
import headerStyles, { HeaderContent, HeaderNav } from './styles';
import Logo from '../../../static/logos/logo.compressed.inline.svg';
// TODO how to add ancestor link class
// https://www.gatsbyjs.org/docs/creating-dynamic-navigation/
// https://www.gatsbyjs.org/docs/gatsby-link/

const Header = ({ siteNav, ...restProps }) => {
  const themeContext = useTheme();
  const {
    isHeadroomPinned,
    setIsHeadroomPinned,
    isSeasonal,
    setHeaderElHeight,
    dark,
  } = themeContext;
  const headerRef = React.useRef();

  // all observers run once on page load
  // observe nav element height on window resize
  React.useEffect(() => {
    const headerEl = headerRef.current;

    const resizeObserver = new ResizeObserver(entries => {
      // from https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
      entries.forEach(entry => {
        if (entry.borderBoxSize) {
          // Firefox implements `borderBoxSize` as a single content rect, rather than an array
          const borderBoxSize = Array.isArray(entry.borderBoxSize)
            ? entry.borderBoxSize[0]
            : entry.borderBoxSize;
          setHeaderElHeight(borderBoxSize.blockSize);
        }
      });
    });

    if (headerEl) resizeObserver.observe(headerEl);

    return () => {
      if (headerEl) resizeObserver.unobserve(headerEl);
    };
  }, [setHeaderElHeight]);

  React.useEffect(() => {
    if (isHeadroomPinned) {
      // headroom wrapper height doesn't always update immediately from the scale animation applied to logo on scroll.
      // so instead of detecting and setting the
      requestAnimationFrame(() =>
        setHeaderElHeight(
          headerRef.current?.querySelector('.headroom')?.offsetHeight
        )
      );
    }
  }, [isHeadroomPinned, setHeaderElHeight]);

  return (
    <header
      css={theme =>
        css`
          ${headerStyles.header(theme)}
        `
      }
      ref={headerRef}
    >
      <Headroom
        disableInlineStyles
        upTolerance={40}
        calcHeightOnResize
        css={theme =>
          css`
            ${headerStyles.headroomStyles(theme)}
          `
        }
        onPin={() => {
          setIsHeadroomPinned(true);
        }}
        onUnfix={() => {
          setIsHeadroomPinned(false);
        }}
        onUnpin={() => {
          setIsHeadroomPinned(false);
        }}
      >
        <HeaderContent>
          <Link
            to="/"
            css={theme =>
              css`
                ${headerStyles.logoLinkStyles(theme)}
              `
            }
            className="logo-link-container"
            title="homepage"
          >
            <Logo
              className="logo u-mr-2--em xs:u-mr-3--em sm:u-mr-4--em md:u-mr-5--em"
              aria-hidden="true"
            />
          </Link>
          <HeaderNav>
            <ul>
              {siteNav.map(navItem => (
                <li
                  key={navItem.label}
                  className="u-mx-2--em xs:u-mx-3--em sm:u-mx-4--em md:u-mx-5--em"
                >
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
          {themeContext && !isSeasonal ? (
            <ThemeSwitcher
              data-testid="theme-switch"
              htmlFor="theme-switch"
              isDark={dark}
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
      </Headroom>
    </header>
  );
};

export default Header;
