import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';

import styles from '../style';
import { GuildProps } from '../component/appointmentList';
import GuildContent from '../component/guildContent';
import Loader from '../component/loader';

import Http from '../services/http';

type Props = {
  handleSelect: (guild: GuildProps) => void;
};

const GuildModal = ({ handleSelect }: Props) => {
  const [groups, setGroups] = useState<GuildProps[]>([]);
  const [load, setLoad] = useState(true);

  const fetchGroups = async () => {
    const response = await Http.get('/users/@me/guilds');

    setGroups(response.data);
    setLoad(false);
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  return (
    <View style={[styles.container]}>
      {load ? (
        <Loader />
      ) : (
        <FlatList
          data={groups}
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
