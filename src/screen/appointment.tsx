import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from '../style';
import theme from '../style/theme';
import { Fontisto } from '@expo/vector-icons';
import { banner } from '../assets/image';

import TitleBar from '../component/titleBar';
import Nav from '../component/nav';
import Player from '../component/player';

import { PLAYERS } from '../helpers/mock_data';

const Appointment = () => {
  return (
    <View>
      <Nav
        title={'Appointment'}
        action={
          <BorderlessButton>
            <Fontisto name='share' size={24} color={theme.icon.disallow} />
          </BorderlessButton>
        }
      />

      <ImageBackground
        source={banner}
        style={[
          styles.imgFluid,
          styles.justifyContentEnd,
          styles.pb2,
          styles.pl2,
          { height: 240 },
        ]}
      >
        <Text style={[styles.h1, { color: theme.color }]}>Legend</Text>
        <Text style={[styles.t3, { color: theme.color }]}>
          Tody is winning day
        </Text>
      </ImageBackground>

      <TitleBar title={'Players'} subtitle={'Total 6'} />

      <FlatList
        data={PLAYERS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Player data={item} />}
        style={styles.mx2}
      />
    </View>
  );
};

export default Appointment;
