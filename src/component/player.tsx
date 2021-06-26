import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../style';
import theme from '../style/theme';

import Avatar from './avatar';

export type MemberProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type Props = {
  data: MemberProps;
};

const Player = ({ data }: Props) => {
  const online = data.status === 'online';

  return (
    <View style={[styles.flexRow, styles.pb2]}>
      <Avatar urlImage={data.avatar_url} />

      <View style={[styles.containerFluid, style.card]}>
        <Text style={[styles.h6, { color: theme.color }]}>{data.username}</Text>

        <View style={[styles.flexRow, styles.alignItemsCenter]}>
          <View
            style={[
              style.icon,
              {
                backgroundColor: online
                  ? theme.icon.allow
                  : theme.icon.disallow,
              },
            ]}
          />

          <Text style={{ color: theme.text.secondary.color }}>
            {'  '}
            {online ? 'Available' : 'Absent'}
          </Text>
        </View>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  icon: { width: 9, height: 9, borderRadius: 5 },
  title: { color: theme.text.primary.color },
  subtitle: { color: theme.text.primary.color },
  card: { borderBottomWidth: 1, borderBottomColor: theme.separator.fade },
});

export default Player;
