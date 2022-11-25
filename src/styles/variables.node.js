const ms = require('modularscale-js');

const msOption = {
  base: [1, 1.125, 1.25],
  ratio: 1.333,
};

const sizingVar = {
  // Font Size
  minFontSize: ms(2, msOption).toFixed(3), // 1.125em
  maxFontSize: ms(4, msOption).toFixed(3), // 1.333em

  // Linear Interpolation
  minLerpWidth: ms(36, msOption).toFixed(3), // 31.475em ~ 503.68px
  maxLerpWidth: ms(54, msOption).toFixed(3), // 176.581em ~ 2825.28px

  // Spacing
  'ms-22': ms(-22, msOption).toFixed(3), // .125
  'ms-20': ms(-20, msOption).toFixed(3), // .150
  'ms-18': ms(-18, msOption).toFixed(3), // .178
  'ms-17': ms(-17, msOption).toFixed(3), // .201
  'ms-15': ms(-15, msOption).toFixed(3), // .238
  'ms-14': ms(-14, msOption).toFixed(3), // .267
  'ms-11': ms(-11, msOption).toFixed(3), // .356
  'ms-10': ms(-10, msOption).toFixed(3), // .396
  'ms-9': ms(-9, msOption).toFixed(3),
  'ms-8': ms(-8, msOption).toFixed(3),
  'ms-7': ms(-7, msOption).toFixed(3), // .563
  'ms-6': ms(-6, msOption).toFixed(3), // .563
  'ms-5': ms(-5, msOption).toFixed(3), // .633
  'ms-4': ms(-4, msOption).toFixed(3), // .703
  'ms-3': ms(-3, msOption).toFixed(3), // .75
  'ms-2': ms(-2, msOption).toFixed(3), // .844
  'ms-1': ms(-1, msOption).toFixed(3), // 0.938
  ms0: ms(0, msOption).toFixed(3), // 1
  ms1: ms(1, msOption).toFixed(3), // 1.125
  ms2: ms(2, msOption).toFixed(3), // 1.25
  ms3: ms(3, msOption).toFixed(3), // 1.333
  ms4: ms(4, msOption).toFixed(3), // 1.5
  ms5: ms(5, msOption).toFixed(3), // 1.666
  ms6: ms(6, msOption).toFixed(3), // 1.777
  ms7: ms(7, msOption).toFixed(3), // 1.999
  ms8: ms(8, msOption).toFixed(3), // 2.221
  ms9: ms(9, msOption).toFixed(3), // 2.369 H6
  ms10: ms(10, msOption).toFixed(3), // 2.665 H5
  ms11: ms(11, msOption).toFixed(3), // 2.961 H4
  ms12: ms(12, msOption).toFixed(3), // 3.157 H3
  ms13: ms(13, msOption).toFixed(3), // 3.552 H2
  ms14: ms(14, msOption).toFixed(3), // 3.947 H1
  ms15: ms(15, msOption).toFixed(3), // 4.209 D6
  ms16: ms(16, msOption).toFixed(3), // 4.735
  ms17: ms(17, msOption).toFixed(3), // 5.261 D5
  ms18: ms(18, msOption).toFixed(3), // 5.610
  ms19: ms(19, msOption).toFixed(3), // 6.312 D4
  ms20: ms(20, msOption).toFixed(3), // 7.013
  ms21: ms(21, msOption).toFixed(3), // 7.478
  ms22: ms(22, msOption).toFixed(3), // 8.413 D3
  ms23: ms(23, msOption).toFixed(3), // 9.348
  ms24: ms(24, msOption).toFixed(3), // 9.969
  ms25: ms(25, msOption).toFixed(3), // 11.215 D2
  ms26: ms(26, msOption).toFixed(3), // 12.461 D1
  ms27: ms(27, msOption).toFixed(3), // 13.288
  ms28: ms(28, msOption).toFixed(3), // 14.949
  ms30: ms(30, msOption).toFixed(3), // 17.713
  ms35: ms(35, msOption).toFixed(3), // 29.515
  ms40: ms(40, msOption).toFixed(3), // 47.2

  // Viewport-width-based Spacing
  lengthVw1: `${ms(4, msOption)}vw`, // 3.16em
  lengthVw2: `${ms(16, msOption)}vw`, // 5.62em

  // Max height (px) of category nav container before toggle kicks in
  maxNavListHeight: 150,
  // Max height (vh) of category nav container when expanded
  maxNavListExpandedHeight: 55,
};

const screensVar = {
  '2xs': '30em',
  xs: `${sizingVar.minLerpWidth}em`,
  sm: '40em',
  md: '48em',
  lg: '64em',
  xl: '80em',
  '2xl': '120em',
  '3xl': `${sizingVar.maxLerpWidth}em`,
};

const measuresVar = {
  long: '75ch',
  short: '60ch',
  compact: '40ch',
};

const reusableCssProperties = {
  bleed: {
    position: 'relative',
    left: '50%',
    right: '50%',
    'margin-left': '-50vw',
    'margin-right': '-50vw',
    width: '100vw',
  },
};

exports.sizingVar = sizingVar;
exports.screensVar = screensVar;
exports.measuresVar = measuresVar;
exports.reusableCssProperties = reusableCssProperties;
