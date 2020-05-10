const plugin = require('tailwindcss/plugin');
const {
  sizingVar,
  screensVar,
  measuresVar,
  reusableCssProperties,
} = require('../variables.node');

const customTypographyUtilities = plugin(function({ addUtilities, variants }) {
  const typographhyUtilities = {
    '.h1': {
      'font-size': `${sizingVar.ms20}em`,
    },
    '.h2': {
      'font-size': `${sizingVar.ms18}em`,
    },
    '.h3': {
      'font-size': `${sizingVar.ms16}em`,
    },
    '.h4': {
      'font-size': `${sizingVar.ms14}em`,
    },
    '.h5': {
      'font-size': `${sizingVar.ms12}em`,
    },
    '.h6': {
      'font-size': `${sizingVar.ms10}em`,
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
    '.italic': {
      '--text-slnt': '-10',
      'font-style': 'italic',
    },
    '.not-italic': {
      '--text-slnt': '0',
      'font-style': 'normal',
    },
  };
  addUtilities(typographhyUtilities, variants('customTypographyUtilities')); // get variants from main config file
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

exports.customTypographyUtilities = customTypographyUtilities;
exports.customSpacingUtilities = customSpacingUtilities;
