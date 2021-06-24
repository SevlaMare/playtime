import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

import styles from '../style';
import theme from '../style/theme';
import { Player, Calendar } from '../assets/icon';

import GuildIcon from './guildIcon';
import { CATEGORIES } from '../helpers/mock_data';

export type GuildProps = {
  id: string;
  name: string;
  icon: null;
  owner: boolean;
};

type AppointmentProps = {
  id: string;
  guild: GuildProps;
  category: string;
  date: string;
  description: string;
};

type Props = RectButtonProps & {
  data: AppointmentProps;
};

const AppointmentList = ({ data, ...props }: Props) => {
  const [category] = CATEGORIES.filter(item => item.id === data.category);
  const { allow, disallow } = theme.icon;

  return (
    <RectButton {...props}>
      <View style={[styles.flexRow, styles.mb3, styles.alignItemsCenter]}>
        <GuildIcon />

        <View style={[style.info, styles.flexGrow, styles.ml2]}>
          <View style={[styles.justifyContentBetween, styles.flexRow]}>
            <Text style={[style.text, styles.mb1, styles.h3]}>
              {data.guild.name}
            </Text>

            <Text style={[style.textFade, styles.mb1, styles.t3]}>
              {category.title}
            </Text>
          </View>

          <View style={[styles.justifyContentBetween, styles.flexRow]}>
            <Text style={[style.text, styles.mb08, styles.t3]}>
              <Calendar />
              {'  '}
              {data.date}
            </Text>

            <Text
              style={[
                style.text,
                styles.t3,
                { color: data.guild.owner ? disallow : allow },
              ]}
            >
              <Player fill={data.guild.owner ? disallow : allow} />
              {'  '}
              {data.guild.owner ? 'Host' : 'Visitor'}
            </Text>
          </View>
        </View>
      </View>
    </RectButton>
  );
};

const style = StyleSheet.create({
  text: { color: theme.color },
  textFade: { color: theme.text.secondary.color },
  info: { borderBottomWidth: 1, borderBottomColor: theme.separator.fade },
});

export default AppointmentList;
