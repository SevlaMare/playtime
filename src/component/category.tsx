import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import styles from '../style';
import theme from '../style/theme';

import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

type Props = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
};

const Category = ({ title, icon: Icon, checked = false, ...props }: Props) => {
  return (
    <RectButton {...props}>
      <LinearGradient
        style={[
          style.container,
          styles.alignItemsCenter,
          styles.mr1,
          styles.rounded1,
          styles.border2,
          { opacity: checked ? 1 : 0.4 },
        ]}
        colors={[theme.card.gradient.start, theme.card.gradient.end]}
      >
        <View
          style={[
            style.checkbox,
            styles.alignSelfEnd,
            styles.border1,
            styles.mr1,
            styles.mt05,
            styles.mb1,
            checked ? style.checked : null,
          ]}
        />

        <Icon width={50} height={50} />

        <Text style={[style.label, styles.h5, styles.mt08]}>{title}</Text>
      </LinearGradient>
    </RectButton>
  );
};

const style = StyleSheet.create({
  label: { color: theme.color },
  container: {
    width: 104,
    height: 120,
    borderColor: theme.card.borderColor,
    backgroundColor: theme.card.background,
  },
  checkbox: {
    width: 8,
    height: 8,
    borderRadius: 2,
    borderColor: theme.card.borderColor,
    backgroundColor: theme.card.background,
  },
  checked: { borderRadius: 0, backgroundColor: theme.card.checked },
});

export default Category;
