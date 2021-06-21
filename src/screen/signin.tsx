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

// styles
import styles from '../style';
import theme from '../style/theme';

const SignIn = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ flexGrow: 1 }}
    >
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
          translucent
        />

        <Image
          style={[styles.imgStretch]}
          source={IllustationImg}
          height={300}
        />

        <View style={[styles.mx4, styles.mb2]}>
          <Text
            style={[
              style.title,
              styles.textCenter,
              styles.h1,
              styles.mb2,
              { marginTop: -50 },
            ]}
          >
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
  title: { color: theme.text.primary.color },
  subtitle: { color: theme.text.primary.color },
});

export default SignIn;
