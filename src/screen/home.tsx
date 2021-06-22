import React, { ReactNode } from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
// import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { discord } from '../assets/icon';

import styles from '../style';
import theme from '../style/theme';

const Home = () => {
  return (
    <ScrollView style={[style.header, { width: '100%' }]}>
      <View
        style={[
          styles.flexRow,
          styles.alignItemsCenter,
          styles.mx2,
          styles.mb2,
        ]}
      >
        <Image
          style={[styles.mr2, { width: 24, height: 18 }]}
          source={discord}
        />

        <View style={styles.flexGrow}>
          <View style={styles.flexRow}>
            <Text style={[styles.h2, { color: theme.color }]}>Hi, </Text>
            <Text style={[styles.h3, { color: theme.color }]}>user</Text>
          </View>

          <Text style={[styles.h4, { color: theme.color }]}>
            Today is winning day
          </Text>
        </View>

        <Image
          style={[styles.ml2, { width: 24, height: 18 }]}
          source={discord}
        />
      </View>

      <View>
        <Text>asiojd</Text>
      </View>
    </ScrollView>
  );
};

// getStatusBarHeight()
const style = StyleSheet.create({
  header: { marginTop: 26 },
});

export default Home;
