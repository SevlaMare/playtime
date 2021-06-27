import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import styles from '../style';
import theme from '../style/theme';

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
        styles.border1,
        styles.box4,
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
  container: { borderColor: theme.container.border },
  avatar: { width: 46, height: 46 },
});

export default Avatar;
