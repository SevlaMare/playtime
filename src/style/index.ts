// -----------------------------------------------
// Shared styles between projects, bootstrap alike
// -----------------------------------------------

import display from './constant/display';
import spacing from './constant/spacing';
import typography from './constant/typography';

import container from './constant/container';
import effect from './constant/effect';
import shadow from './constant/shadow';

const styles = {
  ...display,
  ...spacing,
  ...typography,
  ...container,
  ...effect,
  ...shadow,
};

export default styles;
