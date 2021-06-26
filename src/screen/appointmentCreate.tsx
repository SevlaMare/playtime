import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import uuid from 'react-native-uuid';

import styles from '../style';
import theme from '../style/theme';
import { Feather } from '@expo/vector-icons';

import ModalGuild from '../screen/modalGuild';

import TitleBar from '../component/titleBar';
import Nav from '../component/nav';
import CategorySelect from '../component/categorySelect';
import GuildIcon from '../component/guildIcon';
import Input from '../component/input';
import TextArea from '../component/textArea';
import Button from '../component/button';
import ModalWindow from '../component/modalWindow';
import { GuildProps } from '../component/appointmentList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/core';

import { COLLECTION_APPOINTMENTS } from '../config/store';

const Appointment = () => {
  const [category, setCategory] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

  // TODO: validation (not null, valid category), get curr date
  const [day, setDay] = useState('01');
  const [month, setMonth] = useState('');
  const [hour, setHour] = useState('');
  const [min, setMin] = useState('00');
  const [info, setInfo] = useState('');

  const navigation = useNavigation();

  const handleGuildSelect = (guildSelect: GuildProps) => {
    setGuild(guildSelect);
    setShowModal(false);
  };

  const handleToggleCategory = (categoryId: string) => {
    setCategory(categoryId);
  };

  const handleSave = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${month}/${day} às ${hour}:${min}h`,
      info,
    };

    // retrieve previous appointments
    const data = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointments = data ? JSON.parse(data) : [];

    // merge with news
    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment])
    );

    navigation.navigate('Home');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <Nav
          title={'Schedule a match'}
          action={<BorderlessButton />}
          style={styles.mb1}
        />

        <TitleBar title={'Category'} />

        <CategorySelect
          categorySelected={category}
          setCategory={handleToggleCategory}
          checkbox
        />

        <View
          style={[
            style.form,
            styles.border1,
            styles.rounded1,
            styles.m2,
            styles.pr2,
          ]}
        >
          <RectButton
            onPress={() => setShowModal(true)}
            style={[
              styles.flexRow,
              styles.justifyContentBetween,
              styles.alignItemsCenter,
            ]}
          >
            {guild.icon ? (
              <GuildIcon iconId={guild.icon} groupId={guild.id} />
            ) : (
              <View style={[style.box, styles.rounded1]} />
            )}

            <Text style={[styles.h6, { color: theme.color }]}>
              {guild.name ? guild.name : 'Select a server'}
            </Text>

            <Feather name='chevron-right' size={20} color={theme.icon.std} />
          </RectButton>
        </View>

        {/* INPUT SMALL */}
        <View
          style={[styles.flexRow, styles.justifyContentBetween, styles.mt2]}
        >
          <View style={styles.mx2}>
            <Text style={[styles.h6, { color: theme.color }]}>
              Month and day
            </Text>

            <View style={[styles.flexRow, styles.alignItemsCenter, styles.mt1]}>
              <Input maxLength={2} value={month} onChangeText={setMonth} />
              <Text style={[styles.t3, { color: theme.color }]}>/ </Text>
              <Input maxLength={2} value={day} onChangeText={setDay} />
            </View>
          </View>

          <View style={styles.mx2}>
            <Text style={[styles.h6, { color: theme.color }]}>
              Hour and min
            </Text>

            <View style={[styles.flexRow, styles.alignItemsCenter, styles.mt1]}>
              <Input maxLength={2} value={hour} onChangeText={setHour} />
              <Text style={[styles.t3, { color: theme.color }]}>/ </Text>
              <Input maxLength={2} value={min} onChangeText={setMin} />
            </View>
          </View>
        </View>

        {/* TEXT AREA */}
        <View style={[styles.mt3, styles.mx2]}>
          <View
            style={[styles.flexRow, styles.justifyContentBetween, styles.mb1]}
          >
            <Text style={[styles.h6, { color: theme.color }]}>Description</Text>
            <Text style={{ color: theme.text.secondary.color }}>
              Max 100 characters
            </Text>
          </View>

          <TextArea
            multiline
            maxLength={100}
            numberOfLines={5}
            autoCorrect={false}
            value={info}
            onChangeText={setInfo}
          />
        </View>

        <View style={[styles.mx2, styles.my4]}>
          <Button label={'Schedule'} height={56} onPress={handleSave} />
        </View>
      </ScrollView>

      <ModalWindow visible={showModal} closeModal={() => setShowModal(false)}>
        <ModalGuild handleSelect={handleGuildSelect} />
      </ModalWindow>
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  box: {
    width: 64,
    height: 68,
    overflow: 'hidden',
    borderRightWidth: 1,
    borderColor: theme.separator.fade,
    backgroundColor: styles.blue600,
  },
  form: { borderColor: theme.separator.fade },
});

export default Appointment;
