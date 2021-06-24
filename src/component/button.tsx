import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from '../style';
import theme from '../style/theme';

type Props = RectButtonProps & {
  label: string;
  height: number;
};

const Button = ({ label, height, ...props }: Props) => {
  return (
    <RectButton
      {...props}
      activeOpacity={0.85}
      style={[
        styles.rounded1,
        { backgroundColor: theme.button.primary.background, height },
      ]}
    >
      <View style={[styles.pt1]}>
        <Text style={[styles.h3, styles.textCenter, { color: theme.color }]}>
          {label}
        </Text>
      </View>
    </RectButton>
  );
};

export default Button;
