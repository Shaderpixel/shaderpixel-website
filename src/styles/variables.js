import ms from 'modularscale-js';

const msOption = {
  base: [1, 1.5],
  ratio: 1.333,
};

const sizingVar = {
  // Font Size
  minFontSize: ms(0, msOption), // 1em
  maxFontSize: ms(2, msOption), // 1.333em

  // Linear Interpolation
  minLerpWidth: ms(24, msOption), // 31.475em ~ 503.68px
  maxLerpWidth: ms(36, msOption), // 176.581em ~ 2825.28px
  // Spacing
  ms0: ms(0, msOption),
  ms1: ms(1, msOption),
  ms2: ms(2, msOption),
  ms3: ms(3, msOption),
  ms4: ms(4, msOption),
  ms5: ms(5, msOption),
  lengthEm1: `${ms(-6, msOption)}em`, // .43em
  lengthEm2: `${ms(-4, msOption)}em`, // .56em
  lengthEm3: `${ms(-2, msOption)}em`, // .75em
  lengthEm4: `${ms(0, msOption)}em`, // 1em
  lengthEm5: `${ms(2, msOption)}em`, // 1.33em
  lengthEm6: `${ms(4, msOption)}em`, // 1.77em
  lengthEm7: `${ms(6, msOption)}em`, // 2.37em
  lengthEm8: `${ms(8, msOption)}em`, // 3.16em
  lengthEm9: `${ms(10, msOption)}em`, // 4.21em
  lengthEm10: `${ms(12, msOption)}em`, // 5.62em

  // Viewport-width-based Spacing
  lengthVw1: `${ms(4, msOption)}vw`, // 3.16em
  lengthVw2: `${ms(16, msOption)}vw`, // 5.62em
};

export { sizingVar };
