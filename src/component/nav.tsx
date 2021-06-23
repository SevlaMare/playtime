import React, { ReactNode } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styles from '../style';
import theme from '../style/theme';

type Props = {
  title: string;
  action?: ReactNode;
};

const Nav = ({ title, action }: Props) => {
  return (
    <LinearGradient
      style={[
        styles.justifyContentBetween,
        { paddingTop: getStatusBarHeight() },
      ]}
      colors={[theme.header.start, theme.header.end]}
    >
      <BorderlessButton>
        <Feather name='arrow-left' size={24} color={theme.icon.std} />
      </BorderlessButton>

      <Text>{title}</Text>

      {/* { action && } */}
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  title: { color: theme.text.primary.color },
});

export default Nav;
