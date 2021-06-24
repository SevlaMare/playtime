// -----------------------------------------------
// Shared styles between projects, bootstrap alike
// -----------------------------------------------

import display from './constant/display';
import spacing from './constant/spacing';
import typography from './constant/typography';

import container from './constant/container';
import effect from './constant/effect';
import shadow from './constant/shadow';
import color from './constant/color';

const styles = {
  ...display,
  ...spacing,
  ...typography,
  ...container,
  ...effect,
  ...shadow,
  ...color,
};

export default styles;
