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
    primary: { color: base.color },
    secondary: { color: color.gray700 },
    alert: { color: color.red700 },
  },

  icon: {
    std: base.color,
    allow: color.green500,
    disallow: color.red200,
  },

  header: {
    start: color.blue300,
    end: color.blue500,
  },

  card: {
    borderColor: color.blue300,
    background: color.blue700,
    gradient: {
      start: color.blue500,
      end: color.blue600,
    },
    checked: base.color,
  },

  separator: {
    alert: color.red700,
    fade: color.blue500,
  },

  button: {
    primary: {
      color: base.color,
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
