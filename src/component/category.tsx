import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';
import styles from '../style';
import theme from '../style/theme';
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
          styles.justifyContentCenter,
          styles.mr1,
          styles.rounded1,
          styles.border2,
          { opacity: checked ? 1 : 0.4 },
        ]}
        colors={[theme.card.gradient.start, theme.card.gradient.end]}
      >
        {/* <View style={ checked ? styles.checked : styles.check }/> */}
        <View style={[styles.justifyContentCenter, styles.alignItemsCenter]}>
          <Icon width={50} height={50} />
        </View>

        <Text style={[style.label, styles.h5, styles.mt2]}>{title}</Text>
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
  check: { color: 'red' },
  checked: { color: 'green' },
});

export default Category;
