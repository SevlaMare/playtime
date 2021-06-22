import React, { Children, ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../style';
import theme from '../style/theme';

type Props = {
  children: ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <LinearGradient
      style={[
        styles.container,
        styles.justifyContentCenter,
        styles.alignItemsCenter,
      ]}
      colors={[theme.container.gradient.start, theme.container.gradient.end]}
    >
      {children}
    </LinearGradient>
  );
};

export default Container;
