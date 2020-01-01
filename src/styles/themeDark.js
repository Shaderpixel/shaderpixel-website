import { mix } from 'polished';

const $white = '#fff';
const $primary = '#FFC107';
const $secondary = '#0097A7 ';
const $solidGray = '#2d3c49';
const $cementGray = '#607D8B';
const $lightGray = '#eee';
const $darkGray = '#424242';
const $lightFontBlack = '#757574';
const $onNeutralFontBlack = '#a7a7a5';
const $regularFontBlack = '#5b5b5a';
const $darkerFontBlack = '#282823';
const $blue = '#275D8B';
const $blueActive = mix(0.2, $blue, $darkGray);

const theme = {
  transitionTime: 250,
  fontColor: $white,
  accentFontColor: $darkerFontBlack,
  highlightColor: $primary,
  backgroundColor: $lightGray,
  borderColor: $cementGray,
  borderColorActive: $solidGray,
  linkColor: $blue,
  linkColorActive: $blueActive,
  boxShadow: '0 0px 12px -6px rgba(0,0,0,0.94)',
  colors: {
    $white,
    $primary,
    $secondary,
    $solidGray,
    $cementGray,
    $lightGray,
    $darkGray,
    $lightFontBlack,
    $onNeutralFontBlack,
    $regularFontBlack,
    $darkerFontBlack,
    $blue,
    $blueActive,
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
