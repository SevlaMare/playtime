import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Alert,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import styles from '../style';
import theme from '../style/theme';
import { Fontisto } from '@expo/vector-icons';
import { banner } from '../assets/image';
import { discord } from '../assets/icon';

import TitleBar from '../component/titleBar';
import Nav from '../component/nav';
import Player, { MemberProps } from '../component/player';
import ButtonIcon from '../component/buttonIcon';

import { PLAYERS } from '../helpers/mock_data';
import { AppointmentProps } from '../component/appointmentList';
import Http from '../services/http';
import Loader from '../component/loader';

type Params = {
  guildSelected: AppointmentProps;
};

type GuilldWidget = {
  id: string;
  name: string;
  instant_invite: string;
  members: MemberProps[];
  presence_count: number;
};

const Appointment = () => {
  const route = useRoute();
  const [load, setLoad] = useState(true);
  const [widget, setWidget] = useState<GuilldWidget>();
  // param comes from router provider
  const { guildSelected } = route.params as Params;

  const fetchGuidWidget = async () => {
    // server need to be enable to server widget
    try {
      const response = await Http.get(
        `/guilds/${guildSelected.guild.id}/widget.json`
      );
      setWidget(response.data);
      setLoad(false);
    } catch (err) {
      Alert.alert('Ask admin to turn on widgets in the server.');
    } finally {
      setLoad(false);
    }
  };

  useEffect(() => {
    fetchGuidWidget();
  }, []);

  return (
    <View style={{ flex: 1 }}>
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
        <Text style={[styles.h1, { color: theme.color }]}>
          {guildSelected.guild.name}
        </Text>
        <Text style={[styles.t3, { color: theme.color }]}>
          {guildSelected ? guildSelected.description : 'Tody is winning day'}
        </Text>
      </ImageBackground>

      {load ? (
        <Loader />
      ) : (
        <>
          <TitleBar title={'Players'} subtitle={'Total 6'} />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Player data={item} />}
            style={styles.mx2}
          />
        </>
      )}

      <View style={[style.buttom, styles.mx2, styles.pb2]}>
        <ButtonIcon
          icon={discord}
          label={'Login with Discord'}
          // onPress={null}
        />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  buttom: { marginBottom: getBottomSpace() },
});

export default Appointment;
