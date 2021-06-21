// core
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  ScrollView,
} from 'react-native';

// components
import ButtonIcon from '../component/buttonIcon';

// assets
import { IllustationImg } from '../assets/image';
import { discord } from '../assets/icon';

import styles from '../styles';
import theme from '../styles/theme';

const SignIn = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={[
          styles.container,
          styles.justifyContentCenter,
          styles.alignItemsCenter,
        ]}
      >
        <StatusBar
          barStyle='light-content'
          backgroundColor='transparent'
          translucent // stick to top
        />

        <Image
          style={[styles.imgContain]}
          source={IllustationImg}
          height={360}
        />

        <View>
          <Text style={[style.title, styles.textCenter, styles.h1, styles.mb2]}>
            Connect{`\n`}
            and organize{`\n`}
            yours gameplays
          </Text>

          <Text
            style={[style.subtitle, styles.textCenter, styles.h3, styles.mb4]}
          >
            Create groups to play your favorites games with your friends
          </Text>

          <ButtonIcon icon={discord} label={'Login with Discord'} />
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  title: { color: theme.color.heading },
  subtitle: { color: theme.color.heading },
});

export default SignIn;
