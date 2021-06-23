import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../style';
import theme from '../style/theme';

import TitleBar from '../component/titleBar';
import Nav from '../component/nav';
import CategorySelect from '../component/categorySelect';

import { CATEGORIES } from '../helpers/mock_data';

const Appointment = () => {
  // const navigation = useNavigation();

  // const handleSignIn = () => {
  //   navigation.navigate('Home');
  // };

  return (
    <View>
      <Nav title={'Appointment'} />

      <TitleBar title={'Category'} style={styles.mx2} />

      {/* <CategorySelect
        categorySelected={category}
        setCategory={handleToggleCategory}
      /> */}
    </View>
  );
};

const style = StyleSheet.create({
  title: { color: theme.text.primary.color },
  subtitle: { color: theme.text.primary.color },
});

export default Appointment;
