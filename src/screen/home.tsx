import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from '../style';
import theme from '../style/theme';

import Avatar from '../component/avatar';
import ButtonChar from '../component/buttonChar';
import CategorySelect from '../component/categorySelect';
import TitleBar from '../component/titleBar';
import AppointmentList from '../component/appointmentList';

import { APPOINTMENTS } from '../helpers/mock_data';

const Home = () => {
  const navigation = useNavigation();
  const [category, setCategory] = useState('');

  const handleToggleCategory = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  return (
    <View style={[style.header, { width: '100%' }]}>
      <View
        style={[
          styles.flexRow,
          styles.alignItemsCenter,
          styles.mx2,
          styles.mb2,
        ]}
      >
        <Avatar urlImage={'http://github.com/SevlaMare.png'} />

        <View style={styles.flexGrow}>
          <View style={styles.flexRow}>
            <Text style={[styles.h2, { color: theme.color }]}>Hi, </Text>
            <Text style={[styles.h3, { color: theme.color }]}>Thiago</Text>
          </View>

          <Text style={[styles.h4, { color: theme.color }]}>
            Today is winning day
          </Text>
        </View>

        <ButtonChar onPress={() => navigation.navigate('AppointmentCreate')} />
      </View>

      <CategorySelect
        categorySelected={category}
        setCategory={handleToggleCategory}
      />

      <TitleBar
        title={'Scheduled matches'}
        subtitle={'Total 6'}
        style={styles.mx2}
      />

      {/* TODO: scroll not working */}
      <FlatList
        data={APPOINTMENTS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <AppointmentList
            data={item}
            style={styles.mx2}
            onPress={() => navigation.navigate('AppointmentDisplay')}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const style = StyleSheet.create({
  text: { color: theme.color },
  textFade: { color: theme.text.secondary.color },
  header: { marginTop: 26 },
});

export default Home;
