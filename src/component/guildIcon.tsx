import React from 'react';
import { View, Image } from 'react-native';
import styles from '../style';
import theme from '../style/theme';

import { CDN_IMAGE } from '../config/discord';

type Props = {
  groupId?: string;
  iconId?: string;
};

const GuildIcon = ({ groupId, iconId }: Props) => {
  const uri = groupId
    ? `${CDN_IMAGE}/icons/${groupId}/${iconId}.png`
    : 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';

  return (
    <View
      style={[
        styles.rounded1,
        styles.border1,
        { borderColor: theme.separator.fade },
      ]}
    >
      <Image
        source={{ uri }}
        style={[styles.rounded1, styles.imgCover, { width: 64, height: 64 }]}
      />
    </View>
  );
};

export default GuildIcon;
