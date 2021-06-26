import React, { useState, useCallback } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useAuth } from '../provider/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from '../style';
import theme from '../style/theme';

import Avatar from '../component/avatar';
import ButtonChar from '../component/buttonChar';
import CategorySelect from '../component/categorySelect';
import TitleBar from '../component/titleBar';
import AppointmentList, {
  AppointmentProps,
} from '../component/appointmentList';
import Loader from '../component/loader';

import { COLLECTION_APPOINTMENTS } from '../config/store';

const Home = () => {
  const { user } = useAuth();
  const navigation = useNavigation();

  const [load, setLoad] = useState(true);
  const [category, setCategory] = useState('');
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const handleToggleCategory = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const handleAppointmentDetails = (guildSelected: AppointmentProps) => {
    navigation.navigate('AppointmentDisplay', { guildSelected });
  };

  const loadAppointments = async () => {
    // retrieve from storage or empty list
    const data = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const storage: AppointmentProps[] = data ? JSON.parse(data) : [];

    // filter will slice appointments on the list
    if (category) {
      setAppointments(storage.filter(item => item.category === category));
    } else {
      setAppointments(storage);
    }

    setLoad(false);
  };

  // trigger when back to this screen (since is never unmonted)
  useFocusEffect(
    // avoid reload appointments when filter category selection
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

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
        <Avatar urlImage={user.avatar} />

        <View style={styles.flexGrow}>
          <View style={styles.flexRow}>
            <Text style={[styles.h2, { color: theme.color }]}>Hi, </Text>
            <Text style={[styles.h3, { color: theme.color }]}>
              {user.firstName}
            </Text>
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

      {load ? (
        <Loader />
      ) : (
        <>
          <TitleBar
            title={'Scheduled matches'}
            subtitle={'Total 6'}
            style={styles.mx2}
          />

          {/* TODO: scroll not working */}
          <FlatList
            data={appointments}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <AppointmentList
                data={item}
                style={styles.mx2}
                onPress={() => handleAppointmentDetails(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  text: { color: theme.color },
  textFade: { color: theme.text.secondary.color },
  header: { marginTop: 26 },
});

export default Home;
