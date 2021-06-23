import React, { ReactNode } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import styles from '../style';
import theme from '../style/theme';
import { useNavigation } from '@react-navigation/core';

type Props = {
  title: string;
  action?: ReactNode;
};

const Nav = ({ title, action }: Props) => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={[
        styles.flexRow,
        styles.alignItemsCenter,
        styles.justifyContentBetween,
        styles.px2,
        { height: 100 },
        // { paddingTop: getStatusBarHeight() },
      ]}
      colors={[theme.header.start, theme.header.end]}
    >
      <BorderlessButton onPress={() => navigation.goBack()}>
        <Feather name='arrow-left' size={24} color={theme.icon.std} />
      </BorderlessButton>

      <Text style={[styles.h3, { color: theme.color }]}>{title}</Text>

      <View>{action}</View>
    </LinearGradient>
  );
};

const style = StyleSheet.create({
  title: { color: theme.text.primary.color },
});

export default Nav;
