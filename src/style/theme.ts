// ---------------------
// Source for all colors
// ---------------------

import color from './constant/color';

const base = {
  color: color.whiteice,
  background: color.blue800,
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

  container: {
    gradient: {
      start: color.blue700,
      end: color.blue900,
    },
    border: color.green500,
  },
};

export default theme;
