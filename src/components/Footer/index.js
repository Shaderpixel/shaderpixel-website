import React from 'react';
import Headroom from 'react-headroom';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/core';
import { Link } from 'gatsby';
import { useTheme } from '../../context/ThemeContext';
import IconGithub from '../../assets/icons/icon-github.compressed.inline.svg';
import IconEmail from '../../assets/icons/icon-mail.compressed.inline.svg';
import IconGitlab from '../../assets/icons/icon-gitlab.compressed.inline.svg';
import IconLinkedin from '../../assets/icons/icon-linkedin.compressed.inline.svg';
import IconCodepen from '../../assets/icons/icon-codepen.compressed.inline.svg';
import IconTwitter from '../../assets/icons/icon-twitter.compressed.inline.svg';
import footerStyles, {
  FooterContainer,
  FooterInnerContainer,
  FooterContent,
  FooterLinksGrid,
  FooterBrandingR,
  FooterBrandingL,
} from './styles';

const icons = {
  githubIcon: <IconGithub aria-hidden="true" />,
  gitlabIcon: <IconGitlab aria-hidden="true" />,
  emailIcon: <IconEmail aria-hidden="true" />,
  twitterIcon: <IconTwitter aria-hidden="true" />,
  linkedinIcon: <IconLinkedin aria-hidden="true" />,
  codepenIcon: <IconCodepen aria-hidden="true" />,
};

const Footer = ({ userLinks, ...restProps }) => {
  const themeContext = useTheme();
  console.log('themeContext', themeContext);
  return (
    <footer
      css={theme =>
        css`
          ${footerStyles.footer(theme)}
        `
      }
    >
      <FooterContainer>
        <FooterBrandingR css={footerStyles.footerBranding}>R</FooterBrandingR>
        <FooterBrandingL css={footerStyles.footerBranding}>L</FooterBrandingL>
        <FooterInnerContainer>
          <FooterContent>
            <FooterLinksGrid>
              {userLinks.map(link => (
                <li key={link.label} className={link.iconComponent}>
                  <a
                    href={link.link}
                    // css={theme =>
                    //   css`
                    //     ${footerStyles.linkStyles(theme)}
                    //   `
                    // }
                  >
                    {icons[link.iconComponent]}
                    <span className="u-sr-only">{link.label}</span>
                  </a>
                </li>
              ))}
            </FooterLinksGrid>
          </FooterContent>
        </FooterInnerContainer>
      </FooterContainer>
    </footer>
  );
};

export default Footer;
