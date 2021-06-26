import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import styles from '../style';
import theme from '../style/theme';

const Loader = () => {
  return (
    <View
      style={[
        styles.alignItemsCenter,
        styles.justifyContentCenter,
        { flex: 1 },
      ]}
    >
      <ActivityIndicator size='large' color={theme.color} />
    </View>
  );
};

export default Loader;
