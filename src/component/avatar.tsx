import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../style';
import theme from '../style/theme';

// TODO join style from prop
type Props = {
  urlImage: string;
};

const Avatar = ({ urlImage }: Props) => {
  return (
    <LinearGradient
      style={[
        style.container,
        styles.alignItemsCenter,
        styles.justifyContentCenter,
        styles.rounded1,
        styles.border,
        styles.mr2,
      ]}
      colors={[theme.container.gradient.start, theme.container.gradient.end]}
    >
      <Image
        style={[style.avatar, styles.rounded1]}
        source={{ uri: urlImage }}
      />
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  container: { width: 49, height: 49, borderColor: theme.container.border },
  avatar: { width: 46, height: 46 },
});

export default Avatar;
