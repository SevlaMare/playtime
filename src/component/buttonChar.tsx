import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../style';
import theme from '../style/theme';

const ButtonIcon = ({ ...props }: RectButtonProps) => {
  return (
    <RectButton
      style={[
        style.container,
        styles.justifyContentCenter,
        styles.alignItemsCenter,
        styles.rounded1,
        styles.box4,
      ]}
      activeOpacity={0.85}
      {...props}
    >
      <MaterialCommunityIcons name='plus' color={theme.color} size={24} />
    </RectButton>
  );
};

const style = StyleSheet.create({
  container: { backgroundColor: theme.button.primary.background },
});

export default ButtonIcon;
