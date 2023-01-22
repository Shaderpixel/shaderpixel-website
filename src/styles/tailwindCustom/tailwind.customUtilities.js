const plugin = require('tailwindcss/plugin');
const {
  sizingVar,
  screensVar,
  measuresVar,
  reusableCssProperties,
} = require('../variables.node');

// Note: if there is a prefix specified in tailwind.config.js, utilities created in this file will require that prefix to use. e.g. u-h1
// Any styles that relies on theme toggling changes shouldn't be here
// Current problem with commons.css suddenly take precedence on save in while Gatsby develop. If there's styles that has two parts e.g. @supports, don't add any part of the styles here cause the styles wrapped in @supports suddenly loses precedence.

const customTypographyUtilities = plugin(function({ addUtilities, variants }) {
  const typographyUtilities = {
    '.h1': {
      'font-size': `${sizingVar.ms14}em`,
    },
    '.h2': {
      'font-size': `${sizingVar.ms13}em`,
    },
    '.h3': {
      'font-size': `${sizingVar.ms12}em`,
    },
    '.h4': {
      'font-size': `${sizingVar.ms11}em`,
    },
    '.h5': {
      'font-size': `${sizingVar.ms10}em`,
    },
    '.h6': {
      'font-size': `${sizingVar.ms9}em`,
    },
    '.display-1': {
      'font-size': `${sizingVar.ms26}em`,
    },
    '.display-2': {
      'font-size': `${sizingVar.ms24}em`,
    },
    '.display-3': {
      'font-size': `${sizingVar.ms22}em`,
    },
    '.display-4': {
      'font-size': `${sizingVar.ms19}em`,
    },
    '.display-5': {
      'font-size': `${sizingVar.ms17}em`,
    },
    '.display-6': {
      'font-size': `${sizingVar.ms15}em`,
    },
    '.h1, .h2, .h3,.h4,.h5,.h6,.u-display-1, .u-display-2, .u-display-3, .u-display-4, .u-display-5, .u-display-6': {
      'font-family':
        "IEmberly, Georgia, Cambria, 'Times New Roman', Times, serif",
      '@supports (font-variation-settings: normal)': {
        'font-family':
          "'Emberly VF', Georgia, Cambria, 'Times New Roman', Times, serif",
        'font-variation-settings':
          "'wght' var(--text-header-wght), 'wdth' var(--text-header-wdth)",
      },
    },
    '.italic': {
      'font-style': 'italic',
      // https://stackoverflow.com/questions/64933925/how-to-create-a-tailwind-responsive-class-using-a-plugin
      '@supports (font-variation-settings: normal)': {
        'font-style': 'normal',
        '--text-slnt': '-10',
        'font-variation-settings':
          "'wght' var(--text-wght), 'slnt' var(--text-slnt)",
      },
    },
    '.semi-italic': {
      'font-style': 'italic',
      // https://stackoverflow.com/questions/64933925/how-to-create-a-tailwind-responsive-class-using-a-plugin
      '@supports (font-variation-settings: normal)': {
        'font-style': 'normal',
        '--text-slnt': '-5',
        'font-variation-settings':
          "'wght' var(--text-wght), 'slnt' var(--text-slnt)",
      },
    },
    '.not-italic': {
      'font-style': 'normal',
      '--text-slnt': '0',
      'font-variation-settings':
        "'wght' var(--text-wght), 'slnt' var(--text-slnt)",
    },
    '.text-stroke': {
      '-webkit-text-stroke-width': '1px',
      color: 'transparent',
    },
  };
  addUtilities(typographyUtilities, variants('customTypographyUtilities')); // get variants from main config file
});

const customTypographyBase = plugin(function({ addBase, variants }) {
  const typographyElements = {
    body: {
      'font-family':
        "Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',  'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
      '@supports (font-variation-settings: normal)': {
        'font-family':
          "'InterVF', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif",
        'font-variation-settings':
          "'wght' var(--text-wght), 'slnt' var(--text-slnt)",
      },
    },
    h1: {
      'font-size': `${sizingVar.ms14}em`,
    },
    h2: {
      'font-size': `${sizingVar.ms13}em`,
    },
    h3: {
      'font-size': `${sizingVar.ms12}em`,
    },
    h4: {
      'font-size': `${sizingVar.ms11}em`,
    },
    h5: {
      'font-size': `${sizingVar.ms10}em`,
    },
    em: {
      'font-style': 'italic',
      '@supports (font-variation-settings: normal)': {
        'font-style': 'normal',
        '--text-slnt': '-10',
        'font-variation-settings':
          "'wght' var(--text-wght), 'slnt' var(--text-slnt)",
      },
    },
    'b, strong': {
      '@supports (font-variation-settings: normal)': {
        '--text-wght': '700',
        'font-variation-settings':
          "'wght' var(--text-wght), 'slnt' var(--text-slnt)",
      },
    },
    small: {
      'font-size': `${sizingVar['ms-3']}em`,
    },
    figcaption: {
      'font-size': `${sizingVar['ms-2']}em`,
    },
    'h1, h2, h3, h4, h5, h6': {
      'font-family':
        "IEmberly, Georgia, Cambria, 'Times New Roman', Times, serif",
      '@supports (font-variation-settings: normal)': {
        'font-family':
          "'Emberly VF', Georgia, Cambria, 'Times New Roman', Times, serif",
        'font-variation-settings':
          "'wght' var(--text-header-wght), 'wdth' var(--text-header-wdth)",
      },
      'line-height': `${sizingVar.ms0}`,
      'letter-spacing': '0.02em',
      'margin-bottom': `${sizingVar['ms-18']}em`,
    },
  };
  addBase(typographyElements, variants('typographyElements')); // get variants from main config file
});

const customSpacingUtilities = plugin(function({ addUtilities, variants }) {
  const spacingUtilities = {
    '.measure-long': {
      'max-width': `${measuresVar.long}`,
    },
    '.measure-short': {
      'max-width': `${measuresVar.short}`,
    },
    '.measure-compact': {
      'max-width': `${measuresVar.compact}`,
    },
    '.bleed': {
      ...reusableCssProperties.bleed,
    },
  };
  addUtilities(spacingUtilities, variants('customSpacingUtilities')); // get variants from main config file
});

const customMiscUtilities = plugin(function({ addUtilities, variants }) {
  const customStyleUtilities = {
    '.no-link-style a': {
      'text-decoration': `none !important`,
    },
  };
  addUtilities(customStyleUtilities, variants('customStyleUtilities')); // get variants from main config file
});

exports.customTypographyBase = customTypographyBase;
exports.customTypographyUtilities = customTypographyUtilities;
exports.customSpacingUtilities = customSpacingUtilities;
exports.customMiscUtilities = customMiscUtilities;
