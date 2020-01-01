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
const $regularFontBlack = '#d00000';
const $darkerFontBlack = '#282823';
const $blue = '#275D8B';
const $blueActive = mix(0.2, $blue, $darkGray);

const theme = {
  transitionTime: 250,
  fontColor: $regularFontBlack,
  accentFontColor: $darkerFontBlack,
  highlightColor: $primary,
  backgroundColor: $lightGray,
  borderColor: $cementGray,
  borderColorActive: $solidGray,
  linkColor: $blue,
  linkColorActive: $blueActive,
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
  },
};

export default theme;
