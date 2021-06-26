import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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

const Home = () => {
  const [category, setCategory] = useState('');
  const [load, setLoad] = useState(true);
  const [appointments, setAppointments] = useState<AppointmentProps[]>([]);

  const navigation = useNavigation();
  const { user } = useAuth();

  const handleToggleCategory = (categoryId: string) => {
    categoryId === category ? setCategory('') : setCategory(categoryId);
  };

  const loadAppointments = async () => {
    const data = await AsyncStorage.getItem('APPOINTMENTS');

    const appointments: AppointmentProps[] = data ? JSON.parse(data) : [];

    if (category) {
      setAppointments(appointments.filter(item => item.category === category));
    } else {
      setAppointments(appointments);
    }

    setLoad(false);
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
                onPress={() => navigation.navigate('AppointmentDisplay')}
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
