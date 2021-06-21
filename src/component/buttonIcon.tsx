import React from 'react';
import { Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native';

import styles from '../styles';
import theme from '../styles/theme';

type Props = {
  label: string;
  icon?: any; // optional
};

const ButtonIcon = ({ label, icon }: Props) => {
  return (
    <TouchableOpacity
      style={[style.container, styles.rounded1]}
      activeOpacity={0.85}
    >
      <View
        style={[styles.flexRow, styles.alignItemsCenter, style.iconWrapper]}
      >
        <Image style={[styles.mx2, { width: 24, height: 18 }]} source={icon} />

        <Text
          style={[style.separator, { height: 56, borderLeftWidth: 1 }]}
        ></Text>

        <Text
          style={[
            styles.flexRow,
            styles.textCenter,
            styles.t3,
            style.label,
            styles.flexGrow,
          ]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  container: { backgroundColor: theme.color.primary },
  label: { color: '#fff' },
  separator: { borderColor: '#991F36' },
  iconWrapper: { borderColor: theme.color.line },
});

export default ButtonIcon;
