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
  checkbox?: boolean;
};

const Category = ({
  title,
  icon: Icon,
  checked = false,
  checkbox = false,
  ...props
}: Props) => {
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
        {checkbox && (
          <View
            style={[
              style.checkbox,
              styles.border1,
              checked ? style.checked : null,
              { position: 'absolute', top: 5, right: 6 },
            ]}
          />
        )}

        <Icon width={50} height={50} style={styles.mt2} />

        <Text style={[style.label, styles.h5, styles.mt1]}>{title}</Text>
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
