import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, ViewProps } from 'react-native';

import styles from '../style';
import theme from '../style/theme';

type Props = ViewProps & {
  title?: string;
  subtitle?: string;
};

const ListHeader = ({ title, subtitle, ...props }: Props) => {
  return (
    <View {...props}>
      <Text>asd</Text>

      <Text>dsa</Text>
    </View>
  );
};

export default ListHeader;
