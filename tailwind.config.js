// eslint-disable-next-line no-var
const {
  sizingVar,
  screensVar,
  measuresVar,
} = require('./src/styles/variables.node');
const {
  customTypographyUtilities,
  customSpacingUtilities,
} = require('./src/styles/tailwindCustom/tailwind.customUtilities');

module.exports = {
  prefix: 'u-',
  corePlugins: {
    fontStyle: false, // due to using variable fonts, this is provided via customUtilities
  },
  theme: {
    screens: {
      '2xs': screensVar['2xs'],
      xs: screensVar.xs,
      sm: screensVar.sm,
      md: screensVar.md,
      lg: screensVar.lg,
      xl: screensVar.xl,
      '2xl': screensVar['2xl'],
      '3xl': screensVar['3xl'],
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': `${sizingVar['ms-9']}rem`,
      '2': `${sizingVar['ms-7']}rem`,
      '3': `${sizingVar['ms-3']}rem`,
      '4': `${sizingVar.ms0}rem`,
      '5': `${sizingVar.ms2}rem`,
      '6': `${sizingVar.ms4}rem`,
      '8': `${sizingVar.ms7}rem`,
      '10': `${sizingVar.ms10}rem`,
      '12': `${sizingVar.ms11}rem`,
      '16': `${sizingVar.ms14}rem`,
      '20': `${sizingVar.ms16}rem`,
      '24': `${sizingVar.ms19}rem`,
      '32': `${sizingVar.ms22}rem`,
      '40': `${sizingVar.ms25}rem`,
      '48': `${sizingVar.ms26}rem`,
      '56': `${sizingVar.ms27}rem`,
      '64': `${sizingVar.ms28}rem`,
      '1--em': `${sizingVar['ms-9']}em`,
      '2--em': `${sizingVar['ms-7']}em`,
      '3--em': `${sizingVar['ms-3']}em`,
      '4--em': `${sizingVar.ms0}em`,
      '5--em': `${sizingVar.ms2}em`,
      '6--em': `${sizingVar.ms4}em`,
      '8--em': `${sizingVar.ms7}em`,
      '10--em': `${sizingVar.ms10}em`,
      '12--em': `${sizingVar.ms11}em`,
      '16--em': `${sizingVar.ms14}em`,
      '20--em': `${sizingVar.ms16}em`,
      '24--em': `${sizingVar.ms19}em`,
      '32--em': `${sizingVar.ms22}em`,
      '40--em': `${sizingVar.ms25}em`,
      '48--em': `${sizingVar.ms26}em`,
      '56--em': `${sizingVar.ms27}em`,
      '64--em': `${sizingVar.ms28}em`,
      '2.5%': `2.5%`,
      '5%': `5%`,
      '7%': `7%`,
      '10%': `10%`,
      '25%': `25%`,
      '50%': `50%`,
      '75%': `75%`,
    },
    lineHeight: {
      none: sizingVar.ms0,
      tight: sizingVar.ms1,
      snug: sizingVar.ms2,
      normal: sizingVar.ms3,
      relaxed: sizingVar.ms4,
      loose: sizingVar.ms5,
      '3': `${sizingVar['ms-3']}em`,
      '4': `${sizingVar.ms0}em`,
      '5': `${sizingVar.ms2}em`,
      '6': `${sizingVar.ms4}em`,
      '7': `${sizingVar.ms6}em`,
      '8': `${sizingVar.ms7}em`,
      '9': `${sizingVar.ms8}em`,
      '10': `${sizingVar.ms9}em`,
    },
    fontFamily: {
      sans: [
        '"Inter VF"',
        'Inter',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        '"Emberly VF"',
        'Emberly',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      mono: [
        '"Fira Code VF"',
        '"Fira Code"',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    fontSize: {
      xs: `${sizingVar['ms-4']}em`,
      sm: `${sizingVar['ms-2']}em`,
      base: `${sizingVar.ms0}em`,
      lg: `${sizingVar.ms1}em`,
      xl: `${sizingVar.ms2}em`,
      '2xl': `${sizingVar.ms4}em`,
      '3xl': `${sizingVar.ms6}em`,
      '4xl': `${sizingVar.ms8}em`,
      '5xl': `${sizingVar.ms10}em`,
      '6xl': `${sizingVar.ms12}em`,
    },
    extend: {
      maxWidth: {
        'xs--em': '20em',
        'sm--em': '24em',
        'md--em': '28em',
        'lg--em': '32em',
        'xl--em': '36em',
        '2xl--em': '42em',
        '3xl--em': '48em',
        '4xl--em': '56em',
        '5xl--em': '64em',
        '6xl--em': '72em',
        'measure-long': `${measuresVar.long}`,
        'measure-short': `${measuresVar.short}`,
        'measure-compact': `${measuresVar.compact}`,
      },
      screens: {
        print: { raw: 'print' },
        // => @media  print { ... }
      },
    },
  },
  variants: {
    customTypographyUtilities: ['responsive'],
    customSpacingUtilities: ['responsive'],
  },
  plugins: [customTypographyUtilities, customSpacingUtilities],
};

// max-width
// measure, possible to add responsive? this is classified under variants and most likely generated by default
