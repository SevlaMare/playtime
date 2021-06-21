// ---------------------
// Source for all colors
// ---------------------

import color from './constant/color';

const base = {
  color: color.whiteice,
  background: color.blue900,
};

const theme = {
  ...base,

  text: {
    primary: {
      color: base.color,
    },
  },

  separator: { color: color.red700 },

  button: {
    primary: {
      color: color.whiteice,
      borderColor: color.red700,
      background: color.red200,
    },
  },
};

export default theme;
