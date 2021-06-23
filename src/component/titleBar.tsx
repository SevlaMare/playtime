import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ViewProps } from 'react-native';

import styles from '../style';
import theme from '../style/theme';

type Props = ViewProps & {
  title: string;
  subtitle?: string | null;
};

const TitleBar = ({ title, subtitle = null, ...props }: Props) => {
  return (
    <View
      {...props}
      style={[
        styles.flexRow,
        styles.justifyContentBetween,
        styles.alignItemsCenter,
        styles.m2,
      ]}
    >
      <Text style={[styles.h6, style.text]}>{title}</Text>
      <Text style={[styles.t2, style.textFade]}>{subtitle}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  text: { color: theme.color },
  textFade: { color: theme.text.secondary.color },
});

export default TitleBar;
