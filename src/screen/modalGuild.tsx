import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import styles from '../style';
import { GuildProps } from '../component/appointmentList';
import GuildContent from '../component/guildContent';
import Loader from '../component/loader';

import { GUILDS } from '../helpers/mock_data';

type Props = {
  handleSelect: (guild: GuildProps) => void;
};

const GuildModal = ({ handleSelect }: Props) => {
  const [groups, setGroups] = useState<GuildProps[]>([]);
  const [load, setLoad] = useState(true);

  return (
    <View style={[styles.container]}>
      {load ? (
        <Loader />
      ) : (
        <FlatList
          data={GUILDS}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <GuildContent data={item} onPress={() => handleSelect(item)} />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default GuildModal;
