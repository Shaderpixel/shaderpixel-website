import { mix, transparentize } from 'polished';

const white = '#fff';
const solidGray = '#2d3c49';
const lightGray = '#eee';
const midGray = '#d8d8d8';
const darkGray = '#424242';
const regularFontBlack = '#4a4a4a';
const darkerFontBlack = '#282823';
const mutedThemePrimary1 = 'hsla(50, 24%, 25%, 1)'; // #4f4a30
const themePrimary1 = 'hsla(46, 83%, 60%, 1.0)'; // #EEC747
const themePrimary2 = 'hsla(45, 100%, 51%, 1.0)'; // #FFC107
const themeSecondary1 = 'hsla(168, 50%, 54%, 1.0)'; // #4FC4AD
const themeBlue1 = 'hsla(226, 83%, 61%, 1.0)'; // #476EEE
const themeBlue2 = 'hsla(226, 83%, 46%, 1.0)'; // #1441D7
const themeBlue3 = 'hsla(225, 100%, 51%, 1.0)'; // #0544FF
const themeBlue4 = 'hsla(225, 100%, 45%, 1.0)'; // #0039E6
const themeBlue5 = 'hsla(226, 83%, 75%, 1.0)'; // #8aa3f4
const themeBlue6 = 'hsla(226, 83%, 80%, 1.0)'; // #a2b5f6
const themeSlate = 'hsla(46, 25%, 71%, 1.00)'; // #C7BEA1
const themeLight1 = 'hsla(220, 27%, 98%, 1.0)'; // #F8F9FB
const themeRed = 'hsla(12, 68%, 50%, 1.0)'; // #D64D29
const themeDark1 = 'hsla(212, 37%, 16%, 1.0)'; // #1A2839
const themeDark2 = 'hsla(212, 31%, 11%, 1.0)'; // #141C25

// Mark for deprecation
const $blue = '#275D8B';
const $blueActive = mix(0.2, $blue, darkGray);
const $lightFontBlack = '#757574';
const $onNeutralFontBlack = '#a7a7a5';
const $secondary = '#0097A7 ';
const $cementGray = '#607D8B';
const theme = {
  mode: 'dark',
  transitionTime: 250,
  fontColor: themeLight1,
  headerColor: themeSlate,
  accentFontColor: themePrimary1,
  highlightBgColor: themeSlate,
  highlightFgColor: themeDark1,
  backgroundColor: themeDark2,
  headerBackgroundColor: themeDark2,
  footerBackgroundColor: themeDark1,
  headerLinkColor: themePrimary1,
  headerLinkColorActive: themePrimary1,
  footerLinkColor: themePrimary1,
  footerLinkColorActive: themeBlue6,
  borderColor: themeSlate,
  borderColorActive: themeBlue3,
  siteNavBorder: themePrimary1,
  borderRadius: '5px',
  tagBgColor: themeSlate,
  tagFgColor: themeDark1,
  linkColor: themePrimary1,
  linkColorActive: themeRed,
  blockquoteBackground1: transparentize(0.8, midGray),
  blockquouteBackground2: transparentize(0.4, themeDark1),
  blockquouteFill: lightGray,
  boxShadow:
    'hsla(0, 0%, 0%, 0.2) 0px 3px 3px -2px, hsla(0, 0%, 0%, 0.14) 0px 3px 4px 0px, hsla(0, 0%, 0%, 0.12) 0px 1px 8px 0px;',
  colors: {
    white,
    solidGray,
    lightGray,
    midGray,
    darkGray,
    regularFontBlack,
    darkerFontBlack,
    themePrimary1,
    mutedThemePrimary1,
    themeSecondary1,
    themeBlue1,
    themeBlue2,
    themePrimary2,
    themeBlue3,
    themeBlue4,
    themeBlue5,
    themeSlate,
    themeLight1,
    themeDark1,
    themeDark2,
    themeRed,
    prism: {
      token: `#fff`,
      // tslint:disable-next-line:object-literal-sort-keys
      languageJavascript: `#e8696b`,
      javascript: `#e8696b`,
      background: `#0F111B`,
      comment: `#5e6a76`,
      string: `#a8e2a8`,
      var: `#b3bac5`,
      number: `#e4854d`,
      constant: `#b3bac5`,
      plain: `#fff`,
      doctype: `#e8696b`,
      tag: `#e8696b`,
      keyword: `#d49fd4`,
      boolean: `#ff5874`,
      function: `#5F8DC3`,
      parameter: `#F9965D`,
      className: `#ffcf74`,
      attrName: `#bf87ba`,
      attrValue: `#a8e2a8`,
      interpolation: `#fff`,
      punctuation: `#5FA8AA`,
      'maybe-class-name': `#fff`,
      property: `#80cbc4`,
      propertyAccess: `#fff`,
      namespace: `#b2ccd6`,
      highlight: `rgba(255,255,255,0.07)`,
      highlightBorder: '#3c83da',
      dom: `#5F8DC3`,
      operator: `#5FA8AA`,
    },
  },
};

export default theme;
