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

  card: {
    borderColor: color.blue300,
    background: color.blue700,
    gradient: {
      start: color.blue500,
      end: color.blue600,
    },
    checked: color.whiteice,
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
