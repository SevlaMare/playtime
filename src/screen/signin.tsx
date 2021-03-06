import React from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { useAuth } from '../provider/auth';

import styles from '../style';
import theme from '../style/theme';
import { IllustationImg } from '../assets/image';
import { discord } from '../assets/icon';

import ButtonIcon from '../component/buttonIcon';

const SignIn = () => {
  const { load, signIn } = useAuth();

  const handleSignIn = async () => {
    try {
      await signIn();
    } catch (error) {
      Alert.alert(error);
    }
  };

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
            style={[style.subtitle, styles.textCenter, styles.h4, styles.mb4]}
          >
            Create groups to play your favorites games with your friends
          </Text>

          {load ? (
            <ActivityIndicator color={theme.text.alert.color} />
          ) : (
            <ButtonIcon
              icon={discord}
              label={'Login with Discord'}
              onPress={handleSignIn}
            />
          )}
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
