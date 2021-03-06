import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ImageBackground,
  Alert,
  Share,
  Platform,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import * as Linking from 'expo-linking';

import styles from '../style';
import theme from '../style/theme';
import { Fontisto } from '@expo/vector-icons';
import { banner } from '../assets/image';
import { discord } from '../assets/icon';

import TitleBar from '../component/titleBar';
import Nav from '../component/nav';
import Player, { MemberProps } from '../component/player';
import ButtonIcon from '../component/buttonIcon';

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

  const handleShare = () => {
    const message =
      Platform.OS === 'ios'
        ? `Join us at ${guildSelected.guild.name}`
        : `Join our party!`;

    Share.share({ message, url: widget.instant_invite });
  };

  const handleRedirect = () => {
    Linking.openURL(widget.instant_invite);
  };

  useEffect(() => {
    fetchGuidWidget();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Nav
        title={'Appointment'}
        // only owner can share without discord bot
        action={
          guildSelected.guild.owner && (
            <BorderlessButton onPress={handleShare}>
              <Fontisto name='share' size={24} color={theme.icon.disallow} />
            </BorderlessButton>
          )
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
          {guildSelected ? guildSelected.description : 'Today is winning day'}
        </Text>
      </ImageBackground>

      {load ? (
        <Loader />
      ) : (
        <>
          <TitleBar
            title={'Players'}
            subtitle={`Total ${widget?.members.length}`}
          />

          <FlatList
            data={widget.members}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <Player data={item} />}
            style={styles.mx2}
          />
        </>
      )}

      {/* TODO test with discord installed */}
      {guildSelected.guild.owner && (
        <View style={[style.buttom, styles.mx2, styles.pb2]}>
          <ButtonIcon
            icon={discord}
            label={'Join match'}
            onPress={handleRedirect}
          />
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  buttom: { marginBottom: getBottomSpace() },
});

export default Appointment;
