import React from 'react';
import { View, FlatList } from 'react-native';

import styles from '../style';
import { GuildProps } from '../component/appointmentList';
import GuildContent from '../component/guildContent';

import { GUILDS } from '../helpers/mock_data';

type Props = {
  handleSelect: (guild: GuildProps) => void;
};

const GuildModal = ({ handleSelect }: Props) => {
  return (
    <View style={[styles.container]}>
      <FlatList
        data={GUILDS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GuildContent data={item} onPress={() => handleSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default GuildModal;
