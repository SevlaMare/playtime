import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import styles from '../style';
import theme from '../style/theme';

const GuildIcon = () => {
  const uri =
    'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';

  return (
    <View
      style={[
        styles.rounded1,
        styles.border1,
        { borderColor: theme.separator.fade },
      ]}
    >
      <Image source={{ uri }} style={[style.image, styles.rounded1]} />
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: 64,
    height: 64,
    resizeMode: 'cover',
  },
});

export default GuildIcon;
